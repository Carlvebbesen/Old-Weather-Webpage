import './App.css';
import Search from './Components/Search/Search';

const GlobalState = React.createContext({
  address: "",
  geocode: {
    lat: "",
    long: ""
  }
})

function App() {
  return (
    <div>
        <Search/>
    </div>
  );
}
export default App;
