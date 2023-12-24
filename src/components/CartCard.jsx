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
import Delete from '@mui/icons-material/Delete';

export default function CartCard({ item, cartData, setCartData }) {
    const [count, setCount] = useState(item.count);

    function updateCount(code) {
        let index = cartData.findIndex((data) => data.id === item.id)
        let updatedCartData = [...cartData];
        code === 0 ? updatedCartData[index] = { ...updatedCartData[index], count: updatedCartData[index].count + 1 } : updatedCartData[index] = { ...updatedCartData[index], count: updatedCartData[index].count === 0 ? 0 : updatedCartData[index].count + -1 }
        /*  code === 0 ? setCartData([...cartData, { ...item, count: item.count + 1 }]) : setCartData([...cartData, { ...item, count: item.count - 1 }]); */
        setCartData([...updatedCartData]);
    }
    function deleteItem() {
        let index = cartData.findIndex((data) => data.id === item.id);
        cartData.splice(index,1);
        setCartData([...cartData]);
    }

    return (
        <Card sx={{
            cursor: 'pointer',
            margin: 'auto',
            width: '90%',
            position: 'relative',
            padding: '1rem',

            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
        }}
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
            <Box sx={{ flexGrow: '1' }}>
                <CardContent sx={{ zIndex: '3' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography /* gutterBottom */ variant="h6" component="div" sx={{ flexGrow: '1' }}>
                            {item.title.toUpperCase()}
                        </Typography>
                        {/* <IconButton><Delete></Delete></IconButton> */}

                    </Box>
                    <Box sx={{ display: 'flex', marginTop: '0.5rem' }}>
                        <Typography variant='h2' sx={{ fontSize: '16px', fontWeight: '800', padding: '0.25rem 0', flexGrow: '1' }}>Rs. {item.price}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button onClick={() => { /* count == 0 ? setCount(0) : setCount(count - 1) */ updateCount(1) }} ><RemoveIcon></RemoveIcon></Button>
                            <Typography>{item.count}</Typography>
                            <Button onClick={() => {/* item.count++; *//*  setCount(count + 1) */updateCount(0) }}><AddIcon></AddIcon></Button>
                        </Box>
                    </Box>

                </CardContent>
                <CardActions sx={{ /* position: 'absolute', */ bottom: '0.5rem', right: '0.5rem', zIndex: '3' }}>
                    <Button onClick={deleteItem} startIcon={<Delete />} variant='contained' sx={{
                        backgroundColor: '#d10f0f',
                        marginLeft: 'auto',
                        height: '2rem',
                        '&:hover': {
                            backgroundColor: '#d10f0f',

                        },

                    }}>{/* <Delete></Delete> */}Delete</Button>
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