// Import Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import File CSS
import "./App.css";

// Import Components
// ------------------------- Component: Layout -------------------------------
import RootLayout from "./layout/RootLayout";

// ------------------------- Component: Page -------------------------------
import Home from "./page/Home";

function App() {
  const modeProject = import.meta.env.MODE;
  return (
    <div className="main-product">
      <BrowserRouter
        basename={modeProject === "development" ? "" : "/Exclusive-vite/"}
      >
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
