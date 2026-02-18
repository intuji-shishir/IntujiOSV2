import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Button } from './Button';

export const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    Intuji<span className={styles.highlight}>OS</span>
                </Link>
                <div className={styles.links}>
                    <Link href="#features" className={styles.link}>Features</Link>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#pricing" className={styles.link}>Pricing</Link>
                </div>
                <div className={styles.actions}>
                    <Button variant="ghost" size="sm">Sign In</Button>
                    <Button size="sm">Get Started</Button>
                </div>
            </div>
        </nav>
    );
};
