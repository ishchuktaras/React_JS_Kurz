
import './App.css';
import PetInfo from './components/Petinfo';

function App(props) {
  
    return (
    <div className="App">
      <PetInfo animal="cat" age={7}/>
      <PetInfo animal="dog" age={4}/>
    </div>
  );
}

export default App;
