import React from "react";

const DestinationCard = () => {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
