import React from 'react';

const products = [
  { id: 1, name: 'T-Shirt', price: 19.99 },
  { id: 2, name: 'Jeans', price: 39.99 },
  { id: 3, name: 'Sneakers', price: 59.99 },
];

const ProductList = ({ onAddToCart, theme }) => (
  <div style={styles.wrapper}>
    <h2>Products</h2>
    {products.map(product => (
      <div key={product.id} style={{
        ...styles.card,
        backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f9f9f9',
        color: theme === 'dark' ? '#fff' : '#000'
      }}>
        <div>
          <strong>{product.name}</strong>
          <p>${product.price.toFixed(2)}</p>
        </div>
        <button style={styles.button} onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    ))}
  </div>
);

const styles = {
  wrapper: {
    width: '50%',
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 4px rgba(0,0,0,0.1)',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '8px 14px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductList;
