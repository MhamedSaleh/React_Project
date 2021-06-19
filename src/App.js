import React , { Components } from 'react';
import Header from './components/Header/Header';
import MainSlider from './components/MainSlider/MainSlider';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Testmonial from './components/Testmonial/Testmonial';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <MainSlider />
      <About />
      <Services />
      <Projects />
      <Testmonial />
      <Footer />
    </div>
  );
}

export default App;
