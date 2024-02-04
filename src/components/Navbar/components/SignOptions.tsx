import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  UserRound,
  Menu,
} from "lucide-react";
import { logout } from "@src/utils/actions";
import { setUser, useUser } from "@src/redux/slices/userSlice";

export default function SignOptions() {
  const sidebar = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useUser();

  const handleOpen = () => {
    sidebar.current?.classList.remove("translate-x-[100%]");
  };

  const handleClose = () => {
    sidebar.current?.classList.add("translate-x-[100%]");
  };

  const handleLogout = async () => {
    await logout();
    dispatch(setUser(null));
    handleClose();
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className="hv-eff flex-center">
        <Menu />
      </button>
      <div
        ref={sidebar}
        className="fixed right-0 top-0 h-screen max-w-2xl translate-x-[100%] bg-white p-12 text-[var(--nav-font-color)] shadow duration-1000 ease-in-out md:w-screen xl:w-auto"
      >
        <button type="button" onClick={handleClose}>
          <X className="mb-12 text-4xl text-black" />
        </button>
        {user.user ? (
          <div>
            <button
              className="ease-500 mb-4 border px-4 py-2 font-semibold text-black hover:bg-black hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="mb-4 flex items-center gap-x-2 text-black">
            <UserRound className="mb-1 text-3xl font-light" />
            <a href="/auth" className="font-semibold" onClick={handleClose}>
              Sign In
            </a>
            <span className="font-medium"> or </span>
            <a
              href="/auth/signup"
              className="font-semibold"
              onClick={handleClose}
            >
              Create an Account
            </a>
          </div>
        )}
        <div className="mt-12">
          <div className="mb-12 flex flex-col gap-y-4 text-black">
            <span className="text-xl font-semibold">Contact</span>
            <span>No. Rosecrans Ave, Suite 200 El Segundo, CA 90245. USA</span>
            <span>Call: +1 (202) 861-5567</span>
            <span>Email: Support@demo.com</span>
          </div>
          <div>
            <span className="font-semibold text-black">
              Connect on Social :
            </span>
            <ul
              className="my-2 flex items-center justify-start
            space-x-3"
            >
              <li className="p-0">
                <a
                  href="#"
                  className="transition hover:text-[var(--secondary-color)]"
                >
                  <Facebook />
                </a>
              </li>
              <li className="p-0">
                <a
                  href="#"
                  className="transition hover:text-[var(--secondary-color)]"
                >
                  <Twitter />
                </a>
              </li>
              <li className="p-0">
                <a
                  href="#"
                  className="transition hover:text-[var(--secondary-color)]"
                >
                  <Instagram />
                </a>
              </li>
              <li className="p-0">
                <a
                  href="#"
                  className="transition hover:text-[var(--secondary-color)]"
                >
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
