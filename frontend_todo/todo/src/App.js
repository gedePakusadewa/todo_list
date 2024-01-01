import './App.css';
import Create from './component/Create.js';
import ReadDeleteUpdate from './component/ReadDeleteUpdate.js';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">     
      <Create />
      <br />
      <ReadDeleteUpdate />
    </div>
  );
}

export default App;
