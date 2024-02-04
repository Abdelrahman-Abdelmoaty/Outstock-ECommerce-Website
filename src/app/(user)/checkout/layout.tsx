import { useUser } from "@src/redux/slices/userSlice";
import { redirect } from "next/navigation";

export default function layout({ children }: { children: React.ReactNode }) {
  // const user = useUser();
  // if (!user.user) redirect("/login");
  return <div>{children}</div>;
}
