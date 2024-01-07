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
      <a href="/shop" onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>
        <div className="flex-center">
          Shop
          <KeyboardArrowDownOutlinedIcon className="w-12 h-12 xl:w-6 xl:h-6" />
        </div>
      </a>
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
                <a href="/"> Crape Myrtle</a>
              </td>
              <td>
                <a href="/"> Adirondack Chair</a>
              </td>
              <td>
                <a href="/"> Multi Balans</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/"> Flowering Dogwood</a>
              </td>
              <td>
                <a href="/"> Teak Wood</a>
              </td>
              <td>
                <a href="/"> Thatsit balans</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/"> Kousa Dogwood</a>
              </td>
              <td>
                <a href="/"> Pine Wood</a>
              </td>
              <td>
                <a href="/"> Wing balan</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/"> Saucer Magnolia</a>
              </td>
              <td>
                <a href="/"> Cedar Wood</a>
              </td>
              <td>
                <a href="/"> Balans varier</a> peel
              </td>
            </tr>
            <tr>
              <td>
                <a href="/"> Fringe Tree</a>
              </td>
              <td>
                <a href="/"> PolyWood</a>
              </td>
              <td>
                <a href="/"> Varier gravity</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/"> Carolina Silverbell</a>
              </td>
              <td>
                <a href="/"> Beach Adirondack</a>
              </td>
              <td>
                <a href="/"> Varier club</a>
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
