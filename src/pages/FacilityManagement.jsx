import React, { useState } from 'react';
import './FacilityManagement.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NoteCard = ({ note, isOpen, onToggleDropdown, onEdit }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card note-card">
                <div className="card">
                    <div
                        className="d-flex justify-content-between align-items-center rounded-top p-2"
                        style={{ backgroundColor: "#5678e9" }}
                    >
                        <h5 className="card-title" style={{ fontSize: "16px" }}>{note.title}</h5>

                        <img
                            src="src/Images/menu.png"
                            role="button"
                            tabIndex="0"
                            alt="Menu"
                            style={{ width: "30px", height: "30px", cursor: "pointer" }}
                            onClick={onToggleDropdown}
                        />

                        {isOpen && (
                            <div className="dropdown-menu show" style={{ position: 'absolute', top: '40px', right: '10px' }}>
                                <button className="dropdown-item" onClick={onEdit}>Edit</button>
                            </div>
                        )}
                    </div>
                    <div className="d-flex align-items-center ms-2 mt-2">
                        <p className="card-subtitle text-muted fw-normal me-1" style={{ fontSize: "12px" }}>
                            Upcoming Schedule Service Date:
                        </p>
                        <p className="card-text" style={{ fontSize: "12px" }}>
                            {note.Date}
                        </p>
                    </div>

                    <div className="m-2">
                        <h6 className="card-subtitle mb-1 text-muted fw-normal" style={{ fontSize: "14px" }}>Description</h6>
                        <p className="card-text" style={{ fontSize: "12px" }}>{note.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FacilityManagement = () => {
    const notes = [
        { title: 'Parking Facilities', description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.', Date: '01/07/2024' },
        { title: 'Community Center', description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.', Date: '01/07/2024' },
        { title: 'Swimming Pool', description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.', Date: '01/07/2024' },
        { title: 'Parks and Green Spaces', description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.', Date: '01/07/2024' },
        { title: 'Wi-Fi and Connectivity', description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.', Date: '01/07/2024' },
        { title: 'Pet-Friendly Facilities:', description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.', Date: '01/07/2024' }
    ];

    const [dropdownIndex, setDropdownIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const toggleDropdown = (index) => {
        setDropdownIndex(dropdownIndex === index ? null : index);
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setShowEditModal(false);
    };

    const handleOpenEditModal = () => {
        setShowEditModal(true);
        setDropdownIndex(null); // Close the dropdown when edit modal opens
    };

    return (
        <div style={{height: "100vh"}} className="container-fluid  pt-3 mt-3 financial-management">
            <div className="d-flex justify-content-between align-items-center mb-3 text-dark">
                <h2 style={{ fontSize: "20px" }}>Facility Management</h2>
                <button style={{ fontSize: "18px", width: "168px", borderRadius: "10px", height: "51px", fontWeight: "500" }} className="btn mainColor2" onClick={handleShowModal}>Create Facility</button>
            </div>
            <div className="row">
                {notes.map((note, index) => (
                    <NoteCard
                        key={index}
                        note={note}
                        isOpen={dropdownIndex === index}
                        onToggleDropdown={() => toggleDropdown(index)}
                        onEdit={handleOpenEditModal}  // Open edit modal on Edit click
                    />
                ))}
            </div>

            {/* Create Facility Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{ width: "410px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Create Facility</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-1">
                                        <label className="form-label">Facility Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Parking Facilities" required />
                                    </div>
                                    <div className="mb-1">
                                        <label className="form-label">Description<span className="text-danger">*</span></label>
                                        <textarea className="form-control" placeholder="Enter description" rows="3" required></textarea>
                                    </div>
                                    <div className="mb-1">
                                        <label className="form-label">Schedule Service Date<span className="text-danger">*</span></label>
                                        <input type="date" className="form-control" required />
                                    </div>
                                    <div className="mb-1">
                                        <label className="form-label">Remind Before</label>
                                        <select className="form-select">
                                            <option>4-day</option>
                                            <option>3-day</option>
                                            <option>2-day</option>
                                            <option>1-day</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" style={{ width: "175px", borderRadius: "10px", fontSize: "18px", fontWeight: "500", height: "51px" }} onClick={handleCloseModal}>Cancel</button>
                                <button onClick={handleCloseModal}
                                    type="button"
                                    className="btn mainColor2"
                                    style={{ width: "175px", height: "51px", borderRadius: "10px", fontSize: "18px", fontWeight: "500" }}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {showEditModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{ width: "410px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Facility</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-1">
                                        <label className="form-label">Facility Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Parking Facilities" required />
                                    </div>
                                    <div className="mb-1">
                                        <label className="form-label">Description<span className="text-danger">*</span></label>
                                        <textarea className="form-control" placeholder="Enter description" rows="3" required></textarea>
                                    </div>
                                    <div className="mb-1">
                                        <label className="form-label">Schedule Service Date<span className="text-danger">*</span></label>
                                        <input type="date" className="form-control" required />
                                    </div>
                                    <div className="mb-1">
                                        <label className="form-label">Remind Before</label>
                                        <select className="form-select">
                                            <option>5-day</option>
                                            <option>4-day</option>
                                            <option>3-day</option>
                                            <option>2-day</option>
                                            <option>1-day</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" style={{ width: "175px", borderRadius: "10px", height: "51px", fontSize: "18px", fontWeight: "500" }} onClick={handleCloseModal}>Cancel</button>
                                <button type="button" className="btn mainColor2" style={{ width: "175px", borderRadius: "10px", height: "51px", fontSize: "18px", fontWeight: "500" }} onClick={handleCloseModal}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacilityManagement;
