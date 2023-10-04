import Link from "next/link";
import menuImg from "@public/assets/images/menu-1.jpg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "@src/components/Navbar/Navbar.css";
import { useRef } from "react";

export default function ShopNavbar() {
  const shopNavbar = useRef<HTMLDivElement>(null);
  const handleMouseOver = () => {
    shopNavbar.current?.classList.add("show");
  };
  const handleMouseOut = () => {
    setTimeout(() => {
      shopNavbar.current?.classList.remove("show");
    }, 100);
  };
  const handleMouseEnter = () => {
    if (shopNavbar.current?.classList.contains("show")) {
      shopNavbar.current.classList.add("active");
    }
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      shopNavbar.current?.classList.remove("active");
    }, 100);
  };
  return (
    <>
      <Link href="/shop" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className="flex-center">
          Shop
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </Link>
      <div
        ref={shopNavbar}
        className="flex absolute shadow p-10 top-full opacity-0 invisible translate-y-12 left-72 bg-white items-start text-[var(--nav-font-color)] duration-500 ease-in-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <table className="shop-table text-start">
          <thead>
            <tr>
              <th className="text-black font-normal">
                <Link href="">Litter Trees</Link>
              </th>
              <th className="text-black font-normal">
                <Link href="">Chair Kimi</Link>
              </th>
              <th className="text-black font-normal">
                <Link href="">Balans Chair</Link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Crape Myrtle</td>
              <td>Adirondack Chair</td>
              <td>Multi Balans</td>
            </tr>
            <tr>
              <td>Flowering Dogwood</td>
              <td>Teak Wood</td>
              <td>Thatsit balans</td>
            </tr>
            <tr>
              <td>Kousa Dogwood</td>
              <td>Pine Wood</td>
              <td>Wing balan</td>
            </tr>
            <tr>
              <td>Saucer Magnolia</td>
              <td>Cedar Wood</td>
              <td>Balans varier peel</td>
            </tr>
            <tr>
              <td>Fringe Tree</td>
              <td>PolyWood</td>
              <td>Varier gravity</td>
            </tr>
            <tr>
              <td>Carolina Silverbell</td>
              <td>Beach Adirondack</td>
              <td>Varier club</td>
            </tr>
          </tbody>
        </table>
        <img src={menuImg.src} alt="" className="h-[297px] w-[343px]" />
      </div>
    </>
  );
}
