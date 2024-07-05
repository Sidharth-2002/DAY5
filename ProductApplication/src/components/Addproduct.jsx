import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Addproduct = () => {
  return (
    <Box
      component="form"
      sx={{
        textAlign: 'center',
      }}
      noValidate
      autoComplete="off"
    >
    <div style={{ marginTop:'3%' }}>
        <Typography
        variant='h4'
        style={{ fontWeight:'bold' }}
        >
          ADD PRODUCT  
        </Typography>
    </div>
    <div style={{ marginTop:'2%' }}>
        <TextField
            
            label="Product Name"
            variant='outlined'
            style={{ width:'20%'  }}
           />
    </div>
    <div style={{ marginTop:'2%' }}>
        <TextField
            
            label="Description"
            multiline
            variant='outlined'
            style={{ width:'20%'  }}
         />
    </div>
    <div style={{ marginTop:'2%' }}>
        <TextField
            
            label="Price"
            variant='outlined'
            style={{ width:'20%'  }}
         />
    </div>
    <div style={{ marginTop:'2%' }}>
        <TextField
            
            label="Category"
            variant='outlined'
            style={{ width:'20%'  }}
         />
    </div>
    <div style={{ marginTop:'3%' }}>
    <Button variant="contained"  >
        ADD
    </Button>
    </div>
    </Box>
  )
}

export default Addproduct