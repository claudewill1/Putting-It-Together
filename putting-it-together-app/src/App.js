import './App.css';
import PersonCard from './components/PersonCard';

const App = () => {
  return (
    <div id="cards">
      <PersonCard firstName={"Bob"} lastName={"Williams"} age={52} hairColor={"Black"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={95} hairColor={"Brown"} />
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} />
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"} />
    </div>
  )
}

export default App;

