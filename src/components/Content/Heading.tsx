export default function Heading({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center pt-20 pb-12 text-center col-span-3">
      <div className="flex items-center w-full">
        <hr className="inline-block w-24 flex-1" />
        <span className="text-4xl mx-10">{title}</span>
        <hr className="inline-block w-auto flex-1" />
      </div>
      <p className="text-sm mt-5">Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
    </div>
  );
}
