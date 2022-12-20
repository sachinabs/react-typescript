
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscer } from './components/Oscer';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {

  const personName = {
    "first_name": "sachin",
    "last_name": "abs"
  }

  const nameList = [{
    "first_name": "sachin",
    "last_name": "abs"
  }, {
    "first_name": "margo",
    "last_name": "jseo"
  }, {
    "first_name": "regin",
    "last_name": "mie"
  }]

  return (
    <div className="App">
      <Greet name="sachin abs" messageCount={20} isLogedIN={true} />
      <Person name={personName} />
      <PersonList name={nameList} />
      <Status status='error' />
      <Heading>
        Placeholder text
      </Heading>
      <Oscer>
        <Heading>Place Holder</Heading>
      </Oscer>
    </div>
  );
}

export default App;
