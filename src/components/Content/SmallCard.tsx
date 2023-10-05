import "@src/components/Content/Content.css";
export default function SmallCard({ text, src }: { text: string; src: string }) {
  return (
    <div className="w-[350px] h-[215px] px-8 py-16 group hover:cursor-pointer bg-contain bg-center relative overflow-hidden">
      <img src={src} alt="" className="absolute left-0 top-0 z-10 group-hover:scale-110 duration-500 ease-in-out" />
      <div className="flex flex-col group-hover:translate-y-4 duration-500 ease-in-out relative z-20">
        <span className="font-semibold w-[65%] leading-5 mb-5">{text}</span>
        <span className="text-xs text-[var(--nav-font-color)]">Discover Now</span>
      </div>
    </div>
  );
}
