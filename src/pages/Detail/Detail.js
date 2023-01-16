import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import map from "../../assets/img/map.png";
import attends from "../../assets/img/avatarevent.png";
import { useSelector } from "react-redux";

function Detail() {
  // [1] GIMANA CARANYA UNTUK MENDAPATKAN ID DARI URL ?
  const { eventId } = useParams();
  const user = useSelector((state) => state.user);
  const userId = user.data.userId;
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [addWishlist, setAddWishlist] = useState(false);
  const [image, setImage] = useState("");
  const [form, setForm] = useState({
    eventId: eventId,
    userId: userId,
  });
  console.log(setForm);
  // [3] SIMPAN DATA KE STATE
  useEffect(() => {
    getDataEvent();
    cekWishlist();
  }, [image]);

  // [2] GET EVENT BY ID
  const getDataEvent = async () => {
    try {
      const result = await axios.get(`event/${eventId}`);
      setData(result.data.data[0]);
      setImage(result.data.data[0].image);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuyTicket = () => {
    navigate("/order", {
      state: {
        eventId: eventId,
      },
    });
  };

  const handleAddWishlist = async () => {
    try {
      const result = await axios.post("wishlist/", form);
      alert(result.data.msg);
      cekWishlist();
    } catch (error) {
      console.error(error.response);
    }
  };

  const cekWishlist = async () => {
    const cek = await axios.get(`wishlist/${userId}`);
    const searchWishlist = cek.data.data.filter(
      (item) => eventId == item.eventId
    );
    console.log(searchWishlist);
    if (searchWishlist.length > 0) {
      setAddWishlist(true);
    } else {
      setAddWishlist(false);
    }
  };
  // [4] LETAKAN DATA YANG SUDAH DINAMIS
  return (
    <div id="container_detail">
      <Header />
      <main id="Detail">
        <div className="container text-center">
          <div className="row text-center">
            <div className="col-sm-6">
              {image && (
                <img
                  id="event"
                  src={`https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/${image}`}
                  alt=""
                />
              )}
              <p className="add mt-5 addWishlist" onClick={handleAddWishlist}>
                {addWishlist ? (
                  <>
                    {" "}
                    <i className="bi bi-heart-fill"></i>
                  </>
                ) : (
                  <>
                    <i className="bi bi-heart"></i>
                  </>
                )}{" "}
                Add to Wishlist
              </p>
            </div>
            <div className="detail_event text-start  text-black col-sm-6">
              <h2 className="name_event_detail">{data.name}</h2>
              <div className="row mt-5 text-start">
                <div className="col ">
                  <p>
                    <i className="bi bi-geo-alt"></i> {data.detail}
                  </p>
                </div>
                <div className="col">
                  <p>
                    <i className="bi bi-clock"></i> {data.dateTimeShow}
                  </p>
                </div>
              </div>
              <p className="">Attendees</p>
              <img src={attends} alt="" className="attends_detail" />
              <div id="detail-event-2">
                <h2 className="mt-5">Event Detail</h2>
                <p className="me-3">{data?.detail}</p>
                <p>
                  <a href="">Read More</a>
                </p>
                <h2>Location</h2>
                <img src={map} alt="" />
                <br />
                <div className="pay">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg mt-4"
                    onClick={handleBuyTicket}
                  >
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Detail;
