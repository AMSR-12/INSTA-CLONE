import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from './navigation/Sidenav';
import Explorepage from './Explorepage';

const Explore = () => {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col lg={2} >
                    <Sidenav/>
                </Col>
                <Col lg={10} className='navlineexplore' style={{borderLeft: "1px solid grey",height:"1000px"}}>
                    <Explorepage/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Explore