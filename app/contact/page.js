import React from 'react';
import styles from '../../styles/contact.module.css';

export default function Contact() {
    return (
        <div className={styles.formContainer}>
            <h2>Contact Us</h2>
            <form>
                <div className={styles.formField}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className={styles.input} />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className={styles.input} />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="website">Website:</label>
                    <input type="url" id="website" name="website" className={styles.input} />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" className={styles.input}></textarea>
                </div>
                <button type="submit" className={styles.input}>Submit</button>
            </form>
        </div>
    )
}