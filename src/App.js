import Navigation from './components/Navigation';
import PersonalPage from './components/PersonalPage';
import MyRaces from './components/MyRaces';
import CurrentRaces from './components/CurrentRaces';
import PreviousRaces from './components/PreviousRaces'
import EnterRace from './components/EnterRace';
function App() {
  return (   
    <div>
    <Navigation/>
   {/*<PersonalPage/> 
    <MyRaces/>
    <CurrentRaces/>
    <PreviousRaces/>*/ }
    <EnterRace/>
    
    </div> 
  );
}

export default App;
