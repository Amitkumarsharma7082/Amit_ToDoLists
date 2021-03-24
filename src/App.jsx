import React, { useState } from 'react';
import ToDolists from './ToDoLists';


const App=()=>{

    const [inputList , setInputList]=useState("");
    const[Items,setItems]=useState([])

   const itemsEvent=(e)=>
   {
    setInputList(e.target.value);

   };
   const listOfItems=()=>
   {
    setItems((oldItems)=>{
        return[...oldItems,inputList]
    });
    setInputList("");
   }
//Delete
   const deleteItems=(id)=>
   {
       console.log("deleted");

       setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
            return index!==id;
        })
    });
   }
    
return(
    <div>
            <h1>ToDo List</h1>
            <br/>
            <input type="text" placeholder="items" 
            value={inputList}
            onChange={itemsEvent}/>
            <button onClick={listOfItems} >+</button>

            <ol>
                {/*<li>{inputList}</li>*/}
                {Items.map((itemval,index)=>{
                      return  <ToDolists 
                      key={index}
                      id={index}
                      text={itemval}
                      onSelect={deleteItems}
                      />;
               
            })}
            </ol>
    </div>

)
}
export default App;