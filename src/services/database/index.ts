import { DbCol, DbDoc, OmitId } from "interfaces";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  onSnapshot as onSnap,
  QuerySnapshot,
  DocumentSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Firebase config (These are public keys so they're fine to be exposed)
const firebaseConfig = {
  apiKey: "AIzaSyCqpDcGNRnQvy_RzSjGMSTeEi7CN1v7My4",
  authDomain: "rec-website-43135.firebaseapp.com",
  projectId: "rec-website-43135",
  storageBucket: "rec-website-43135.appspot.com",
  messagingSenderId: "291556748153",
  appId: "1:291556748153:web:ddecc4d8dc3e3e9a6a1da8",
};

initializeApp(firebaseConfig);

const db = getFirestore();

// database api

async function add<Col extends DbCol>(
  col: Col,
  data: OmitId<DbDoc<Col>>
): Promise<void> {
  if (col === "user" && (data as OmitId<DbDoc<"user">>).role === "GUEST") {
    // we don't store GUEST in database (user is GUEST if not in db)
    return;
  }
  await addDoc(collection(db, col), data);
}

async function set<Col extends DbCol>(
  col: Col,
  id: string,
  data: OmitId<DbDoc<Col>>
): Promise<void> {
  if (col === "user" && (data as OmitId<DbDoc<"user">>).role === "GUEST") {
    // we don't store GUEST in database (user is GUEST if not in db)
    await deleteDoc(doc(db, col, id));
    return;
  }
  await setDoc(doc(db, col, id), data);
}

type GetDocReturnType<Col extends DbCol> = Col extends "user"
  ? DbDoc<Col>
  : DbDoc<Col> | null;

function get<Col extends DbCol>(col: Col): Promise<DbDoc<Col>[]>;
function get<Col extends DbCol>(
  col: Col,
  id: string
): Promise<GetDocReturnType<Col>>;
async function get<Col extends DbCol>(
  col: Col,
  id?: string
): Promise<DbDoc<Col>[] | GetDocReturnType<Col>> {
  if (id) {
    const snap = await getDoc(doc(db, col, id));
    return (
      snap.exists()
        ? ({ id: snap.id, ...snap.data() } as DbDoc<Col>)
        : col === "user"
        ? // we don't store GUEST in database (user is GUEST if not in db)
          ({ id, role: "GUEST" } as DbDoc<"user">)
        : null
    ) as GetDocReturnType<Col>;
  }

  const snap = await getDocs(collection(db, col));
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DbDoc<Col>));
}

function onSnapshot<Col extends DbCol>(
  col: Col,
  listener: (docs: DbDoc<Col>[]) => void,
  onError?: (error: Error) => void
): () => void;
function onSnapshot<Col extends DbCol>(
  col: Col,
  id: string,
  listener: (doc: GetDocReturnType<Col>) => void,
  onError?: (error: Error) => void
): () => void;
function onSnapshot<Col extends DbCol>(
  col: Col,
  idOrListener: string | ((docs: DbDoc<Col>[]) => void),
  listenerOrOnError?:
    | ((doc: GetDocReturnType<Col>) => void)
    | ((error: Error) => void),
  onError?: (error: Error) => void
): () => void {
  if (typeof idOrListener === "string") {
    // second overload
    const id = idOrListener;
    const listener = listenerOrOnError as (doc: GetDocReturnType<Col>) => void;

    const onNext = (snap: DocumentSnapshot): void => {
      const doc = snap.exists()
        ? ({ id: snap.id, ...snap.data() } as DbDoc<Col>)
        : col === "user"
        ? // we don't store GUEST in database (user is GUEST if not in db)
          ({ id, role: "GUEST" } as DbDoc<"user">)
        : null;
      listener(doc as GetDocReturnType<Col>);
    };

    return onSnap(doc(db, col, id), onNext, onError);
  }

  // first overload
  const listener = idOrListener;
  onError = listenerOrOnError as (error: Error) => void;

  const onNext = (snap: QuerySnapshot): void => {
    const docs = snap.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as DbDoc<Col>)
    );
    listener(docs);
  };

  return onSnap(collection(db, col), onNext, onError);
}

async function update<Col extends DbCol>(
  col: Col,
  id: string,
  data: Partial<OmitId<DbDoc<Col>>>
): Promise<void> {
  if (col === "user") {
    const user = data as Partial<OmitId<DbDoc<"user">>>;
    if (user.role === "GUEST") {
      // we don't store GUEST in database (user is GUEST if not in db)
      await deleteDoc(doc(db, col, id));
      return;
    }
    if (!user.role) {
      // prevent updating GUEST users, which do not exist in our db
      return;
    }
  }
  await updateDoc(doc(db, col, id), data);
}

async function del<Col extends DbCol>(col: Col, id: string): Promise<void> {
  await deleteDoc(doc(db, col, id));
}

export { add, set, get, onSnapshot, update, del };
