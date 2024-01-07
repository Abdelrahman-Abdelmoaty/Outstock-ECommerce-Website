import logo from "@public/assets/images/logo-header.png";

export default function Logo() {
  return (
    <div className="order-2 xl:order-1 shrink-0">
      <a href="/">
        <div>
          <img className="img-fill" src={logo.src} alt="outstock-logo" />
        </div>
      </a>
    </div>
  );
}
