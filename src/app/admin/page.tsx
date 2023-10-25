import PrivateRoute from "@src/redux/PrivateRouter";

export default function Admin() {
  return (
    <PrivateRoute>
      <div className="mb-[5000px]">Admin</div>
    </PrivateRoute>
  );
}
