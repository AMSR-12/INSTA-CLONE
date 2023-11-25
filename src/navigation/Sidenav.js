import React from "react";
import "./Sidenav.css";
//  import Create from "../Create";

import Search from "../Search";
 import More from "../More";
 import Create from "../Create";
 import Profile from "../Profile";
import Capture from '../Capture.PNG'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
// import  InstagramIcon  from "@mui/icons-material/Instagram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
 import AddBoxIcon from '@mui/icons-material/AddBox';
 import MenuIcon from '@mui/icons-material/Menu';
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from 'react-router-dom';
import Avatar  from "@mui/material/Avatar";
import  Modal  from "react-bootstrap/Modal";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

function Sidenav() {
  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const navigate =useNavigate();
  return (
    <div class="container">
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
        alt="Instagram Logo"
      />

      <div className="sidenav__buttons">
        <button className="sidenav__button" onClick={() => navigate('/')}>
          <HomeIcon />
          <span>Home</span>
        </button>
        

        <button className="sidenav__button" data-bs-toggle="offcanvas" data-bs-target="#search">
           <SearchIcon/> 
          <span>
           Search
            </span>
            </button>
            <div className="offcanvas offcanvas-start" id="search" style={{borderRadius:"0px 20px 20px 0px"}}>
          <div className="offcanvas-header">
          <h4 className="offcanvas-title">Search</h4>
          </div>
          <div className="offcanvas-body">
            <span className='searchoff'><SearchIcon style={{color:'grey'}}/></span>
            <input type='text' className='w-100 searchinput' placeholder='Search' />
           
            <div className='mt-4'><hr></hr>
            Recent</div>
            <p style={{fontSize:"14px",color:"grey",textAlign:"center",fontWeight:"600",marginTop:"220px"}}>No recent searches.</p>
          </div>
          </div>



        <button className="sidenav__button" onClick={() => navigate('/explore')} >
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sidenav__button" onClick={() => navigate('/reels')} >
          <SlideshowIcon/>
          <span>Reels</span>
        </button>


        <button className="sidenav__button" data-bs-toggle="offcanvas" data-bs-target="#message">
          <TelegramIcon />
          <span>Messages</span>
        </button>
        <div className="offcanvas offcanvas-start" id="message">
              <div className="offcanvas-header">
              <h4 className="offcanvas-title mt-3" style={{fontWeight:"650"}}>arulselvi<span style={{fontSize:"17px",marginLeft:"5px"}}><IoIosArrowDown /></span></h4><span style={{fontSize:"25px"}}> <FaRegEdit /></span>
              </div>
              <div className="offcanvas-body">
                  <div className='messagereq' ><p style={{fontWeight:"700"}}>Messages</p><p style={{fontWeight:"600",color:"grey"}}>Requests</p></div> 
                  <div className='message_friends'>
                      <Avatar src={'https://th.bing.com/th?id=OIP.QkpM3nNW9cKCiM8OkwrETgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'} className='message_image'/>
                      <div className='message_username'>
                        <div>
                           <div style={{fontSize:"16px",fontWeight:"500",marginLeft:"10px"}}>Esther_jenslin</div>
                           <div style={{fontSize:"14px",color:"grey",marginLeft:"10px"}}>Esther_jenslin sent an attachment...<span style={{color:"grey",fontWeight:"100",marginLeft:"6px"}}>3 d</span></div>
                        </div>
                      </div>
                  </div> 

                  <div className='message_friends'>
                      <Avatar src={'https://th.bing.com/th?id=OIP.6eUuDocLITRnWyXuX9WJhAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'} className='message_image'/>
                      <div className='message_username'>
                        <div>
                           <div style={{fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}>Priya</div>
                           <div style={{fontSize:"13px",color:"grey",marginLeft:"10px"}}>Active 9 h ago</div>
                        </div>
                      </div>
                  </div> 

                  <div className='message_friends'>
                      <Avatar src={'https://th.bing.com/th?id=OIP.QkpM3nNW9cKCiM8OkwrETgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'} className='message_image'/>
                      <div className='message_username'>
                        <div>
                           <div style={{fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}>Anu</div>
                           <div style={{fontSize:"13px",color:"grey",marginLeft:"10px"}}>anu sent an attachment.  15 w</div>
                        </div>
                      </div>
                  </div> 

                  <div className='message_friends'>
                      <Avatar src={'https://th.bing.com/th/id/R.4c140aa89525771f19485a8ec280acdb?rik=y3hgrvKLIYGHWQ&riu=http%3a%2f%2fwww.todaysparent.com%2fwp-content%2fuploads%2f2012%2f04%2fparallel-play.jpg&ehk=PgcPIP%2bBQLjbOLuRqV9n9O2sHl3OTJZVNXQ972aXY0U%3d&risl=&pid=ImgRaw&r=0'} className='message_image'/>
                      <div className='message_username'>
                        <div>
                           <div style={{fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}>Rashu</div>
                           <div style={{fontSize:"13px",color:"grey",marginLeft:"10px"}}>Active 5mintues ago</div>
                        </div>
                      </div>
                  </div> 

                  

                  <div className='message_friends'>
                      <Avatar src={'https://th.bing.com/th/id/R.4c140aa89525771f19485a8ec280acdb?rik=y3hgrvKLIYGHWQ&riu=http%3a%2f%2fwww.todaysparent.com%2fwp-content%2fuploads%2f2012%2f04%2fparallel-play.jpg&ehk=PgcPIP%2bBQLjbOLuRqV9n9O2sHl3OTJZVNXQ972aXY0U%3d&risl=&pid=ImgRaw&r=0'} className='message_image'/>
                      <div className='message_username'>
                        <div>
                           <div style={{fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}>Subha</div>
                           <div style={{fontSize:"13px",color:"grey",marginLeft:"10px"}}>you send an attachment....</div>
                        </div>
                      </div>
                  </div> 


              </div>
           </div>




        <button className="sidenav__button" data-bs-toggle="offcanvas" data-bs-target="#notification">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <div className="offcanvas offcanvas-start" id="notification">
               <div className="offcanvas-header">
                  <h4 className="offcanvas-title" style={{fontWeight:"650"}}>Notifications</h4>
                 
               </div>
               <div classname="offcanvas-body">
                 <div className='notify_friends'>
                      <Avatar src={'https://th.bing.com/th/id/OIP.qIu2wcvur-VB04HW0V0j0QHaFj?rs=1&pid=ImgDetMain'} className='notify_image'/>
                      <div className='notify_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"700"}}>Follow request</div>
                           <div style={{fontSize:"14px",color:"grey"}}>Saro +3 more </div>
                        </div>
                        <div> <IoIosArrowForward  style={{fontSize:'20px',color:"grey",marginLeft:"170px"}}/></div>
                     </div>
                </div> 

                <div><hr></hr></div>

                <p style={{fontWeight:"700",marginLeft:"17px",fontSize:"17px"}}>Today</p>

                <div className='notify_friends'>
                      <Avatar src={'https://th.bing.com/th?id=OIP.jAWiBYyfDobmrS_2vsYQcgHaL0&w=197&h=315&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'} className='notify_image' style={{border:"3px solid crimson"}}/>
                      <div className='notify_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"700"}}>Raj-kumar</div>
                           <div style={{fontSize:"14px",color:"grey"}}>request to follow tou 5d ago</div>
                        </div>
                        <div style={{marginLeft:"30px"}}> <button type='button' className='btn btn-primary' style={{borderRadius:"10px",width:"80px",height:"35px"}}>Follow</button></div>
                     </div>
                </div> 

                <div><hr></hr></div>

                
                

                

                
           </div>
           </div>

         
         

        <button className="sidenav__button" onClick={handleShow}>
             <AddBoxIcon />   
          <span>Create</span>
        </button>
        <Modal show={show} onHide={handleClose}>
         <Modal.Header >
         <Modal.Title style={{marginLeft:'170px',fontSize:"16px"}}>Create new Post</Modal.Title>
         </Modal.Header>
        <Modal.Body>
        <img src={Capture} style={{marginTop:'120px',marginLeft:"140px"}}/>
        <p className='text-center fs-5'>Drag photos and videos here</p>
        <div className='text-center' style={{marginBottom:"130px"}}><button type="button" className="btn btn-primary">Select From Computer</button></div>
        </Modal.Body>
         </Modal>



        <button className="sidenav__button" onClick={() => navigate('/profile')} >
          <Avatar><img  id='pix'
          src="https://th.bing.com/th?id=OIP.S8IBjyi8BerWc2MUb-S7LQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"/></Avatar>
         <span>Profile</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          
          <span className="sidenav__buttonText"><More/></span>
          
        </button>
    

       
      

        
      </div>
    
   
      </div>
      </div>
  );
}

export default Sidenav;