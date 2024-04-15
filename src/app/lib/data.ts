import { Organization, User } from "./model";
import { connectToDB } from "./utils";

export const fetchUsers = async (q: string, page: number, limit: number) => {
  const re = new RegExp(q, "i");
  console.log();
  try {
    connectToDB();
    const users = await User.find({
      $or: [
        { first_name: { $regex: re } },
        { last_name: { $regex: re } },
        { email: { $regex: re } }
      ]
    })
      .limit(limit)
      .skip(limit * (page - 1));
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

export const fetchOrganizations = async (
  q: string,
  page: number,
  limit: number
) => {
  const re = new RegExp(q, "i");
  try {
    connectToDB();
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
