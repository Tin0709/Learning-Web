import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const theme = 'dark'; // Hardcoded to dark mode

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleOrder = () => {
    if (cartItems.length > 0) setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCartItems([]);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="dark" style={styles.page}>
      <div style={styles.container}>
        <div style={styles.topBar}>
          <h1>🛒 Shopping App</h1>
        </div>
        <div style={styles.section}>
          <ProductList onAddToCart={handleAddToCart} theme={theme} />
          <Cart items={cartItems} theme={theme} onRemove={handleRemoveItem} />
        </div>
        {cartItems.length > 0 && (
          <button onClick={handleOrder} style={styles.orderButton}>
            Place Order
          </button>
        )}
      </div>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={{
            ...styles.modal,
            backgroundColor: '#333',
            color: '#fff'
          }}>
            <h2>🎉 Thanks for your order!</h2>
            <p>Your total: <strong>${total.toFixed(2)}</strong></p>
            <button onClick={handleCloseModal} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: 'transparent',
    color: '#fff',
  },
  container: {
    width: '900px',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  section: {
    display: 'flex',
    gap: '40px',
    marginBottom: '20px',
  },
  orderButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    padding: '30px',
    borderRadius: '10px',
    minWidth: '300px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default App;
