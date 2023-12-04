import '../styles/navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
function Navbar({state, setState }) {
    return <div className="nav">
        <h1 className="navHeading">ShopMart</h1>
        <ul>
            <li><NotificationsNoneIcon fontSize='large'></NotificationsNoneIcon></li>
            <li> <IconButton onClick={(event) => {
                if (
                    event &&
                    event.type === "keydown" &&
                    (event.key === "Tab" || event.key === "Shift")
                ) {
                    return;
                }

                setState(!state);
            }}><ShoppingCartOutlinedIcon fontSize='large' ></ShoppingCartOutlinedIcon> </IconButton></li>

        </ul>
    </div>
}
export default Navbar;