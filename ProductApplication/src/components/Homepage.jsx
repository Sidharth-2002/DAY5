import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Homepage = () => {
  const [products,setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProducts(res.data)
    })
  })
  return (
    <div>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h1>HOME PAGE</h1>
        </Typography>
        <Grid container spacing={2} justifyContent="center" style={{ padding:'0% 2% 0% 2%' }}>
            {products.map((item) => (
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: '100%', margin: '5% auto', textAlign: 'left' }}>
                        <CardContent>
                            <CardMedia
                              component="img"
                              height="194"
                              image= {item.image}
                              alt="Paella dish"
                            />
                            <Typography sx={{ mb: 1.5 }}>
                                <b>Title:</b> {item.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                <b>Price:</b> <span style={{color:'green'}}>$</span> {item.price}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                <b>Category:</b> {item.category}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default Homepage