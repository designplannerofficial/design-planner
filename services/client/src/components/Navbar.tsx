import { Link } from "react-router-dom";
import Logo from "./Logo";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-20 border-b">
      <Logo />
      <div className="flex gap-10 items-center">
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/blog">Event</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up" className="">
          Sign Up
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
