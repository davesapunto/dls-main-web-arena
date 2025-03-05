import logo from './logo.svg';
import './App.css';
import MainPage from './components/GreyPage/MainPage';
import SelectGame from './components/GreyPage/GameSelect';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <MainPage/>
      <SignIn/>
    </div>
  );
}

export default App;
