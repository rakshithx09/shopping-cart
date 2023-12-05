import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import Paper from "@mui/material/Paper";
import CartCard from "./CartCard";

export default function Cart({ state, toggleDrawer, cartData, setCartData }) {

    const list = () => (
        <Box
            sx={{
                width: 700,
                position: 'relative',
                padding: '1rem'
            }}
            role="presentation"
            onClick={(event) => {
                // Prevent the click event from reaching the SwipeableDrawer
                event.stopPropagation();
            }}
            onKeyDown={toggleDrawer(/* anchor, */ false)}
        >
            <IconButton
                aria-label="close"
                onClick={toggleDrawer(/* anchor, */ false)}
                sx={{
                    /* position: 'absolute',
                    right: 8,
                    top: 8, */
                    marginBottom: '2rem',
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <Typography gutterBottom variant="h5" component="div" sx={{
                padding: '0 5%'
            }}>
                Your Cart
            </Typography>
            <Paper square={false} elevation={3} sx={{

                width: '90%',
                height: '5rem',

                margin: '2rem auto'
            }}>

            </Paper>

            <Box>
                {
                    cartData.map((item) => {
                        return (

                            <CartCard key={item.id} item={item}></CartCard>
                            
                        )
                    })
                }
            </Box>

        </Box>
    );

    return (
        <div>
            <SwipeableDrawer
                anchor={"right"}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
}