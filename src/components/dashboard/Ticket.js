import {useState, useEffect } from 'react';  

function statusColor(status) {
    switch(status) {
        case "in progress":
            return "#009B72"
        case "bqa":
            return "#F26430"
        case "qa":
            return "#009DDC"
        default:
            return "#2A2D34"
    }
}
function PrioritysColor(priority) {
    switch(priority) {
        case "Normal":
            return "#009B72"
        case "High":
            return "#F26430"
        case "Critical":
            return "#009DDC"
        default:
            return "#2A2D34"
    }
}



const Ticket = props => {

    // useEffect(() => {
    
    //     // console.log(dumbData.ticket)
        

    //     console.log(props.user)
    // }, [])

    
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start" >
                <div style={{backgroundColor: statusColor(props.status), marginRight: "8px"}} className="ticket-details">
                {props.number}  
                    
                </div>
                <div className="">
                    {props.name}
                </div>
            </div>
           
            <span className="d-flex justify-content-start badge-pill ">
            <div style={{marginRight: "18px"}}>
                {props.status}
            </div>
            <div style={{marginRight: "18px"}}>
                {props.user[0].firstName}
            </div>

            </span>
        </li>
    )
}

export default Ticket;