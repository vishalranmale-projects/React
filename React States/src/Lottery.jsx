import Ticket from "./Ticket";
import { useState } from "react";
import sum from "./Sum";
import lotteryWinSum from "./lotteryWinSum";
import LotteryTicket from "./lotteryTicket";
import BuyTicket from "./button";
export default function Lottery({ size = 3, winningSum = 15 }) {
  let [lottery, setlottery] = useState(LotteryTicket(size));
  function buyTicket() {
    setlottery(LotteryTicket(size));
  }
  return (
    <>
      {lotteryWinSum(lottery, winningSum) ? (
        <h1>he he You Win An Lottery!</h1>
      ) : null}
      <Ticket ticket={lottery}></Ticket>
      <BuyTicket buytck={buyTicket}></BuyTicket>
    </>
  );
}
