import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import image5 from './image5.jpg';
// import options  from './options.png';
// import story1 from './story1.jpeg';
// import story2 from './story2.jpeg';
// import story3 from './story3.jpeg';
// import storynew from './storynew.png';
// import grid from './grid.png';
// import reels from './reels.png';
// import save from './save.png';
// import tagged from './tagged.png';
import Profile from './Profile';

const Profilepage = () => {
  return (
    <main>    
      <div>
        <Row>
            <Col lg={4}>
                <div className='profilepic'>
                  <img src='https://i.pinimg.com/originals/6f/07/b7/6f07b7ac7c63c6d28bb389d7ac6ca51d.jpg' style={{borderRadius:'50%',height:'160px',width:'160px'}}/>
                </div>
            </Col>
            <Col lg={8}>
                <section>
                    <div className='profilename'>
                        <p className='profiletext'>arulselvi-123</p>
                        <button className='editprofile'>Edit Profile</button>
                        <button className='viewarchive'>View archive</button>
                        </div>

                    <div className='profilepara'>
                        <p className='paraposts'>8 posts</p>
                        <p className='parafollowers'>20 followers</p>
                        <p className='parafollowing'>150 following</p>
                    </div>

                    <div>
                        <p className='proname'>arulselvi252303
                        <br></br>Life has taught me Never expect anything from anyone
                        <br></br></p>
                    </div>
                </section>
            </Col>
        </Row>
        <div className='story'>
        <div><img src={'https://th.bing.com/th/id/OIP.44c-bCFEgrla9RM0fKb8fwHaHa?pid=ImgDet&w=193&h=193&c=7&dpr=1.1'} className='story3'/><p style={{fontSize:"14px",fontWeight:"600",marginLeft:'77px',marginTop:"4px"}}>New</p></div>
        </div>

        <div><hr></hr></div>

        <div>
            <Row>
                <Col lg={3}></Col>
                <Col lg={6} className='options'>
                    <Row>
                        <Col><img src={"https://www.instagram.com/arulselvi252303/?next=%2F"} style={{width:'11px',height:'11px',marginRight:'5px'}}/><span className='upload'>POSTS</span></Col>
                        <Col><img src={"https://www.instagram.com/arulselvi252303/saved/?next=%2F"} style={{width:'11px',height:'11px',marginRight:'5px'}}/><span className='upload'>REELS</span></Col>
                        <Col><img src={'https://www.instagram.com/arulselvi252303/tagged/?next=%2F'} style={{width:'15px',height:'15px',marginRight:'5px'}}/><span className='upload'>SAVED</span></Col>
                        <Col><img src={'https://www.instagram.com/arulselvi252303/tagged/?next=%2F'} style={{width:'15px',height:'15px',marginRight:'5px'}}/><span className='upload'>TAGGED</span></Col>
                    </Row>

                </Col>
                <Col lg={5}></Col>
               
            </Row>

        </div>

        <div className='mt-4'>
            <Row>
                <Col lg={4} ><img src={'https://th.bing.com/th/id/R.751b8a0c1e9b5d4a19fd8f493bfb0820?rik=fRT%2fVx4E0wiJRw&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f8800000%2fSweety-baby-sweety-babies-8885678-1920-1440.jpg&ehk=cRHz494sfJRC3YJdyFpYuplwiGSdtwrCHdqm3m4bj58%3d&risl=&pid=ImgRaw&r=0'} width='300px' height='280px'/></Col>
                <Col lg={4}><img src={'https://th.bing.com/th/id/R.751b8a0c1e9b5d4a19fd8f493bfb0820?rik=fRT%2fVx4E0wiJRw&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f8800000%2fSweety-baby-sweety-babies-8885678-1920-1440.jpg&ehk=cRHz494sfJRC3YJdyFpYuplwiGSdtwrCHdqm3m4bj58%3d&risl=&pid=ImgRaw&r=0'} width='300px' height='280px'/></Col>
                <Col lg={4}><img src={'https://th.bing.com/th/id/R.751b8a0c1e9b5d4a19fd8f493bfb0820?rik=fRT%2fVx4E0wiJRw&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f8800000%2fSweety-baby-sweety-babies-8885678-1920-1440.jpg&ehk=cRHz494sfJRC3YJdyFpYuplwiGSdtwrCHdqm3m4bj58%3d&risl=&pid=ImgRaw&r=0'} width='300px' height='280px'/></Col>
                <Col lg={4}><img src={'https://www.success.com/wp-content/uploads/legacy/sites/default/files/new3.jpg'} width='300px' height='280px'/></Col>
                <Col lg={4} ><img src={'https://1.bp.blogspot.com/-KdAN9zkS3cA/WCUDcNfzV7I/AAAAAAAAEj4/Go84Y76EtaMqh8Vjtj4ELSNdxTu5W3YmwCLcB/s1600/gif-animated-image-landscape-11-sky.gif'}width='300px' height='280px'/></Col>
            
            <Col lg={4} ><img src={'https://th.bing.com/th/id/R.80e42fe5c2b50bf3c1b771eed3c6645e?rik=D0kpEGGk6RNEwg&riu=http%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f09%2fanimated-gif-nature-14.gif&ehk=8DGzePjrbYFptCrlXwZeJiofP4K3VrcuL1knL%2fYJvYk%3d&risl=&pid=ImgRaw&r=0'}width='300px' height='280px'/></Col>
            </Row>

        </div>

      </div>
     
    </main>

  )
}

export default Profilepage