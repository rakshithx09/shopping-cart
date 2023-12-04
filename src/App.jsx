import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Cart from './components/cart'

function App() {

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
      <Navbar state={state} setState={setState} toggleDrawer={toggleDrawer} />
      <Main></Main>
      <Cart state={state} setState={setState} toggleDrawer={toggleDrawer}></Cart>

      </>
}

export default App
