import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import A1 from "../assets/img/naturaleza1.jpg";
import A2 from "../assets/img/arte1.jpg";
import A3 from "../assets/img/arte3.jpg";
import A4 from "../assets/img/arte12.jpg";
import A5 from "../assets/img/naturaleza3.jpg";
import A6 from "../assets/img/naturaleza8.jpg";
import ReactPlayer from "react-player";

export default function Presentacion() {
  const [interval, setInterval] = useState(1000);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setInterval(value);
    }
  };
  return (
    <div>
      <div className="input-group">
        <label htmlFor="intervalInput" className="label_presentacion">
          Tiempo de transcición (ms):{" "}
        </label>
        <input
          className="form-control"
          id="intervalInput"
          type="number"
          value={interval}
          onChange={handleInputChange}
          placeholder="Ingresa un valor en ms"
        />
      </div>

      <div
        id="carouselExampleFade"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item" data-bs-interval="{interval}">
            <img src={A1} alt="" className="imagenes" />
          </div>
          <div className="carousel-item active" data-bs-interval="{interval}">
            <img src={A2} alt="" className="imagenes" />
          </div>
          <div className="carousel-item" data-bs-interval="{interval}">
            <img src={A3} alt="" className="imagenes" />
          </div>
          <div className="carousel-item" data-bs-interval="{interval}">
            <div className="player-wrapper video_carrusel">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=p6vN06ypccM"
                controls
                loop
                muted
                width={350}
                playing={false}
                style={{ bolder_radius: 25 }}
              />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="{interval}">
            <img src={A4} alt="" className="imagenes" />
          </div>
          <div className="carousel-item" data-bs-interval="{interval}">
            <div className="player-wrapper video_carrusel">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=OF6vA4MEFjw&t=1s"
                controls
                loop
                muted
                width={350}
                playing={false}
                style={{ bolder_radius: 25 }}
              />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="{interval}">
            <img src={A5} alt="" className="imagenes" />
          </div>
          <div className="carousel-item" data-bs-interval="{interval}">
            <img src={A6} alt="" className="imagenes" />
          </div>
          <div className="carousel-item" data-bs-interval="{interval}">
            <div className="player-wrapper video_carrusel">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=DsvJ7iv_d7Y"
                controls
                loop
                muted
                width={350}
                playing={false}
                style={{ bolder_radius: 25 }}
              />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="{interval}">
            <div className="player-wrapper video_carrusel">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=m_zGCKeTL9o"
                controls
                loop
                muted
                width={350}
                playing={false}
                style={{ bolder_radius: 25 }}
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
