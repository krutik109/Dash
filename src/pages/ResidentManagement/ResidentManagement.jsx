import React, { useState } from "react";
import "./ResidentManagement.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { Tab, Table } from "react-bootstrap";

const ResidentManagement = () => {
  const [residents, setResidents] = useState([
    {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: " 1001",
      unitStatus: "Occupied",
      residentStatus: "Tenant",
      phoneNumber: "97587 85828",
      members: 1,
      vehicles: 2,
    },
    {
      name: "-",
      wing: "B",
      unitNumber: " 1002",
      unitStatus: "Vacate",
      residentStatus: "Owner",
      phoneNumber: "--",
      members: "-",
      vehicles: "-",
    },
    {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: " 1001",
      unitStatus: "Occupied",
      residentStatus: "Tenant",
      phoneNumber: "97587 85828",
      members: 1,
      vehicles: 2,
    },
    {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: " 1001",
      unitStatus: "Occupied",
      residentStatus: "Tenant",
      phoneNumber: "97587 85828",
      members: 1,
      vehicles: 2,
    },
    {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: " 1001",
      unitStatus: "Occupied",
      residentStatus: "Tenant",
      phoneNumber: "97587 85828",
      members: 1,
      vehicles: 2,
    },
    {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: " 1001",
      unitStatus: "Occupied",
      residentStatus: "Tenant",
      phoneNumber: "97587 85828",
      members: 1,
      vehicles: 2,
    },
    {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: " 1001",
      unitStatus: "Occupied",
      residentStatus: "Tenant",
      phoneNumber: "97587 85828",
      members: 1,
      vehicles: 2,
    },
  ]);


  const [showAddResidentModal, setShowAddResidentModal] = useState(false);
const handleShowAddResidentModal = () => setShowAddResidentModal(true);
const handleCloseAddResidentModal = () => setShowAddResidentModal(false);
  const navigate = useNavigate();
  const handleSaveChanges = () => {
    navigate("/addresidents");
  };
  const [status, setStatus] = useState("Occupied");
  const [agreement, setAgreement] = useState(false);

  return (
    <div
      className="container-fluid rounded "
      style={{ height: "100vh", backgroundColor: " rgba(240, 245, 251, 1) ", border: "none" }}
    >
      <div className=" ">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>Resident Tenant and Owner Details</h4>
          {/* Button to open modal */}
          <button
            style={{
              width: "294px",
              height: "49px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "10px",
              color: "white",
              fontStyle: "poppins",
            }}
            className="btn mainColor2 mt-3"
            onClick={handleShowAddResidentModal}
            data-toggle="modal"
           
          >
            <FaPlus /> Add New Resident Details
          </button>
        </div>
        {/* <table style={{textTransform:"lowercase"}} className="custom-table   ">
        <thead>
          <tr className=''>
            <th className=''>Full Name</th>
            <th>Unit Number</th>
            <th>Unit Status</th>
            <th>Resident Status</th>
            <th>Phone Number</th>
            <th>Members</th>
            <th>Vehicle</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident, index)  => (
            <tr className='' key={index}>
              <td>{resident.name}</td>
              <td><span style={{color: "rgba(86, 120, 233, 1);"}} className='bg-secondary '>{resident.wing}</span> <span className='wing'>{resident.unitNumber}</span></td>
              <td>
                <span className={resident.unitStatus === "Occupied" ? "badge occupied" : "badge vacate"}>
                  {resident.unitStatus}
                </span>
              </td>
              <td>
                <span className={resident.residentStatus === "Tenant" ? "badge tenant" : "badge owner"}>
                  {resident.residentStatus}
                </span>
              </td>
              <td>{resident.phoneNumber}</td>
              <td>{resident.members}</td>
              <td>{resident.vehicles}</td>
              <td>
                <button className="btn edit-btn"><FaRegEdit   />
                </button>
                <button className="btn view-btn "><GrView   /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
        <div className="  ">
          <Table className="  table  ">
            <thead className="">
              <tr
                style={{
                  color: "rgba(79, 79, 79, 1) ",
                  fontStyle: "poppins",
                  fontWeight: "500",
                }}
              >
                <th>Full Name</th>
                <th>Unit Number</th>
                <th>Unit Status</th>
                <th>Resident Status</th>
                <th>Phone Number</th>
                <th>Members</th>
                <th>Vehicle</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody  className="">
              {residents.map((resident, index) => (
                <tr className=" " key={index}>
                  <td
                    className=""
                    style={{
                      padding:"0.9rem",
                      color: "rgba(79, 79, 79, 1) ",
                      fontStyle: "poppins",
                      fontWeight: "500",
                    }}
                  >
                    <img src="src\Images\Profileimg.png" alt="" />
                    {resident.name}
                  </td>
                  <td className="">
                    <div className="d-flex">
                      <div>
                        <p
                          style={{
                            height: "",
                            textAlign: "center",
                            borderRadius: "10px",
                            width: "25px",
                            backgroundColor: " #eef1fd",
                          }}
                          className="text-primary fw-bold"
                        >
                          {resident.wing}
                        </p>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "rgba(79, 79, 79, 1) ",
                            fontStyle: "poppins",
                            fontWeight: "500",
                          }}
                        >
                          {resident.unitNumber}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="">
                    <span
                      className={`badge ${
                        resident.unitStatus === "Occupied" ? "occupied" : " "
                      }  ${resident.unitStatus === "Vacate" ? "vacate " : ""}`}
                    >
                      {resident.unitStatus === "Occupied" && (
                        <img
                          src="src/Images/buildings-2.png"
                          alt="Occupied Building"
                        />
                      )}
                      {resident.unitStatus === "Vacate" && (
                        <img src="src/Images/building-4.png" alt="" />
                      )}
                      {resident.unitStatus}
                    </span>
                  </td>
                  <td className="">
                    <span
                      className={`badge ${
                        resident.residentStatus === "Tenant" ? "tenant" : ""
                      }  
                      ${resident.residentStatus === "Owner" ? "owner" : ""}  `}
                    >
                      {resident.residentStatus === "Tenant" && (
                        <img
                          src="src/Images/user.png"
                          alt="Occupied Building"
                        />
                      )}
                      {resident.residentStatus === "Owner" && (
                        <img
                          src="src/Images/tag-user.png"
                          alt="Occupied Building"
                        />
                      )}
                      <img src="src\Images\buildings-4.png" alt="" />{" "}
                      {resident.residentStatus}
                    </span>
                  </td>
                  <td
                    style={{
                      color: "rgba(79, 79, 79, 1) ",
                      fontStyle: "poppins",
                      fontWeight: "500",
                    }}
                  >
                    {resident.phoneNumber}
                  </td>
                  <td>{resident.members}</td>
                  <td>{resident.vehicles}</td>
                  <td>
                    <button
                      style={{ color: "rgba(57, 151, 61, 1)" }}
                      className="btn  btn-sm "
                    >
                      <p
                        style={{
                          height: "",
                          textAlign: "center",
                          borderRadius: "10px",
                          width: "25px",
                          backgroundColor: " #eef1fd",
                        }}
                      >
                        {" "}
                        <img src="src\Images\edit.png" alt="" />
                      </p>
                    </button>
                    <button
                      style={{ color: "rgba(86, 120, 233, 1)" }}
                      className="btn  btn-sm "
                    >
                      <p
                        style={{
                          height: "",
                          textAlign: "center",
                          borderRadius: "10px",
                          width: "25px",
                          backgroundColor: " #eef1fd",
                        }}
                      >
                        {" "}
                        <img src="src\Images\view.png" alt="" />
                      </p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      {/* Bootstrap Modal */}
   {showAddResidentModal && (
    <>
      <div
        className="modal-backdrop show"
      
       
      >
      </div>

      <div
  className="modal-backdrop d-flex align-items-center justify-content-center"
  id="residentModal"
  style={{
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  }}
>
  <div
    className="modal-content p-3"
    style={{
      maxWidth: "380px",
      width: "100%",
      borderRadius: "12px",
      backgroundColor: "#fff",
    }}
  >
    <div className="modal-header border-0">
      <h5 className="modal-title mx-2 mb-4" id="residentModalTitle">
        Residence Status
      </h5>
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={() => setShowAddResidentModal(false)}
        style={{
          border: "none",
          background: "none",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        &times;
      </button>
    </div>
    <div className="modal-body">
      <form>
        <div className="radio-group d-flex justify-content-evenly gap-2 mb-3">
          <button
          
            style={{
              width: "176px",
              height: "41px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `2px solid ${
                status === "Occupied" ? "#F09619" : "#ddd"
              }`,
              borderRadius: "8px",
              fontWeight: "600",
              backgroundColor: status === "Occupied" ? "#FDF3E7" : "#fff",
              color: "#000",
            }}
            className={status === "Occupied" ? "selected" : ""}
            onClick={(e) => {
              e.preventDefault();
              setStatus("Occupied");
            }}
          >
            <input
              type="radio"
              name="status"
              value="Occupied"
              checked={status === "Occupied"}
              onChange={(e) => setStatus(e.target.value)}
            />
            <span>Occupied</span>
          </button>

          <button
            style={{
              width: "176px",
              height: "41px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `2px solid ${
                status === "Vacate" ? "#F09619" : "#ddd"
              }`,
              borderRadius: "8px",
              fontWeight: "600",
              backgroundColor: status === "Vacate" ? "#FDF3E7" : "#fff",
            }}
            className={status === "Vacate" ? "selected" : ""}
            onClick={(e) => {
              e.preventDefault();
              setStatus("Vacate");
            }}
          >
            <input
              type="radio"
              name="status"
              value="Vacate"
              checked={status === "Vacate"}
              onChange={(e) => setStatus(e.target.value)}
            />
            <span>Vacate</span>
          </button>
        </div>

        <div className="agreement-section d-flex align-items-center mb-3">
          <input
            type="checkbox"
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
            style={{
              accentColor: "#F09619",
              marginRight: "8px",
              width: "18px",
              height: "18px",
            }}
          />
          <span style={{ fontWeight: "500", color: "#555" }}>
            By submitting, you agree to select {status}
          </span>
        </div>
      </form>
    </div>
    <div className="modal-footer d-flex justify-content-evenly border-0">
      <button
        onClick={() => setShowAddResidentModal(false)}
        style={{
          fontWeight: "600",
          fontSize: "18px",
          width: "165px",
          height: "51px",
          borderRadius: "10px",
          border: "2px solid #ddd",
          backgroundColor: "#fff",
          color: "#000",
        }}
        type="button"
      >
        Cancel
      </button>
      <button className="mainColor2"
        type="button"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          width: "165px",
          height: "51px",
          borderRadius: "10px",
          backgroundColor: "linear-gradient(to right, #f96c3a, #f39c12)",
          color: "#fff",
          border: "none",
        }}
        onClick={handleSaveChanges}
      >
        Save
      </button>
    </div>
  </div>
</div>

        </> 
)}
    </div>
  );
};

export default ResidentManagement;
