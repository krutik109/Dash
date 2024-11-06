import React, { useState } from 'react';
import './FinancialManagement.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdOutlineCurrencyRupee, MdPerson } from 'react-icons/md';


const FinancialManagement = () => {
  const [residents, setResidents] = useState([
    { name: "Evelyn Harper", unitNumber: "A 1001", date: "2022/01/01", Status: "Tenant", PhoneNumber: "9876549876", Amount: "1000", Penalty: "250",status: "Pendinng", Payment: "Online" },
    { name: "Evelyn Harper", unitNumber: "A 1001", date: "2022/01/01", Status: "Ownwer", PhoneNumber: "9876549876", Amount: "1000", Penalty: "--", status: "Done", Payment: "Cash" },
    { name: "Evelyn Harper", unitNumber: "A 1001", date: "2022/01/01", Status: "Tenant", PhoneNumber: "9876549876", Amount: "1000", Penalty: "250", status: "Pendinng", Payment: "Online" },

  ]);

  const [status, setStatus] = useState("Occupied");
  const [agreement, setAgreement] = useState(false);
  
  const [showAddModal, setShowAddModal] = useState(false);  const handleShowAddModal = () => setShowAddModal(true);
  const [showAddmaintananceModal, setShowAddMaintananceModal] = useState(false);  const handleshowAddmaintananceModal = () => setShowAddMaintananceModal(true);
  const handleCloseAddModal = () => setShowAddModal(false); 
  const handleCloseAddmaintananceModal = () => setShowAddMaintananceModal(false); 

  return (<>
    <div className="">
    <Link to={"/financialmanagement"}>  <button className=" hovermaincolor rounded-top  bg-white  border-bottom border-danger btn "><span style={{ color: "black",  fontSize: "16px" }}>  Maintanance </span></button></Link> 
      <Link to="/otherincome"><button  className=" hovermaincolor rounded-top bg-white  btn  border-bottom border-danger"><span style={{ color: "black",  fontSize: "16px" }}>  Other Income </span></button></Link>
</div>
    <div className="container-fluid rounded " style={{backgroundColor:" #f5f5f5 ", border:"none"}}>
       
    <div className=" p-2 ">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>financial Details</h4>
        {/* Button to open modal */}
        <button className="btn btn-primary" onClick={handleShowAddModal}>
                    Set Maintanance
                  </button> 
      </div>
      <table className="custom-table  ">
        <thead>
          <tr className='rmHead'>
            <th>Name</th>
            <th>Unit Number</th>
            <th>Date</th>
            <th> Status</th>
            <th>Phone Number</th>
            <th>Amount</th>
            <th>Penalty</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident, index)  => (
            <tr className='' key={index}>
              <td><img src="src\Images\Profileimg.png" alt="" />{resident.name}</td>
              <td><span className='wing'>{resident.unitNumber}</span></td>
              <td>{resident.date}</td>
              <td>
                <span className={resident.Status === "Occupied" ? "badge occupied" : "badge vacate"}>
                <MdPerson />{resident.Status}
                </span>
              </td>
              <td>
                <span className='font-weight-bold'>
                  {resident.PhoneNumber}
                </span>
              </td>
              <td>{resident.Amount}</td>
              <td>{resident.Penalty}</td>
              <td>{resident.Status}</td>
              <td>{resident.Payment}</td>
              <td>

              <FaEye style={{fontSize:"20px"}} />


              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
                  <div className="modal-backdrop show " ></div>
                  <div className="modal d-block" tabIndex="-1">
                    <div className="modal-dialog">
                      <div className="modal-content" style={{ width: "430px", height: "251px", marginTop:"200px", left:"20px"}}>
                        <div className="modal-header">
                          <h5 className="modal-title">Set Maintanance </h5>
                          <button type="button" className="btn-close" onClick={handleCloseAddModal}></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-2">
                              <label className="form-label">Password<span className='text-danger'>*</span></label>
                             <div className='d-flex'>
                               <input type="password" className="form-control" required/>
                               <FaRegEyeSlash style={{fontSize:"20px"}} className='mt-2 ms-2'/> 
                              </div>
                             
                            </div>
                            <div className="modal-footer d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            style={{ width: "175px"  }}
                            onClick={handleCloseAddModal}
                          >
                            Cancel
                          </button>
                        <button    onClick={() => {
    handleCloseAddModal();  // Closes the current modal
    handleshowAddmaintananceModal();  // Opens the maintenance modal
  }}  type="button" className="btn btn-primary" style={{ width: "170px" }}>
                            continue
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
                  <div className="modal-backdrop show " ></div>
                  <div className="modal d-block" tabIndex="-1">
                    <div className="modal-dialog">
                      <div className="modal-content" style={{ width: "420px", height: "400px", marginTop:"200px", left:"30px"}}>
                        <div className="modal-header">
                          <h5 className="modal-title">Add Maintanance Details </h5>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className='d-flex justify-content-between mt-2'>
                              <div >

                            <label htmlFor="">Maintanance Amount</label>
                          <div className='d-flex'><MdOutlineCurrencyRupee style={{ fontSize: "20px", marginTop: "6px", marginRight: "5px"  }}  />
                            <input type="text" className="form-control col-10" placeholder='0000'/></div>
                              </div>
                              <div >

                            <label htmlFor="">Penalty Amount</label>
                          <div className='d-flex'><MdOutlineCurrencyRupee style={{ fontSize: "20px", marginTop: "6px", marginRight: "5px"  }}  />
                            <input type="text" className="form-control col-10" placeholder='0000'/></div>
                              </div>

                            </div>
                            <div className="mb-2 mt-2 ">
                              <label className="form-label">Maintanance Due Date</label>
                             <div className='d-flex'>
                               <input type="date" className="form-control" required/>
                             
                              </div>


                              <div >

<label className="form-label">Penalty Applied After Day Selection</label>
<div className='d-flex'>

<select name="" id="" className="form-select">

  <option value="">4 Days</option>
  <option value="">5 Days</option>
  <option value="">6 Days</option>
  <option value="">7 Days</option>
</select>
</div>
  </div>
                             
                            </div>
                            <div className="modal-footer d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            style={{ width: "170px"  }}
                            onClick={handleCloseAddmaintananceModal}
                          >
                            Cancel
                          </button>
                          <button style={{ width: "170px"  }} className="btn btn-primary " onClick={handleCloseAddmaintananceModal}>
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
