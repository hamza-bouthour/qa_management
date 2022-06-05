
import {useState, useEffect } from 'react';  




// MAIN COMPONENT 
const QaCard = props => {
    // Declaring component state and actions 


    // runs when componenet mounts

    // useEffect(() => {
    //     // setWelcome("Welcome to testing for testing");
    //     console.log("test")
        

    // }, [])


    return (
        <div className="col-3 qaCard">
            <div className="qaCardHeader">
                <h5>{props.name} </h5>   
                <div 
                    className={props.active ? "badge bg-success" : "badge bg-warning"} 
                    style={{fontSize: "10px"}}>
                    {props.active ? "active" : "inactive"}
                </div>
            </div>
            <div className="qa-body">
                <div className="qa-badge text-center mt-2" >in progress</div>
                {props.activeTickets.map((ticket, i) => {
                    return (
                        <div>
                            <span>{ticket.number}</span>
                            <div className="progress">
                                <div className="progress-bar" 
                                    role="progressbar" 
                                    style={{width: `${ticket.progress}%`, backgroundColor: "#02ee93"}} 
                                    aria-valuenow={ticket.progress}
                                    aria-valuemin="0" 
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        
                    )
                })}
                <div className="qa-badge text-center mt-2" >queue</div>
                {props.queue.map((ticket, i) => {
                    return (
                        <div className="qa-queue-list">
                            <div>{ticket.number}</div>
                            <div>{ticket.status}</div>
                        </div>
                        
                    )
                })}
            </div>

        </div>
    )
}


export default QaCard;



