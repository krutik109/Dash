import React, { useState } from 'react'
import './ActivityParticipates.css'
import { Link } from 'react-router-dom'


const ActivityParticipaes = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      participantname: "Evelyn Harper",
      description: "Event and recreational activities.",
    time:"10:00 AM",
      date: "2022/01/01",
      activityname: "Holi Festival ",
   
    },
    {
      id: 2,
      participantname: "Esther Howard",
      description: "Securing critica government systems.",
    time:"1:45 AM",
      date: "2022/01/01",
      activityname: "Holi Festival ",
   
    },
    {
      id: 3,
      participantname: "Esther Howard",
      description: "Securing critica government systems.",
    time:"1:45 AM",
      date: "2022/01/01",
      activityname: "Holi Festival ",
   
    },
    {
      id: 4,
      participantname: "Esther Howard",
      description: "Securing critica government systems.",
    time:"1:45 AM",
      date: "2022/01/01",
      activityname: "Holi Festival ",
   
    },
    {
      id: 5,
      participantname: "Esther Howard",
      description: "Securing critica government systems.",
    time:"1:45 AM",
      date: "2022/01/01",
      activityname: "Holi Festival ",
   
    },
    {
      id: 6,
      participantname: "Esther Howard",
      description: "Securing critica government systems.",
    time:"1:45 AM",
      date: "2022/01/01",
      activityname: "Holi Festival ",
   
    },
  ]);
  

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center' >
<div>
  <div className='d-flex justify-content-start mt-3'>
    
<Link to={"/eventparticipation"}>  <button className="participatebtn hovermaincolor rounded-top bg-white text-dark btn border-bottom  border-danger">
  <span className='participatebtnspan'>Events Participate</span></button></Link> 
<Link to="/activityparticipate"><button  className="participatebtn hovermaincolor border-bottom text-dark bg-white rounded-top border-danger btn">
 <span className='participatebtnspan'> Activity Participate</span></button></Link>
  </div>
  <div className="container-fluid row bg-white">
  <div>
    <h4 className="mt-3">Activity Participation</h4>
  </div>
  <div className="eventtable" style={{ overflowX: "auto" }}>
    {/* Header Row */}
    <div
      className="row p-2 head d-flex flex-row text-center text-dark"
      style={{
     // Ensures columns stay properly aligned
      }}
    >
      <div className="col-2 fw-bold text-start">Participator Name</div>
      <div className="col-4 fw-bold text-center">Description</div>
      <div className="col-2 fw-bold text-center">Activty Time</div>
      <div className="col-1 fw-bold text-center">Activty Date</div>
      <div className="col-2 fw-bold text-center">Activty Name</div>
    </div>

    {/* Rows */}
    {events.map((event, index) => (
      <div
        className="row data border-bottom p-2 align-items-center"
        key={index}
       
      >
        {/* Participator Name */}
        <div className="col-2 d-flex align-items-center">
          <img
            src="src/Images/profileimg.png"
            alt="avatar"
            className="rounded-circle profileimg me-2"
          />
          <span >{event.participantname}</span>
        </div>

        {/* Description */}
        <div className="col-4 text-center">
          <p>{event.description}</p>
        </div>

        {/* Time */}
        <div className="col-2 text-center">
          <p>{event.time}</p>
        </div>

        {/* Date */}
        <div className="col-1 text-center">
          <p>{event.date}</p>
        </div>

        {/* Event Name */}
        <div className="col-2 text-center">{event.activityname}</div>
      </div>
    ))}
  </div>
</div>

</div>
      </div>
    </div>
  )
}

export default ActivityParticipaes;
