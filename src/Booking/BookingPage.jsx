import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Booking.css"


const BookingPage = () => {
const [hotels,setHotels] = useState({})
const [travellerCount,setTravellerCount]=useState(0);
const [formData, setFormData] = useState({
  title: '',
  first_N: '',
  last_N: '',
  email: '',
  phone: '',
  day: '',
  month: '',
  year: '',
  gender: '',
  nationality: '',
});


const fetchData=async()=>{
  try{
      let response=await axios.get(`http://localhost:8080/Europe/1`);
      setHotels(response.data);
      
  }
  catch(error){
      console.log(error)
  }
}
console.log(hotels);


useEffect(()=>{
  fetchData()

},[])

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleIncrement=()=>{
  console.log("inc")
  setTravellerCount(travellerCount+1)
  
}

const handleDec=()=>{
  console.log("dec")
  setTravellerCount(travellerCount-1);
}

const basePrice = travellerCount * (hotels.str_price || 0);
const saving = travellerCount * (hotels?.save_price || 0);
const actual=travellerCount * (hotels.act_price)
const total=travellerCount * (hotels.act_price)




  return (
    <div className='top' >
      
      <h1>{hotels.title}</h1>

      

    <div className='parent'>
      
    {/* <div className='child'>
    <h1>Your adventoure overview</h1>
    <div className='p_child'>
      <h3>Sunday, August 20th, 2023</h3>
      <h4>to Thursday, August 31st, 2023</h4>
      <h4>Change Date</h4>

    </div>
    

    </div> */}

    <div>
      <div className="container">
        <h2 className="title">Your adventure overview</h2>
        <div className="box-container">
          <div className="date-box">
            <p className="date-title">Sunday, August 20th, 2023</p>
            <p className="date-range">to Thursday, August 31st, 2023</p>
            <p className="change-date">Change date</p>
          </div>
          <div className="info-box">
            <div className="icon-text">
            
              <p className="info">
                Only ₹{(hotels?.price_per_day)?.toLocaleString("en-US")} upfront per person. The remaining amount will be due on July 1st, 2023
              </p>
            </div>
            <div className="icon-text">
            
              <p className="info">
                6 spaces left and yours is reserved for the next 10 minutes
              </p>
            </div>
            <div className="icon-text">
              
              <p className="info">
                Instant Book: Your spaces will be instantly secured.
              </p>
            </div>
            <div className="icon-text">
             
              <p className="info">
                Special deal. See details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='child1'>
    <h1>My Trip</h1>
    <h3>{hotels.title}</h3>
    <h3>starts in</h3>
    <h3>ends in</h3>
    <h3>Tour Type</h3>
    <h3>Operated in</h3>
    <h3>What's included</h3>
    

    </div>

  </div>

  <div className='travel'>
      <h3>How many are travelling?</h3>

      <div className='btn_flex'>
      <div>
      <h3>{travellerCount} x traveller</h3>

      </div>
      <div className='btn'>
      <button  style={{marginRight:"15px"}} onClick={handleIncrement} disabled={travellerCount===hotels.group_size}>+</button>
      <button onClick={handleDec} disabled={travellerCount===1}>-</button>

      </div>
      </div>
    </div>


    <div className="price-summary">
      <h2>Price Breakdown</h2>
      <div>
        <span>Base Price:</span>
        <span>₹{basePrice}</span>
      </div>
      <div>
        <span>saving:</span>
        <span>₹{saving}</span>
      </div>
      <div>
        <span>Fee:</span>
        <span>-₹{actual}</span>
      </div>
      <div className="total">
        <span>Total:</span>
        <span>₹{total}</span>
      </div>
    </div>

    {/* form detailse */}

    <div className="booking-form">
      <h2>Add traveler details</h2>
      <div className="info-note">
        <span>Please note:</span>
        <span> Traveler details should match information on the passport</span>
      </div>
      <div className="lead-traveler">
        <span className="label">Lead Traveler</span>
        <span className='label1'>This traveler will serve as the contact person for the booking.</span>
      </div>
      <div className="title">
        <span className="label">Title*</span>
        <input
          type="radio"
          name="title"
          value="Mr."
          onChange={handleInputChange}
        />
        <label>Mr.</label>
        <input
          type="radio"
          name="title"
          value="Ms."
          onChange={handleInputChange}
        />
        <label>Ms.</label>
        <input
          type="radio"
          name="title"
          value="Mrs."
          onChange={handleInputChange}
        />
        <label>Mrs.</label>
        <input
          type="radio"
          name="title"
          value="Miss"
          onChange={handleInputChange}
        />
        <label>Miss</label>
      </div>
      <div className="first-name">
        <label htmlFor="first_N">First Name*</label>
        <input
          id="first_N"
          name="first_N"
          type="text"
          autoComplete="on"
          onChange={handleInputChange}
        />
      </div>
      <div className="last-name">
        <label htmlFor="last_N">Last Name*</label>
        <input
          id="last_N"
          name="last_N"
          type="text"
          autoComplete="on"
          onChange={handleInputChange}
        />
      </div>
      <div className="email">
        <label htmlFor="email">Email*</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="on"
          onChange={handleInputChange}
        />
      </div>
      <div className="phone">
        <label htmlFor="phone">Phone Number*</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="on"
          placeholder="e.g. +91 9876543210"
          onChange={handleInputChange}
        />
      </div>
      <div className="date-of-birth">
        <span className="label">Date of Birth*</span>
        <div className="dob-fields">
          <label htmlFor="day">Day</label>
          <select
            id="day"
            name="day"
            onChange={handleInputChange}
          >
            <option value=""></option>
            {/* Add day options here */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>

          </select>
          <label htmlFor="month">Month</label>
          <select
            id="month"
            name="month"
            onChange={handleInputChange}
          >
            <option value=""></option>
            {/* Add month options here */}
            <option value="">Janauary</option>
            <option value="">February</option>
            <option value="">March</option>
            <option value="">April</option>
            <option value="">May</option>
            <option value="">June</option>
            <option value="">July</option>
            <option value="">August</option>
            <option value="">September</option>
            <option value="">October</option>
            <option value="">November</option>
            <option value="">December</option>
          </select>
          <label htmlFor="year">Year</label>
          <select
            id="year"
            name="year"
            onChange={handleInputChange}
          >
            <option value=""></option>
            {/* Add year options here */}
            <option value="">1988</option>
            <option value="">1999</option>
            <option value="">2000</option>
            <option value="">2001</option>
            <option value="">2002</option>
            <option value="">2003</option>
            <option value="">2004</option>
            <option value="">2005</option>
            <option value="">2006</option>
            <option value="">2007</option>
            <option value="">2008</option>
            <option value="">2009</option>
            <option value="">2010</option>
            
          </select>
        </div>
      </div>
      <div className="gender">
        <span className="label">Gender*</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleInputChange}
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleInputChange}
        />
        <label>Female</label>
      </div>
      <div className="nationality">
        <label htmlFor="nationality">Nationality*</label>
        <select
          id="nationality"
          name="nationality"
          onChange={handleInputChange}
        >
          <option value=""></option>
          {/* Add nationality options here */}
          <option value="">India</option>
            <option value="">Russia</option>
            <option value="">Nepal</option>
            <option value="">Srilanka</option>
            <option value="">Bhutan</option>
            <option value="">France</option>
            <option value="">USA</option>
            <option value="">Germany</option>
        </select>
      </div>
    </div>

    <button className='nextBtn'>Proceed to next</button>


 

    


    </div>
  )
}

export default BookingPage
