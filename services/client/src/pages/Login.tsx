import LoginBG from "@/assets/backgrounds/login_bg.png";
import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-1 flex-col items-center py-10">
        <Logo />
        <h1 className="text-5xl font-bold py-4 text-center">Welcome Back</h1>
        <p className="text-center">
          Enter your email and password to access your account
        </p>
        <div className="space-x-2 space-y-5">
          <Button variant="outline" className="space-x-2">
            <FcGoogle /> <p>Google</p>
          </Button>
          <Button variant="outline" className="space-x-2">
            <span className="text-blue-500">
              <FaGithub />
            </span>
            <p>Github</p>
          </Button>
        </div>
        <div className="flex w-full justify-center items-center gap-3 py-5">
          <div className="w-1/5 h-[1px] bg-secondary"></div>
          <p>Or continue with email</p>
          <div className="w-1/5 h-[1px] bg-secondary"></div>
        </div>
        <LoginForm />
        <p className="text-center py-2">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-primary">
            <Button variant="link" className="p-0">
              Sign Up
            </Button>
          </Link>
        </p>
      </div>
      <div className="h-3/4 overflow-clip">
        <img src={LoginBG} alt="asdf" />
      </div>
    </div>
  );
};

export default Login;
