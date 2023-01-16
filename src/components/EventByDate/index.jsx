import { useEffect, useState } from "react";
import moment from "moment";
import CardEvent from "../../components/CardEvent";
import { useNavigate } from "react-router-dom";

import "./index.css";
import { getDataEvent } from "../../stores/actions/event";
import { useDispatch, useSelector } from "react-redux/es/exports";
export default function EventByDate() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.event);
  console.log(data);

  const [page, setPage] = useState(1);
  const dispacth = useDispatch();

  const [dateShow, setDateShow] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [listDateShow, setListDateShow] = useState([]);

  // DIGUNAKAN UNTUK GET DATA PERTAMA KALI

  // DIGUNAKAN UNTUK GET DATA JIKA ADA PERUBAHAN STATE
  useEffect(() => {
    generateDate();
    getEvent();
  }, [page, dateShow]);

  const getEvent = async () => {
    try {
      await dispacth(getDataEvent(page));
    } catch (error) {
      return error.error;
    }
  };
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

  const handleDetailEvent = (eventId) => {
    navigate(`/detail/${eventId}`);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <section id="EventByDate mb-5">
        <div className="container text-center ">
          <div className="text-center">
            <button className="button_event">Event</button>
            <h3 className="mb-5">Events For You</h3>
          </div>
          <div className="d-flex justify-content-center gap-3">
            {listDateShow.map((item, index) => (
              <button
                key={index}
                style={{ margin: "0 10px" }}
                className={
                  index === 2 ? "event_date_active event_date" : "event_date"
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
        </div>
        <div className="container_event  justify-content-center gap-4 mt-5">
          <main className="container d-flex gap-3 my-5">
            {data.data.length > 0 ? (
              data.data.map((item) => (
                <div key={item.id}>
                  <CardEvent
                    data={item}
                    handleDetailEvent={handleDetailEvent}
                  />
                </div>
              ))
            ) : (
              <h1>Data Not Found !</h1>
            )}
          </main>
        </div>

        <div className="d-flex gap-2 justify-content-center w-100 my-5">
          <button className="btn btn-primary" onClick={handlePrevPage}>
            &lt;
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNextPage}
            // disabled={page ? true : false}
          >
            &gt;
          </button>
        </div>
      </section>
    </>
  );
}
