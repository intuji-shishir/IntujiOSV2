import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            Intuji<span className={styles.highlight}>OS</span>
                        </Link>
                        <p className={styles.description}>
                            The next generation operating system for modern businesses.
                        </p>
                    </div>
                    <div className={styles.links}>
                        <div>
                            <h4 className={styles.heading}>Product</h4>
                            <ul>
                                <li><Link href="#">Features</Link></li>
                                <li><Link href="#">Integration</Link></li>
                                <li><Link href="#">Pricing</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className={styles.heading}>Company</h4>
                            <ul>
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Blog</Link></li>
                                <li><Link href="#">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className={styles.heading}>Legal</h4>
                            <ul>
                                <li><Link href="#">Privacy</Link></li>
                                <li><Link href="#">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© 2026 IntujiOS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
