import React from 'react';
import styles from '../../styles/header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>Blog App</Link>
                <ul className={styles.navLinks}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};
