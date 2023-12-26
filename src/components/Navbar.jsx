import '../styles/navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { fonts } from '../theme';
import { Box } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

function Navbar({state, setState, cartData }) {
    return <div className="nav">
        <Box sx={{display:'flex', marginLeft:'3rem', alignItems:'center', gap:'0.5rem'}}>
            <LocalMallIcon /* sx={{textAlign:'center'}} */ fontSize='large'></LocalMallIcon>
        <h1 className="navHeading" style={{fontFamily:'Kanit, sans-serif',
    color:'#5e5e5e'}} >ShopMart</h1>
    </Box>
        <ul>
            <li> <IconButton> <NotificationsNoneIcon fontSize='large'></NotificationsNoneIcon></IconButton></li>
            <li> <IconButton onClick={(event) => {
                if (
                    event &&
                    event.type === "keydown" &&
                    (event.key === "Tab" || event.key === "Shift")
                ) {
                    return;
                }

                setState(!state);
            }}><Badge color="primary" badgeContent={cartData.length} max={10}><ShoppingCartOutlinedIcon fontSize='large' ></ShoppingCartOutlinedIcon></ Badge > </IconButton></li>

        </ul>
    </div>
}
export default Navbar;