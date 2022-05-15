import { DataType, Data, OmitId, DataBatchReader } from "./types";
import { Optional, NonUnion } from "types";
import { db } from "./firestore";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  onSnapshot as onSnap,
  QuerySnapshot,
  DocumentSnapshot,
  updateDoc,
  deleteDoc,
  increment,
  runTransaction,
  DocumentReference,
} from "firebase/firestore";

export * from "./types";

/**
 * Add a new data entry to the database.
 */
export async function add<T extends DataType>(
  type: T,
  id: string,
  data: OmitId<Data<NonUnion<T>>>
): Promise<void> {
  if (type === "user" && (data as OmitId<Data<"user">>).role === "GUEST") {
    // we don't store GUEST in database (user is GUEST if not in db)
    return;
  }

  await runTransaction(db, async (transaction) => {
    const docRef = doc(db, type, id);
    const snap = await transaction.get(docRef);

    if (snap.exists()) {
      throw new Error(`Data with this id already exists: ${id}`);
    }

    const metadataRef = doc(db, "--metadata--", type);

    transaction
      .set(docRef, data) // add doc
      .set(metadataRef, { count: increment(1) }, { merge: true }); // increment counter
  });
}

/**
 * Retrieve a data entry from the database.
 */
export async function get<T extends DataType>(
  type: T,
  id: string
): Promise<Data<NonUnion<T>>> {
  const docRef = doc(db, type, id);
  const snap = await getDoc(docRef);

  if (snap.exists()) {
    return { id, ...snap.data() } as Data<NonUnion<T>>;
  }

  if (type === "user") {
    // we don't store GUEST in database (user is GUEST if not in db)
    return { id, role: "GUEST" } as Data<NonUnion<T>>;
  }

  throw new Error(`Data with this id does not exist: ${id}`);
}

/**
 * Create a data batch reader for data pagination.
 */
export function createBatchReader<T extends DataType>(
  type: T
): DataBatchReader<NonUnion<T>> {
  return {
    type: type as NonUnion<T>,

    async getCount() {
      const metadataRef = doc(db, "--metadata--", this.type);
      const metadata = await getDoc(metadataRef);
      return metadata.get("count") ?? 0;
    },

    async next(count) {
      const colRef = collection(db, type);
    },

    async previous() {},
  };
}

/**
 * Update a data entry in the database.
 */
export async function update<T extends DataType>(
  type: T,
  id: string,
  data: Partial<OmitId<Data<NonUnion<T>>>>
): Promise<void> {
  const docRef = doc(db, type, id);

  if (type === "user") {
    const { role } = data as Partial<OmitId<Data<"user">>>;

    if (!role) {
      // this prevents updating users who do not exist in our db, which are GUEST users
      return;
    }

    if (role === "GUEST") {
      // we don't store GUEST in database (user is GUEST if not in db)
      await deleteDoc(docRef);
      return;
    }

    await setDoc(docRef, data, { merge: true });
    return;
  }

  await updateDoc(docRef, data as object);
}

/**
 * Delete a data entry in the database.
 */
export async function del<T extends DataType>(
  type: T,
  id: string
): Promise<void> {
  await runTransaction(db, async (transaction) => {
    const docRef = doc(db, type, id);
    const snap = await transaction.get(docRef);

    if (!snap.exists()) {
      throw new Error(`Data with this id does not exist: ${id}`);
    }

    const metadataRef = doc(db, "--metadata--", type);

    transaction
      .delete(docRef) // delete doc
      .set(metadataRef, { count: increment(-1) }, { merge: true }); // decrement counter
  });
}
