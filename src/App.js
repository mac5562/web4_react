import Navigation from './components/Navigation';
import PersonalPage from './components/PersonalPage';
import MyRaces from './components/MyRaces';
import CurrentRaces from './components/CurrentRaces';

function App() {
  return (   
    <div>
    <Navigation/>
   {/*<PersonalPage/> 
    <MyRaces/>*/ }
    <CurrentRaces/>
    </div> 
  );
}

export default App;
