import { DbCollection, DbDoc, OmitId } from "interfaces";
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

async function add<Col extends DbCollection>(
  col: Col,
  data: OmitId<DbDoc<Col>>
): Promise<void> {
  await addDoc(collection(db, col), data);
}

async function set<Col extends DbCollection>(
  col: Col,
  id: string,
  data: OmitId<DbDoc<Col>>
): Promise<void> {
  await setDoc(doc(db, col, id), data);
}

function get<Col extends DbCollection>(col: Col): Promise<DbDoc<Col>[]>;
function get<Col extends DbCollection>(
  col: Col,
  id: string
): Promise<DbDoc<Col>>;
async function get<Col extends DbCollection>(
  col: Col,
  id?: string
): Promise<DbDoc<Col>[] | DbDoc<Col>> {
  type Doc = DbDoc<Col>;
  if (id) {
    const docSnap = await getDoc(doc(db, col, id));
    return { id: docSnap.id, ...docSnap.data() } as Doc;
  }
  const snap = await getDocs(collection(db, col));
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Doc));
}

function onSnapshot<Col extends DbCollection>(
  col: Col,
  listener: (docs: DbDoc<Col>[]) => void,
  onError?: (error: Error) => void
): () => void;
function onSnapshot<Col extends DbCollection>(
  col: Col,
  id: string,
  listener: (doc: DbDoc<Col>) => void,
  onError?: (error: Error) => void
): () => void;
function onSnapshot<Col extends DbCollection>(
  col: Col,
  idOrListener: string | ((docs: DbDoc<Col>[]) => void),
  listenerOrOnError?: ((doc: DbDoc<Col>) => void) | ((error: Error) => void),
  onError?: (error: Error) => void
): () => void {
  type Doc = DbDoc<Col>;

  if (typeof idOrListener === "string") {
    // second overload
    const id = idOrListener;
    const listener = listenerOrOnError as (doc: Doc) => void;

    const onNext = (snap: DocumentSnapshot): void => {
      const doc = { id: snap.id, ...snap.data() } as Doc;
      listener(doc);
    };

    return onSnap(doc(db, col, id), onNext, onError);
  }

  // first overload
  const listener = idOrListener;
  onError = listenerOrOnError as (error: Error) => void;

  const onNext = (snap: QuerySnapshot): void => {
    const docs = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Doc));
    listener(docs);
  };

  return onSnap(collection(db, col), onNext, onError);
}

async function update<Col extends DbCollection>(
  col: Col,
  id: string,
  data: Partial<OmitId<DbDoc<Col>>>
): Promise<void> {
  await updateDoc(doc(db, col, id), data);
}

async function del<Col extends DbCollection>(
  col: Col,
  id: string
): Promise<void> {
  await deleteDoc(doc(db, col, id));
}

export { add, set, get, onSnapshot, update, del };
