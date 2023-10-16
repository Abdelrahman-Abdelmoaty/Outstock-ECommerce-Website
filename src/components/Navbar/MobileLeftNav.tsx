import CloseIcon from "@mui/icons-material/Close";
export default function MobileLeftNav({ reference }: { reference: React.RefObject<HTMLDivElement> }) {
  const handleClose = () => {
    reference.current?.classList.add("translate-x-[-100%]");
  };
  return (
    <div className="w-[70vw] max-w-[500px] h-screen fixed left-0 top-0 translate-x-[-100%] ease-500 bg-white p-5" ref={reference}>
      <div className="flex items-center justify-between p-4">
        <p>Menu</p>
        <CloseIcon onClick={handleClose} className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-between p-4">
        <a href="/shop">Shop</a>
        {/* <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium w-8 h-8 css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownOutlinedIcon">
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
        </svg> */}
      </div>
      <div className="flex items-center justify-between p-4">
        <p>Pages</p>
        {/* <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium w-8 h-8 css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownOutlinedIcon">
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
        </svg> */}
      </div>
      <div className="p-4">
        <a href="/brands">Brands</a>
      </div>
    </div>
  );
}
