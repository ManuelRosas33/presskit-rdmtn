import styles from '../styles/Header.module.css';
import React from 'react';

function Header ()  {
  return (
    <header className={styles.header}>
      <h1>RDMTN</h1>
    </header>
  );
};

export default Header;