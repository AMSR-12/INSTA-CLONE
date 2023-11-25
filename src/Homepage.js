import React from 'react'
import "./Homepage.css"
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'
import Status from './Status'

const Homepage = () => {
  return (
    <div className='homepage'>
     
      <div className="homepage__nav">
<Sidenav/>
      </div>
       <div className="homepage__timeline">
        
<div className="status">
<Status/></div>
<Timeline/>
      </div> 
      
  
  </div>
  )
}

export default Homepage
