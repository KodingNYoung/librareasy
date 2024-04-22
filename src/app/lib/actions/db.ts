import { User } from "../model";
import { IUser } from "../types";
import { connectToDB } from "../utils";

export type UserPayload = Omit<IUser, "_id">;

// create a user document
export const createUser = async (payload: UserPayload) => {
  try {
    connectToDB();
    const newUser = new User(payload);
    return await newUser.save();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// update a user document
export const updateUser = async (
  id: string,
  payload: Omit<UserPayload, "email" | "password">
) => {
  try {
    connectToDB();
    await User.findByIdAndUpdate(id, payload);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// delete a user document
export const deleteUser = async (id: string) => {
  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
