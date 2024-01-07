import { logout } from "@src/redux/slices/authSlice";
import { useAppDispatch } from "@src/redux/store";

import AdminNavbar from "./components/AdminNavbar";
import PrivateRoute from "@src/redux/components/PrivateRouter";
import Wrapper from "@src/components/Wrapper/Wrapper";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRoute>
      <Wrapper>
        <div className=" py-5 px-2">
          <AdminNavbar />
          {children}
        </div>
      </Wrapper>
    </PrivateRoute>
  );
}
