

import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import {
  FaTh,
  FaUser,
  FaDollarSign,
  FaBuilding,
  FaExclamationCircle,
  FaShieldAlt,
  FaBullhorn,
  FaSignOutAlt,
  FaBell,
} from "react-icons/fa";


const SideBar = ({ toggleSidebar }) => {
  return (
    <>
      <div className="row bg-light ">
        {/* Close button for screens up to 767px */}
        
        <div className="col-12 d-md-none text-end mt-2">
          <button className="btn  text-dark close-btn" onClick={toggleSidebar}>
            <IoMdClose /> {/* Bootstrap close icon */}
          </button>
        </div>

        <div className="col-md-12  mt-3 mb-3">
          <h2 className="text-center mainColor">
            {" "}
            Dash<span className="text-dark">Stack</span>
          </h2>
          <hr />
        </div>
        <h3>Resident*</h3>


<div className=" col-md-12  mt-1 mb-1">

<NavLink
            className="navlink"
            to="/eventparticipation"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            {/* Close sidebar on link click in small screens */}
            <p className=" p-2 hovermaincolor">
              <FaTh className="" /> Event Participation
            </p>
          </NavLink>

</div>



        <h3>Admin*</h3>

        <div className=" col-md-12  mt-1 mb-1">
          <NavLink
            className="navlink"
            to="/"
            style={{
              textDecoration: "none",
             
              height: "52px",
              width: "245px",
              fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            {/* Close sidebar on link click in small screens */}
            <p className=" p-2 hovermaincolor">
              <FaTh className="" /> Dashboard
            </p>
          </NavLink>
        </div>
        <div className="sidebarbtn col-md-12 mt-1  mb-1 ">
          <NavLink
            className="navlink"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",fontStyle: "poppins",
              fontWeight: "500",
            }}
            to="/ResidentManagement"
            onClick={toggleSidebar}
          >
            <p className="p-2 hovermaincolor">
              <FaUser className="" /> Resident Management
            </p>
          </NavLink>
        </div>

        <div className="col-md-12 mt-1 mb-1">
          <NavLink
          className="navlink"
            to="/FinancialManagement"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            <p className=" p-2 hovermaincolor">
            <FaDollarSign className="
            " />  Financial Management
            </p>
          </NavLink>
        </div>

        <div className="col-md-12 mt-1 mb-1">
          <NavLink
          className="navlink"
            to="/FacilityManagement"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            <p className=" p-2 hovermaincolor">
            <FaBuilding className="" />  Facility Management
            </p>
          </NavLink>
        </div>

        <div className="col-md-12 mt-1 mb-1">
          <NavLink
          className="navlink"
            to="/complainttracking"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            <p className=" p-2 hovermaincolor"> <FaExclamationCircle className="" /> Complaint Tracking</p>
          </NavLink>
        </div>
        <div className="col-md-12 mt-1 mb-1">
          <NavLink
          className="navlink"
            to="/visitorlogs"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            <p className=" p-2 hovermaincolor">
            <FaShieldAlt className="" /> Security Management   <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
    
  </a>
  <div style={{position:"absolute", top:"px", left:"-200px"}} className="dropdown ">
 

  <div className="dropdown-menu ">
    <NavLink to={"/visitorlogs"} className="dropdown-item" href="#">Visitor Logs</NavLink>
    <NavLink to={"/securityprotocol"}  className ="dropdown-item" href="#">Security Protocol</ NavLink>
   
  </div>
</div>
            </p>
          </NavLink>
        </div>
        <div className="col-md-12 mt-5 mb-1">
          <NavLink
          className="navlink"
            to="/securitygaurd"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",fontStyle: "poppins",
              fontWeight: "500",
              
            }}
            onClick={toggleSidebar}
          >
            <p style={{fontStyle:"poppins" ,fontWeight:"500"}} className=" p-2 hovermaincolor">  <FaShieldAlt className="me-2" />Security Guard</p>
          </NavLink>
        </div>
      
     
        <div>
          <NavLink to="/financialexpenses"> 
            <p className=" p-2 hovermaincolor"> <FaSignOutAlt className="" /> Fiancial ecpenses</p>
          </NavLink>
        </div>


        
      </div> 
    </>
  );
};

export default SideBar;
