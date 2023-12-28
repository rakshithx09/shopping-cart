import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {color} from './theme.js'
import Cart from '../src/components/Cart';

function App() {
  const [cartData, setCartData] = useState([]);
  const [state, setState] = useState(false);
  const [colorTheme, setColorTheme] =useState(false)

  const pallete =colorTheme ? color.dark : color.light ;

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
    <Navbar state={state} setState={setState} toggleDrawer={toggleDrawer} cartData={cartData} setColorTheme={setColorTheme} colorTheme={colorTheme} pallete={pallete} />
    <Main cartData={cartData} setCartData={setCartData} pallete={pallete}  ></Main>
    <Cart state={state} setState={setState} toggleDrawer={toggleDrawer} cartData={cartData} setCartData={setCartData} pallete={pallete} colorTheme={colorTheme} ></Cart>
   
  </>
}

export default App
