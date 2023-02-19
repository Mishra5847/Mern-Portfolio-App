import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutPage from './AboutPage';
import Register from './Register';
import Login from './Login';
import Contact from './Contact';
import Page404 from './Page404';
import { BrowserRouter as Router,
Routes,
Route } from 'react-router-dom';
import { AppProvider } from './AppContext';

function CrudApp() {
  return (
    <div>
      <AppProvider>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutPage /> } />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </Router>
      </AppProvider>
    </div>
  )
}

export default CrudApp