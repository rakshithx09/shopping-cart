import '../styles/navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
function Navbar({state, setState, cartData }) {
    return <div className="nav">
        <h1 className="navHeading">ShopMart</h1>
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