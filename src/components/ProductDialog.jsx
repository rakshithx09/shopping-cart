import React from 'react'
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
import '../styles/dialog.css'
import Rating from '@mui/material/Rating';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ProductDialog({ data, open, setOpen }) {
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

                    /* padding: '3rem', */

                }}
                style={{ maxHeight: 'none', maxWidth: 'none', overflowY: 'none' }}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    ID: {data.id}
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
                <DialogContent /* dividers */>
                    <Box sx={{ display: 'flex'/* , height:'100%' */ }}>

                        <img src={data.images[0]} alt={data.title} />
                        <Box sx={{ /* border: '2px solid black', */display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '2rem' }}>
                            <Typography /* gutterBottom */ variant="h4" component="div">
                                {data.title.toUpperCase()}
                            </Typography>
                            <Box sx={{display:'flex'}}>
                            <Rating size='small' precision={0.1} name="read-only" value={data.rating} readOnly sx={{display:'flex', alignItems:'center'}} />
                            <Typography>({Math.floor(Math.random() * (1000 )) + 1})</Typography>
                            </Box>
                            <Typography variant='h5'>Rs. {data.price}</Typography>
                            <Typography gutterBottom>
                                {data.description}
                            </Typography>
                            <DialogActions>
                                <Button variant='contained' autoFocus onClick={handleClose}>
                                    BUY NOW
                                </Button>
                                <Button variant='contained' autoFocus onClick={handleClose}>
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