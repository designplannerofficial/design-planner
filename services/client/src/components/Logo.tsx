import DpLogo from "@/assets/dp-logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <div className="flex gap-2 items-center hover:cursor-pointer">
        <img src={DpLogo} alt="Dp_logo" className="w-7 h-7" />
        <p className="font-bold text-xl">DesignPlanner</p>
      </div>
    </Link>
  );
};

export default Logo;
