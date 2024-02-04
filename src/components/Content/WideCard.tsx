import "@src/components/Content/Content.css";
export default function SmallWideCard({
  category,
  text,
  src,
}: {
  category: string;
  text: string;
  src: string;
}) {
  return (
    <div className="group relative max-h-[270px] px-12 py-16">
      <div className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
        <img
          src={src}
          alt=""
          className="img-fill ease-500 group-hover:scale-110"
        />
      </div>
      <div className="relative z-10">
        <span className="text-[var(--secondary-color)]">{category}</span>
        <p className="text-xl font-semibold leading-5">{text}</p>
        <button className="animate-btn mt-16 border-2 border-black bg-white px-6 py-3 text-xs font-semibold uppercase">
          <span>
            <a href="/shop">Discover Now</a>
          </span>
        </button>
      </div>
    </div>
  );
}
