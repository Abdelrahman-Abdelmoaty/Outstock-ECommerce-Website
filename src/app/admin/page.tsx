import PrivateRoute from "@src/redux/components/PrivateRouter";

export default function Admin() {
  const link = "text-xl font-medium cursor-pointer hover:text-[var(--secondary-color)] ease-500";
  return (
    <div className="py-12 gap-x-10">
      <div className="font-semibold text-3xl">
        <div className="my-4">
          <p className="text-2x mb-1 font-semibold">Products</p>
          <div className="ml-10 flex flex-col">
            <a href="/admin/products/addProduct" className={link}>
              &gt; Add Product
            </a>
            <a href="/admin/products" className={link}>
              &gt; Manage Products
            </a>
          </div>
        </div>
        <div className="my-4">
          <p className="text-2x mb-1 font-semibold">Users</p>
          <div className="ml-10 flex flex-col">
            <a href="/admin/products" className={link}>
              &gt; Manage Products
            </a>
          </div>
        </div>
        <div className="my-4">
          <p className="text-2x mb-1 font-semibold">Categories</p>
          <div className="ml-10 flex flex-col">
            <a href="/admin/products/addCategory" className={link}>
              &gt; Add Category
            </a>
            <a href="/admin/products/addProduct" className={link}>
              &gt; Manage Categories
            </a>
          </div>
        </div>
        <div className="my-4">
          <p className="text-2x mb-1 font-semibold">Discounts</p>
          <div className="ml-10 flex flex-col">
            <a href="/admin/addDiscount" className={link}>
              &gt; Add Discount
            </a>
            <a href="/admin/discounts" className={link}>
              &gt; Manage Discounts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
