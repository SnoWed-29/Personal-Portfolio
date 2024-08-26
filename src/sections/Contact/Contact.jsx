import React from 'react'
import styles from './ContactStyle.module.css'
function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1  className='sectionTitle'>Contact</h1>
        <div className={styles.smallContainer}>
            <p>
            For questions about my services or products, feel free to contact me. 
            Whether you're interested in web development or need assistance, I'm here to help!            
            </p>

            <div className={styles.childContainer}>
                <div>
                    <h1 className={styles.textHeader}>Phone </h1>
                    <h3 className={styles.infoFo}>(+212) 6 31 38 20 69</h3>
                </div>
                <div>
                    <h1 className={styles.textHeader}>Email </h1>
                    <h3 className={styles.infoFo}>snowed29@gmail.com</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
