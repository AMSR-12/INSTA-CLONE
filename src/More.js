
import  React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import './More.css';


// export default function BasicMenu() {
  const More  = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
  setAnchorEl(null);
  };

  return (
    <div className='container'>
          <div className="sidenav_button"
            onClick={handleClick}
            
          >
            <MenuIcon/><span className='text'>More</span>
            
          </div>
          

       
      <Menu className='menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 
          style: {
            backgroundColor: ' white', 
            color: 'black',
           
            borderRadius: '30px',
            padding: '20px',
            width:'300px',
            height:'400px'

          },
        }}

      >

        <MenuItem onClick={handleClose}>
            Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
            Your activity
        </MenuItem>
        <MenuItem onClick={handleClose}>
            Saved
        </MenuItem>
        <MenuItem onClick={handleClose}>
            Switch appearance
        </MenuItem>
        <MenuItem onClick={handleClose}>
            Report a problem
        </MenuItem>
        <br></br>
        <MenuItem onClick={handleClose}>
            Switch accounts
        </MenuItem>
        <hr></hr>
        <MenuItem onClick={handleClose}>
            Log out
        </MenuItem>
         
      </Menu>
      </div>
    
   
  );
}
export default More