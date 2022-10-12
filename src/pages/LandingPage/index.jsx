import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Badge from "react-bootstrap/Badge";
// import Attendee from "../../assets/img/attendees.png";
import CardEvent from "../../components/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Landingbg from "../../assets/img/landingbg.png";
// import Event1 from "../../assets/img/bitmap.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import moment from "moment";
import "./index.css";

function LandingPage() {
  const navigate = useNavigate();
  const [dateShow, setDateShow] = useState(moment().format("YYYY-MM-DD")); // 2022-10-04
  const [listDateShow, setListDateShow] = useState([]);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    generateDate();
  }, [dateShow]);

  const generateDate = () => {
    let listDate = [
      moment(dateShow).subtract(2, "days"),
      moment(dateShow).subtract(1, "days"),
      dateShow,
      moment(dateShow).subtract(-1, "days"),
      moment(dateShow).subtract(-2, "days"),
    ];
    setListDateShow(listDate);
  };
  const selectDate = (date) => {
    setDateShow(date);
  };

  console.log("DATE ACTIVE = " + dateShow);

  useEffect(() => {
    getDataEvent();
  }, []);

  useEffect(() => {
    getDataEvent();
  }, [page, searchName, dateShow]);

  useEffect(() => {
    getDataEvent();
  }, [dateShow]);

  const getDataEvent = async () => {
    try {
      const result = await axios.get(
        `event?page=${page}&limit=5&sort=&searchDateShow=${dateShow}&searchName=${searchName}`
      );
      setData(result.data.data);
      setPagination(result.data.pagination);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetailEvent = (id) => {
    navigate(`/detail/${id}`);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSearchName = () => {
    // console.log(keyword);
    setSearchName(keyword);
  };

  return (
    <>
      <Header></Header>
      <header className="card text">
        <img src={Landingbg} alt="landingbg" />
        <div className="card-img-overlay">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 d-flex flex-column vh-100 justify-content-center">
                <span className="mb-5 h1 text-white landing-header">
                  Find events you love with our
                </span>
                <div className="bg-white">
                  <InputGroup className="px-2 py-3 landing-input-header">
                    <Form.Control
                      aria-label="First name"
                      placeholder="Search"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <Form.Control placeholder="Location"></Form.Control>
                    <Button onClick={handleSearchName}>search</Button>
                  </InputGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex flex-column align-items-center justify-content-center mt-5 py-5 gap-5">
            <Badge
              pill
              bg
              className="text-danger py-2 px-5 landing-event-round"
            >
              ——— EVENT
            </Badge>{" "}
            <span className="landing-event">Events For You</span>
            <div className="d-flex flex-row gap-5 ">
              {listDateShow.map((item, index) => (
                <button
                  key={index}
                  style={{ margin: "0 10px" }}
                  className={
                    index === 2
                      ? "active landing-days-button-active px-3 py-2 rounded-4 text-warning bg-light"
                      : "landing-days-button-default px-3 py-2 rounded-4 border-0 bg-light"
                  }
                  onClick={() => {
                    selectDate(moment(item).format("YYYY-MM-DD"));
                  }}
                >
                  <div>{moment(item).format("DD")}</div>
                  <small>{moment(item).format("ddd")}</small>
                </button>
              ))}
            </div>
            <div className="d-flex gap-4">
              {data.length > 0 ? (
                data.map((item) => (
                  <div key={item.id}>
                    <CardEvent
                      data={item}
                      handleDetail={handleDetailEvent}
                    ></CardEvent>
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <h3>Data Not Found !</h3>
                </div>
              )}
            </div>
            <div className="d-flex gap-2 justify-content-center w-100 my-5"></div>
            <Button
              variant="outline-primary text-primary col-3"
              onClick={handlePrevPage}
            >
              &lt;
            </Button>
            <Button
              variant="outline-primary text-primary col-3"
              onClick={handleNextPage}
              disabled={page === pagination.totalPage ? true : false}
            >
              &gt;
            </Button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
