import Navigation from './components/Navigation';
import PersonalPage from './components/PersonalPage';
import MyRaces from './components/MyRaces';
import CurrentRaces from './components/CurrentRaces';
import PreviousRaces from './components/PreviousRaces'
import EnterRace from './components/EnterRace';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (   
    <div>
    <Navigation/>
    {/*<PersonalPage/> 
    <MyRaces/>
    <CurrentRaces/>
    <PreviousRaces/>
    <Login/>
    <EnterRace/>
    */ }
    <Registration/>
    </div> 
  );
}

export default App;
