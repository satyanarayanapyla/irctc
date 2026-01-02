import React, { useEffect, useState } from "react";
import "./MasterListFolder.css";
import NavbarFolder from "../NavbarFolder/NavbarFolder";

function MasterListFolder() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Mock data (later replace with API)
    setList([
      { id: 1, name: "Train Master", status: "Active", updated: "01-01-2026" },
      { id: 2, name: "Station Master", status: "Active", updated: "28-12-2025" },
      { id: 3, name: "Route Master", status: "Inactive", updated: "15-12-2025" },
      { id: 4, name: "Coach Master", status: "Active", updated: "30-12-2025" },
    ]);
  }, []);

  return (
    <>
      <NavbarFolder />

      <div className="master-page">
        <div className="master-container">
          <h2 className="master-title">Master List</h2>
          <p className="master-subtitle">
            Manage all system master configurations
          </p>

          <div className="table-wrapper">
            <table className="master-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Master Name</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {list.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <span
                        className={`status ${
                          item.status === "Active" ? "active" : "inactive"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>{item.updated}</td>
                    <td>
                      <button className="view-btn">View</button>
                      <button className="edit-btn">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MasterListFolder;
