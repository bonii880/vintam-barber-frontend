// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1>Welcome to Vintam Barber Shop</h1>
      <p>Your cut, your barber, your time.</p>
      <button style={styles.button}>Book Now</button>
    </section>
  );
};

const styles = {
  hero: {
    textAlign: 'center',
    padding: '100px 20px',
    backgroundColor: '#f4f4f4'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#1e1e1e',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};

export default Hero;
