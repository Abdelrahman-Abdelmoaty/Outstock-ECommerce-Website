import Link from "next/link";
import menuImg from "@public/assets/images/menu-1.jpg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "@src/components/Navbar/Navbar.css";
import { useRef } from "react";

export default function ShopNavbar() {
  const shopNavbar = useRef<HTMLDivElement>(null);
  const handleButtonEnter = () => {
    shopNavbar.current?.classList.add("show");
  };
  const handleButtonLeave = () => {
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
      <Link href="/shop" onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>
        <div className="flex-center">
          Shop
          <KeyboardArrowDownOutlinedIcon className="w-12 h-12 xl:w-6 xl:h-6" />
        </div>
      </Link>
      <div
        ref={shopNavbar}
        className="flex absolute shadow p-10 top-14 opacity-0 invisible translate-y-12 left-[-70%] bg-white items-start text-[var(--font-color)] duration-500 ease-in-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <table className="shop-table text-start">
          <thead>
            <tr>
              <th className="text-black font-normal">
                <p>Litter Trees</p>
              </th>
              <th className="text-black font-normal">
                <p>Chair Kimi</p>
              </th>
              <th className="text-black font-normal">
                <p>Balans Chair</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link href=""> Crape Myrtle</Link>
              </td>
              <td>
                <Link href=""> Adirondack Chair</Link>
              </td>
              <td>
                <Link href=""> Multi Balans</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link href=""> Flowering Dogwood</Link>
              </td>
              <td>
                <Link href=""> Teak Wood</Link>
              </td>
              <td>
                <Link href=""> Thatsit balans</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link href=""> Kousa Dogwood</Link>
              </td>
              <td>
                <Link href=""> Pine Wood</Link>
              </td>
              <td>
                <Link href=""> Wing balan</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link href=""> Saucer Magnolia</Link>
              </td>
              <td>
                <Link href=""> Cedar Wood</Link>
              </td>
              <td>
                <Link href=""> Balans varier</Link> peel
              </td>
            </tr>
            <tr>
              <td>
                <Link href=""> Fringe Tree</Link>
              </td>
              <td>
                <Link href=""> PolyWood</Link>
              </td>
              <td>
                <Link href=""> Varier gravity</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link href=""> Carolina Silverbell</Link>
              </td>
              <td>
                <Link href=""> Beach Adirondack</Link>
              </td>
              <td>
                <Link href=""> Varier club</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="h-[297px] w-[343px]">
          <img src={menuImg.src} alt="" className="img-fill" />
        </div>
      </div>
    </>
  );
}
