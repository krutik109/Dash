// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import "./SideBar.css";
// import { FaTh, FaUser, FaDollarSign, FaBuilding, FaExclamationCircle, FaShieldAlt, FaBullhorn, FaSignOutAlt } from "react-icons/fa";

// const SideBar = () => {
//   const [showOffcanvas] = useState(true); // Always show the offcanvas by default

//   return (
//     <div className="">
//       {/* Offcanvas */}
//       <div
//         className={` offcanvas offcanvas-start ${showOffcanvas ? "show" : ""} `}
//         tabIndex="-1"
//         style={{ visibility: " ", width: "300px" }}
//         aria-labelledby="offcanvasExampleLabel"
//         data-bs-backdrop="false" // Disable backdrop
//       >
//         {/* Header */}
//         <div className="offcanvas-header justify-content-center">
//           <h1 className="offcanvas-title mainColor mx-5" id="offcanvasExampleLabel">
//             Dash<span className="text-dark">Stack</span>
//           </h1>
//         </div>
//         <hr />

//         {/* Offcanvas Body */}
//         <div className="offcanvas-body p-0">
//           <ul className="list-unstyled">
//             {/* Dashboard */}
//             <li className="p-3  rounded hovermaincolor">
//   <Link to="/dashboard" className="d-flex align-items-center " style={{ textDecoration: "none", color: "black" }}>
//     <FaTh className="me-3" />  {/* Dashboard Icon */}
//     <span className="text-dark">Dashboard</span>
//   </Link>
// </li>

//             {/* Menu Items */}
//             <li className="p-3 hovermaincolor">
//               <Link to="/residentmanagement" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
//                 <FaUser className="me-3" />
//                 <span>Resident Management</span>
//               </Link>
//             </li>
//             <li className="p-3 hovermaincolor">
//               <Link to="/financialmanagement" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
//                 <FaDollarSign className="me-3" />
//                 <span>Financial Management</span>
//               </Link>
//             </li>

//             <li className="p-3 hovermaincolor">
//               <Link to="/facility-management" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
//                 <FaBuilding className="me-3" />
//                 <span>Facility Management</span>
//               </Link>
//             </li>
//             <li className="p-3 hovermaincolor">
//               <Link to="/complaint-tracking" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
//                 <FaExclamationCircle className="me-3" />
//                 <span>Complaint Tracking</span>
//               </Link>
//             </li>
//             <li className="p-3 hovermaincolor">
//               <Link to="/security-management" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
//                 <FaShieldAlt className="me-3" />
//                 <span>Security Management</span>
//               </Link>
//             </li>
//             <li className="p-3 hovermaincolor">
//               <Link to="/security-guard" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
//                 <FaShieldAlt className="me-3" />
//                 <span>Security Guard</span>
//               </Link>
//             </li>
//             <li className="p-3 hovermaincolor">
//               <Link to="/announcement" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
//                 <FaBullhorn className="me-3" />
//                 <span>Announcement</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <hr />

//         {/* Logout */}
//         <div className="p-3">
//           <Link to="/logout" className="d-flex align-items-center text-danger" style={{ textDecoration: "none" }}>
//             <FaSignOutAlt className="me-3" />
//             <span>Logout</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

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
            to="/"
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
            <FaShieldAlt className="" /> <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <div class="dropdown-menu">
    <NavLink to={"/visitorlogs"} className="dropdown-item" href="#">Visitor Logs</NavLink>
    <NavLink to={"/securityprotocol"}  className ="dropdown-item" href="#">Security Protocol</ NavLink>
   
  </div>
</div>
            </p>
          </NavLink>
        </div>
        <div className="col-md-12 mt-1 mb-1">
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
        <div className="col-md-12 mt-1 mb-1">
          <NavLink
          className="navlink"
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",
              fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            <p className=" p-2 hovermaincolor"> <FaBullhorn className="" /> Announcement</p>
          </NavLink>
        </div>
        <div>
          <NavLink to=""> 
            <p className=" p-2 hovermaincolor"> <FaSignOutAlt className="" /> Logout</p>
          </NavLink>
        </div>
      </div> 
    </>
  );
};

export default SideBar;
