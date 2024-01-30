import { BlogPost } from "@src/utils/types";

export default function BlogPost({
  imgUrl,
  category,
  title,
  date,
  desc,
}: BlogPost) {
  return (
    <div>
      <a href="/">
        <div className="overflow-hidden">
          <img
            src={imgUrl}
            alt=""
            className="img-fill ease-500 cursor-pointer hover:scale-110"
          />
        </div>
      </a>
      <p className="mt-6 text-sm text-[var(--secondary-color)]">{category}</p>
      <p className="mb-3 text-xl">{title}</p>
      <p className="text-sm text-[#666]">Posted: {date}</p>
      <p className="my-8 line-clamp-2 text-[#666]">{desc}</p>
      <a
        href="/"
        className="ease-500 border border-[#222] px-12 py-4 text-xs font-semibold uppercase hover:bg-black hover:text-white"
      >
        Read More
      </a>
    </div>
  );
}
