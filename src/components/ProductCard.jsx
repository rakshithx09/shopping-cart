import { React, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css'
import ProductDialog from './ProductDialog';

function ProductCard({ data }) {
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
    <div onClick={handleClickOpen}>
    <Card sx={{ width: '350px', position: 'relative', paddingBottom: '3.5rem', height:'500px' }} elevation={4} >
      <CardMedia
        component="div"
        image={data.images[0]}
        title="green iguana"
        style={{
          width: 'auto',
          height: '350px',
          backgroundPosition: 'centre'
        }}
      />
      <CardContent sx={{ zIndex: '3' }}>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>

      </CardContent>
      <CardActions sx={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem' }}>
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
        }}  >Add to cart</Button>
      </CardActions>
      
    </Card>
    </div>
    <ProductDialog data={data} open={open} setOpen={setOpen}/>
    </>
  )
}

export default ProductCard;