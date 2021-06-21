import React , { Components } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import ServicesPage  from './Pages/ServicesPage';
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';
import SubscriptionPage from './Pages/SubscriptionPage';
import carePage from './Pages/carePage';
import imagesPage from './Pages/imagesPage';
import VideosPage from './Pages/VideosPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <switch>
          <Route path="/" exact component={Home} />
          <Route path="/ServicesPage" component={ServicesPage} />
          <Route path="/ContactPage" component={ContactPage} />
          <Route path="/ProjectsPage" component={ProjectsPage} />
          <Route path="/SubscriptionPage" component={SubscriptionPage} />
          <Route path="/carePage" component={carePage} />
          <Route path="/imagesPage" component={imagesPage} />
          <Route path="/VideosPage" component={VideosPage} />
        </switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
