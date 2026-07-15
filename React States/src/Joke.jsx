import { useState, useEffect } from "react";
export default function Jokes() {
  let [joke, setjoke] = useState("Please Create An Joke");
  async function initialJoke() {
    let J = await fetch("https://official-joke-api.appspot.com/random_joke");
    J = await J.json();
    setjoke({ setup: J.setup, punchline: J.punchline });
  }
  useEffect(() => {
    initialJoke();
  }, []);
  //   async function createJoke() {
  //     let J = await fetch("https://official-joke-api.appspot.com/random_joke");
  //     J = await J.json();
  //     console.log(J);
  //     setjoke({ setup: J.setup, punchline: J.punchline });
  //   }
  return (
    <>
      <h1>All Jokes</h1>
      <h3>
        <i>{joke.setup}</i>
        <i>{joke.punchline}</i>
      </h3>
      <button onClick={initialJoke}>newJoke!</button>
    </>
  );
}
