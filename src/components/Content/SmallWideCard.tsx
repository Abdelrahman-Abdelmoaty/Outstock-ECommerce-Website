import "@src/components/Content/Content.css";
import { Suspense } from "react";
import LoadingComponent from "../Loading/LoadingComponent";
export default function SmallWideCard({ text, src }: { text: string; src: string }) {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <a href="/shop">
        <div className="w-[100%] h-full px-[10%] py-[20%] group hover:cursor-pointer bg-contain bg-center relative overflow-hidden mb-4">
          <div className="absolute left-0 top-0 z-10 w-full h-full">
            <img src={src} alt="" className="img-fill group-hover:scale-110 duration-500 ease-in-out " />
          </div>
          <div className="flex flex-col group-hover:translate-y-4 duration-500 ease-in-out relative z-20">
            <span className="font-semibold w-[65%] leading-5 mb-5">{text}</span>
            <span className="text-xs text-[var(--nav-font-color)]">Discover Now</span>
          </div>
        </div>
      </a>
    </Suspense>
  );
}
