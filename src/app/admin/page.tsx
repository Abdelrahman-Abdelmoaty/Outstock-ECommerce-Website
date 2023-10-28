import PrivateRoute from "@src/redux/components/PrivateRouter";
import Link from "next/link";

export default function Admin() {
  return (
    <div className="my-[300px] font-bold text-3xl flex-center">
      <div className="flex flex-col">
        <p>Admin</p>
        <Link href="/admin/products" className="hover:text-[var(--secondary-color)] ease-500">
          Products
        </Link>
        <Link href="/admin/users" className="hover:text-[var(--secondary-color)] ease-500">
          Users
        </Link>
        <Link href="/admin/categories" className="hover:text-[var(--secondary-color)] ease-500">
          Categories
        </Link>
        <Link href="/admin/discounts" className="hover:text-[var(--secondary-color)] ease-500">
          Discounts
        </Link>
      </div>
    </div>
  );
}
