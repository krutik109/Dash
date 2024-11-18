import React from 'react'
import './ActivityParticipates.css'
import '../../App.css'
import { Link } from 'react-router-dom'

const ActivityParticipates = () => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
    

    
            <div>
    
    <Link to={"/eventparticipation"}>  <button className="participatebtn hovermaincolor rounded-top bg-white text-dark btn border-bottom  border-danger">
      <span className='participatebtnspan'>Events Participate</span></button></Link> 
    <Link to="/activityparticipate"><button  className="participatebtn hovermaincolor border-bottom text-dark bg-white rounded-top border-danger btn">
     <span className='participatebtnspan'> Activity Participate</span></button></Link>
      </div>

    </div>
    </div>
  )
}

export default ActivityParticipates
