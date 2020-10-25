import React from 'react';

const ToDoList = (props) => {
   
    return (
        <reactFragment>
        <div style={{display:"flex", justifyContent:"space-around", fontSize:"20px"}}>
            <span title="Delete" style={{cursor:"pointer"}}>
                <b onClick={()=>{props.onSelect(props.id)}}>x</b>
            </span>
            <li>{props.text}</li>
        </div>
    </reactFragment>
    );
};
export default ToDoList;