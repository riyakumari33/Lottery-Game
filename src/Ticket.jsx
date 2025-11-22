import TicketNum from "./TicketNum"

export default function Ticket({ ticket }){
    return(
        <div className="Ticket">
            <p>Ticket</p>
            <h3>{ticket.map((num, idx) =>(
                <TicketNum num={num} key={idx}/>
            ))}</h3>
        </div>
    );
}