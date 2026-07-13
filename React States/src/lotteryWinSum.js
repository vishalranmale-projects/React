export default function isWin(ticket, winningSum) {
  let sum = 0;
  for (let i = 0; i < ticket.length; i++) {
    sum = sum + ticket[i];
  }
  return winningSum == sum;
}
