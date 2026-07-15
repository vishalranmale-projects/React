import { useState } from "react";
import { useEffect } from "react";
export default function Counter() {
  let [countx, setcountx] = useState(0);
  let [county, setcounty] = useState(0);

  function change() {
    console.log("This  is An Change After An Re-render of An Componenets!");
  }

  useEffect(change, []);
  function updateCount() {
    setcountx((countx) => {
      return (countx += 1);
    });
  }
  return (
    <>
      <h1>Counts:{countx}</h1>
      <button onClick={updateCount}>+1</button>
    </>
  );
}
