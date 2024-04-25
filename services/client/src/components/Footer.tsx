import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div className="border-t p-5 md:p-20 flex flex-col md:flex-row gap-5 justify-between">
        <Logo />
        <div className="flex flex-col md:flex-row gap-10">
          <div className="space-y-3">
            <h5 className="uppercase font-semibold">Company</h5>
            <p className="hover-opacity">How it works</p>
            <p className="hover-opacity">Pricing</p>
            <p className="hover-opacity">Demo</p>
          </div>
          <div className="space-y-3">
            <h5 className="uppercase font-semibold">Resource</h5>
            <p className="hover-opacity">Random Post #1</p>
            <p className="hover-opacity">Random Post #2</p>
            <p className="hover-opacity">Random Post #3</p>
            <p className="hover-opacity">Random Post #4</p>
            <p className="hover-opacity">Random Post #5</p>
          </div>
          <div className="space-y-3">
            <h5 className="uppercase font-semibold">About</h5>
            <p className="hover-opacity">Terms & Conditions</p>
            <p className="hover-opacity">Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="text-center pb-10">
        Copyright &copy; 2024 DesignPlanner
      </div>
    </>
  );
};

export default Footer;
