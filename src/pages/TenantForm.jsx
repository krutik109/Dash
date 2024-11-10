import React, { useState } from 'react';
import './FormUI.css'; // Custom CSS file for detailed styling
import { FaAngleUp } from "react-icons/fa";
import VehicleForm from './VehicleForm';
import { Link } from 'react-router-dom';
import { IoIosRemoveCircle } from 'react-icons/io';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const TenantForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNo: '',
        email: '',
        age: '',
        gender: '',
        wing: '',
        unit: '',
        relation: '',
        aadharFront: null,
        aadharBack: null,
        addressProof: null,
        rentAgreement: null,
        members: Array(5).fill({ fullName: '', phoneNo: '', email: '', age: '', gender: '', relation: '' })
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name } = e.target;
        setFormData({ ...formData, [name]: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Submit the form data logic
    };

    const handleMemberChange = (index, e) => {
        const { name, value } = e.target;
        const updatedMembers = [...formData.members];
        updatedMembers[index] = { ...updatedMembers[index], [name]: value };
        setFormData({ ...formData, members: updatedMembers });
    };
  const [vehicleCount, setVehicleCount] = useState(); // Default vehicle count
  const [vehicleData, setVehicleData] = useState(
    Array(vehicleCount).fill({ type: 'Two Wheelers', name: '', number: '' })
  );

  const handleVehicleChange = (index, field, value) => {
    const newData = [...vehicleData];
    newData[index][field] = value;
    setVehicleData(newData);
  };

  const handleAddVehicle = () => {
    setVehicleData([...vehicleData, { type: 'Two Wheelers', name: '', number: '' }]);
    setVehicleCount(vehicleCount);
  };
    return (
        <div className="container-fluid form-container" style={{ backgroundColor: "#eff4f9" }}>
            <div className="row justify-content-center ">
                <div className="">
                <Link to="/ownerForm"><button className="rounded-top text-dark bg-white border-top-only btn">Owner</button></Link>
               <Link to="/TenantForm"><button className="mainColor2 rounded-top border-top-only btn">Tenant</button></Link>

               <div className="row mb-3">
                                    <div className="col-md-4">
                                        <label>Owner Full Name<span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Owner Phone No<span className='text-danger'>*</span></label>
                                        <input type="tel" className="form-control" name="phoneNo" value={formData.phoneNo} onChange={handleInputChange} required />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Owner Address<span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
                                    </div>
                                </div>

                    <form onSubmit={handleSubmit} className=' border p-4 rounded shadow bg-white'>
                        {/* <h3 className="form-title mb-4">Owner/Tenant Information</h3> */}

                        {/* Flexbox or grid for image on left and form on the right */}
                        <div className="row">
                            {/* Left Side Image inside the form */}
                            <div className="col-lg-2 d-flex flex-column align-items-center">
                                <div className="image">
                                    <img src="src\Images\Frame.png" className="img-thumbnail rounded-circle" alt="Profile" />
                                    <h5 className="text-primary mt-2 ms-3">Add Photo</h5>
                                </div>
                            </div>

                            {/* Right Side Form */}
                            <div className="col-lg-10">
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <label>Full Name<span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Phone No<span className='text-danger'>*</span></label>
                                        <input type="tel" className="form-control" name="phoneNo" value={formData.phoneNo} onChange={handleInputChange} required />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Email Address<span className='text-danger'>*</span></label>
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    <div className="col-md-3">
                                        <label>Age<span className='text-danger'>*</span></label>
                                        <input
                                            type="number"
                                            className="form-control pe-3 margin-right-5px"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label>Gender<span className='text-danger'>*</span></label>
                                        <select
                                            className="form-control"
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label>Wing<span className='text-danger'>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control margin-right-5px"
                                            name="wing"
                                            value={formData.wing}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <label>Unit<span className='text-danger'>*</span></label>
                                        <input
                                            type="text"
                                            className=" margin-right-5px form-control"
                                            name="unit"
                                            value={formData.unit}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <label>Relation<span className='text-danger'>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control margin-right-5px"
                                            name="relation"
                                            value={formData.relation}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Additional Documents Section */}
                        <div className="row mb-3 mx-auto">
                            <div className="col-md-3 mx-auto">
                                <label className='ms-3'>Upload Aadhar Card (Front Side)</label>
                                <div className="upload  mx-auto text-center">
                                    <img src="src\Images\image1.png" alt="" className="upload-image" />
                                    <h6 className="text-primary mt-2">
                                        Upload a file <span className="text-dark">or drag and drop</span>
                                    </h6>
                                    <span className="file-info">PNG, JPG, GIF up to 10MB</span>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto">
                                <label className='ms-3'>Upload Aadhar Card (Back Side)</label>
                                <div className="upload  mx-auto text-center">
                                    <img src="src\Images\image1.png" alt="" className="upload-image" />
                                    <h6 className="text-primary mt-2">
                                        Upload a file <span className="text-dark">or drag and drop</span>
                                    </h6>
                                    <span className="file-info">PNG, JPG, GIF up to 10MB</span>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto">
                                <label >Address Proof (vera or LightBill)</label>
                                <div className="upload  mx-auto text-center">
                                    <img src="src\Images\image1.png" alt="" className="upload-image" />
                                    <h6 className="text-primary mt-2 ">
                                        Upload a file <span className="text-dark">or drag and drop</span>
                                    </h6>
                                    <span className="file-info">PNG, JPG, GIF up to 10MB</span>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto">
                                <label className='ms-3'>Rent Agreement*(Front Side)</label>
                                <div className="upload  mx-auto text-center">
                                    <img src="src\Images\image1.png" alt="" className="upload-image" />
                                    <h6 className="text-primary mt-2">
                                        Upload a file <span className="text-dark">or drag and drop</span>
                                    </h6>
                                    <span className="file-info">PNG, JPG, GIF up to 10MB</span>
                                </div>
                            </div>


                            
                        </div>
                    <div className="row mb-4">
                    <div className="col-md-3 mx-auto">
                                <div className=" border border-2 rounded mx-auto d-flex flex-wrap align-items-center p-2">
                                    <img src="src\Images\image2.png" style={{width:"30px"}} alt="" className=" me-2 mt-3" />
                                    <h6 className='img-font'>Syncfusion Essential Adharcard JPG</h6><RiDeleteBin5Fill className='mb-2 text-secondary' />
                                    <span className='ms-5 text-secondary mb-3' style={{marginTop:"-20px", fontSize:"12px"}}>3.5 MB</span>
                                  
                                </div>
                               
                            </div>


                            <div className="col-md-3 mx-auto">
                                <div className=" border border-2 rounded mx-auto d-flex flex-wrap align-items-center p-2">
                                    <img src="src\Images\image2.png" style={{width:"30px"}} alt="" className=" me-2 mt-3" />
                                    <h6 className='img-font'>Syncfusion Essential Adharcard JPG</h6><RiDeleteBin5Fill className='mb-2'/>

                                    <span className='ms-5 text-secondary mb-3' style={{marginTop:"-20px", fontSize:"12px"}}>3.5 MB</span>
                                </div>
                                <div>
                                </div>
                            </div>

                            <div className="col-md-3 mx-auto">
                                <div className=" border border-2 rounded mx-auto d-flex flex-wrap align-items-center p-2">
                                    <img src="src\Images\image2.png" alt="" style={{width:"30px"}} className=" me-2 mt-3" />
                                    <h6 className='img-font'>Syncfusion Essential Adharcard JPG</h6><RiDeleteBin5Fill className='mb-2'/>

                                    <span className='ms-5 text-secondary mb-3' style={{marginTop:"-20px", fontSize:"12px"}}>3.5 MB</span>
                                </div>
                                <div>
                                </div>
                            </div>

                            <div className="col-md-3 mx-auto">
                                <div className=" border border-2 rounded mx-auto d-flex flex-wrap align-items-center p-2">
                                    <img src="src\Images\image2.png" alt="" style={{width:"30px"}} className=" me-2 mt-3" />
                                    <h6 className='img-font'>Syncfusion Essential Adharcard JPG</h6><RiDeleteBin5Fill className='mb-2 text-secondary' />
                                    <span className='ms-5 text-secondary mb-3' style={{marginTop:"-20px", fontSize:"12px"}}>3.5 MB</span>
                                   
                                </div>
                                <div>
                                </div>
                                </div>
                            </div>

                       
                    </form>
                   
                    
                        {/* Member Details */}
                    <form className='mt-5 border p-4 rounded shadow bg-white'>
                   <div className="d-flex justify-content-between">
                   <h4>Member Details</h4>
                   <div className="">
                   <h6>Select Member <button className='btn border'>5 <FaAngleUp /></button></h6>
                   {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                   </div>
                   </div>
                        {formData.members.map((member, index) => (
                            <div className="row mb-3" key={index}>
                                <div className="col-md-2">
                                     <label>Full Name<span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" name="fullName" placeholder="Enter Full Name" value={member.fullName} onChange={(e) => handleMemberChange(index, e)} />
                                </div>
                                <div className="col-md-2">
                                <label>Phone No<span className='text-danger'>*</span></label>
                                    <input type="tel" className="form-control" name="phoneNo" placeholder="+91" value={member.phoneNo} onChange={(e) => handleMemberChange(index, e)} />
                                </div>
                                <div className="col-md-2">
                                <label>Email<span className='text-danger'>*</span></label>
                                    <input type="email" className="form-control" name="email" placeholder="Enter Email Address" value={member.email} onChange={(e) => handleMemberChange(index, e)} />
                                </div>
                                <div className="col-md-2">
                                <label>Age<span className='text-danger'>*</span></label>
                                    <input type="number" className="form-control" name="age" placeholder="Age" value={member.age} onChange={(e) => handleMemberChange(index, e)} />
                                </div>
                                <div className="col-md-2">
                                <label>Gender<span className='text-danger'>*</span></label>
                                    <select className="form-control" name="gender" value={member.gender} onChange={(e) => handleMemberChange(index, e)}>
                                        <option value="">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                <label>Age<span className='text-danger'>*</span></label>
                                    <input type="number" className="form-control" name="age" placeholder="Age" value={member.age} onChange={(e) => handleMemberChange(index, e)} />
                                </div>
                            </div>
                        ))}
                    </form>
                    
                    <div className="form-container mt-5">
        <h4 className="form-title">Vehicle Counting :</h4>
        {vehicleData.map((vehicle, index) => (
          <VehicleForm
            key={index}
            vehicle={vehicle}
            index={index}
            onVehicleChange={handleVehicleChange}
          />
        ))}
       
  
      </div>
                </div>
              
            </div>
        </div>
    );
};

export default TenantForm;