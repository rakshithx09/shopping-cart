import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Cart from './components/cart'

function App() {
  const [cartData, setCartData] = useState([]);
  const [state, setState] = useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };
  return <>
    <Navbar state={state} setState={setState} toggleDrawer={toggleDrawer} cartData={cartData}/>
    <Main cartData={cartData} setCartData={setCartData} ></Main>
    <Cart state={state} setState={setState} toggleDrawer={toggleDrawer} cartData={cartData} setCartData={setCartData} ></Cart>

  </>
}

export default App
