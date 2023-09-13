import React from "react";
import './Shared.css'


export const DestinationCards = () => {
  return (
    <div className="mb-5">
      <div className="card border-0 p-3">
        <img src="https://img.freepik.com/free-photo/light-effect-trees-summer-sunset_1203-5718.jpg?w=996&t=st=1694590248~exp=1694590848~hmac=fe85dbafc059f6eb4a2afeb984148ce8654bba65ab90db18fd310cd17a060a3c" className="card-img-top card-img" alt="..." />
        <div className="card-body">
          <h3 style={{ color: "white"}}>Bali Bucket List - 10 Days</h3>
          <p style={{ color: "#6c9999"}} className="card-text">
            Bali, Indonesia
          </p>
          <h2 style={{color: "white"}}><span style={{color: "#0cc0df"}}>$</span>35/<span style={{fontSize: "10px", color: "#6c9999"}}>Person</span></h2>
        </div>
      </div>
    </div>
  );
};
