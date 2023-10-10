import Searchbox from "./MiniComponents/Searchbox";
import Cartbox from "./MiniComponents/Cartbox";
import SignOptions from "./MiniComponents/SignOptions";

export default function RightNav() {
  return (
    <ul className="order-3 xl:order-3 flex-center text-[#666] font-light">
      <li>
        <Searchbox />
      </li>
      <li>
        <Cartbox />
      </li>
      <li className="pr-0">
        <SignOptions />
      </li>
    </ul>
  );
}
