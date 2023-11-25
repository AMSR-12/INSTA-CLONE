import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Reelspage from './Reelspage';
import Sidenav from './navigation/Sidenav';

const Reels = () => {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col lg={2} >
                <Sidenav/> 
                </Col>
                <Col lg={10} className='navlineexplore' style={{borderLeft: "1px solid grey",height:"2000px"}}>
                    <Reelspage/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Reels