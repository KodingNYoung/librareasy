import { auth, signOut } from "@/auth";
import { useQuery } from "@tanstack/react-query";
import { fetchUserByEmail } from "../data";

export const useGetSignedInUser = async () => {
  const session = await auth();
  //   if (!session || !session?.user || !session?.user?.email) return signOut();
  const { data, isPending, error } = useQuery({
    queryKey: ["users", session?.user?.email],
    queryFn: () => fetchUserByEmail(session?.user?.email || "")
  });
  // const {error, }

  return {
    // user, error, loading
  };
};
