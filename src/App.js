import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import WishList from './pages/WishList';
import Product from './pages/Product';
import ScrollToTop from './utils/ScrollToTop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop>
                    <Routes forceRefresh={true}>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="store" element={<Store />} />
                            <Route path="cart" element={<Cart />} />
                            <Route path="checkout" element={<Checkout />} />
                            <Route path="product/:id" element={<Product />} />
                            <Route path="wishlist" element={<WishList />} />
                            <Route path="login" element={<Login />} />
                            <Route path="signup" element={<SignUp />} />
                            <Route path="forgot-password" element={<ForgotPassword />} />
                        </Route>
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </>
    );
}

export default App;
