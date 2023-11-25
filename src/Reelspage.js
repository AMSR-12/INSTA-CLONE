import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FiHeart} from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import { HiDotsHorizontal } from "react-icons/hi";
import './reelspage.css';

const Reelspage = () => {
  return (
    <div className='mt-5'>
       <Row>
        <Col></Col>
        <Col>
           <Row>
            <Col lg={11}>
                <div>
                <iframe width="320" height="560" src="https://www.youtube.com/embed/tk6UhdK_9Fw" title="Tom&amp;Jerry 🥰 sangeethkumar #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </Col>
            <Col lg={1}>
             <div  className='reelicons'> 
                <div>
                    <div><FiHeart style={{fontSize:"23px"}}/></div>
                    <div><p style={{fontSize:"13px"}}>1.2K</p></div>
                </div>
                <div>
                    <div><FaRegComment style={{fontSize:"23px"}} /></div>
                    <div><p style={{fontSize:"13px"}}>53</p></div>
                </div>
                <div> 
                     <div><FiSend  style={{fontSize:"23px"}}/></div>
                </div>
                <div>
                    <div style={{marginTop:"23px"}}><img src={'https://www.bing.com/th?id=OIP.7_2jbcdt1NnIt7MWaTTVRQHaHa&pid=3.1&cb=&w=300&h=300&p=0'} width="30px" height="30px"/></div>
                </div>
                <div>
                    <div><HiDotsHorizontal style={{fontSize:"20px",marginTop:"20px",marginLeft:"5px"}}/></div>
                </div>
                <div>
                    <div><img src={'https://th.bing.com/th?id=OIP.k4cglAcVePk9RoE-YNdsbwHaJH&w=225&h=277&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'} width="30px" height="30px" style={{marginTop:"23px"}}/></div>
                </div>
             </div>   
              </Col>
            </Row>

            
            
          
            
            
            <div className='mt-3'>
            <Row>
               <Col lg={11}>
                <div>
                <iframe width="320" height="560" src="https://www.youtube.com/embed/9xFul3PE1DU" title="Watch full video in Lungiboys YouTube channel ❤️❤️#shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </Col>
            <Col lg={1}>
             <div  className='reelicons'> 
                <div>
                    <div><FiHeart style={{fontSize:"23px"}}/></div>
                    <div><p style={{fontSize:"13px"}}>249K</p></div>
                </div>
                <div>
                    <div><FaRegComment style={{fontSize:"23px"}} /></div>
                    <div><p style={{fontSize:"13px"}}>323</p></div>
                </div>
                <div> 
                     <div><FiSend  style={{fontSize:"23px"}}/></div>
                </div>
                <div>
                    <div style={{marginTop:"23px"}}><img src={'https://www.bing.com/th?id=OIP.7_2jbcdt1NnIt7MWaTTVRQHaHa&pid=3.1&cb=&w=300&h=300&p=0'} width="30px" height="30px"/></div>
                </div>
                <div>
                    <div><HiDotsHorizontal style={{fontSize:"20px",marginTop:"20px",marginLeft:"5px"}}/></div>
                </div>
                <div>
                    <div><img src={'https://th.bing.com/th?id=OIP.lpL1vYde7SB48TIUPr3nOQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'} width="30px" height="30px" style={{marginTop:"23px"}}/></div>
                </div>
             </div>   
              </Col>
            </Row>
            </div>

        </Col>
        <Col></Col>
       </Row>
    </div>
  )
}

export default Reelspage