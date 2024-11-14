import React, { useState } from "react";
import { FaEllipsisV, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";

const OtherIncome = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const [showAddModal, setShowAddModal] = useState(false);
  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);    
  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const [showViewModal, setShowViewModal] = useState(false);
  const handleShowViewModal = () => setShowViewModal(true);
  const handleCloseViewModal = () => setShowViewModal(false);

const MaintenanceDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;}

  const styles1 = {
    card: {
      width: "300px",
      padding: "16px",
      borderRadius: "8px",
      backgroundColor: "#F5F9FF",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      position: "relative",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#4A90E2",
      borderRadius: "8px 8px 0 0",
      padding: "8px 12px",
      color: "#ffffff",
    },
    title: {
      margin: 0,
      fontSize: "16px",
    },
    menuIcon: {
      cursor: "pointer",
    },
    dropdownMenu: {
      position: "absolute",
      top: "50px",
      right: "16px",
      backgroundColor: "#ffffff",
      borderRadius: "4px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      zIndex: 1,
    },
    dropdownItem: {
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "14px",
      color: "#333333",
      borderBottom: "1px solid #f0f0f0",
    },
    content: {
      padding: "12px",
      fontSize: "14px",
      color: "#333",
    },
  };
  
const styles2 = {
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    },
    userImage: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    userName: {
      fontSize: '16px',
      fontWeight: 'bold',
      margin: 0,
    },
    userDate: {
      fontSize: '14px',
      color: '#888',
      margin: 0,
    },
    detailsRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      paddingTop: '5px',
    },
    detailItem: {
      textAlign: 'center',
    },
    detailValue: {
      fontWeight: 'bold',
    },
    statusBadge: {
      padding: '2px 6px',
      backgroundColor: '#E0F0FF',
      color: '#007BFF',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 'bold',
    },
    pendingBadge: {
      padding: '2px 6px',
      backgroundColor: '#FFF3CD',
      color: '#856404',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 'bold',
    },
    paymentBadge: {
      padding: '2px 6px',
      backgroundColor: '#F1F8E9',
      color: '#388E3C',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 'bold',
    },
  };
  return (
    <div>
      <Link to={"/financialManagement"}>
        {" "}
        <button className=" hovermaincolor rounded-top border-bottom border-danger btn btn">
          <span style={{ color: "black", fontSize: "16px" }}>
            {" "}
            Maintanance{" "}
          </span>
        </button>
      </Link>
      <Link to="/otherincome">
        <button className=" hovermaincolor rounded-top  btn  border-bottom border-danger">
          <span style={{ color: "black", fontSize: "16px" }}>
            {" "}
            Other Income{" "}
          </span>
        </button>
      </Link>

      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>Other Income</h4>
          {/* Button to open modal */}
          <button className="btn mainColor2" onClick={handleShowAddModal}>
            Create Other Income
          </button>
        </div>
      </div>
      {/* card component 1 */}
      <div className="d-flex gap-3 align-items-center mb-4">

      <div style={styles1.card}>
        <div style={styles1.header}>
          <h3 style={styles1.title}>Ganesh Chaturthi</h3>
          <div style={styles1.menuIcon} onClick={toggleMenu}>
            <FaEllipsisV />
          </div>
          {showMenu && (
            <div style={styles1.dropdownMenu}>
              <div style={styles1.dropdownItem}>  <button className="btn  " onClick={handleShowEditModal}>
            Edit
          </button></div>
              <div style={styles1.dropdownItem}> <button className="btn " onClick={handleShowViewModal}>
            View
          </button> </div>
              <div style={styles1.dropdownItem}><button className="btn " onClick={handleShowDeleteModal}>
            Delete
          </button></div>
            </div>
          )}
        </div>
        <div style={styles1.content}>
          <p>
            <strong>Amount Per Member:</strong> $100
          </p>
          <p>
            <strong>Total Member:</strong> 50
          </p>
          <p>
            <strong>Date:</strong> 01/07/2024
          </p>
          <p>
            <strong>Due Date:</strong> 10/07/2024
          </p>
          <p>
            <strong>Description:</strong> The celebration of Ganesh Chaturthi
            involves the installation of clay idols of Ganesha in.
          </p>
        </div>
      </div>

      {/* card component 2 */}
      <div style={styles1.card}>
        <div style={styles1.header}>
          <h3 style={styles1.title}>Ganesh Chaturthi</h3>
          <div style={styles1.menuIcon} onClick={toggleMenu}>
            <FaEllipsisV />
          </div>
          {showMenu && (
            <div style={styles1.dropdownMenu}>
              <div style={styles1.dropdownItem}>  <button className="btn " onClick={handleShowEditModal}>
            Edit
          </button></div>
              <div style={styles1.dropdownItem}> <button className="btn " onClick={handleShowViewModal}>
            View
          </button> </div>
              <div style={styles1.dropdownItem}><button className="btn " onClick={handleShowDeleteModal}>
            Delete
          </button></div>
            </div>
          )}
        </div>
        <div style={styles1.content}>
          <p>
            <strong>Amount Per Member:</strong> $100
          </p>
          <p>
            <strong>Total Member:</strong> 50
          </p>
          <p>
            <strong>Date:</strong> 01/07/2024
          </p>
          <p>
            <strong>Due Date:</strong> 10/07/2024
          </p>
          <p>
            <strong>Description:</strong> The celebration of Ganesh Chaturthi
            involves the installation of clay idols of Ganesha in.
          </p>
        </div>
      </div>


      
      </div>



      {/* Add Modal */}
      {showAddModal && (
        <>
          <div className="modal-backdrop show "></div>
          <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div
                className="modal-content"
                style={{
                  width: "410px",
                  height: "558px",
                  marginTop: "200px",
                  left: "30px",
                }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">Create Other Income</h5>
                </div>
                <div className="modal-body">
                  <form action=""     >
                    <div className="d-flex justify-content-between mt-2">
                      <div>
                        <label htmlFor="">
                          Title <span style={{ color: "red" }}>*</span>
                        </label>

                        <input
                          type="text"
                          className="form-control "
                          required
                          style={{ width: "370px" }}
                          placeholder="Enter Title"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <div>
                        <label htmlFor="">
                          Date <span style={{ color: "red" }}>*</span>
                        </label>

                        <input
                          type="date"
                          className="form-control "
                          required
                          style={{ width: "173px" }}
                          placeholder="Select Date"
                        />
                      </div>

                      <div>
                        <label htmlFor="">
                          Due Date <span style={{ color: "red" }}>*</span>
                        </label>

                        <input
                          type="date"
                          className="form-control "
                          required
                          style={{ width: "173px" }}
                          placeholder="Select Date"
                        />
                      </div>
                    </div>
                    <div className="mb-2 mt-2 ">
                      <label className="form-label">Discription</label>
                      <div className="d-flex">
                        <input
                          type="textarea"
                          style={{ height: "60px" }}
                          placeholder="Enter Discription"
                          className="form-control"
                          required
                        />
                      </div>

                      <div>
                        <label className="form-label mt-4">
                          Amount<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="d-flex">
                          <MdOutlineCurrencyRupee
                            style={{
                              fontSize: "20px",
                              marginTop: "6px",
                              marginRight: "5px",
                            }}
                          />
                          <input
                            type="text"
                            className="form-control col-12"
                            placeholder="0000"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn border"
                        style={{ width: "165px" }}
                        onClick={handleCloseAddModal}
                      >
                        <h5 style={{ fontSize: "18px" }}>Cancel</h5>
                      </button>
                      <button
                        style={{
                          width: "165px",
                          backgroundColor: "rgba(246, 248, 251, 1)",
                        }}
                        className="btn border"
                        onClick={handleCloseAddModal}
                      >
                        <h5 style={{ fontSize: "18px" }}>Save</h5>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

{/* Edit Modal */}
{showEditModal && (
        <>
          <div className="modal-backdrop show "></div>
          <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div
                className="modal-content"
                style={{
                  width: "410px",
                  height: "468px",
                  marginTop: "200px",
                  left: "30px",
                }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">Edit</h5>
                </div>
                <div className="modal-body">
                  <form action=""     >
                    <div className="d-flex justify-content-between mt-2">
                      <div>
                        <label htmlFor="">
                          amount <span style={{ color: "red" }}>*</span>
                        </label>

                        <input
                          type="text"
                          className="form-control "
                          required
                          style={{ width: "370px" }}
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <div>
                        <label htmlFor="">
                          Date <span style={{ color: "red" }}>*</span>
                        </label>

                        <input
                          type="date"
                          className="form-control "
                          required
                          style={{ width: "173px" }}
                          placeholder="Select Date"
                        />
                      </div>

                      <div>
                        <label htmlFor="">
                          Due Date <span style={{ color: "red" }}>*</span>
                        </label>

                        <input
                          type="date"
                          className="form-control "
                          required
                          style={{ width: "173px" }}
                          placeholder="Select Date"
                        />
                      </div>
                    </div>
                    <div className="mb-2 mt-2 ">
                      <label className="form-label">Discription</label>
                      <div className="d-flex">
                        <input
                          type="textarea"
                          style={{ height: "60px" }}
                          placeholder="Enter Discription"
                          className="form-control"
                          required
                        />
                      </div>

                      <div>
                        <label className="form-label mt-4">
                          Amount<span style={{ color: "red" }}>*</span>
                        </label>
                       
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn border"
                        style={{ width: "165px" }}
                        onClick={handleCloseEditModal}
                      >
                        <h5 style={{ fontSize: "18px" }}>Cancel</h5>
                      </button>
                      <button
                        style={{
                          width: "165px",
                          backgroundColor: "rgba(246, 248, 251, 1)",
                        }}
                        className="btn border"
                        onClick={handleCloseEditModal}
                      >
                        <h5 style={{ fontSize: "18px" }}>Save</h5>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

{/* Delete Modal */}

{showDeleteModal && (
        <>
          <div className="modal-backdrop show "></div>
          <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div
                className="modal-content"
                style={{
                  width: "410px",
                  height: "200px",
                  marginTop: "300px",
                  left: "30px",
                }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">Delete</h5>
                </div>
                <div className="modal-body">
                  <p>   Are you sure you want to delete this?</p>
                  <form action=""     >
               
                    <div className="modal-footer d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn border"
                        style={{ width: "165px" }}
                        onClick={handleCloseDeleteModal}
                      >
                        <h5 style={{ fontSize: "18px" }}>Cancel</h5>
                      </button>
                      <button
                        style={{
                          width: "165px",
                          backgroundColor: "rgba(246, 248, 251, 1)",
                        }}
                        className="btn mainColor2 border "
                        onClick={handleCloseEditModal}
                      >
                        <h5 style={{ fontSize: "18px" }}>Delete</h5>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
{/* view Modal */}
{showViewModal && (
        <>
          <div className="modal-backdrop show "></div>
          <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{
              width: '410px',
              padding: '20px',
              marginTop: '200px',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="modal-header">
              <h5 className="modal-title" style={{ fontWeight: '600' }}>View Maintenance Details</h5>
              <button type="button" className="btn-close" onClick={handleCloseViewModal} aria-label="Close" />
            </div>
            <div className="modal-body">
              <div style={styles2.userInfo}>
                <img
                  src="src\Images\Profileimg.png    " // Placeholder image
                  alt="User"
                  style={styles2.userImage}
                />
                <div>
                  <h6 style={styles2.userName}>Cody Fisher</h6>
                  <p style={styles2.userDate}>Feb 10, 2024</p>
                </div>
              </div>
              <div style={styles2.detailsRow}>
                <div style={styles2.detailItem}>
                  <span>Wing</span><br />
                  <span style={styles2.detailValue}>A</span>
                </div>
                <div style={styles2.detailItem}>
                  <span>Unit</span><br />
                  <span style={styles2.detailValue}>1001</span>
                </div>
                <div style={styles2.detailItem}>
                  <span>Status</span><br />
                  <span style={styles2.statusBadge}>Owner</span>
                </div>
                <div style={styles2.detailItem}>
                  <span>Amount</span><br /> 
                  <span style={{ color: 'green', fontWeight: 'bold' }}>₹ 1000</span>
                </div>
              </div>
              <div style={styles2.detailsRow}>
                <div style={styles2.detailItem}>
                  <span>Penalty</span><br />
                  <span>--</span>
                </div>
                <div style={styles2.detailItem}>
                  <span>Status</span><br />
                  <span style={styles2.pendingBadge}>Pending</span>
                </div>
                <div style={styles2.detailItem}>
                  <span>Payment</span><br />
                  <span style={styles2.paymentBadge}>Cash</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
      )}

    </div>
  );
};

export default OtherIncome;
