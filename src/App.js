import './App.css';
import { useState } from 'react';
import Navbar from './componets/navbar';
import Landing from './componets/landing';
import Work from './componets/work';
import Contact from './componets/contact';
import Modal from './componets/modal';


function App() {

  const[selectedWork,setSelectedWork] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Work setSelectedWork={setSelectedWork} />
      <Contact />
      {
        selectedWork && <Modal selectedWork={selectedWork} setSelectedWork={setSelectedWork} />
      }
    </div>
  );
}

export default App;
