import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './components/Signin/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router';
import MainPage from './components/GreyPage/MainPage';
import Login from './components/Signin/Login';
import UserDashboard from './components/UserDashboard/UserDashboard';
import CreateTournament from './components/CreateTournament/CreateTournament';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path='SignUp' element={<Signup/>}/>
      <Route path='HomePage' element={<MainPage/>}/>
      <Route path='LogIn' element={<Login/>}/>
      <Route path= 'Dashboard' element={<UserDashboard/>}/>
      <Route path='CreateTournament' element={<CreateTournament/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
