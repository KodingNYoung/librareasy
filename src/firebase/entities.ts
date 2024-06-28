import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from ".";
import { TEntity } from "@/utilities/objectTypes";
import { converter } from "./utils";

const entitiesRef = collection(db, "entities").withConverter(
  converter<TEntity>()
);

export const getAllEntities = async (
  organization: string | null = null,
  parent: string | null = null
) => {
  try {
    const entities = await getDocs(
      query(
        entitiesRef,
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

export const createEntity = async (payload: Omit<TEntity, "id">) => {
  try {
    const entityRef = await addDoc(collection(db, "entities"), payload);
    return { success: true, data: entityRef.id };
  } catch (err) {
    return { success: false, err };
  }
};
