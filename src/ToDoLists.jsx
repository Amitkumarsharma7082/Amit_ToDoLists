import React from 'react';

const ToDoLists=(props)=>
{
   
    return(
        <div className="b">
        
        <i className=" a" aria-hidden="true"
        onClick={()=>{
            
            props.onSelect(props.id);
        }}
        />
        <li>{props.text}</li>
        
        </div>
    );
};
export default ToDoLists;