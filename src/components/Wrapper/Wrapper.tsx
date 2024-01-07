export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="w-[100%]  xl:w-[80%] 2xl:w-[65%] xl:mx-auto px-4 xl:px-0">{children}</div>;
}
