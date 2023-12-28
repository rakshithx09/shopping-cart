import Box from "@mui/material/Box";
import Drawer from "@mui/material/SwipeableDrawer";
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import Paper from "@mui/material/Paper";
import CartCard from "./CartCard";
import { useTheme } from '@emotion/react';
import { fonts } from "../theme";
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Cart({ state, toggleDrawer, cartData, setCartData, pallete, colorTheme }) {
    /* console.log(cartData); */
    const theme = useTheme();
    let total = cartData.reduce((accumulator, item) => {
        return accumulator + item.price * item.count;
    }, 0);
    const list = () => (
        <Box
            sx={{
                backgroundColor: pallete.surfacePrimary,
                width: 700,
                position: 'relative',
                padding: '1rem',
                minHeight:'250vh',
                [theme.breakpoints.down('md')]: {
                    width: 400,
                },
                [theme.breakpoints.down('sm')]: {
                    width: 320,
                },

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
                    marginBottom: '0.5rem',
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <Typography gutterBottom variant="h6" component="div" sx={{
                fontFamily: fonts.kanit,
                fontSize: '37px',
                padding: '0 5%',
                color: colorTheme ? 'white' : '',
            }}>
                Your Cart
            </Typography>
            {cartData.length > 0 ? <>
                <Paper square={false} elevation={3} sx={{

                    width: '90%',
                    backgroundColor: pallete.surfaceSecondary,
                    padding: '1.5rem 1rem',
                    margin: '1.2rem auto'
                }}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="h6" component="div" sx={{ color: pallete.textPrimary }} >Estimated total: </Typography>
                        <Typography sx={{ marginLeft: 'auto', color: pallete.textPrimary }} variant="h6" component="div"> Rs. {total}</Typography>

                    </Box>

                </Paper>

                <Box sx={{backgroundColor:pallete.surfacePrimary,}}>
                    {
                        cartData.map((item) => {
                            return (

                                <CartCard key={item.id} item={item} cartData={cartData} setCartData={setCartData} pallete={pallete} ></CartCard>

                            )
                        })
                    }
                </Box>
            </>
                : <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}><Typography variant="h6"
                    sx={{
                        color: pallete.textSecondary,
                        textAlign: 'center',
                        padding: '2rem 0',
                        fontFamily: fonts.nuonitoSans,
                    }}
                >Your cart is empty </Typography>
                    <AcUnitIcon sx={{ color: colorTheme ? 'white' : '' }}></AcUnitIcon>
                </Box>
            }

        </Box>
    );

    return (

        <Drawer
            anchor={"right"}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            {list()}
        </Drawer>

    );
}