import React from "react";
import { useTodo } from "../../context/userContext";

const DayView = ({day}) => {
  // get today date
  const today=new Date();
  // get day from today date
  const todayDay=today.getDay();

  const {handleHabitDone,handleHabitNone,handleHabitUndone}=useTodo();

  // get date details from providing date
  const date=new Date(day.yyyy,day.mm,day.dd);

  // function call after click done icon--------------
  const markToDone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit done action from reducer
    handleHabitDone(day.id);
  }
  // -------------------------------------------------

  // function call after click undone icon------------
  const markToUnDone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit undone action from reducer
    handleHabitUndone(day.id);
  }
  // --------------------------------------------------

  // function call after click none icon--------------
  const markToNone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit none action from reducer
    handleHabitNone(day.id);
  }
  // -------------------------------------------------


  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={markToDone} title="Mark as done"></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={markToUnDone} title="Mark as undone"></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={markToNone} title="Mark as none"></i>
    </div>
  );
};

export default DayView;
