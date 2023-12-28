import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import '../styles/dialog.css';
import Rating from '@mui/material/Rating';
import { addToCart } from './ProductCard';
import { useTheme } from '@emotion/react';
import { fonts } from '../theme';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ProductDialog({ data, open, setOpen, cartData, setCartData, handleSnackClose, handleSnackClick , pallete}) {
    const theme = useTheme();
    /* const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    }; */
    const handleClose = () => {
        console.log("closing");
        setOpen(false);
    };

    return (
        <React.Fragment>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth='xl'
                sx={{
                   
                    height:'100vh'

                }}
                style={{ maxHeight: 'none', maxWidth: 'none', overflowY: 'none' }}
            >
                <DialogTitle sx={{ m: 0, p: 2,  backgroundColor:pallete.surfaceSecondary, }} id="customized-dialog-title">
                    <Typography sx={{color:pallete.textPrimary}}> ID: {data.id}</Typography>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent /* dividers */ sx={{}}>
                    <Box sx={{ display: 'flex',
                    padding:'0 0 2rem 2rem',
                    backgroundColor:pallete.surfaceSecondary,
                    [  theme.breakpoints.down('lg')]: {
                        flexDirection:'column',
                        padding:'0'
                      },
                    }}>

                        <img src={data.images[0]} alt={data.title} />
                        <Box sx={{ 
                            backgroundColor:pallete.surfaceSecondary,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            padding:'2rem ',
                            [theme.breakpoints.down('md')]: {
                                padding:'15px 25px  ',
                            },
                             }}>
                            <Typography /* gutterBottom */
                                
                                sx={{
                                    color:pallete.textPrimary,
                                    fontFamily:fonts.nuonito,
                                    [theme.breakpoints.down('xl')]: {
                                        fontSize: '1.5rem'
                                    },
                                    /* [theme.breakpoints.down('md')]: {
                                        fontSize: '2rem'
                                    }, */

                                }} variant="h4" component="div">
                                {data.title.toUpperCase()}
                            </Typography>
                            <Box sx={{ display: 'flex' }}>
                                <Rating size='small' precision={0.1} name="read-only" value={data.rating} readOnly sx={{ display: 'flex', alignItems: 'center' }} />
                                <Typography sx={{color:pallete.textSecondary}} >({Math.floor(Math.random() * (1000)) + 1})</Typography>
                            </Box>
                            <Typography
                                sx={{
                                    color:pallete.textPrimary,
                                    [theme.breakpoints.down('xl')]: {
                                        fontSize: '1.5rem'
                                    },
                                    [theme.breakpoints.down('lg')]: {
                                       /*  fontSize: '1.2rem' */
                                    },
                                }} variant='h5'>Rs. {data.price}</Typography>
                            <Typography sx={{
                                color:pallete.textSecondary,
                                fontFamily:fonts.nuonitoSans,
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '1.2rem'
                                },
                                [theme.breakpoints.down('md')]: {
                                    fontSize: '1rem'
                                },
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '0.8rem'
                                },
                            }} gutterBottom>
                                {data.description}
                            </Typography>
                            <DialogActions 
                            sx={{padding:0}}>
                                <Button size='large' variant='contained' autoFocus onClick={handleClose}>
                                    BUY NOW
                                </Button>
                                <Button size='large' variant='contained' autoFocus onClick={() => { addToCart(data, cartData, setCartData); /* handleSnackClick({ vertical: 'top', horizontal: 'right' }) */ }}>
                                    ADD TO CART
                                </Button>
                            </DialogActions>
                        </Box>


                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}