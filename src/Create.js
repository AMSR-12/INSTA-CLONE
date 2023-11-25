import React from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import Modal from '@mui/material/Modal';
const Create = () => {
  function handleOpen(){}
  function handleClose(){}
  function open(){}
  
  return (

      <div>
      
       <button onClick={handleOpen} className="sidenav_button">
       <AddBoxOutlinedIcon />
         <span className='text'>Create</span>
       </button>   
       
       <Modal
        open={open}
        onClose={handleClose}
       
      >
        <div className="profile">
          <div className='create'>
          <h3 className='head_title'> Create new post
         < hr className="line" />
          </h3>
           <AddToPhotosIcon style={{ fontSize: 50 }} />
        <div>
          <h2>Drag photos and videos here</h2>
          </div>
          <button className='btn'>Select from computer</button>
        </div>
        </div>
      </Modal>
    </div>
      
      
   
  )
}

export default Create
