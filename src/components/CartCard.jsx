import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import  Delete from '@mui/icons-material/Delete';

export default function CartCard({item}){
    const [count, setCount] = useState(1);
    item.count=count;
    return (
    <Card  sx={{ 
        cursor: 'pointer',
        margin: 'auto',
        width: '90%', 
        position: 'relative', 
        padding:'1rem', 
        
        marginBottom: '1rem',
        display:'flex',
        alignItems:'center',
        gap:'1rem' }} 
        elevation={4} >
        <CardMedia
            component="div"
            image={item.images[0]}
            style={{
                width: '150px',
                height: '150px',
                backgroundPosition: 'centre'
            }}
        />
        <Box sx={{flexGrow:'1'}}>
            <CardContent sx={{ zIndex: '3' }}>
                <Box sx={{display:'flex'}}>
                <Typography gutterBottom  variant="h6" component="div" sx={{flexGrow:'1'}}>
                    {item.title.toUpperCase()}
                </Typography>
                <IconButton><Delete></Delete></IconButton>

                </Box>
                <Box sx={{display:'flex', marginTop:'1.5rem'}}>
                <Typography variant='h5' sx={{ fontSize: '1.25rem', padding: '0.25rem 0', flexGrow:'1'}}>Rs. {item.price}</Typography>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <Button onClick={()=>{count==0 ? setCount(0) :setCount(count-1)}} ><RemoveIcon></RemoveIcon></Button>
                    <Typography>{count}</Typography>
                    <Button onClick={()=>{/* item.count++; */ setCount(count+1)}}><AddIcon></AddIcon></Button>
                </Box>
                </Box>

            </CardContent>
            <CardActions sx={{ /* position: 'absolute', */ bottom: '0.5rem', right: '0.5rem', zIndex: '3' }}>
                <Button size="small" variant='contained' sx={{
                    '&:hover': {
                        backgroundColor: 'green',
                    },
                    marginLeft: 'auto', backgroundColor: 'green', color: 'white'
                }} >Buy Now</Button>
                
            </CardActions>
        </Box>

    </Card>
    )
}