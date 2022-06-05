// Importing React Hooks
import {useState, useEffect } from 'react';  
// Importing dumb data 
import * as dumbData from '../../data/dumbData';
// Importing children Component 
import TargetList from './TargetList';
import PriorityList from './PriorityList';
import WorkView from './workView';




// MAIN COMPONENT 
const Dashboard = props => {
    // Declaring component state and actions 
    const [status, setSTatus] = useState(true);
    const [data, setData] = useState(dumbData.OBJECT_TEST);
    const [btnClr, setBtnClr] = useState("blue");
    const [count, setCount] = useState(0);
    const [displayCounter, setDisplayCounter] = useState("");
    const [welcome, setWelcome] = useState("");

    // runs when componenet mounts
    const targetList =  dumbData.asba.filter((ticket) => {
        return dumbData.targetList.tickets.includes(ticket.id)
    })
    const priorityList =  dumbData.asba.filter((ticket) => {
        return dumbData.targetList.tickets.includes(ticket.id)
    })
    const qaList = dumbData.users;

    // useEffect(() => {
    //     // setWelcome("Welcome to testing for testing");
    //     console.log("test")
        

    // }, [])

    // runs on every update 

    // useEffect(() => {
    //     setDisplayCounter(`You clicked ${count} times`);
    // })

    return (
        <div className="mt-5 p-2">
            <div className="row">
                <div className="col-3">
                    <TargetList list={targetList} />
                </div>
                <div className="col-6">
                    <WorkView qaList={qaList} ticketList={dumbData.asba} />
                </div>
                <div className="col-3">
                {/* <h3>Notification</h3> */}
                    <PriorityList list={targetList} />
                </div>
            </div>
        </div>
    )
}


export default Dashboard;



   {/* <h2 style={{color: btnClr, padding: status ? 50 : 5}}>{welcome}</h2>
                </div>
                <div className="row">
                    {data.map((item, i) => {
                        return (
                            <Children key={i} name={item.name} description={item.description}/>
                        )
                    })}
                </div>
                <div className="row">
                    <div className="col-6">
                        { <p>{count === 0 ? "Please Start Counter" : displayCounter}</p>}
                    </div>
                    <div className="col-6">
                        <button onClick={() => setCount(count + 1)}>Click</button>
                        <button onClick={() => setCount(0)}>Clear</button>
                    </div> */}
                    {/* <div className="col-6">

                        <Ticket />
                    </div> */}