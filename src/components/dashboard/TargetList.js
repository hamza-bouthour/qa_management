import {useState, useEffect } from 'react';  
import * as dumbData from '../../data/dumbData';
import Ticket from './Ticket';



const TargetList = props => {

    return (
        <ul className="list-group">
            {props.list.map(ticket => {
                return (
                    <Ticket 
                        key={ticket.id}
                        name={ticket.name} 
                        number={ticket.number} 
                        status={ticket.status}  
                        priority={ticket.priority}
                        ba={ticket.ba} 
                        user={dumbData.users.filter((user) => {
                            
                            return user.id == ticket.qaId
                            // return user.id  === ticket.qaId
                        })}
                    />
                    )
            })}
        </ul>
    )
}

export default TargetList;