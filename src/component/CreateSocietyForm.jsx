import React, { useState } from 'react';


const CreateSocietyForm2 = () => {
  // Define form state using useState hook
  const [formData, setFormData] = useState({
    societyName: '',
    societyAddress: '',
    country: '',
    state: '',
    city: '',
    zipCode: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic can be added here, such as an API call
  };

  // Function to reset the form
  const handleCancel = () => {
    setFormData({
      societyName: '',
      address: '',
      country: '',
      state: '',
      city: '',
      zipCode: ''
    });
  };

  return (
    <div className="form-container">
      <form className="society-form " onSubmit={handleSubmit}>
        <h2>Create New Society</h2>
        
        {/* Society Name Input */}
        <label>Society Name*</label>
        <input
          type="text"
          name="societyName"
          placeholder="Enter Society Name"
          value={formData.societyName}
          onChange={handleChange}
          required
        />
        
        {/* Society Address Input */}
        <label>Society Address*</label>
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        
        {/* Country Input */}
        <label>Country*</label>
        <input
          type="text"
          name="country"
          placeholder="Enter Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        
        {/* State Input */}
        <label>State*</label>
        <input
          type="text"
          name="state"
          placeholder="Enter State"
          value={formData.state}
          onChange={handleChange}
          required
        />
        
        {/* City Input */}
        <label>City*</label>
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        
        {/* Zip Code Input */}
        <label>Zip Code*</label>
        <input
          type="text"
          name="zipCode"
          placeholder="Enter Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
        
        {/* Buttons: Cancel and Save */}
        <div className="form-buttons">
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button className='mainColor2 text-white' type="">Save</button>
        </div>
      </form>
    </div>
  );
};

export default CreateSocietyForm2;
