import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/index";
import Signin from "./pages/Signin/index";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail/Detail";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import ManageEvent from "./pages/ManageEvent";
import MyBooking from "./pages/MyBooking";
import MyWishList from "./pages/MyWishlist";

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
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/edit-profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/myBooking" element={<MyBooking />} />
          <Route path="/myWishlist" element={<MyWishList />} />
        </Route>

        {/* PRIVATE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="/manage-event" element={<ManageEvent />} />
        </Route>
        {/* PUBLIC ROUTES */}
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
