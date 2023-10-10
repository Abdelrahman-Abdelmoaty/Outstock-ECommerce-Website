import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
export default function Cartbox() {
  return (
    <div className="flex-center">
      <LocalMallOutlinedIcon className="mb-1 mr-1" />
      <div className="flex-center">
        <span className="hidden xl:block">
          Cart <span>(0)</span>
        </span>
      </div>
    </div>
  );
}
