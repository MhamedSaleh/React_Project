import React , { Components } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Services  from './Pages/Services';
import Contact from './Pages/Contact';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <switch>
          <Route path="/" exact component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
        </switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
