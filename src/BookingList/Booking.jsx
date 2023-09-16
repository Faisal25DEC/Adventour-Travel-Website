import React, { useEffect, useState } from "react";
import "./BookingList.css";
const Booking = () => {
  const [data, setData] = useState({});

  const fetchData = async (id) => {
    try {
      let res = await fetch(`http://localhost:8080/Europe/2`);
      let data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick=()=>{
    console.log("handleClick")
  }

  return (
    <div>
      <div className="parent">
      <button type="button" className="btn btn-primary btn-lg">Current Bookings</button>
      <button type="button" class="btn btn-secondary btn-lg">Past Bookings</button>
      </div>

      {/*  <div className="container">
        <img src={data.main_image} alt="pic" width={200} height={200} />
        <h3>{data.title}</h3>
        <p>₹{data.act_price}</p>
        <p>Guests:{data.group_size}</p>
        <p>From:</p>
        <hr />

        <div className="Btn_flex">
        <button type="button" class="btn btn-outline-info">Details</button>

        <button type="button" class="btn btn-outline-danger">Cancel</button>
        </div>
      </div> */}
      <div class="card" style={{width: "18rem",margin:"60px 0px 0px 70px"}} >
  <img src={data.main_image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{data.title}</h5>
    <p class="card-text">Guests:{data.group_size}</p>
    <p>From:</p>
    <hr />
    <div className="Btn_flex">
        <button type="button" class="btn btn-outline-info">Details</button>

        <button type="button" class="btn btn-outline-danger" onClick={handleClick}>Cancel</button>
        </div>
  </div>
</div>


    </div>
  );
};

export default Booking;
