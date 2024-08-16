import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">

    <Router>
 
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer/>
    </Router>
    
    
    </div>
  );
}

export default App;
