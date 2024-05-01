import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Basicreacthook from './assets/pages/Basicreacthook'; // Import the Basicreacthook component
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
          <Route path="Basicreacthook" element={<Basicreacthook />} />
          <Route path="Operation" element={<Operation />} />
          <Route path="Datadisplay" element={<Datadisplay />} />
          <Route path="Datamanipulation" element={<Datamanipulation />} />
          <Route path="Dataselection" element={<Dataselection />} />
          <Route path="Forms" element={<Forms />} />
          <Route path="Imagehandling" element={<Imagehandling />} />
          <Route path="Masterdom" element={<Masterdom />} />
          <Route path="Stateprogration" element={<Stateprogration />} />
          <Route path="Compon" element={<Compon />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
