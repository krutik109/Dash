import React, { useState } from 'react';
import './ResidentManagement.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';


const ResidentDetailsTable = () => {
  const [residents, setResidents] = useState([
    { name: "Evelyn Harper", unitNumber: "A 1001", unitStatus: "Occupied", residentStatus: "Tenant", phoneNumber: "97587 85828", members: 1, vehicles: 2 },
    { name: "-", unitNumber: "B 1002", unitStatus: "Vacate", residentStatus: "--", phoneNumber: "--", members: "-", vehicles: "-" },
  ]);

  const [status, setStatus] = useState("Occupied");
  const [agreement, setAgreement] = useState(false);

  return (
    <div className="container-fluid rounded " style={{backgroundColor:" #f5f5f5 "}}>
    <div className=" bg- p-2 ">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Resident Tenant and Owner Details</h4>
        {/* Button to open modal */}
        <Button variant="primary" onClick={() => setAgreement(false)} data-toggle="modal" data-target="#residentModal">
          Add New Resident Details
        </Button>
      </div>
      <table className="custom-table  ">
        <thead>
          <tr className='rmHead'>
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
          {residents.map((resident, index)  => (
            <tr className='' key={index}>
              <td>{resident.name}</td>
              <td><span className='wing'>{resident.unitNumber}</span></td>
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
      </table>

      {/* Bootstrap Modal */}
      <div className="modal " id="residentModal" tabIndex="-1" role="dialog" aria-labelledby="residentModalTitle" aria-hidden="true" data-backdrop="false" style={{backgroundColor:"rgba(0, 0, 0, 0.5)" }}>
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "380px" }} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="residentModalTitle">Residence Status</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="radio-group d-flex justify-content-evenly gap-2">
                  <button className='col-4 rounded' style={{border:"orange 2px solid"}}>

                  <label className={`radio-option ${status === "Occupied" ? "selected" : ""}`}>
                    <input
                    className=' '
                      type="radio"
                      name="status"
                      value="Occupied"
                      checked={ status === "Occupied"}
                      onChange={(e) => setStatus(e.target.value)}
                      />
                    <span>Occupied</span>
                  </label>
                      </button> 
              <button className='col-4 rounded '  style={{border:"orange 2px solid"}} >
                    <label className={`radio-option ${status === "Vacate" ? "selected" : ""}`}>
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
                    <span className=''>By submitting, you agree to select {status}</span>
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-evenly ">
              <button type="button" className="btn btn-secondary col-4" data-dismiss="modal" >Cancel</button>
             <Link to={"/addresidents"}> <button type="button" className="btn btn-primary"  disabled={!agreement}>Save changes</button></Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ResidentDetailsTable;
