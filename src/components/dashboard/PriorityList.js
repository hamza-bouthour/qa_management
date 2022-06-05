import {useState, useEffect } from 'react';  
import * as dumbData from '../../data/dumbData';
import Ticket from './Ticket';
// import { ProgressBar  } from 'react-bootstrap';



const PriorityList = props => {

    return (
        <div>
            <h6>Target list <span>(6)</span></h6>
            <div className='priority-progress-box'>
                <h6 className='text-center'>75%</h6>
                <div className="progress">
                    <div className="progress-bar" 
                        role="progressbar" 
                        style={{width: "75%", backgroundColor: "#02ee93"}} 
                        aria-valuenow="75"
                        aria-valuemin="0" 
                        aria-valuemax="100">
                    </div>
                </div>
            </div>  
            <ul className="list-group">
            {/* <ProgressBar /> */}
            {props.list.map(ticket => {
                return (
                    <Ticket 
                        key={ticket.id}
                        // name={ticket.name} 
                        number={ticket.number} 
                        status={ticket.status}  
                        // priority={ticket.priority}
                        // ba={ticket.ba} 
                        // user={dumbData.users.filter((user) => {
                            
                        //     return user.id == ticket.qaId
                        //     // return user.id  === ticket.qaId
                        // })}
                        user={[""]}
                    />
                    )
            })}
        </ul>
    </div>
    )
}

export default PriorityList;