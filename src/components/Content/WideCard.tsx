import "@src/components/Content/Content.css";
export default function SmallWideCard({ category, text, src }: { category: string; text: string; src: string }) {
  return (
    <div className="relative group max-h-[270px] px-12 py-16">
      <div className="absolute top-0 left-0 overflow-hidden z-0 h-full w-full">
        <img src={src} alt="" className="img-fill group-hover:scale-110 ease-500" />
      </div>
      <div className="relative z-10">
        <span className="text-[var(--secondary-color)]">{category}</span>
        <p className="font-semibold text-xl leading-5">{text}</p>
        <button className="mt-16 bg-white border-2 border-black uppercase px-6 py-3 font-semibold text-xs animate-btn">
          <span>Discover Now</span>
        </button>
      </div>
    </div>
  );
}
