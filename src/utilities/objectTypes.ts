import { Timestamp } from "firebase/firestore";
import { EntityTypes } from "./enums";

export type TEntity = {
  id: string;
  organization: string | null;
  type: EntityTypes;
  name: string;
  category: string | null; //referenced from DB
  size: number | null;
  parent: null | string; // referenced from DB
  created_by: string; // referenced from the DB
  created_at: Timestamp;
  updated_at: Timestamp;
  url: string | null; // referenced from storage
};
