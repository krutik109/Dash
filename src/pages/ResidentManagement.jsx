import React, { useState } from "react";
import "./ResidentManagement.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ResidentDetailsTable = () => {
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
  ]);

  const [status, setStatus] = useState("Occupied");
  const [agreement, setAgreement] = useState(false);

  return (
    <div
      className="container-fluid rounded "
      style={{ backgroundColor: " #f5f5f5 " }}
    >
      <div className=" bg- p-2 ">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>Resident Tenant and Owner Details</h4>
          {/* Button to open modal */}
          <Button
            className=""
            onClick={() => setAgreement(false)}
            data-toggle="modal"
            data-target="#residentModal"
          >
            Add New Resident Details
          </Button>
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
        <div className="table-responsive rounded">
          <table className="table  table-hover align-middle ">
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
            <tbody>
              {residents.map((resident, index) => (
                <tr className="bg-white" key={index}>
                  <td
                    style={{
                      color: "rgba(79, 79, 79, 1) ",
                      fontStyle: "poppins",
                      fontWeight: "500",
                    }}
                  >
                    <img src="src\Images\Profileimg.png" alt="" />{" "}
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
                      ${
                        resident.residentStatus === "Owner" ? "owner" : ""
                      }  `}
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
          </table>
        </div>
      </div>
      {/* Bootstrap Modal */}
      <div
        className="modal "
        id="residentModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="residentModalTitle"
        aria-hidden="true"
        data-backdrop="false"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "380px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="residentModalTitle">
                Residence Status
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true ">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="radio-group d-flex justify-content-evenly gap-2">
                  <button
                    style={{ border: "2px solid rgba(240, 150, 25, 1)" }}
                    className={`col-4 rounded ${
                      status === "Occupied" ? "selected" : ""
                    }`}
                    onClick={() => setStatus("Occupied")}
                  >
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="status"
                        value="Occupied"
                        checked={status === "Occupied"}
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      <span className="">Occupied</span>
                    </label>
                  </button>

                  <button
                    style={{ border: "2px solid rgba(240, 150, 25, 1)" }}
                    className={`col-4 rounded ${
                      status === "Vacate" ? "selected" : ""
                    }`}
                    onClick={() => setStatus("Vacate")}
                  >
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="status"
                        value="Vacate"
                        checked={status === "Vacate"}
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      <span>Vacate</span>
                    </label>
                  </button>
                </div>

                <div className="agreement-section">
                  <label className="agreement-checkbox">
                    <input
                      type="checkbox"
                      checked={agreement}
                      onChange={(e) => setAgreement(e.target.checked)}
                    />
                    <span className="">
                      {" "}
                      By submitting, you agree to select {status}
                    </span>
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-evenly ">
              <button
                type="button"
                className="btn btn-secondary col-4"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <Link to={"/addresidents"}>
                {" "}
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!agreement}
                >
                  Save changes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentDetailsTable;
