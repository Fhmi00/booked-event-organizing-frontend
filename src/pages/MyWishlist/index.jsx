import React, { useEffect } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { getDataWishlist } from "../../stores/actions/wishlist";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
export default function MyWishList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const wishlist = useSelector((state) => state.wishlist);
  const userId = user.data.userId;

  useEffect(() => {
    dispatch(getDataWishlist(userId));
  }, []);

  console.log(wishlist);
  return (
    <div className="wishlist">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="main-wishlist">
          <h2>My Wishlist</h2>
        </main>
      </div>

      <Footer />
    </div>
  );
}
