import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { FaCamera, FaClock, FaEdit, FaEye, FaFemale, FaImage, FaMale, FaMoon, FaPlus, FaSun, FaTrash, FaUpload } from 'react-icons/fa';
import { LuImagePlus } from 'react-icons/lu';

export default function SecurityGaurd() {
  const [guards, setGuards] = useState([
    { id: 1, name: 'Brooklyn Simmons ', phone: '94564 96321', shift: 'Day', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
    { id: 2, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Day', date: '2024-11-28', time: '2:45 PM', gender: 'Female' },
    { id: 3, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
    { id: 4, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Day', date: '2024-11-28', time: '2:45 PM', gender: 'Female' },
    { id: 5, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
    { id: 6, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
    { id: 7, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
    { id: 8, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
    { id: 9, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
    { id: 10, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
    { id: 11, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
    { id: 12, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
    { id: 13, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
    { id: 14, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-11-28', time: '2:45 PM', gender: 'Male' },
  ]);

  // Function to add a new guard (for demo)


  // Function to handle button click and show how useEffect might be used
  useEffect(() => {
    console.log('Guard list updated', guards);
  }, [guards]);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteGuard, setShowDeleteGuard] = useState(false);
  const [deleteGuardId, setDeleteGuardId] = useState(null);
  const [showViewGuard, setShowViewGuard] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editGuardId, setEditGuardId] = useState(null);
  const [guardData, setGuardData] = useState({ title: "", description: "", date: "", time: "" });
  const [newGuard, setNewGuard] = useState({
    name: '',
    phone: '',
    shift: 'Day',
    date: '',
    time: '',
    gender: '',
    photo: null,
    aadhaar: null,
  });

  const handleShowCreate = () => {
    setIsEdit(false);
    setEditGuardId(null);
    setNewGuard({
      name: '',
      phone: '',
      shift: 'Day',
      date: '',
      time: '',
      gender: '',
      photo: null,
      aadhaar: null,
    });
    setShowModal(true);
  };
  const handleShowEdit = (guard) => {
    setIsEdit(true);
    setEditGuardId(guard.id);
    setNewGuard(guard); // Load selected guard data for editing
    setShowModal(true);
  };
  const handleShowDelete = (guardId) => {
    setDeleteGuardId(guardId);
    setShowDeleteGuard(true);
  };

  const handleShowView = (guard) => {
    setGuardData(guard);
    setShowViewGuard(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setShowViewGuard(false);
    setShowDeleteGuard(false); // Close the delete confirmation modal when handleClose is called

    setDeleteGuardId(null); 
    setIsEdit(false);
    setNewGuard({
      name: '',
      phone: '',
      shift: 'Day',
      date: '',
      time: '',
      gender: '',
      photo: null,
      aadhaar: null,
    });
    setEditGuardId(null);
  };
  const handleDelete = () => {
    setGuards((prevGuards) =>
      prevGuards.filter((guard) => guard.id !== deleteGuardId)
    );
    setDeleteGuardId(null); // Clear the ID of the protocol to delete
    setShowDeleteGuard(false); // Close the delete confirmation modal
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (isEdit && editGuardId) {
      setGuards((prevGuards) =>
        prevGuards.map((guard) =>
          guard.id === editGuardId ? { ...guard, ...newGuard } : guard
        )
      );
    } else {
      const newId = guards.length + 1;
      const newEntry = { id: newId, ...newGuard };
      setGuards((prevGuards) => [...prevGuards, newEntry]);
    }
    handleClose();
  };
  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour24: true });
    setNewGuard({ ...newGuard, time: formattedTime.toUpperCase() });
  };


  const handleAddGuard = () => {
    if (newGuard.name && newGuard.phone && newGuard.shift && newGuard.date && newGuard.time && newGuard.gender) {
      setGuards([...guards, newGuard]); // Add the new guard to the guards array
      setShowModal(false); // Close the modal
    } else {
      alert("Please fill all the fields before adding the guard.");
    }
  };


  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewGuard((prevState) => ({
        ...prevState,
        [field]: {
          file,
          preview: file.type.startsWith('image/') ? reader.result : null,
        },
      }));
    };

    if (file.type.startsWith('image/')) {
      reader.readAsDataURL(file);
    } else {
      setNewGuard((prevState) => ({
        ...prevState,
        [field]: { file, preview: null },
      }));
    }
  };
  return (
    <div style={{ backgroundColor: " rgba(240, 245, 251, 1) ", border: "none" }} className="d-flex flex-column flex-md-row p-2">
      

      <div className="flex-grow-1 p-2">
        <div className="container-fluid bg-white rounded shadow-sm ">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center ">
            <h4 style={{ font: "semibold" }} className="">Security Guard Details</h4>
            <button style={{width:"180px",height:"51px",  borderRadius:"8px",fontSize:"14px" ,fontWeight:"600"}} className="btn gap-2 mt-2 mainColor2 d-flex align-items-center justify-content-center" onClick={() => setShowModal(true)}>
              <img src="src/Images/add-square.png" alt="" /> Add Security
            </button>
          </div>


          <div className=" table-responsive " style={{ height: "750px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px" }}>
            <Table  responsive style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      width: "200px"
                    }}
                  >
                    Security Guard Name
                  </th>

                  <th style={{ fontSize: "15px" }} className='text-center'>Phone Number</th>
                  <th style={{ fontSize: "15px" }} className='text-center'>Select Shift</th>
                  <th style={{ fontSize: "15px" }} className='text-center'>Shift Date</th>
                  <th style={{ fontSize: "15px" }} className='text-center'>Shift Time</th>
                  <th style={{ fontSize: "15px" }} className='text-center'>Gender</th>
                  <th style={{ fontSize: "15px" }} className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {guards.map((guard, index) => (
                  <tr key={index}>
                    <td style={{ verticalAlign: "middle", fontSize: "14px", width: "220px" }}>
                      <div >
                        <img
                          src="src\Images\Profileimg.png"
                          alt="avatar"
                          className="rounded-circle"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "36px",
                            border: "2px solid #F4F4F4",
                          }}
                        />
                        <span
                          style={{
                            fontStyle: "Poppins",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "24px",
                            textAlign: "left",
                            color: "rgba(79, 79, 79, 1)"
                          }}
                        >
                          {guard.name}
                        </span>
                      </div>
                    </td>
                    <td className='text-center' style={{ fontStyle: "Poppins",fontWeight: "500",color: "rgba(79, 79, 79, 1)", fontSize: "16px", verticalAlign: "middle" }}> <span>{guard.phone}</span> </td>
                    <td className='text-center' style={{ verticalAlign: "middle" }}>
                      {guard.shift === 'Day' ? (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "113px",
                            height: "31px",
                            textAlign: "center",
                            fontFamily: "Poppins",
                            borderRadius: "50px",
                            background: "rgba(244, 244, 244, 1)",
                            color: "rgba(255, 147, 0, 1)", // Text and icon color
                            fontSize: "16px", // Optional for font size
                            fontWeight: "500", // Optional for font weight
                          }}
                          role="img"
                          aria-label="Day"
                        >
                          <FaSun style={{ marginRight: "5px" }} />
                          Day
                        </span>
                      ) : (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "Poppins",
                            width: "113px",
                            height: "31px",
                            borderRadius: "50px",
                            background: "rgba(79, 79, 79, 1)",  // Dark background
                            color: "rgba(255, 255, 255, 1)",    // White text and icon color
                            fontSize: "16px",                   // Optional font size
                            fontWeight: "500",                  // Optional font weight
                          }}
                          role="img"
                          aria-label="Night"
                        >
                          <FaMoon style={{ marginRight: "5px" }} />
                          Night
                        </span>
                      )}
                    </td>
                    <td className='text-center' > <span  style={{ fontStyle: "Poppins",fontWeight: "500",color: "rgba(79, 79, 79, 1)", fontSize: "16px", verticalAlign: "middle" }}> {guard.date} </span></td>
                    <td style={{ verticalAlign: "middle" }} className="text-center">
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <div>
                        
                          <span style={{ fontStyle: "Poppins",fontWeight: "500",color: "rgba(79, 79, 79, 1)", fontSize: "16px", verticalAlign: "middle" }} >

                          {guard.time}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='text-center' style={{ verticalAlign: "middle" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "113px",
                          height: "31px",
                          padding: "5px 12px",
                          gap: "5px",
                          borderRadius: "50px",
                          fontFamily: "Poppins",
                          background:
                            guard.gender === "Male" ? "rgba(33, 168, 228, 0.1)" : "rgba(254, 118, 168, 0.1)",
                          color:
                            guard.gender === "Male" ? "rgba(86, 120, 233, 1)" : "rgba(254, 118, 168, 1)",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {guard.gender === "Male" ? <FaMale /> : <FaFemale />}
                        {guard.gender}
                      </span>
                    </td>
                    <td className='text-center' style={{ verticalAlign: "middle" }}>
                      <div className="d-flex align-items-center gap-2 justify-content-center">
                        <FaEdit className="text-success me-2" style={{ cursor: "pointer", fontSize: "18px" }} onClick={() => handleShowEdit(guard)} />
                        <FaEye className="text-primary me-2" style={{ cursor: "pointer" , fontSize: "18px" }} onClick={() => handleShowView(guard)} />
                        <FaTrash className="text-danger" style={{ cursor: "pointer" , fontSize: "18px" }} onClick={() => handleShowDelete(guard.id)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

{/* View Modal */}
            <Modal show={showViewGuard} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title style={{
                  width: "371px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>View Security Protocols</Modal.Title>
{/* Close button */}

<button
    type="button"
    className="btn"
    onClick={handleClose}
    style={{
      color: "#000",
      backgroundColor: "transparent",
      fontSize: "1.5rem",
      border: "none",
      cursor: "pointer",
    }}
    aria-label="Close"
  >
    &times; {/* Close icon (x) */}
  </button>

              </Modal.Header>
              <Modal.Body>
                <div style={{
                  width: "285px",
                  height: "70px",
                  display: "flex",
                  textAlign: "start",
                  gap: "15px",
                  fontFamily: "Poppins, sans-serif",
                }}>

                  <img
                    src="src\Images\Profileimg.png"
                    alt="avatar"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%", // Ensures a perfect circle
                      border: "3px solid #F4F4F4",
                    }}
                  />

                  <p style={{ margin: 0 }}>{guardData.name}<br />{guardData.date}</p>
                </div>


                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center", // Centers vertically
                  width: "100%", // Adjusts width for space distribution
                  fontFamily: "Poppins, sans-serif",
                  marginTop: "20px"
                }}>

                  <div style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column", // Stacks items vertically
                    gap: "0px", // Removes any gap between elements
                    alignItems: "center",
                  }}>

                    <span>Select Shift</span>

                    {guardData.shift === 'Day' ? (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "113px",
                          height: "31px",
                          fontFamily: "Poppins",
                          borderRadius: "50px",
                          background: "rgba(244, 244, 244, 1)",
                          color: "rgba(255, 147, 0, 1)", // Text and icon color
                          fontSize: "16px", // Optional for font size
                          fontWeight: "500", // Optional for font weight
                        }}
                        role="img"
                        aria-label="Day"
                      >
                        <FaSun style={{ marginRight: "5px" }} />
                        Day
                      </span>
                    ) : (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "Poppins",
                          width: "113px",
                          height: "31px",
                          borderRadius: "50px",
                          background: "rgba(79, 79, 79, 1)",  // Dark background
                          color: "rgba(255, 255, 255, 1)",    // White text and icon color
                          fontSize: "16px",                   // Optional font size
                          fontWeight: "500",                  // Optional font weight
                        }}
                        role="img"
                        aria-label="Night"
                      >
                        <FaMoon style={{ marginRight: "5px" }} />
                        Night
                      </span>
                    )}
                  </div>

                  <div className=" align-items-center justify-content-center">
                    <p className="mb-0 text-center">Shift Time</p>
                    <div className='text-center'
                      style={{
                        width: "100px",
                        height: "34px",
                        padding: "5px 15px",
                        fontWeight: "500",
                        borderRadius: "50px",
                        background: "#F6F8FB",
                        color: "#4F4F4F",
                        display: "inline-block",
                      }}
                    >
                      {guardData.time}
                    </div>
                  </div>


                  <div style={{ textAlign: "center" }}>
                    <span style={{ display: "block", marginBottom: "0" }}>Gender</span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "113px",
                        height: "31px",
                        padding: "5px 12px",
                        gap: "5px",
                        borderRadius: "50px",
                        fontFamily: "Poppins",
                        background:
                          guardData.gender === "Male" ? "rgba(33, 168, 228, 0.1)" : "rgba(254, 118, 168, 0.1)",
                        color:
                          guardData.gender === "Male" ? "rgba(86, 120, 233, 1)" : "rgba(254, 118, 168, 1)",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      {guardData.gender === "Male" ? <FaMale /> : <FaFemale />}
                      {guardData.gender}
                    </span>
                  </div>


                </div>

              </Modal.Body>

            </Modal>


{/* Delete Modal */}

            <Modal show={showDeleteGuard} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Delete Protocol?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Are you sure you want to delete this protocol?</p>
              </Modal.Body>
              <Modal.Footer style={{ display: "flex", justifyContent: "space-between" }}>
                <button className='btn ' variant="secondary" onClick={handleClose} style={{ borderRadius: "10px", width: "175px", height: "51px", border: "1px solid #202224", padding: "10px 55px 10px 55px", background: "#FFFFFF",  fontStyle: "Poppins",fontWeight: "500", fontSize: "16px",  color: "#202224"}}>
                  Cancel
                </button>
                <button className='btn mainColor2' onClick={handleDelete} style={{ borderRadius: "10px",
                 fontStyle: "Poppins",fontWeight: "500", fontSize: "16px", width: "175px", height: "51px", border: "1px", padding: "10px 55px 10px 55px", color: "#FFFFFF"
                }}>
                  Delete
                </button>

              </Modal.Footer>
            </Modal>

            {/* Add Security Modal */}
            <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header >
          <Modal.Title >{isEdit ? 'Edit Security' : 'Add Security'}
          <button
    type="button"
    className="btn"
    onClick={handleClose}
    style={{
      color: "#000",
      backgroundColor: "transparent",
      fontSize: "1.5rem",
      border: "none",
      cursor: "pointer",
      marginLeft: "260px",
      bottom: "10px",
    }}
    aria-label="Close"
  >
    &times; {/* Close icon (x) */}
  </button>

          </Modal.Title>
          

          
        </Modal.Header>
        <Modal.Body>
          {/* Add Photo Section */}
          <div className="text-start" style={{ display: 'flex', marginBottom: '20px' }}>
            <label htmlFor="photo-upload" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "rgba(211, 211, 211, 1)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #ddd",
                    marginRight: "10px",
                  }}
                >
                  {newGuard.photo?.preview ? (
                    <img
                      src={newGuard.photo.preview}
                      alt="Uploaded"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <FaCamera style={{ color: "rgba(255, 255, 255, 1)", fontSize: "16px" }} />
                  )}
                </div>
                <div style={{ color: "#007bff" }}>Add Photo</div>
              </div>
            </label>
            <input
              id="photo-upload"
              type="file"
              onChange={(e) => handleFileChange(e, 'photo')}
              accept=""
              style={{ display: 'none' }}
            />
          </div>

          {/* Form Fields */}
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                value={newGuard.name}
                onChange={(e) => setNewGuard({ ...newGuard, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="+91"
                value={newGuard.phone}
                onChange={(e) => setNewGuard({ ...newGuard, phone: e.target.value })}
              />
            </Form.Group>

            <div className="d-flex justify-content-between mb-3">
              <Form.Group controlId="formGender" style={{ width: "210px" }}>
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  value={newGuard.gender}
                  onChange={(e) => setNewGuard({ ...newGuard, gender: e.target.value })}
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formShift" style={{ width: "210px" }}>
                <Form.Label>Shift</Form.Label>
                <Form.Select
                  value={newGuard.shift}
                  onChange={(e) => setNewGuard({ ...newGuard, shift: e.target.value })}
                >
                  <option>Select Shift</option>
                  <option>Day</option>
                  <option>Night</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="d-flex mb-3" style={{ justifyContent: 'space-between' }}>
              <Form.Group controlId="formDate" style={{ width: "210px" }}>
                <Form.Label>Shift Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newGuard.date}
                  onChange={(e) => setNewGuard({ ...newGuard, date: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formTime" style={{ width: "210px" }}>
                <Form.Label>Shift Time</Form.Label>
                <Form.Control
                  type="time"
                  value={newGuard.time}
                  onChange={(e) => formatTime(e.target.value)}
                />
              </Form.Group>
            </div>

             {/* Aadhaar Card Upload Section */}
             <Form.Group controlId="formAadhaar" className=" mt-4">
                    <Form.Label>Upload Aadhaar Card</Form.Label>
                    <div className='text-center'
                      style={{
                        border: "2px dashed rgba(211, 211, 211, 1)",
                        borderRadius: "8px",
                        padding: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        cursor: "pointer"
                      }}
                    >
                      <label htmlFor="aadhaar-upload" style={{ cursor: 'pointer', color: '#007bff' }}>
                        <LuImagePlus className='text-center'
                          style={{
                            fontSize: '24px',      // Size of the icon
                            marginBottom: '8px',   // Bottom margin
                            width: '40px',         // Icon width
                            height: '50px',        // Icon height
                            top: '4px',            // Top offset
                            left: '8px',           // Left offset
                            color: " rgba(167, 167, 167, 1)",// Ensure position is relative to the container
                            gap: '0px',
                            // No gap between elementsr
                          }}
                        />

                        <div>Upload a file <span style={{ color: "black" }}>or drag and drop</span></div>
                      </label>
                      <small className="text-muted">PNG, JPG, GIF, PDF up to 10MB</small>
                      <input
                        id="aadhaar-upload"
                        type="file"
                        onChange={(e) => handleFileChange(e, 'aadhaar')}
                        accept="image/png, image/jpeg, application/pdf"
                        style={{ display: 'none' }}
                      />

                      {/* Display file preview or name */}
                      {newGuard.aadhaar && (
                        <div style={{ marginTop: '15px', textAlign: 'center' }}>
                          {newGuard.aadhaar.preview && newGuard.aadhaar.file.type.startsWith('image/') ? (
                            <img
                              src={newGuard.aadhaar.preview}
                              alt="Aadhaar Preview"
                              style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }}
                            />
                          ) : (
                            <div>{newGuard.aadhaar.file.name}</div>
                          )}
                        </div>
                      )}
                    </div>
                  </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "space-between" }}>
          <button style={{ width: "175px", height: "51px", border: "1px solid #202224", botderradius: "10px", padding: "10px 55px 10px 55px", color: "#202224", }} variant="secondary" onClick={handleClose}>
            Cancel
          </button>
          <button style={{
            width: "175px", height: "51px", border: "1px", padding: "10px 55px 10px 55px", color: "#FFFFFF", fontStyle: "Poppins",fontWeight: "500", fontSize: "16"

          }} className='mainColor2' onClick={handleSave}>
            {isEdit ? 'Create' : 'Create'}
          </button>
        </Modal.Footer>
      </Modal>

          </div>
        </div>
      </div>
    </div>
  );
}
