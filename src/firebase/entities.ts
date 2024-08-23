import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where
} from "firebase/firestore";
import { db } from ".";
import { TEntity } from "@/utilities/objectTypes";
import { converter } from "./utils";

const COLLECTION = "entities";

const collectionRef = collection(db, COLLECTION).withConverter(
  converter<TEntity>()
);

export const getAllEntities = async (
  organization: string | null = null,
  parent: string | null = null
) => {
  try {
    const entities = await getDocs(
      query(
        collectionRef,
        where("organization", "==", organization),
        where("parent", "==", parent)
      )
    );
    return JSON.parse(
      JSON.stringify(
        entities.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }))
      )
    );
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getEntity = async (id: string) => {
  try {
    const entity = await getDoc(
      doc(db, COLLECTION, id).withConverter(converter<TEntity>())
    );
    console.log(entity);
    // return JSON.parse(JSON.stringify())
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const createEntity = async (payload: Omit<TEntity, "id">) => {
  try {
    const entityRef = await addDoc(collectionRef, payload);
    return { success: true, data: entityRef.id };
  } catch (err) {
    return { success: false, err };
  }
};
export const updateEntity = async (payload: Partial<TEntity>, id: string) => {
  try {
    await updateDoc(doc(db, COLLECTION, id), {
      ...payload,
      updated_at: Timestamp.now()
    });
    return { success: true };
  } catch (err) {
    return { success: false, err };
  }
};
