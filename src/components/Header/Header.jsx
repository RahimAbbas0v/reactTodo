import React from 'react'
import styles from "./Header.module.css"
const Header = () => {
  return (
    <nav className={styles.navbar}>
       <div className={styles.menu}>
        <ul className={styles.list}>
            <li>Products</li>
            <li>Pricing</li>
            <li>Community</li>      
        </ul>
       </div>
       <div className={styles.logo}>
        <h2>Startup 3</h2>
       </div>
       <div className={styles.buttons}>
        <button className={styles.helpBtn}>Help</button>
        <button  className={styles.logBtn}>Login</button>
        <button  className={styles.signBtn}>Sign in</button>
       </div>
    </nav>
  )
}

export default Header
