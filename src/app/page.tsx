'use client'; // Mark this as a client component
import Footer from "@/component/Footer/Footer";
import styles from "./page.module.css";
import React, {useEffect, useState} from "react";
export default function Home() {
  const [user_data,set_user_data] = useState({
    //fake data
    email:"user@example.com",
    play_historys:[{
      title:"Space Needle"
    }]
  })
  useEffect(()=>{
    //fetch data
  })
  return (
    <div className={styles.back_ground}>
    <img src="vr.png" alt="VR" className={styles.vr_image}/>
    <img src="gradation.png" className={styles.gradation_image}/>
    <div className={styles.page}>
      <header className={styles.header}>
        <h2 className={styles.title}>CLOVER</h2>
        <div className={styles.nav_group}>
        <a href="/auth" className={styles.nav_link}>Check Stamps</a>
        <a href="#" className={styles.nav_link}>Contact Us</a>
        </div>
      </header>
        <main className={styles.home_paragraph_container}>
          <div className={styles.home_paragraph}>
           <p>Ready to extend</p>
           <p>your space with us?</p>
           </div>
        </main>
        <Footer/>
    </div>
    </div>

  );
}
