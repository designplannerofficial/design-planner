import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <div className="flex flex-col gap-5 h-screen items-center justify-center">
      <h1>DesignPlanner</h1>
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}

export default App;
