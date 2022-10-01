import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* MAIN */}
        <Route path="/" element={<LandingPage />} />
        {/* PAGE NOT FOUND */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
