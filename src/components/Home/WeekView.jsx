import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import Navbar from "./Navbar";

const WeekView = () => {
  // call use selector hook for getting state from reducer
  const token = JSON.parse(localStorage.getItem('Token'));
  const userData = JSON.parse(localStorage.getItem('userData'));
  const user = userData.find((user) => user.username === token.username);
  const habitsState = user.habits;
  console.log(habitsState);
  // getting habit from habits state acording to local storage id and set it on habit
  let habit={}
  for(let i=0;i<habitsState.length;i++){
    if(habitsState[i].id===localStorage.getItem("id")){
      habit=habitsState[i];
    }
  }
  console.log(habit);
  
  return (
    <>
      <Navbar name="Week View" />
      <h1 className="text-center" style={{textTransform:"capitalize"}}>{habit.name}</h1>
      <div className="days-container">
        {habit.weekLog.map((day,index)=><DayView day={day} key={index}/>)}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn btn-primary" type="button">
          <Link to="/">Back to Detail View</Link>
        </button>
      </div>
    </>
  );
};

export default WeekView;
