import '../styles/navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { fonts } from '../theme';
import { Box, Typography } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Toggle from './toggle';
import { useTheme } from '@emotion/react';

function Navbar({ state, setState, cartData, colorTheme, setColorTheme, pallete }) {
    const theme = useTheme();
    return (<Box className="nav" sx={{ backgroundColor: pallete.surfacePrimary }}>
        <Box sx={{
            display: 'flex', marginLeft: '3rem', alignItems: 'center', gap: '0.5rem',
            [theme.breakpoints.down('sm')]: {
                marginLeft: '0.8rem'
            },
        }}>
            <LocalMallIcon sx={{
                textAlign: 'center',
                color: colorTheme ? 'white' : '',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '28px'
                },
            }} fontSize='large'></LocalMallIcon>
            <Typography variant='h6' className="navHeading" sx={{
                fontSize: '33px',
                fontFamily: 'Kanit, sans-serif',
                color: pallete.navText,
                [theme.breakpoints.down('md')]: {
                    fontSize: '30px'
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: '27px'
                },
            }} >ShopMart</Typography>
        </Box>
        <Box sx={{
            marginLeft: 'auto',
            marginRight: '2rem',
            [theme.breakpoints.down('sm')]: {
                marginRight: '0.5rem',
            },
        }}>
            <ul>
                <li style={{ width: '6.5rem', gap: '0.2rem' }}> {/* <IconButton> */}<Toggle onClick={() => { console.log('hey'); setColorTheme(!colorTheme) }} colorTheme={colorTheme}></Toggle> {/* <NotificationsNoneIcon fontSize='large'></NotificationsNoneIcon> */}{/* </IconButton> */}</li>
                <li> <IconButton onClick={(event) => {
                    if (
                        event &&
                        event.type === "keydown" &&
                        (event.key === "Tab" || event.key === "Shift")
                    ) {
                        return;
                    }

                    setState(!state);
                }}><Badge color="primary" badgeContent={cartData.length} max={10}>
                        <ShoppingCartOutlinedIcon fontSize='large'
                            sx={{
                                color:colorTheme? 'white' :' ',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '27px'
                                },
                            }}
                        ></ShoppingCartOutlinedIcon ></ Badge > </IconButton></li>

            </ul>
        </Box>
    </Box>
    )
}
export default Navbar;