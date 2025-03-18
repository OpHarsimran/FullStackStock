import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Authentication from './landing_page/signup/Authentication';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import { AuthProvider } from './landing_page/signup/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
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
  </HashRouter>
);


