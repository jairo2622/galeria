import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import A1 from "../assets/img/naturaleza1.jpg";
import A2 from "../assets/img/naturaleza2.jpg";
import A3 from "../assets/img/naturaleza3.jpg";
import A4 from "../assets/img/naturaleza4.jpg";
import A5 from "../assets/img/naturaleza5.jpg";
import A6 from "../assets/img/naturaleza6.jpg";
import A7 from "../assets/img/naturaleza7.jpg";
import A8 from "../assets/img/naturaleza8.jpg";
import A9 from "../assets/img/naturaleza9.jpg";
import A10 from "../assets/img/naturaleza10.jpg";
import A11 from "../assets/img/naturaleza11.jpg";
import A12 from "../assets/img/naturaleza12.jpg";
import A13 from "../assets/img/naturaleza13.jpg";
import ReactPlayer from "react-player";

export default function Naturaleza() {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };
  return (
    <div className="galerias">
      <img
        src={A1}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A1)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <img
        src={A2}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A2)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <div className="player-wrapper imagenes">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=viqIokL9PDU"
          controls
          loop
          muted
          width="100%"
          height="100%"
          playing={false}
          style={{ bolder_radius: 25 }}
        />
      </div>
      <img
        src={A3}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A3)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <img
        src={A4}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A4)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <div className="player-wrapper imagenes">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=DsvJ7iv_d7Y"
          controls
          loop
          muted
          width="100%"
          height="100%"
          playing={false}
          style={{ bolder_radius: 25 }}
        />
      </div>
      <img
        src={A5}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A5)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <img
        src={A11}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A11)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <div className="player-wrapper imagenes">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=m_zGCKeTL9o"
          controls
          loop
          muted
          width="100%"
          height="100%"
          playing={false}
          style={{ bolder_radius: 25 }}
        />
      </div>
      <img
        src={A6}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A6)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <img
        src={A10}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A10)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <div className="player-wrapper imagenes">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=bchPi1AgGyE"
          controls
          loop
          muted
          width="100%"
          height="100%"
          playing={false}
          style={{ bolder_radius: 25 }}
        />
      </div>
      <img
        src={A7}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A7)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <div className="player-wrapper imagenes">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=tHD8IOCFUB0"
          controls
          loop
          muted
          width="100%"
          height="100%"
          playing={false}
          style={{ bolder_radius: 25 }}
        />
      </div>
      <img
        src={A8}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A8)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <img
        src={A9}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A9)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <img
        src={A10}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A10)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <div className="player-wrapper imagenes">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=wTkMFSgqi1I"
          controls
          loop
          muted
          width="100%"
          height="100%"
          playing={false}
          style={{ bolder_radius: 25 }}
        />
      </div>
      <img
        src={A11}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A11)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <div className="player-wrapper imagenes">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=cm6_rGjaM7s"
          controls
          loop
          muted
          width="100%"
          height="100%"
          playing={false}
          style={{ bolder_radius: 25 }}
        />
      </div>
      <img
        src={A12}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A12)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <div className="player-wrapper imagenes">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=HJW2DSrnN9U"
          controls
          loop
          muted
          width="100%"
          height="100%"
          playing={false}
          style={{ bolder_radius: 25 }}
        />
      </div>
      <img
        src={A13}
        alt=""
        className="imagenes"
        onClick={() => handleImageClick(A13)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={selectedImage} alt="" className="imagenes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
