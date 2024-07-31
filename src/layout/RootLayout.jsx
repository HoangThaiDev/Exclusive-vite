// Import Modules
import { Outlet } from "react-router-dom";

// Import Components
import Navigation from "./Navigation";
import Introduce from "./Introduce";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Introduce />
      <Navigation />
      <Outlet />
    </div>
  );
}
