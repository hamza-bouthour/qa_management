import {useState, useEffect } from 'react';  
import * as dumbData from '../../data/dumbData';
import QaCard from './QaCard';



const WorkView = props => {

    return (
        <div className="qa-cards">
            {props.qaList.map((qa, i) => {
                const activeTickets = props.ticketList.filter((ticket) => {
                    return qa.activeTicket.includes(ticket.id)
                });
                const queue = props.ticketList.filter((ticket) => {
                    return !qa.activeTicket.includes(ticket.id)
                });
                return (
                 <QaCard 
                    key={i}
                    name={qa.firstName} 
                    active={qa.active}
                    activeTickets={activeTickets}
                    queue={queue}
                    />
                )
            })}
        </div>
    )
}

export default WorkView;