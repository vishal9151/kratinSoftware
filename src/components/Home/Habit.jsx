import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../../context/userContext";

const Habit = ({habit}) => {
  const today=new Date();
  const todayDay=today.getDay();
  let countDone=0;

  const {handleDeleteHabit}=useTodo();
  //loop for getting habit done count
  for (let i = 0; i < habit.weekLog.length; i++) {
    if(habit.weekLog[i].isDone===true){
      countDone++;
    }
  }
  
  // call use navigate hook from react-router-dom in a navigate varriable 
  const navigate=useNavigate();

  // function call after click delete button on habit list
  const handleDelete=()=>{
    handleDeleteHabit(habit.id);
    alert("your habit deleted successfully")
  }

  // this function call after click week view button
  // this function used for set current habit id to localstorage and navigate to weekview page
  const setId=()=>{
    localStorage.setItem("id",habit.id)
    navigate("/week-view");
  }

  
  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-hashtag"></i>
        <div>
          <h4 style={{textTransform:"capitalize"}}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{todayDay+1} days</p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i>
          Week View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete} title="Delete the Habit"></i>
      </div>
    </div>
  );
};

export default Habit;
