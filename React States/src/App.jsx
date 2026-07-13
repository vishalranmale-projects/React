// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Todo from "./Todo";
import "./App.css";
import Counter from "./Counter";
import Like from "./Like";
import LudoBoard from "./LudoBoard";

import Ticket from "./Ticket";
import Lottery from "./Lottery";
function App() {
  return (
    <>
      <Lottery size={3} winningSum={15} />
    </>
  );
}

export default App;
