import Create from './component/Create.js';
import UpdateModal from './component/UpdateModal.js';
import ReadDeleteUpdate from './component/ReadDeleteUpdate.js';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [isSHow, setIsShow] = useState(false)
  const [dataUpdate, setDataUpdate] = useState("")
  const [dataId, setDataId] = useState("")

  return (
    <div className="App">     
      <Create />
      <br />
      <ReadDeleteUpdate
        setIsShow={setIsShow}
        setDataUpdate={setDataUpdate}
        setDataId={setDataId}
      />
      {isSHow && (
        <UpdateModal
          setIsShow={setIsShow}
          dataUpdate={dataUpdate}
          dataId={dataId}
         />
      )}
    </div>
  );
}

export default App;
