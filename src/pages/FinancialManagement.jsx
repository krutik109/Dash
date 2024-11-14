import React, { useState } from "react";
import "./FinancialManagement.css";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";

const FinancialManagement = () => {
  const [residents, setResidents] = useState([
    {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: "1001",
      date: "2022/01/01",
      Status: "Tenant",
      PhoneNumber: "9876549876",
      Amount: "1000",
      Penalty: "250",
      status: "Pending",
      Payment: "Online",
    },
    {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: "1001",
      date: "2022/01/01",
      Status: "Owner",
      PhoneNumber: "9876549876",
      Amount: "1000",
      Penalty: "--",
      status: "Done",
      Payment: "Cash",
    },
    {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: "1001",
      date: "2022/01/01",
      Status: "Tenant",
      PhoneNumber: "9876549876",
      Amount: "1000",
      Penalty: "250",
      status: "Pending",
      Payment: "Online",
    }, {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: "1001",
      date: "2022/01/01",
      Status: "Tenant",
      PhoneNumber: "9876549876",
      Amount: "1000",
      Penalty: "250",
      status: "Pending",
      Payment: "Online",
    }, {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: "1001",
      date: "2022/01/01",
      Status: "Tenant",
      PhoneNumber: "9876549876",
      Amount: "1000",
      Penalty: "250",
      status: "Pending",
      Payment: "Online",
    }, {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: "1001",
      date: "2022/01/01",
      Status: "Tenant",
      PhoneNumber: "9876549876",
      Amount: "1000",
      Penalty: "250",
      status: "Pending",
      Payment: "Online",
    }, {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: "1001",
      date: "2022/01/01",
      Status: "Tenant",
      PhoneNumber: "9876549876",
      Amount: "1000",
      Penalty: "250",
      status: "Pending",
      Payment: "Online",
    }, {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: "1001",
      date: "2022/01/01",
      Status: "Tenant",
      PhoneNumber: "9876549876",
      Amount: "1000",
      Penalty: "250",
      status: "Pending",
      Payment: "Online",
    },
    {
      name: "Evelyn Harper",
      wing: "A",
      unitNumber: "1001",
      date: "2022/01/01",
      Status: "Tenant",
      PhoneNumber: "9876549876",
      Amount: "1000",
      Penalty: "250",
      status: "Pending",
      Payment: "Online",
    },
  ]);

  const [status, setStatus] = useState("Occupied");
  const [agreement, setAgreement] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const [showAddmaintananceModal, setShowAddMaintananceModal] = useState(false);
  const handleshowAddmaintananceModal = () => setShowAddMaintananceModal(true);
  const handleCloseAddmaintananceModal = () =>
    setShowAddMaintananceModal(false);

  const containerStyle = {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#fff',
  };

  const cardStyle = {
    width: '236px',
    height: '105px',
    borderRadius: '8px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const greenCard = {
    ...cardStyle,
    borderLeft: '5px solid green',
  };

  const redCard = {
    ...cardStyle,
    borderLeft: '5px solid red',
  };

  const amountStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const greenAmount = { ...amountStyle, color: 'green' };
  const redAmount = { ...amountStyle, color: 'red' };

 

  return (
    <>
       <div style={containerStyle} className="d-flex justify-content-between">
        <div className="d-flex">

      <div className="" style={greenCard}>
        <span >Maintenance Amount</span>
        <span className="me-5" style={greenAmount}>₹ 0</span>
      </div>
      <div style={redCard}>
        <span>Penalty Amount</span>
        <span style={redAmount}>₹ 0</span>
      </div>
        </div>
      <button style={{
              width: "200px",
              height: "50px",
              fontSize: "16px",
              fontStyle: "poppins",
              fontWeight: "500",
              borderRadius: "10px",
            }} className="btn  mainColor2 mt-4" onClick={handleShowAddModal}>
              Set Maintanance
            </button>
    </div>
      <div className="buttons d-flex">
        <Link to={"/financialmanagement"}>
          {" "}
          <button className="maintnanancebtn hovermaincolor rounded-top  bg-white  border-bottom border-danger btn ">
            <span style={{ color: "black", fontSize: "16px" }}>
              {" "}
              Maintanance{" "}
            </span>
          </button>
        </Link>
        <Link to="/otherincome">
          <button className=" otherincomebtn  hovermaincolor rounded-top bg-white  btn  border-bottom border-danger">
            <span style={{ color: "black", fontSize: "16px" }}>
              {" "}
              Other Income{" "}
            </span>
          </button>
        </Link>
      </div>
      <div
        className="container-fluid  rounded "
        style={{ backgroundColor: " rgba(240, 245, 251, 1) ", border: "none" }}
      >
        <div className=" p-2 ">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>Maintanance Details</h4>
            {/* Button to open modal */}
           
          </div>
          <div className="table-responsive">
            <table className="custom-table">
              <thead className=" ">
                <tr style={{}}>
                  <th>Name</th>
                  <th>Unit Number</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Phone Number</th>
                  <th>Amount</th>
                  <th>Penalty</th>
                  <th>Status</th>
                  <th>Payment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {residents.map((resident, index) => (
                  <tr
                    style={{
                      fontStyle: "poppins",
                      fontWeight: "500",
                    }}
                    key={index}
                  >
                    <td>
                      <img src="src/Images/Profileimg.png" alt="" />{" "}
                      {resident.name}
                    </td>
                    <td className="">
                      <div className="d-flex">
                        <div>
                          <p
                            style={{
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
                    <td className="">{resident.date}</td>
                    <td className="">
                      <span
                        className={`badge ${
                          resident.Status === "Tenant" ? "tenant" : ""
                        }  
${resident.Status === "Owner" ? "owner" : ""}  `}
                      >
                        {resident.Status === "Tenant" && (
                          <img
                            src="src/Images/user.png"
                            alt="Occupied Building"
                          />
                        )}
                        {resident.Status === "Owner" && (
                          <img
                            src="src/Images/tag-user.png"
                            alt="Occupied Building"
                          />
                        )}
                        <img src="src\Images\buildings-4.png" alt="" />{" "}
                        {resident.Status}
                      </span>
                    </td>
                    <td>
                      <p
                        style={{ color: "rgba(79, 79, 79, 1)" }}
                        className="mt-1"
                      >
                        {resident.PhoneNumber}
                      </p>
                    </td>
                    <td>
                      <span className="text-success">${resident.Amount}</span>
                    </td>
                    <td>
                      <p
                        style={{
                          backgroundColor: "rgba(231, 76, 60, 1)",
                          color: "white",
                          width: "50px",
                          textAlign: "center",
                          borderRadius: "10px",
                        }}
                        className=""
                      >
                        {resident.Penalty}{" "}
                      </p>
                    </td>

                    <td className="">
                      <span style={{borderRadius: "58px"}}
                        className={`badge ${
                          resident.status === "Pending" ? "pending " : ""
                        }  
                      ${resident.status === "Done" ? "done" : ""}  `}
                      >
                        {resident.status === "Pending" && (
                          <img
                            src="src/Images/timer.png"
                            alt="Occupied Building"
                          />
                        )}
                        {resident.status === "Done" && (
                          <img
                            src="src/Images/verify.png"
                            alt="Occupied Building"
                          />
                        )}
                        <img src="src\Images\buildings-4.png" alt="" />{" "}
                        {resident.status}
                      </span>
                    </td>
                    <td>
                      <span style={{borderRadius: "58px"}}
                        className={`badge ${
                          resident.Payment === "Online" ? "online" : ""
                        }  
${resident.Payment === "Cash" ? "cash" : ""}  `}
                      >
                        {resident.Payment === "Online" && (
                          <img
                            src="src/Images/wallet-2.png"
                            alt="Occupied Building"
                          />
                        )}
                        {resident.Payment === "Cash" && (
                          <img
                            src="src/Images/moneys.png"
                            alt="Occupied Building"
                          />
                        )}
                        <img src="src\Images\buildings-4.png" alt="" />{" "}
                        {resident.Payment}
                      </span>
                    </td>
                    <td>
                      <button
                        className="button"
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        <img src="src/Images/view.png" alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bootstrap Modal */}
          {/* <div className="modal " id="residentModal" tabIndex="-1" role="dialog" aria-labelledby="residentModalTitle" aria-hidden="true" data-backdrop="false" style={{backgroundColor:"rgba(0, 0, 0, 0.5)" }}>
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "380px" }} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="residentModalTitle"> Maintanance Status</h5>
            
            </div>
            <div className="modal-body">
              <form>
                <label htmlFor="">Password</label>
              
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-evenly ">
              <button type="button" className="btn btn-secondary col-4" data-dismiss="modal" >Cancel</button>
             <Link to={"/"}> <button type="button" className="btn btn-primary"  disabled={!agreement}>Save changes</button></Link> 
            </div>
          </div>
        </div>
      </div> */}
          {/* SET MAINTANANCE  Modal */}
          {showAddModal && (
            <>
              <div className=" modal-backdrop show modal-dialog-centered"></div>
              <div
                className=" modal d-block  "
                aria-hidden="true"
                tabIndex="-1"
              >
                <div className="modal-dialog ">
                  <div
                    className="modal-content"
                    style={{
                      width: "430px",
                      height: "251px",
                      marginTop: "230px",
                      left: "25px",
                    }}
                  >
                    <div className="">
                      <h5 className="mt-2 mx-3 modal-title border-bottom">
                        Set Maintanance{" "}
                      </h5>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-2">
                          <label className="form-label">
                            Password<span className="text-danger">*</span>
                          </label>
                          <div className="d-flex ">
                            <input
                              style={{
                                borderRadius: "10px",
                                border: "1px solid rgba(32, 34, 36, 1)",
                              }}
                              type="password"
                              placeholder="********"
                              className="form-control"
                              required
                            />
                            <FaRegEyeSlash
                              style={{ fontSize: "20px" }}
                              className="mt-2 ms-2"
                            />
                          </div>
                        </div>
                        <div className="model-footer d-flex justify-content-between mt-5">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            style={{
                              width: "175px",
                              fontWeight: "600",
                              fontSize: "18px",
                            }}
                            onClick={handleCloseAddModal}
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              handleCloseAddModal(); // Closes the current modal
                              handleshowAddmaintananceModal(); // Opens the maintenance modal
                            }}
                            type="button"
                            className="btn mainColor2"
                            style={{
                              width: "175px",
                              fontWeight: "600",
                              fontSize: "18px",
                            }}
                          >
                            Continue
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* add maintanance deateils modal  */}
          {showAddmaintananceModal && (
            <>
              <div className="modal-backdrop show "></div>
              <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                  <div
                    className="modal-content"
                    style={{
                      width: "410px",
                      height: "447px",
                      marginTop: "200px",
                      left: "30px",
                    }}
                  >
                    <div className="modal-header">
                      <h5 className="modal-title">Add Maintanance Details </h5>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="d-flex justify-content-between mt-2">
                          <div>
                            <label htmlFor="">Maintanance Amount</label>
                            <div className="d-flex">
                              <input
                                type="text"
                                className="form-control col-10"
                                placeholder="₹
 0000"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="">Penalty Amount</label>
                            <div className="d-flex">
                              <input
                                type="text"
                                className="form-control col-10"
                                placeholder="₹ 0000"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-2 mt-2 ">
                          <label className="form-label">
                            Maintanance Due Date
                          </label>
                          <div className="d-flex">
                            <input
                              type="date"
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="mt-4">
                            <label className="form-label">
                              Penalty Applied After Day Selection
                            </label>
                            <div className="dropdown">
                              <button
                                style={{ color: "rgba(167, 167, 167, 1)" }}
                                className="btn  btn col-12 dropdown-toggle text-dark border"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Select Panalty Applied After Day Selection
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <Link className="dropdown-item" href="//">
                                  4 Days
                                </Link>
                                <Link className="dropdown-item" href="//">
                                  5 Days
                                </Link>
                                <Link className="dropdown-item" href="//">
                                  6
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            style={{
                              width: "175px",
                              fontWeight: "600",
                              fontSize: "18px",
                            }}
                            onClick={handleCloseAddmaintananceModal}
                          >
                            Cancel
                          </button>
                          <button
                            style={{
                              width: "175px",
                              fontWeight: "600",
                              fontSize: "18px",
                            }}
                            className="btn mainColor2"
                            onClick={handleCloseAddmaintananceModal}
                          >
                            Apply
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FinancialManagement;
