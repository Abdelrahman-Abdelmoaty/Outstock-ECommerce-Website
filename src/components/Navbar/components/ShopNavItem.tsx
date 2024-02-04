import menuImg from "@public/assets/images/menu-1.jpg";
import "@src/components/Navbar/Navbar.css";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ShopNavItem() {
  return (
    <>
      <div className="peer py-4">
        <Link href="/shop" className="bg-red-500">
          <div className="flex-center">
            Shop
            <ChevronDown className="h-5 w-5" />
          </div>
        </Link>
      </div>
      <div className="invisible absolute left-1/2 top-full flex w-fit -translate-x-1/2 translate-y-12 flex-row items-center border bg-white p-2 opacity-0 shadow duration-500 ease-in-out hover:visible hover:translate-y-0 hover:opacity-100 peer-hover:visible peer-hover:translate-y-0 peer-hover:opacity-100">
        <div>
          <table className="shop-table text-start">
            <thead>
              <tr>
                <th className="font-normal text-black">
                  <p>Litter Trees</p>
                </th>
                <th className="font-normal text-black">
                  <p>Chair Kimi</p>
                </th>
                <th className="font-normal text-black">
                  <p>Balans Chair</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="/shop"> Crape Myrtle</a>
                </td>
                <td>
                  <a href="/shop"> Adirondack Chair</a>
                </td>
                <td>
                  <a href="/shop"> Multi Balans</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/shop"> Flowering Dogwood</a>
                </td>
                <td>
                  <a href="/shop"> Teak Wood</a>
                </td>
                <td>
                  <a href="/shop"> Thatsit balans</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/shop"> Kousa Dogwood</a>
                </td>
                <td>
                  <a href="/shop"> Pine Wood</a>
                </td>
                <td>
                  <a href="/shop"> Wing balan</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/shop"> Saucer Magnolia</a>
                </td>
                <td>
                  <a href="/shop"> Cedar Wood</a>
                </td>
                <td>
                  <a href="/shop"> Balans varier</a> peel
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/shop"> Fringe Tree</a>
                </td>
                <td>
                  <a href="/shop"> PolyWood</a>
                </td>
                <td>
                  <a href="/shop"> Varier gravity</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/shop"> Carolina Silverbell</a>
                </td>
                <td>
                  <a href="/shop"> Beach Adirondack</a>
                </td>
                <td>
                  <a href="/shop"> Varier club</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="h-[297px] w-[343px]">
          <Image src={menuImg.src} alt="chair-img" height={297} width={343} />
        </div>
      </div>
    </>
  );
}
