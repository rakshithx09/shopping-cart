import { React, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css'
import ProductDialog from './ProductDialog';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import { fonts } from '../theme';



function addToCart(data, cartData, setCartData) {
  let index = cartData.findIndex(item => item.id === data.id);

  if (index !== -1) {
    // If the item is already in the cart, update its count
    let updatedCartData = [...cartData];
    updatedCartData[index] = { ...updatedCartData[index], count: updatedCartData[index].count + 1 };
    setCartData(updatedCartData);
  } else {
    // If the item is not in the cart, add it with count set to 1
    setCartData([...cartData, { ...data, count: 1 }]);
  }
}
function ProductCard({ data, cartData, setCartData, snackState, setSnackState, handleSnackClose, handleSnackClick }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("opening")
    setOpen(true);
  };
  const handleClose = () => {
    console.log("closing")
    setOpen(false);
  };


  return (
    <>
      {/* <div className="cardContainer" onClick={handleClickOpen} >  */}
      <Card style={{
        /* [theme => theme.breakpoints.down('md')]: {
          border: '5px solid red' // Adjust width for screens equal to or wider than 'sm'
        } */
      }} sx={{
        cursor: 'pointer',
        maxWidth: '330px',
        minWidth: '290px',
        flex: '1',
        position: 'relative',
        paddingBottom: '10px',
        /*  */
        marginBottom: '1rem',
        [theme.breakpoints.down('md')]: {
         /*  paddingBottom: '30px', */
          /* height: '480px' */
        },
        [theme.breakpoints.down('sm')]: {
          minWidth: '260px',
          /* height: '460px' */
        },
      }}
        elevation={4} >
        <CardMedia onClick={handleClickOpen}
          component="div"
          image={data.images[0]}
          title="green iguana"
          sx={{
            width: 'auto',
            height: '280px',
            /* backgroundPosition: 'centre', */
            [theme.breakpoints.down('md')]: {
              height: '260px'
            },
          }}
        />
        <CardContent sx={{ zIndex: '3', padding:'1rem 1rem 0' }} onClick={handleClickOpen}>
          <Typography sx={{
            height:'35px',
            /*  border:'2px solid black', */
             whiteSpace: 'nowrap',
             overflow: 'hidden',
             textOverflow: 'ellipsis',
            fontFamily: fonts.nuonito,
            [theme.breakpoints.down('md')]: {
              fontSize: '17px'
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: '18px'
            },
          }} variant="h6" component="div">
            {data.title.toUpperCase()}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Rating size='small' precision={0.25} name="read-only" value={data.rating} readOnly sx={{ display: 'flex', alignItems: 'center' }} />
            <Typography sx={{ fontFamily: fonts.nuonito, }}>({Math.floor(Math.random() * (1000)) + 1})</Typography>
          </Box>
          <Typography variant='h5' sx={{
            fontSize: '1.25rem',
            padding: '0.25rem 0',
            fontFamily: fonts.nuonitoSans,
            fontWeight: '600',
            [theme.breakpoints.down('md')]: {
              fontSize: '1rem'
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.9rem'
            },
          }}>Rs. {data.price}</Typography>
          <Typography sx={{
            fontFamily: fonts.nuonitoSans,
            height:'61px',
           /*  border:'2px solid black', */
            /* whiteSpace: 'nowrap', */
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            [theme.breakpoints.down('md')]: {
              fontSize: '0.92rem'
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.82rem'
            },
          }} variant="body2" color="text.secondary">
            {data.description}
          </Typography>

        </CardContent>
        <CardActions sx={{ /* position: 'absolute', bottom: '0.5rem', right: '0.5rem', */ zIndex: '3',  }}>
          <Button size="small" variant='contained' sx={{
            '&:hover': {
              backgroundColor: 'green',
            },
            marginLeft: 'auto', backgroundColor: 'green', color: 'white'
          }} >Buy Now</Button>
          <Button size="small" variant='contained' sx={{
            '&:hover': {
              backgroundColor: 'green',
            },
            backgroundColor: 'green', color: 'white'
          }} onClick={() => {/* setCartData([...cartData, {...data,count:1} ]); *//*  console.log(cartData) */addToCart(data, cartData, setCartData); handleSnackClick({ vertical: 'top', horizontal: 'right' }) }} >Add to cart</Button>
        </CardActions>


      </Card>
      {/* </div> */}
      <ProductDialog data={data} open={open} setOpen={setOpen} cartData={cartData} setCartData={setCartData} />
    </>
  )
}

export /* default */ { ProductCard, addToCart };