import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import detail from "../../assets/img/detail.png";
import attendees from "../../assets/img/attendees.png";
import map from "../../assets/img/map.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";

function Detail() {
  const [data, setData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    getDataEvent();
  }, []);

  const getDataEvent = async () => {
    try {
      const result = await axios.get(`event/${id}`);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

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
              <i data-feather="heart" className="ficon1"></i>
              <span className="h2">Add to Wishlist</span>
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
