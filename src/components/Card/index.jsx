import React from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/LandingPage/index.css";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import image from "../../assets/img/event1.png";
// import event from "../../assets/img/bitmap.png";

function CardEvent(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${props.data.id}`);
  };
  return (
    // <div className="card" style={{ width: "18rem" }}>
    //   <img className="card-img-top" src={image} alt="Card image cap" />
    //   <div className="card-body">
    //     <h5 className="card-title">{props.data.name}</h5>
    //     <p className="card-text">{props.data.category}</p>
    //     <button className="btn btn-primary" onClick={handleDetail}>
    //       Go somewhere
    //     </button>
    //   </div>
    // </div>
    <>
      {/* <Card
        className="bg-dark text-white border-0"
        style={{ width: "18rem", height: "25rem" }}
      >
        <Card.Img
          src={`https://res.cloudinary.com/dxjd1vzqg/image/upload/v1663836308/${props.data.image}`}
          style={{ height: "25rem" }}
          alt="Card image"
        />
        <Card.ImgOverlay className="mt-5 pt-5 px-3">
          <Card.Text>{props.data.location}</Card.Text>
          <Card.Title>{props.data.name}</Card.Title>
          <Button variant="primary" onClick={handleDetail}>
            Primary
          </Button>{" "}
        </Card.ImgOverlay>
      </Card> */}
      <div className="card border-0">
        <img
          src={`https://res.cloudinary.com/dxjd1vzqg/image/upload/v1663836308/${props.data.image}`}
          className="card-img rounded-4"
          style={{ width: "18rem", height: "25rem" }}
          alt="image event"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-end mb-4 ">
          <p className="card-text text-white fw-bold card-location">
            {props.data.location}
          </p>
          <span className="card-title text-white fw-bolder card-title">
            {props.data.name}
          </span>
          <button className="btn btn-outline-dark" onClick={handleDetail}>
            Details{" "}
          </button>
        </div>
      </div>
      {/* <div className="border-0 card text">
        <img
          src={`https://res.cloudinary.com/dxjd1vzqg/image/upload/v1663836308/${props.data.image}`}
          className="w-25 rounded-5"
          alt="event1"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-end mb-4 mx-2 text-white">
          <h6>Wed, 15 Nov, 4:00 PM</h6>
          <h4>{props.data.name}</h4> */}
      {/* <img src={Attendee} className="w-25" alt="atende" /> */}
      {/* <button className="btn btn-primary" onClick={handleDetail}>
            Go somewhere{" "}
          </button>
        </div>
      </div> */}
    </>
  );
}

export default CardEvent;
