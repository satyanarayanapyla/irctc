import React, { useState } from "react";
import NavbarFolder from "../NavbarFolder/NavbarFolder";
import "./AdminUploadTrains.css";

function AdminUploadTrains() {
  const [train, setTrain] = useState({
    trainNumber: "",
    trainName: "",
    source: "",
    destination: "",
    date: "",
    departureTime: "",
    arrivalTime: "",
    slSeats: "",
    ac3Seats: "",
    ac2Seats: "",
  });

  const handleChange = (e) => {
    setTrain({ ...train, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFilled = Object.values(train).every((val) => val !== "");
    if (!allFilled) {
      alert("Please fill all fields");
      return;
    }

    console.log("Train Uploaded:", train);
    alert("Train uploaded successfully");
  };

  return (
    <>
      <NavbarFolder />

      <div className="admin-upload-page">
        <div className="admin-upload-card">
          <h2 className="admin-upload-title">Upload Train Details</h2>
          <p className="admin-upload-subtitle">
            Add new train information to the system
          </p>

          <form className="admin-upload-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                name="trainNumber"
                placeholder="Train Number"
                onChange={handleChange}
              />
              <input
                name="trainName"
                placeholder="Train Name"
                onChange={handleChange}
              />
              <input
                name="source"
                placeholder="Source Station"
                onChange={handleChange}
              />
              <input
                name="destination"
                placeholder="Destination Station"
                onChange={handleChange}
              />
              <input
                type="date"
                name="date"
                onChange={handleChange}
              />
              <input
                type="time"
                name="departureTime"
                onChange={handleChange}
              />
              <input
                type="time"
                name="arrivalTime"
                onChange={handleChange}
              />
              <input
                name="slSeats"
                placeholder="Sleeper Seats"
                onChange={handleChange}
              />
              <input
                name="ac3Seats"
                placeholder="3A Seats"
                onChange={handleChange}
              />
              <input
                name="ac2Seats"
                placeholder="2A Seats"
                onChange={handleChange}
              />
            </div>

            <button className="admin-upload-btn" type="submit">
              Upload Train
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminUploadTrains;
