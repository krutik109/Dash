import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateSocietyForm from "./CreateSocietyForm";


const RegistrationForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    society: "",
    password: "",
    confirmPassword: "",
    termsAgreed: false,
  });

  // Handle change in form input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form Data Submitted: ", formData);
   
  };

  return (
    <div className="col-lg-12 d-flex flex-wrap mx-auto justify-content-center">
      {/* Left image */}
      <div className="col-lg-6 mb-5">
        <h1 className="mt-4 mx-4 mainColor logo">
          Dash<span className="text-dark">Stack</span>
        </h1>
        <div className="container-fluid mx-5 mb-5">
          <img className="RegImg mx-5 mt-2" src="src/Images/Registration.png" alt="" />
        </div>
      </div>

      {/* Right Form */}
      <div className="col-lg-6 mt-5">
        <div className="registration-background">
          <div className="container registration-container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number<span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="91+"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="country" className="form-label">
                    Country<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    placeholder="Enter Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state" className="form-label">
                    State<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    placeholder="Enter State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="city" className="form-label">
                    City<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="Enter City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="society" className="form-label">
                  Select Society<span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  id="society"
                  name="society"
                  value={formData.society}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Society</option>
                  <option value="Shantigram residency">Shantigram residency</option>
                  <option value="Russett House Park">Russett House Park</option>
                  <option value="Saurya residency">Saurya residency</option>
                  <option value="Shamruddh Avenyu">Shamruddh Avenyu</option>
                  <option value="Utsav society">Utsav society</option>
                  <option value="Murlidhar">Murlidhar</option>
                  <option value="Shree Sharanam">Shree Sharanam</option>
                  <option value="Vasantnagar township">Vasantnagar township</option>
                  
                </select>
                <div className="d-grid gap-2 mt-3">
                 <Link to={"/createsociety"} className="btn btn-warning create-society-btn" type="button">
                    Create Society
                  </Link> 
                </div>


              </div>

              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="password" className="form-label">
                    Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to all the Terms and <a href="/">Privacy Policies</a>.
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100 mainColor2">
                Register
              </button>

              <p className="text-center mt-3">
                Already have an account? <a href="/login">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
