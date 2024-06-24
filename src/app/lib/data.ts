import { Organization, User } from "./model";
import { connectToDB } from "./utils";

export const fetchUsers = async (q: string, page: number, limit: number) => {
  const re = new RegExp(q, "i");
  try {
    connectToDB();
    const users = await User.find({
      $or: [
        { first_name: { $regex: re } },
        { last_name: { $regex: re } },
        { email: { $regex: re } }
      ]
    })
      .sort({ createdAt: -1 })
      .skip(limit * (page - 1))
      .limit(limit);
    // This should be the total number of users that have this organization's id in their organization array
    const total = await User.countDocuments({
      $or: [
        { first_name: { $regex: re } },
        { last_name: { $regex: re } },
        { email: { $regex: re } }
      ]
    });
    return { data: JSON.parse(JSON.stringify(users)), total };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const fetchUserById = async (id: string) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const fetchUserByEmail = async (email: string) => {
  try {
    connectToDB();
    const user = await User.findOne({ email });
    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const fetchOrganizations = async (
  q: string,
  page: number,
  limit: number
) => {
  const re = new RegExp(q, "i");
  try {
    connectToDB();
    // this should be all the organizations a user exists in.
    const organizations = await Organization.find({ name: { $regex: re } })
      .limit(limit)
      .skip(limit * (page - 1));
    const total = await Organization.countDocuments({ name: { $regex: re } });
    return { data: JSON.parse(JSON.stringify(organizations)), total };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
