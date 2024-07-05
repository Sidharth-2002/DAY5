import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:'left' }}>
            PRODUCTAPPLICATION
          </Typography>
          <Link to={'/home'}>          
          <Button style={{color:'white'}} color="inherit">HOMEPAGE</Button>
          </Link>
          <Link to={'/addproduct'}>
          <Button style={{color:'white'}} color="inherit">ADDPRODUCT</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar