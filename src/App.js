import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/index";
import Signin from "./pages/Signin/index";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail/Detail";
import Order from "./pages/Order/Order";
import Payment from "./pages/Payment";
import EditProfile from "./pages/Profile/EditProfile";
import ChangePassword from "./pages/Profile/ChangePassword";
import ManageEvent from "./pages/ManageEvent";

import PublicRoute from "./utils/routes/PublicRoute";
import PrivateRoute from "./utils/routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* MAIN */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/manage-event" element={<ManageEvent />} />
        </Route>

        {/* PRIVATE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}></Route>
        {/* PAGE NOT FOUND */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
