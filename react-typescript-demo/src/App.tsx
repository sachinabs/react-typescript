
import './App.css';
import { Button } from './components/Button';
import { InputBox } from './components/InputBox';


function App() {

  return (
    <div className="App">
      <InputBox  handle_click={(event) => {
        console.log(event.target.value);

      }} />
      <Button handle_click={(event, id) => {
        console.log("works", event, id);
        
      }} />
    </div>
  );
}

export default App;
