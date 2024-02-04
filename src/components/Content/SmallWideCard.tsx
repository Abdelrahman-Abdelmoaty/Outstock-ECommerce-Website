import "@src/components/Content/Content.css";
import Image from "next/image";
export default function SmallWideCard({
  text,
  src,
}: {
  text: string;
  src: string;
}) {
  return (
    <a href="/shop">
      <div className="group relative mb-4 h-full w-[100%] overflow-hidden px-6 py-12 hover:cursor-pointer">
        <div className="absolute left-0 top-0 z-10 h-full w-full">
          <Image
            src={src}
            alt=""
            width={376}
            height={231}
            className="duration-500 ease-in-out group-hover:scale-110 "
          />
        </div>
        <div className="relative z-20 flex flex-col duration-500 ease-in-out group-hover:translate-y-4">
          <span className="mb-5 w-[65%] font-semibold leading-5">{text}</span>
          <span className="text-xs text-[var(--nav-font-color)]">
            Discover Now
          </span>
        </div>
      </div>
    </a>
  );
}
