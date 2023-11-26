import React from 'react';
import { useTodo } from './context/userContext';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/Signup';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import WeekView from './components/Home/WeekView';

function App() {
  const { authenticated,user} = useTodo();
  console.log(authenticated,user);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Home /> : <Navigate to="/login"/>}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={authenticated?<Home/>:<Login />} />
        <Route path="/week-view" element={<WeekView/>}/>
      </Routes>
    </Router>
  );
}

export default App;
