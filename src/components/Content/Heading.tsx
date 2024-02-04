export default function Heading({ title }: { title: string }) {
  return (
    <div className="col-span-3 flex flex-col items-center py-16 text-center">
      <div className="flex w-full items-center">
        <hr className="inline-block w-24 flex-1" />
        <span className="mx-10 text-4xl">{title}</span>
        <hr className="inline-block w-auto flex-1" />
      </div>
      <p className="mt-5 text-sm">
        Mirum est notare quam littera gothica quam nunc putamus parum claram!
      </p>
    </div>
  );
}
