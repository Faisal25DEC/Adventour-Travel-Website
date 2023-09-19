import React, { useState } from "react";
import "./BookingStyles.css";
import { UpcomingSection } from "./UpcomingSection";
import { PastSection } from "./PastSection";

export const BookingsSection = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
  return (
    <div className="container mt-5">
      <div style={{marginTop: "10%"}} className="filters d-flex justify-content-center">
      <ul className="nav nav-tabs border-0">
        <li className="nav-item">
          <p
            className={`nav-link ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => handleTabClick('upcoming')}
            style={{
              backgroundColor: activeTab === 'upcoming' ? '#0cc0df' : '#1b1b1b',
              color: activeTab === 'upcoming' ? 'white' : 'inherit',
              borderTopRightRadius: "0",
              cursor: "pointer"
            }}
          >
            Upcoming
          </p>
        </li>
        <li className="nav-item">
          <p
            className={`nav-link ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => handleTabClick('past')}
            style={{
              backgroundColor: activeTab === 'past' ? '#0cc0df' : '#1b1b1b',
              color: activeTab === 'past' ? 'white' : 'inherit',
              borderTopLeftRadius: "0",
              cursor:"pointer"
            }}
          >
            Past
          </p>
        </li>
      </ul>
      </div>
      <div className="bookings-grid">
      {activeTab === 'upcoming' ? <UpcomingSection /> : <PastSection />}
      </div>
    </div>
  );
};
