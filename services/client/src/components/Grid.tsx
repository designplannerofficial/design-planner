import LandingGrid from "@/assets/backgrounds/landing_grid.png";
import LandingGridWhite from "@/assets/backgrounds/landing_grid_white.png";

const Grid = () => {
  return (
    <>
      <img
        src={LandingGrid}
        alt="Landing_grid"
        className="absolute -z-10 hidden dark:block"
      />
      <img
        src={LandingGridWhite}
        alt="Landing_grid_white"
        className="absolute -z-10 dark:hidden"
      />
    </>
  );
};

export default Grid;
