import '../styles/navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function Navbar(){
    return <div className="nav">
        <h1 className="navHeading">ShopMart</h1>
        <ul>
            <li><NotificationsNoneIcon fontSize='large'></NotificationsNoneIcon></li>
            <li> <ShoppingCartOutlinedIcon fontSize='large'></ShoppingCartOutlinedIcon> </li>
           
        </ul>
    </div>
}
export default Navbar;