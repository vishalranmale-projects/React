export default function sum(arr) {
  console.log(arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum == 15;
}
