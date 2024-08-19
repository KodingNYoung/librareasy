import { QueryDocumentSnapshot } from "firebase/firestore";

// A converter for firebase documents, it converts firestore documents into a suitable time defined in this project.
export const converter = <T>() => ({
  toFirestore: (entity: T) => entity,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T
});
