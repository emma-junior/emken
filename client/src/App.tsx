import React, { useContext } from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Chat from './pages/chat/Chat';
import { AuthContext } from './context/AuthContext';
import Emergency from './pages/emergency/Emergency';
import Details from './pages/emergency-details/Details';

function App() {
   const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}:any) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/medical-emergency' element={<Emergency />} />
          <Route path='/medical-emergency/:slug' element={<Details />} />
          <Route path='/chat' element={<RequireAuth><Chat /></RequireAuth>} />
        </Routes>
      </Router>    
  );
}

export default App;
