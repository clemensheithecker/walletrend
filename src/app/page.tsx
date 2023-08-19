import { auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  const { userId } = auth();
  console.log(userId);

  const user = await currentUser();

  if (!user) return <div>Not logged in</div>;

  return <div>Hello {user.firstName}</div>;
}
