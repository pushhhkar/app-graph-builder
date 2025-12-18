import { TopBar } from "./components/layout/TopBar";
import { LeftRail } from "./components/layout/LeftRail";
import { RightPanel } from "./components/layout/RightPanel";
import { CanvasArea } from "./components/canvas/CanvasArea";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <LeftRail />

        {/* The magic line is min-h-0 */}
        <div className="flex-1 overflow-hidden min-h-0">
          <CanvasArea />
        </div>

        <RightPanel />
      </div>
    </div>
  );
}


