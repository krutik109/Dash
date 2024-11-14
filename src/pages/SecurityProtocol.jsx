import React, { useState } from "react";
import { Container, Row, Col, Table, Button, Modal } from "react-bootstrap";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const  SecurityProtocol = () => {
  const [protocols, setProtocols] = useState([
    { id: 1, Title: "Evelyn Harper", Description: "Unethical Behavior", Date: "14/02/2024", Time: "01:31 AM" },
    { id: 2, Title: "Esther Howard", Description: "Preventive Measures", Date: "14/02/2024", Time: "01:31 AM" },
    { id: 3, Title: "Esther Howard", Description: "Preventive Measures", Date: "14/02/2024", Time: "01:31 AM" },
    { id: 4, Title: "Esther Howard", Description: "Preventive Measures", Date: "14/02/2024", Time: "01:31 AM" },
    { id: 5, Title: "Esther Howard", Description: "Preventive Measures", Date: "14/02/2024", Time: "01:31 AM" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // Track if it's 'create', 'view', or 'edit'
  const [selectedProtocol, setSelectedProtocol] = useState(null);

  const handleShow = (type, protocol = null) => {
    setModalType(type);
    setSelectedProtocol(protocol);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    setSelectedProtocol(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProtocol((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (modalType === "edit") {
      setProtocols((prevProtocols) =>
        prevProtocols.map((p) =>
          p.id === selectedProtocol.id ? selectedProtocol : p
        )
      );
    } else if (modalType === "create") {
      const newId = protocols.length + 1;
      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }).toUpperCase();
      const newEntry = {
        id: newId,
        ...selectedProtocol,
        Date: currentDate,
        Time: currentTime,
      };
      setProtocols((prevProtocols) => [...prevProtocols, newEntry]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setProtocols((prevProtocols) => prevProtocols.filter((protocol) => protocol.id !== id));
  };

  return (
    <Container fluid style={{ marginTop: "20px" }}>
      <Row className="py-4">
        <Col className="d-flex justify-content-between align-items-center">
          <h2>Security Protocol</h2>
          <button style={{height:"40px",width:"175px"  ,fontStyle:"poppins",fontWeight:"500",fontSize:"16px",lineHeight:"24px",color:"white"   }} className="btn  mainColor2" onClick={() => handleShow("create")}>
            Create Protocols
          </button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "view"
              ? "View Protocol"
              : modalType === "edit"
              ? "Edit Protocol"
              : "Create Protocol"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
  {modalType === "view" ? (
    selectedProtocol && (
      <div>
        <p><strong>Title:</strong> <br/> {selectedProtocol.Title}</p>
        <p><strong>Description:</strong> <br/> {selectedProtocol.Description}</p>
        <div className="d-flex gap-5">
        <p><strong>Date:</strong> {selectedProtocol.Date}</p>
        <p><strong>Time:</strong> {selectedProtocol.Time}</p>
        </div>
      </div>
    )
  ) : (
    <div>
      <label>Title</label>
      <input
        type="text"
        placeholder="Enter Title"
        name="Title"
        value={selectedProtocol?.Title || ""}
        onChange={handleChange}
        className="form-control"
        required
      />
      <label>Description</label>
      <textarea
        rows={3}
        placeholder="Enter Description"
        name="Description"
        value={selectedProtocol?.Description || ""}
        onChange={handleChange}
        className="form-control"
        required
      ></textarea>
      {modalType === "edit" && (
        <>
          <label>Date</label>
          <input
            type="text"
            placeholder="Enter Date"
            name="Date"
            value={selectedProtocol?.Date || ""}
            onChange={handleChange}
            className="form-control"
          />
          <label>Time</label>
          <input
            type="text"
            placeholder="Enter Time"
            name="Time"
            value={selectedProtocol?.Time || ""}
            onChange={handleChange}
            className="form-control"
          />
        </>
      )}
    </div>
  )}
</Modal.Body>

        {modalType !== "view" && (
          <Modal.Footer>
            <div className="d-flex justify-content-evenly p-0 ">


            <button onClick={handleClose} className="btn btn1 text-black border"  style={{fontweight:"600",fontSize:"18px",  width:"165px" ,height:"51px", borderRadius:"10px" }}>
              Cancel
            </button>


            <button  onClick={handleSave} className=" btn btn1 mainColor2"  style={{fontSize: "18px",fontweight:"600", width:"165px" ,height:"51px", borderRadius:"10px" }}>
              <span>Save</span>
            </button>

            </div>
          </Modal.Footer>
        )}
      </Modal>

      <div style={{ border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)", overflow: "hidden", padding: "" }}>
        <table className="table  " >
          <thead style={{ background: "#5678E9", border: "none", color: "#ffffff" }}>
            <tr style={{ border: "none" }}>
              <th style={{ backgroundColor: "rgb(185, 198, 242)" }}>Title</th>
              <th style={{ backgroundColor: "rgb(185, 198, 242)" }}>Description</th>
              <th style={{ backgroundColor: "rgb(185, 198, 242)" }} className="text-center">Date</th>
              <th style={{ backgroundColor: "rgb(185, 198, 242)" }} className="text-center">Time</th>
              <th style={{ backgroundColor: "rgb(185, 198, 242)" }} className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {protocols.map((protocol) => (
              <tr key={protocol.id}>
                <td>{protocol.Title}</td>
                <td style={{ width: "300px" }}>{protocol.Description}</td>
                <td className="text-center">{protocol.Date}</td>
                <td style={{ verticalAlign: "middle" }} className="text-center">
                      <div
                        style={{
                          width: "100px",
                          height: "34px",
                          padding: "5px 15px",
                          gap: "10px",
                          borderRadius: "50px",
                          background: "#F6F8FB",
                          color: "#4F4F4F",
                          display: "inline-block", // Ensures width and height are applied properly
                        }}
                      >
                        {protocol.Time}
                      </div>
                    </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <FaEye className="text-primary me-2" style={{ cursor: "pointer" }} onClick={() => handleShow("view", protocol)} />
                    <FaEdit className="text-success me-2" style={{ cursor: "pointer" }} onClick={() => handleShow("edit", protocol)} />
                    <FaTrash className="text-danger" style={{ cursor: "pointer" }} onClick={() => handleDelete(protocol.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

const Dashboard = () => {
  return (
    <Container fluid className="p-0" style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Row className="m-0">
        <Col xs={2} className="p-0">
          <SideBar />
        </Col>
        <Col xs={10} className="p-4">
          <SecurityProtocol />
        </Col>
      </Row>
    </Container>
  );
};

export default (Dashboard, SecurityProtocol);
