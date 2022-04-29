<<<<<<< Updated upstream
=======
import './App.css';
import Layout from './Components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Photography from './Components/Photography/Photography';
import Videography from './Components/Videography/Videography';
import About from './Components/About/About';
import GraphicDesign from './Components/GraphicDesign/GraphicDesign';
import Illustration from './Components/Illustration/Illustration';
>>>>>>> Stashed changes

import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Navbar />
    </div>
=======
     <BrowserRouter>
     <Routes>
      <Route path="/photography" element={<Layout />} />
        <Route index element={<Photography />} />
        <Route path="videography" element={<Videography />} />
        <Route path="about" element={<About />} />
        <Route path="graphicdesign" element={<GraphicDesign />} />
        <Route path="illustration" element={<Illustration />} />
     </Routes>
     </BrowserRouter>
     </div>
>>>>>>> Stashed changes
  );
}

export default App;
