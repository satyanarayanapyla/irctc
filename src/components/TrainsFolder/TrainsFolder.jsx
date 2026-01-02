import React, { useState } from "react";
import "./TrainsFolder.css";
import NavbarFolder from "../NavbarFolder/NavbarFolder";
// import AcademicHub from "../../assets/AcademicHub";
function TrainsFolder() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
    
  const trains = [
    {
      id: 1,
      trainNumber: "12727",
      trainName: "Godavari Express",
      source: "Hyderabad",
      destination: "Visakhapatnam",
      date: "2026-01-10",
      departure: "17:20",
      arrival: "05:30",
      classes: { SL: 120, "3A": 60, "2A": 20 },
    },
    {
      id: 2,
      trainNumber: "12805",
      trainName: "Janmabhoomi Express",
      source: "Hyderabad",
      destination: "Visakhapatnam",
      date: "2026-01-10",
      departure: "06:10",
      arrival: "18:40",
      classes: { SL: 0, "3A": 25, "2A": 10 },
    },
    {
      id: 3,
      trainNumber: "12603",
      trainName: "Charminar Express",
      source: "Hyderabad",
      destination: "Chennai",
      date: "2026-01-11",
      departure: "18:30",
      arrival: "07:40",
      classes: { SL: 90, "3A": 40, "2A": 15 },
    },
  ];

  const [filteredTrains, setFilteredTrains] = useState(trains);

  const searchTrains = () => {
    const result = trains.filter((train) => {
      return (
        (!source || train.source.toLowerCase().includes(source.toLowerCase())) &&
        (!destination || train.destination.toLowerCase().includes(destination.toLowerCase())) &&
        (!date || train.date === date)
      );
    });
    setFilteredTrains(result);
  };

  return (
    <>
      <NavbarFolder />
      <div className="trains-container">
        <h2 className="trains-title">Search Trains</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button className="search-btn" onClick={searchTrains}>
            Search
          </button>
        </div>

        <div className="train-list">
          {filteredTrains.length === 0 && <p className="no-data">No trains found</p>}

          {filteredTrains.map((train) => (
            <div key={train.id} className="train-card">
              <div className="train-header">
                <h3>{train.trainName}</h3>
                <span className="train-number">{train.trainNumber}</span>
              </div>

              <p className="route">
                {train.source} <span>→</span> {train.destination}
              </p>
              <p className="timing">
                Departure: {train.departure} | Arrival: {train.arrival}
              </p>

              <div className="classes">
                {Object.entries(train.classes).map(([cls, seats]) => (
                  <div key={cls} className="class-box">
                    <span className="class-name">{cls}</span>
                    <span className={seats > 0 ? "available" : "waiting"}>
                      {seats > 0 ? `${seats} Available` : "WL"}
                    </span>
                  </div>
                ))}
              </div>

              <button className="book-btn">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrainsFolder;
