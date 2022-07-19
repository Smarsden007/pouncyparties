import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Routes } from "react-router";
// import Navigation from './components/navigation/navBar';
import HomePage from './Webpages/Homepage.js'
import Services from './Webpages/Services.js'
import Booking from './Webpages/Booking'
import NavBar from './components/HomepageComps/NavBar';
// import Footer from './components/Footer/Footer';
// import ScrollToTop from './components/ScrollTopTop';

function App() {




  return (
    <div className="App">
      <Router>

     <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sonomacounty-bouncehousecastle-white" element={<Services />} />
          <Route path="/weddings-sonoma-county-bouncehouse" element={<Booking />} />
        </Routes>

      </Router>
      {/* <div className='fotty'>
        <Footer />
           </div> */}
    </div>
  );
}

export default App;