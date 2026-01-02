import React, { useState } from "react";
import "./AddPaymentDetails.css";
import NavbarFolder from "../NavbarFolder/NavbarFolder";

function AddPaymentDetails() {
  const [paymentType, setPaymentType] = useState("card");

  return (
    <>
      <NavbarFolder />

      <div className="payment-page">
        <div className="payment-card-wrapper">
          <h2 className="payment-title">Add Payment Details</h2>
          <p className="payment-subtitle">
            Securely save your payment method for faster booking
          </p>

          {/* Tabs */}
          <div className="payment-tabs">
            <button
              className={`tab-btn ${paymentType === "card" ? "active" : ""}`}
              onClick={() => setPaymentType("card")}
            >
              💳 Card
            </button>

            <button
              className={`tab-btn ${paymentType === "upi" ? "active" : ""}`}
              onClick={() => setPaymentType("upi")}
            >
              📱 UPI
            </button>
          </div>

          {/* Card Payment */}
          {paymentType === "card" && (
            <div className="payment-form">
              <div className="input-group">
                <label>Card Holder Name</label>
                <input type="text" placeholder="Enter card holder name" />
              </div>

              <div className="input-group">
                <label>Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength="16"
                />
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Expiry</label>
                  <input type="text" placeholder="MM/YY" />
                </div>

                <div className="input-group">
                  <label>CVV</label>
                  <input type="password" placeholder="***" maxLength="3" />
                </div>
              </div>

              <button className="save-btn">Save Card</button>
            </div>
          )}

          {/* UPI Payment */}
          {paymentType === "upi" && (
            <div className="payment-form">
              <div className="input-group">
                <label>UPI ID</label>
                <input type="text" placeholder="example@upi" />
              </div>

              <button className="save-btn">Save UPI</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddPaymentDetails;
