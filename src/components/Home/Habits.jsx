import React from 'react'
import Habit from './Habit'
import { useTodo } from '../../context/userContext';

const Habits = () => {

  // call use selector hook for getting state from reducer
  const token = JSON.parse(localStorage.getItem('Token'));
  const userData = JSON.parse(localStorage.getItem('userData'));
  const user = userData.find((user) => user.username === token.username);
  const habits = user.habits;

  const {handleLogout}=useTodo();
  
  return (
    <div className='habits'>
        <div onClick={()=>{handleLogout()}} style={{cursor: 'pointer',backgroundColor: 'red', color: 'white',width: '80px',padding: "0 5px 0 5px", borderRadius: "10%"}}>Log Out</div>
      {habits.map((habit)=><Habit habit={habit} key={habit.id}/>)}
    </div>
  )
}

export default Habits
