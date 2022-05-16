import React from "react";
import styles from '../styles/app.module.css'
function Logo (){
    return (
       <h1 className={styles.logo}>Logobakery</h1> 
    )
}

function Link (){
    return (
      <div className={styles.link}>
          <a href=''>Servies</a>
          <a href=''>Projects</a>
          <a href=''>About</a>
      </div>
    )
}

function Button(){
    return(
        <button className={styles.btn}>Contact</button>
    )
}



export {Logo,Link,Button};