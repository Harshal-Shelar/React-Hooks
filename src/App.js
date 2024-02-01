import UseState from './Components/useState/UseState';
import './index.css';
import UseEffect from './Components/useEffect/UseEffect';
import UseContext from './Components/useContex/UseContext';
import Parent from './Parent';

function App() {
  return (
    <div>
       <UseState />
       <UseEffect />
       <UseContext />
       <Parent />
    </div>
  );
}

export default App;
