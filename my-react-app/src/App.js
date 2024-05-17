import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import Stock from './pages/Stock';
import UserInfo from './pages/UserInfo';
import Cart from './pages/Cart';
import AdminDashboard from './pages/AdminDashboard';
import AddUsers from './pages/AddUsers';
import Products from './pages/Products';
import ResetPassword from './pages/ResetPassword';
import ProceedToPayment from './pages/ProceedToPayment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/IntroPage" element={<IntroPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/Stock" element={<Stock />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AddUsers" element={<AddUsers />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/ProceedToPayment" element={<ProceedToPayment />} />
      </Routes>
    </Router>
  );
}

export default App;
