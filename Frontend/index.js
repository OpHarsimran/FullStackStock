import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './src/landing_page/home/HomePage';
import Authentication from './src/landing_page/signup/Authentication';
import AboutPage from './src/landing_page/about/AboutPage';
import ProductPage from './src/landing_page/product/ProductPage';
import PricingPage from './src/landing_page/pricing/PricingPage';
import SupportPage from './src/landing_page/support/SupportPage';
import Navbar from './src/landing_page/Navbar';
import Footer from './src/landing_page/Footer';
import NotFound from './src/landing_page/NotFound';
import { AuthProvider } from './src/landing_page/signup/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <AuthProvider>
  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/signup" element={<Authentication/>}/>

  <Route path="/about" element={<AboutPage/>}/>
  <Route path="/product" element={<ProductPage/>}/>
  <Route path="/pricing" element={<PricingPage/>}/>
  <Route path="/support" element={<SupportPage/>}/>
  <Route path="*" element={<NotFound/>}/>
  </Routes>
  </AuthProvider>
  <Footer />
  </BrowserRouter>
);


