import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-5 md:px-20 border-b">
      <Logo />
      <div className="gap-10 items-center hidden md:flex">
        <NavLink className="hover-opacity" to="/about">
          About
        </NavLink>
        <NavLink className="hover-opacity" to="/features">
          Features
        </NavLink>
        <NavLink className="hover-opacity" to="/blog">
          Event
        </NavLink>
        <NavLink className="hover-opacity" to="/pricing">
          Pricing
        </NavLink>
        <NavLink className="hover-opacity" to="/login">
          Login
        </NavLink>
        <NavLink className="hover-opacity" to="/sign-up">
          Sign Up
        </NavLink>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
