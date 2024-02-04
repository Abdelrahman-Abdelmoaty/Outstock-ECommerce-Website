import { ChevronDown } from "lucide-react";

export default function PagesNavItem() {
  return (
    <>
      <div className="peer py-4">
        <a href="/pages">
          <div className="flex-center">
            Pages
            <ChevronDown className="h-5 w-5" />
          </div>
        </a>
      </div>
      <ul className="invisible absolute top-full flex translate-y-12 flex-col border bg-white p-2 opacity-0 shadow duration-500 ease-in-out hover:visible hover:translate-y-0 hover:opacity-100 peer-hover:visible peer-hover:translate-y-0 peer-hover:opacity-100">
        <li className="px-2 py-2 text-sm">
          <a href="/Blog">Blog</a>
        </li>
        <li className="px-2 py-2 text-sm">
          <a href="/ContactUs">Contact Us</a>
        </li>
        <li className="px-2 py-2 text-sm">
          <a href="/AboutUs">About Us</a>
        </li>
        <li className="px-2 py-2 text-sm">
          <a href="/StoreLocator">Store Locator</a>
        </li>
        <li className="px-2 py-2 text-sm">
          <a href="/Page404">Page 404</a>
        </li>
        <li className="px-2 py-2 text-sm">
          <a href="/FAQsPage">FAQs Page</a>
        </li>
      </ul>
    </>
  );
}
