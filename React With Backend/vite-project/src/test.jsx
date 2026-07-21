import { useState } from "react";
export default function Test() {
  let [resp, setresp] = useState({});
  async function getresp() {
    let resp1 = await fetch("http://localhost:3000/");
    resp1 = await resp1.json();
    setresp({ ...resp1 });
  }
  return (
    <>
      <h4>
        Your Resp is: <i>{resp.setup}</i> <i>{resp.punchline}</i>
      </h4>
      <button onClick={getresp}>Get resp</button>
    </>
  );
}
