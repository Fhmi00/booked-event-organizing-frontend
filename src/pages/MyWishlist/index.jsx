import "./index.css";
import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { getDataWishlist } from "../../stores/action/wishlist";
export default function MyWishList() {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  const data = useSelector((state) => state.wishlist);
  console.log(data);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    dispatch(getDataWishlist(userId));
  }, [userId]);

  return (
    <div className="wishlist">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="main-wishlist mt-5">
          <h2>My Wishlist</h2>
        </main>
      </div>

      <Footer />
    </div>
  );
}
