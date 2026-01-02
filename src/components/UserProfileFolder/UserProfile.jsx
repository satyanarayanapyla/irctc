import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import NavbarFolder from "../NavbarFolder/NavbarFolder";
import AcademicHub from "../../assets/AcademicHub.png";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const response = {
      name: "Satyanarayana",
      email: "satyanarayanapyal031@gmail.com",
      mobile: "9390938369",
      gender: "Male",
      dob: "03-06-2002",
      address: "Visakhapatnam",
    };
    setUser(response);
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (loading) return <div className="profile-loader">Loading profile...</div>;
  if (error) return <div className="profile-error">{error}</div>;

  return (
    <>
      <NavbarFolder />

      <div className="profile-page">
        <div className="profile-wrapper">

          {/* LEFT SIDE */}
          <div className="profile-left">
            <img src={AcademicHub} alt="Profile Visual" />
            <h2>Welcome 👋</h2>
            <p>Manage your personal details securely</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="profile-right">
            <h2 className="profile-title">User Profile</h2>

            <ProfileRow label="Full Name" value={user.name} />
            <ProfileRow label="Email" value={user.email} />
            <ProfileRow label="Mobile Number" value={user.mobile} />
            <ProfileRow label="Gender" value={user.gender} />
            <ProfileRow label="Date of Birth" value={user.dob} />
            <ProfileRow label="Address" value={user.address} />

            <div className="profile-actions">
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="profile-row">
      <span className="profile-label">{label}</span>
      <span className="profile-value">{value || "-"}</span>
    </div>
  );
}

export default UserProfile;
