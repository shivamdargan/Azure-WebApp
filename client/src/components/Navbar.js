import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import maq from "../assets/maqWhite.png"

const Navbar = () => {
  

  return (
    <AppBar position="relative" style={{ background: "#D33737",padding:"0px"}}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <img src={maq} alt = "logo" style={{maxHeight:"100px",maxWidth:"200px",marginRight:"30px"}}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
                href="/"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Task 1
              </Button>
              <Button
            
                href="/task2"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Task 2
              </Button>
              <Button
                href="/task3"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Task 3
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    )
  };
  
  export default Navbar;