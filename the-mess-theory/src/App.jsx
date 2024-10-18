import './index.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginCard from './auth/LoginCard';
import AdminLogin from './auth/AdminLogin';
import StudentLogin from './auth/StudentLogin';
import Registration from './auth/Registration';

import Nav from './components/Nav'

import History from './components/History'; // Example of other pages
import Services from './components/Services'; // Example of other pages
import Contact from './components/Contact'; // Example of other pages

import Footer from './components/Footer';

function App() {
  const location = useLocation();
  // Check if we are on a login page
  const isLoginPage = location.pathname === '/' || location.pathname === '/admin-login' || location.pathname === '/student-login' || location.pathname === '/register';
  
  return(
    <>
    {/* Render Nav only if not on a login page */}
    {!isLoginPage && <Nav />}

    <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/register" element={<Registration />} />
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/history" element={<History />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    <Footer/>
    </>
  )
}

export default App;
