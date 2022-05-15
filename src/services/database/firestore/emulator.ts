import { connectFirestoreEmulator } from "firebase/firestore";
import { db } from "./index";
import firebase from "services/../../firebase.json";

connectFirestoreEmulator(db, "localhost", firebase.emulators.firestore.port);

export { db };
