import LandingGrid from "@/assets/backgrounds/landing_grid.png";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center relative">
      <h1 className="text-6xl font-bold pt-36">Database fascinates us.</h1>
      <h1 className="text-6xl font-bold w-3/4">
        However, we couldn't find a great tool to help us design our database.
      </h1>
      <img src={LandingGrid} alt="Landing_grid" className="absolute -z-10" />
      <p className="pt-5 w-1/2">
        Transform your ideas into database models while ensuring it's clear, and
        easy to design. Sounds straightforward, doesn't it? Sign-up for the free
        version. And enjoy the site
      </p>
      <div className="pt-5 flex gap-3">
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
};

export default Landing;
