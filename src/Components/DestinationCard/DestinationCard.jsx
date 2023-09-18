import React from "react";
import "./DestinationCard.css";
import duration from "../../Assets/duration.png";
import star from "../../Assets/star.png";
const DestinationCard = () => {
  return (
    <div>
      <div class=" destination-card-wrapper">
        <img
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <div className="duration-rating-wrapper">
            <div className="duration">
              <div className="duration-icon">
                <img src={duration} alt="" />
              </div>

              <p>duration</p>
            </div>
            <div className="rating">
              <div className="rating-icon">
                <img src={star} alt="" />
              </div>

              <p>Star</p>
            </div>
          </div>
          <div className="destination-desc">
            <p>
              Nestled in between the snow-capped slopes of the Pir Panjal and
              the Dhauladhar...
            </p>
          </div>
          <div className="price-and-view-wrapper">
            <p className="price">
              <span className="dollar" style={{ color: "#3ec6f0" }}>
                $
              </span>
              79<span className="per-day">/day</span>
            </p>

            <div className="view">
              <button className="btn btn-primary view-button">view</button>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default DestinationCard;
