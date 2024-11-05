import React, { useState } from 'react';
import './VehicleForm.css';

function VehicleForm() {
  const [vehicleCount, setVehicleCount] = useState(3); // Default vehicle count
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
    setVehicleCount(vehicleCount + 1);
  };

  return (
    <div className=" vehicle-form">
      <div className="vehicle-header">
        <button className="vehicle-count-btn" onClick={handleAddVehicle}>
          Select Vehicle {vehicleCount} ⌄
        </button>
      </div>
      <div className="vehicle-grid ">
        {vehicleData.map((vehicle, index) => (
          <div key={index} className="vehicle-row row">
            <div className="form-group ">
              <label>Vehicle Type</label>
              <select
                className="form-control"
                value={vehicle.type}
                onChange={(e) => handleVehicleChange(index, 'type', e.target.value)}
              >
                <option>Two Wheelers</option>
                <option>Four Wheelers</option>
              </select>
            </div>
            <div className="form-group">
              <label>Vehicle Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={vehicle.name}
                onChange={(e) => handleVehicleChange(index, 'name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Vehicle Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Number"
                value={vehicle.number}
                onChange={(e) => handleVehicleChange(index, 'number', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="vehicle-form-actions">
        <button className="btn cancel-btn">Cancel</button>
        <button className="mainColor2 btn create-btn">Create</button>
      </div>
    </div>
  );
}

export default VehicleForm;
