export default function BigCard({ src, secondSrc, text }: { src: string; secondSrc?: string; text: string }) {
  return (
    <a href="/" className="col-span-1 sm:col-span-2 row-span-2 h-[570px]">
      <div className="relative group flex justify-end items-end h-[570px]">
        <div className="absolute top-0 left-0 z-0 overflow-hidden h-full w-full">
          <img src={src} alt="" className="img-fill group-hover:scale-110 ease-500" />
        </div>
        <div className="relative z-10 w-[30%] mr-8 mb-12">
          <p className="font-medium text-lg mb-4">{text}</p>
          <p className="text-xs text-right">Discover Now</p>
        </div>
      </div>
    </a>
  );
}
