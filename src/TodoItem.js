import React from "react";
import db from "./firebase";
import "./TodoItem.css";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import BeenhereIcon from '@material-ui/icons/Beenhere';

function TodoItem(props) {
  const complete = () => {
    db.collection("todos").doc(props.todos.id).set(
      {
        isCheked: false,
      },
      { merge: true }
    );
  };

  
  return (
    <div className={`todoitem ${props.todos.isChecked ? '' : 'todoitemcomplete'}`}>
      <div className="bench">

      <BeenhereIcon/>
      </div>
      <div className="todo__ts">
      <p>{props.todos.todos}</p>

      </div>
      <div className="todo__but">
      <div onClick={complete} className="jobdone">
        <DoneIcon /> 
      </div>

      <div onClick={(e) => db.collection("todos").doc(props.todos.id).delete()} className="close__but">

        <CloseIcon
          
        />
      </div>
      </div>

    </div>
  );
}

export default TodoItem;
