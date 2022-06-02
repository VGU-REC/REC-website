import {
  DataType,
  Data,
  OmitId,
  DataPageGetter,
  DataPaginationOptions,
  DataPagination,
} from "./types";
import { Optional, NonUnion } from "types";
import { db } from "./firestore";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  increment,
  runTransaction,
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
 * Get the total entry count of a data type in the database.
 */
export async function getCount(type: DataType): Promise<number> {
  const metadataRef = doc(db, "--metadata--", type);
  const metadata = await getDoc(metadataRef);
  return Number(metadata.get("count") ?? 0);
}

/**
 * Create a data pagination object for getting pages of data.
 */
export async function createDataPagination<T extends DataType>(
  type: T,
  options: DataPaginationOptions<T>
): Promise<DataPagination<T>> {
  const {
    itemsPerPage,
    cachedPageCount = 0,
    orderBy,
    preloadedPageCount = 0,
  } = options;

  const pageCount = await getCount(type);

  const cache: Data<NonUnion<T>>[][] = [];

  return {
    pageCount,
    async getPage(n: number): Promise<Data<T>[]> {
      return [];
    },
  } as DataPagination<T>;
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

  if (type !== "user") {
    await updateDoc(docRef, data as object);
    return;
  }

  // User

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
