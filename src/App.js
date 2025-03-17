import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './components/GreyPage/MainPage';
import Login from './components/Signin/Login';  
import UserDashboard from './components/UserDashboard/UserDashboard';
import TournamentCreation from './components/CreateTournament/TournamentCreate'; // Import the TournamentCreation component

function App() {
    return (
        <Router>
            <Routes>
                {/* Main page route */}
                <Route path="/" element={<MainPage />} />

                {/* Login page route */}
                <Route path="/login" element={<Login />} />

                {/* User dashboard route */}
                <Route path="/dashboard" element={<UserDashboard />} />

                {/* Tournament creation route */}
                <Route path="/create-tournament" element={<TournamentCreation />} />

                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;