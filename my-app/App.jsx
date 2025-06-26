import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Cart from './Cart.jsx';
import ActivityList from './ActivityList.jsx';
import Location from './Location.jsx'; 
import PaymentMethod from './PaymentMethod.jsx';
import PaymentProof from './PaymentProof.jsx';
import Transaction from './Transaction.jsx';
import SportCategoriesList from './SportCategory.jsx';
import TransactionHistory from './TransactionHistory.jsx';


function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedMethodId, setSelectedMethodId] = useState(null);

  return (
    <>
      <Navbar />
      <main style={{ padding: 20, maxWidth: 1000, margin: 'auto' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              </PrivateRoute>
            }
          />

          <Route
            path="/activities"
            element={
              <PrivateRoute>
                <ActivityList cartItems={cartItems} setCartItems={setCartItems} />
              </PrivateRoute>
            }
          />
          <Route
            path="/activities/:categoryId"
            element={
              <PrivateRoute>
                <ActivityList cartItems={cartItems} setCartItems={setCartItems} />
              </PrivateRoute>
            }
          />
          
          <Route
  path="/location"
  element={
    <PrivateRoute>
      <Location />
    </PrivateRoute>
  }
/>

          <Route
            path="/methods"
            element={
              <PrivateRoute>
                <PaymentMethod
                  selectedMethodId={selectedMethodId}
                  setSelectedMethodId={setSelectedMethodId}
                />
              </PrivateRoute>
            }
          />

          <Route
            path="/proof"
            element={
              <PrivateRoute>
                <PaymentProof selectedMethodId={selectedMethodId} cartItems={cartItems} />
              </PrivateRoute>
            }
          />

          <Route
            path="/transaction"
            element={
              <PrivateRoute>
                <Transaction selectedMethodId={selectedMethodId} cartItems={cartItems} />
              </PrivateRoute>
            }
          />

          <Route
            path="/categories"
            element={
              <PrivateRoute>
                <SportCategoriesList cartItems={cartItems} setCartItems={setCartItems} />
              </PrivateRoute>
            }
          />
          
          <Route
  path="/transactionhistory"
  element={
    <PrivateRoute>
      <TransactionHistory />
    </PrivateRoute>
  }
/>

          <Route path="*" element={<p style={{ textAlign: 'center' }}>Page not found</p>} />
        </Routes>
      </main>
    </>
  );
}

export default App;