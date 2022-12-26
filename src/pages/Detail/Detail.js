import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import attendees from "../../assets/img/attendees.png";
import map from "../../assets/img/map.png";
import axios from "../../utils/axios";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

function Detail() {
  // PARAMS EVENT ID
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const userId = user.data.id;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [addWishlist, setAddWishlist] = useState(false);
  const [form, setForm] = useState({
    eventId: id,
    userId: userId,
  });
  console.log(setForm);
  useEffect(() => {
    getDataEvent();
    cekWishlist();
  }, []);

  const getDataEvent = async () => {
    try {
      const result = await axios.get(`event/${id}`);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuyTicket = () => {
    navigate("/order", {
      state: {
        eventId: id,
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
    const cek = await axios.get(`wishlist/${id}`);
    const searchWishlist = cek.data.data.filter((item) => id == item.eventId);
    console.log(searchWishlist);
    if (searchWishlist.length > 0) {
      setAddWishlist(true);
    } else {
      setAddWishlist(false);
    }
  };

  return (
    <>
      <Header></Header>
      <main className="container rounded shadow my-5 py-5 px-5">
        <div className="row">
          {/* SECTION 1 */}
          <section className="col-md-6 d-flex flex-column justify-content-center right-side">
            <img
              src={`https://res.cloudinary.com/dxjd1vzqg/image/upload/v1663836308/${data[0]?.image}`}
              className="img-fluid rounded-4"
              alt="detail"
            />
            <div className="d-flex gap-2 justify-content-center">
              <p className="addWishlist" onClick={handleAddWishlist}>
                {addWishlist ? (
                  <>
                    {" "}
                    <BsSuitHeartFill />
                  </>
                ) : (
                  <>
                    <BsSuitHeart />
                  </>
                )}{" "}
                Add to Wishlist
              </p>
            </div>
          </section>
          {/* SECTION 2 */}
          <section className="col-md-6 pe-5 ps-5">
            <div className="col-md-6 mb-4">
              <span className="h1">{data[0]?.name}</span>
            </div>
            <div className="d-flex gap-5 mb-4 h3">
              <div>
                <i data-feather="map-pin" className="ficon"></i>
                <span>{data[0]?.location}</span>
              </div>
              <div className="ms-5">
                <i data-feather="clock" className="ficon"></i>
                <span>{data[0]?.dateTimeShow}</span>
              </div>
            </div>
            <p className="h4">Attendees</p>
            <img
              src={attendees}
              className="img-fluid w-25 mb-3"
              alt="attendees"
            />
            <hr className="col-10 mb-4" />
            <span className="mb-3 h2">Event Detail</span>
            <p className="h5">{data[0]?.detail}</p>
            <p className="mb-4 h6">Read More</p>
            <div className="d-grid col-6 gap-3">
              <span className="h2">Location</span>
              <img src={map} alt="map" />
              <a href="./order.html">
                <button
                  className="btn btn-primary col-12 shadow mt-5"
                  type="button"
                  onClick={handleBuyTicket}
                >
                  Buy Tickets
                </button>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Detail;
