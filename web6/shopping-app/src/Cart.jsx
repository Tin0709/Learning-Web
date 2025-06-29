import React from 'react';

const Cart = ({ items, theme, onRemove }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{
      ...styles.wrapper,
      backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f9f9f9',
      color: theme === 'dark' ? '#fff' : '#000'
    }}>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul style={styles.list}>
            {items.map(item => (
              <li key={item.id} style={styles.itemRow}>
                <span>
                  {item.name} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button style={styles.removeBtn} onClick={() => onRemove(item.id)}>
                  ✖
                </button>
              </li>
            ))}
          </ul>
          <h3 style={styles.total}>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    width: '40%',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 6px rgba(0,0,0,0.1)',
  },
  total: {
    marginTop: '15px',
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  itemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 0',
  },
  removeBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '4px 10px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
};

export default Cart;
