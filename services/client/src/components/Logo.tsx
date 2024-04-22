import DpLogo from "@/assets/dp-logo.png";
const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src={DpLogo} alt="Dp_logo" className="w-7 h-7" />
      <p className="font-bold text-xl">DesignPlanner</p>
    </div>
  );
};

export default Logo;
