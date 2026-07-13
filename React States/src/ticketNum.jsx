import "./ticketNum.css";
export default function TicketNum({ num }) {
  return (
    <>
      <span className="ticketnum">
        <b>{num}</b>
      </span>
    </>
  );
}
