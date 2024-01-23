import React from 'react'
import { Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header';
import Footer from './components/Footer';
//pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login'
import AddProperty from './pages/AddProperty';
import About from './pages/About';
import Signup from './pages/signup';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto bg-black'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
