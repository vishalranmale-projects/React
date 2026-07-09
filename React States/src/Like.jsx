export default function Like(){
  let a = 10;
  let b;
  function inner(){
     b = a+10;
     console.log(b);
  }
  return(<h1 onClick={inner}>Addition is:{b}</h1>)
}