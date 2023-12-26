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
import { useTheme } from '@emotion/react';

export default function CartCard({ item, cartData, setCartData }) {
    const [count, setCount] = useState(item.count);

    const theme = useTheme();

    function updateCount(code) {
        let index = cartData.findIndex((data) => data.id === item.id)
        let updatedCartData = [...cartData];
        code === 0 ? updatedCartData[index] = { ...updatedCartData[index], count: updatedCartData[index].count + 1 } : updatedCartData[index] = { ...updatedCartData[index], count: updatedCartData[index].count === 0 ? 0 : updatedCartData[index].count + -1 }
        /*  code === 0 ? setCartData([...cartData, { ...item, count: item.count + 1 }]) : setCartData([...cartData, { ...item, count: item.count - 1 }]); */
        setCartData([...updatedCartData]);
    }
    function deleteItem() {
        let index = cartData.findIndex((data) => data.id === item.id);
        cartData.splice(index, 1);
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
            gap: '1rem',
            [theme.breakpoints.down('md')]: {
                padding: '0 3px',
                width: '100%',

            },
        }}
            elevation={4} >
            <CardMedia
                component="div"
                image={item.images[0]}
                sx={{
                    width: '150px',
                    height: '150px',
                    backgroundPosition: 'centre',
                    [theme.breakpoints.down('md')]: {
                        width: '40%'
                    },
                    [theme.breakpoints.down('sm')]: {
                        width: '35%',
                    },
                }}
            />
            <Box sx={{
                flexGrow: '1',
                padding: '0.5rem 0',
                [theme.breakpoints.down('md')]: {
                    width: '55%'
                },
                [theme.breakpoints.down('sm')]: {
                    padding: '1rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                },
            }}>
                <CardContent sx={{
                    zIndex: '3',
                    [theme.breakpoints.down('sm')]: {
                        padding: '1rem 0.9rem 0'
                    },
                }}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography /* gutterBottom */ variant="h6" component="div" sx={{
                            /* border: '2px solid black', */
                            maxHeight: '3rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            flexGrow: '1',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '1rem'
                            },
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '0.9rem'
                            },
                        }}>
                            {item.title.toUpperCase()}
                        </Typography>
                        {/* <IconButton><Delete></Delete></IconButton> */}

                    </Box>
                    <Box sx={{ display: 'flex', marginTop: '0.5rem' }}>
                        <Typography variant='h2' sx={{
                            fontSize: '19px',
                            fontWeight: '800',
                            padding: '0.25rem 0',
                            flexGrow: '1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flexStart',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '18px',
                                minWidth: '3rem'
                            },
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '15px',
                                minWidth: '2rem'
                            },
                        }}>Rs. {item.price}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', }}>
                            <Button sx={{

                                [theme.breakpoints.down('md')]: {
                                    minWidth: '50px'
                                },
                                [theme.breakpoints.down('sm')]: {
                                    minWidth: '35px'
                                },
                            }} size='small' onClick={() => { /* count == 0 ? setCount(0) : setCount(count - 1) */ updateCount(1) }} ><RemoveIcon></RemoveIcon></Button>
                            <Typography>{item.count}</Typography>
                            <Button sx={{
                                [theme.breakpoints.down('md')]: {
                                    minWidth: '50px'
                                },
                                [theme.breakpoints.down('sm')]: {
                                    minWidth: '35px'
                                },
                            }} size='small' onClick={() => {/* item.count++; *//*  setCount(count + 1) */updateCount(0) }}><AddIcon></AddIcon></Button>
                        </Box>
                    </Box>

                </CardContent>
                <CardActions sx={{ /* position: 'absolute', */
                    bottom: '0.5rem',
                    right: '0.5rem',
                    zIndex: '3',
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: 'column',
                        gap: '0.5rem',
                        padding: '0 8px '
                    },
                }}>
                    <Button onClick={deleteItem} startIcon={<Delete />} variant='outlined' color='error' sx={{
                        /* backgroundColor: '#d10f0f', */
                        marginLeft: 'auto',
                        height: '2rem',
                        '&:hover': {
                            /* backgroundColor: '#d10f0f', */

                        },
                        [theme.breakpoints.down('md')]: {
                            fontSize: '0.775rem',
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '0.75rem',
                            margin: 'auto',
                            width: '95%'
                        },

                    }}>{/* <Delete></Delete> */}Delete</Button>
                    <Button size="small" variant='outlined' color='success' sx={{
                        '&:hover': {
                            /* backgroundColor: 'green', */
                        },
                        marginLeft: '8px',
                        /* backgroundColor: 'green', */
                        /* color: 'white', */
                        [theme.breakpoints.down('md')]: {
                            fontSize: '0.775rem',
                            /* padding:'7px 7px' */
                            height: '2rem',
                            width: '5rem'
                        },
                        [theme.breakpoints.down('sm')]: {
                            /* fontSize:'0.675rem', */
                            margin: '0 auto !important',
                            width: '95%'
                        },
                    }} >Buy Now</Button>

                </CardActions>
            </Box>

        </Card>
    )
}