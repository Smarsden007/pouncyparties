import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Routes } from "react-router";
// import Navigation from './components/navigation/navBar';
import HomePage from './Webpages/Homepage.js'
import Booking from './Webpages/Booking'
import NavBar from './components/HomepageComps/NavBar';
import Footer from './components/HomepageComps/Footer';
import RentalsPage from './Webpages/RentalsPage';

// import ScrollToTop from './components/ScrollTopTop';

function App() {




  return (
    <div className="App">
      <Router>

     <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sonomacounty-bouncehousecastle-white" element={<RentalsPage />} />
          <Route path="/weddings-sonoma-county-bouncehouse" element={<Booking />} />
        </Routes>

      </Router>
     <div>
        <Footer />
           </div>
    </div>
  );
}

export default App;