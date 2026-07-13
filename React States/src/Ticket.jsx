import TicketNum from "./ticketNum";
import "./ticket.css";
export default function Ticket({ ticket }) {
  console.log(ticket);
  return (
    <>
      <h1>Lottery Ticket!</h1>
      <div className="ticket">
        {ticket.map((num, idx) => {
          return <TicketNum key={Math.random()} num={num}></TicketNum>;
        })}
      </div>
    </>
  );
}
