import Image from "next/image";

export default function BigCard({
  src,
  text,
}: {
  src: string;
  secondSrc?: string;
  text: string;
}) {
  return (
    <a href="/shop" className="col-span-1 row-span-2 sm:col-span-2">
      <div className="group relative overflow-hidden">
        <Image
          src={src}
          alt="shop"
          className="ease-500 h-auto w-auto group-hover:scale-110"
          width={453}
          height={570}
        />
        <div className="absolute bottom-0 left-0 z-10 m-5 max-w-xs">
          <p className="text-lg font-medium">{text}</p>
          <p className="text-xs">Discover Now</p>
        </div>
      </div>
    </a>
  );
}
