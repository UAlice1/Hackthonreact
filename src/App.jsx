import React from 'react';
import Usergreeting  from './assets/pages/Usergreeting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Basicreacthook from './assets/pages/Basicreacthook';
import Operation from './assets/pages/Operation';
import Datadisplay from './assets/pages/Datadisplay';
import Datamanipulation from './assets/pages/Datamanipulation';
import Dataselection from './assets/pages/Dataselection';
import Forms from './assets/pages/Forms';
import Imagehandling from './assets/pages/Imagehandling';
import Masterdom from './assets/pages/Masterdom';
import Stateprogration from './assets/pages/Stateprogration';
import Compon from './assets/pages/compon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Home/Basicreacthook" element={<Basicreacthook />} />
          <Route path="/Home/Operation" element={<Operation />} />
          <Route path="/Home/Datadisplay" element={<Datadisplay />} />
          <Route path="/Home/Datamanipulation" element={<Datamanipulation />} />
          <Route path="/Home/Dataselection" element={<Dataselection />} />
          <Route path="/Home/Forms" element={<Forms />} />
          <Route path="/Home/Imagehandling" element={<Imagehandling />} />
          <Route path="/Home/Masterdom" element={<Masterdom />} />
          <Route path="/Home/Stateprogration" element={<Stateprogration />} />
          <Route path="/Home/Compon" element={<Compon />} />
        </Route>
      </Routes>
    </Router>
    
  );
}


export default App;
