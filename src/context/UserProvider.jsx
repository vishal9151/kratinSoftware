import { useState,useEffect } from "react";
import userContext from "./userContext";
import CryptoJS from "crypto-js";
import { nanoid } from "nanoid";

const UserProvider= function({children}){
    const [user,setUser]=useState({});
    const [habits,setHabits]=useState([]);
    const [authenticated,setAuthenticated]=useState(false);
    const [message,setMessage]=useState(false);

    useEffect(()=>{
        const token=JSON.parse(localStorage.getItem("Token"));
        const userData=JSON.parse(localStorage.getItem("userData"));
        if(token){
            const user=userData.find((user)=>user.username===token.username);
            console.log(user);
            if(user){
                const habits=user.habits;
                setUser(user);
                setHabits(habits);
            }
            setAuthenticated(true);
            
        }
    },[]);

    const handleSignup = ({username, password})=>{
        const encryptedPassword = CryptoJS.AES.encrypt(password, 'secret_key').toString();
        const userData=JSON.parse(localStorage.getItem("userData"))||[];
        const use = userData.find((user) => user.username === username);
        if(use){
            setMessage(true);
            return;
        }
        const user={username,encryptedPassword,habits: []};
        userData.push(user);
        localStorage.setItem("userData",JSON.stringify(userData));
    }

    const handleLogin=({username,password})=>{
        console.log(username);
        const userData=JSON.parse(localStorage.getItem("userData"));
        console.log(userData);
        if(userData.length>0){
            const user = userData.find((user) => user.username === username);
            console.log(user)
            if(user){
                const decryptedPassword=CryptoJS.AES.decrypt(user.encryptedPassword,'secret_key').toString(CryptoJS.enc.Utf8);
                if(decryptedPassword==password){
                    const token = CryptoJS.AES.encrypt(password, 'token_key').toString();
                    const Token={
                        token,
                        username
                    }
                    localStorage.setItem("Token",JSON.stringify(Token));
                    setAuthenticated(true);
                    setUser(user);
                    setHabits(user.habits);
                }
            }
        }
        return false;
    }
    const handleLogout=()=>{
        localStorage.removeItem("Token");
        setAuthenticated(false);
        setUser({});
        localStorage.removeItem("id");
    }

    const handleAddHabit=(name)=>{
        const today=new Date();
        let day=today.getDate()-today.getDay();
        const month= today.getMonth();
        const year =today.getFullYear();

        const habit = {
            id: nanoid(8),
            name: name,
            weekLog: [
            {
                id: 0,
                day: "Sunday",
                dd:day,
                mm:month,
                yyyy:year,
                isDone: "",
            },
            {
                id: 1,
                day: "Monday",
                dd:day+1,
                mm:month,
                yyyy:year,
                isDone: "",
            },
            {
                id: 2,
                day: "Tuesday",
                dd:day+2,
                mm:month,
                yyyy:year,
                isDone: "",
            },
            {
                id: 3,
                day: "Wednesday",
                dd:day+3,
                mm:month,
                yyyy:year,
                isDone: "",
            },
            {
                id: 4,
                day: "Thursday",
                dd:day+4,
                mm:month,
                yyyy:year,
                isDone: "",
            },
            {
                id: 5,
                day: "Friday",
                dd:day+5,
                mm:month,
                yyyy:year,
                isDone: "",
            },
            {
                id: 6,
                day: "Saturday",
                dd:day+6,
                mm:month,
                yyyy:year,
                isDone: "",
            },
            ],
        };
        const userDatas=JSON.parse(localStorage.getItem("userData"));
        console.log(userDatas);
        console.log(user)
        userDatas.map((User)=>{
            console.log(User);
            if(user.username==User.username){
                User.habits.push(habit);
            }
        });
        console.log(userDatas);
        localStorage.setItem("userData",JSON.stringify(userDatas));
        setHabits([habit,...habits]);    
    }
    const handleDeleteHabit = (id) => {
        const userDatas = JSON.parse(localStorage.getItem("userData"));
        userDatas.map((User) => {
          if (user.username === User.username) {
            User.habits = User.habits.filter((habit) => habit.id !== id);
          }
        });
        localStorage.setItem("userData", JSON.stringify(userDatas));
      
        // Update the state with the updated to-do list, if needed
        const updatedHabit = userDatas.find((User) => user.username === User.username).habits;
        // Update the state or perform other actions as needed
        setHabits(updatedHabit);
      };
      
    const handleHabitDone=(dayId)=>{
        const userDatas = JSON.parse(localStorage.getItem("userData"));
        userDatas.map((User) => {
          if (user.username === User.username) {
            User.habits = User.habits.map((habit) => {
              if (habit.id === localStorage.getItem("id")) {
                habit.weekLog[dayId].isDone=true;
              }
              return habit; // Return the updated todo
            });
          }
          return User; // Return the updated User
        });
        localStorage.setItem("userData", JSON.stringify(userDatas));
      
        // Update the state with the updated todo list
        const updatedHabits = habits.map((habit) => {
          if (habit.id === localStorage.getItem("id")) {
            habit.weekLog[dayId].isDone=true;
            return habit;
          }
          return habit;
        });
        setHabits(updatedHabits);
    }
    const handleHabitUndone=(dayId)=>{
        const userDatas = JSON.parse(localStorage.getItem("userData"));
        userDatas.map((User) => {
          if (user.username === User.username) {
            User.habits = User.habits.map((habit) => {
              if (habit.id === localStorage.getItem("id")) {
                habit.weekLog[dayId].isDone=false;
              }
              return habit; // Return the updated todo
            });
          }
          return User; // Return the updated User
        });
        localStorage.setItem("userData", JSON.stringify(userDatas));
      
        // Update the state with the updated todo list
        const updatedHabits = habits.map((habit) => {
          if (habit.id === localStorage.getItem("id")) {
            habit.weekLog[dayId].isDone=false;
            return habit;
          }
          return habit;
        });
        setHabits(updatedHabits);
    }
    const handleHabitNone=(dayId)=>{
        const userDatas = JSON.parse(localStorage.getItem("userData"));
        userDatas.map((User) => {
          if (user.username === User.username) {
            User.habits = User.habits.map((habit) => {
              if (habit.id === localStorage.getItem("id")) {
                habit.weekLog[dayId].isDone="";
              }
              return habit; // Return the updated todo
            });
          }
          return User; // Return the updated User
        });
        localStorage.setItem("userData", JSON.stringify(userDatas));
      
        // Update the state with the updated todo list
        const updatedHabits = habits.map((habit) => {
          if (habit.id === localStorage.getItem("id")) {
            habit.weekLog[dayId].isDone="";
            return habit;
          }
          return habit;
        });
        setHabits(updatedHabits);
    }

    return (
        <userContext.Provider value={{user, authenticated, message, habits, handleAddHabit,handleDeleteHabit,handleHabitDone,handleHabitNone,handleHabitUndone,handleLogin,handleLogout,handleSignup}}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider;