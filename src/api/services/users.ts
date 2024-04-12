import { User } from "../models";
import { connectToDB } from "./mongo";

type UserPayload = {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  organizations?: string[];
};

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
export const updateUser = async (_id: string, payload: UserPayload) => {
  try {
    connectToDB();
  } catch (err) {}
};

// fetch users from collection
export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log("Error fetching:", err);
  }
};

// fetch one user from collections
export const fetchOneUser = async (param: {
  [key in "email" | "_id"]?: string;
}) => {
  try {
    connectToDB();
    return await User.findOne(param);
  } catch (err) {
    console.log("log [fetchOneUser service]:", err);
    throw err;
  }
};
