// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Vintam Barber Shop</h2>
      <ul style={styles.navLinks}>
        <li>Home</li>
        <li>Book</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#1e1e1e',
    color: 'white'
  },
  logo: {
    margin: 0
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
};

export default Navbar;
