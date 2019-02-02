import React from 'react'

function TodoItem(props){
    return(
        <div className="to-do-item">
            <input type = "checkbox" 
                   checked={props.item.completed} 
                   onChange = {()=> console.log("changed")}/>
            <h3>{props.item.text}</h3>
        </div>
    )
}

export default TodoItem