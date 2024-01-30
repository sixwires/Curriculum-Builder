import React from 'react';
import Link from 'next/link';
import styles from '../styles/scss/SidebarComponent.module.scss';

const SidebarComponent: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Link href="/generate/a">
        <div className={styles.link}>A</div>
      </Link>
      <Link href="/generate/b">
        <div className={styles.link}>B</div>
      </Link>
    </div>
  );
};

export default SidebarComponent;