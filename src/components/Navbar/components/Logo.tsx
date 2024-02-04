import logo from "@public/assets/images/logo_dark.svg";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <a href="/">
      <div className={className}>
        <Image
          className="img-fill"
          src={logo}
          alt="outstock-logo"
          width={300}
          height={200}
          priority={true}
        />
      </div>
    </a>
  );
}
