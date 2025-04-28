'use client'; // Mark this as a client component

import Footer from "@/component/Footer/Footer";
import styles from "./page.module.css";
import { useState } from "react";
import axios from "axios";
import PrimaryButton from "@/component/PrimaryButton/PrimaryButton";
import { login } from "@/tool/ApiCall";
export default function AuthPage() {
  const [load,setLoad] = useState(false);
  const [email,setEmail] = useState('');
  const [error,setError] = useState("");
  const signIn = async () =>{
    setError("");
    const result = await login(email);
    if(!result){
      setError("Email not found, please try again.");
      return;
    }
    window.location.href = '/list/'+email;
  }
  return (
    <div className={styles.auth_background}>
      <img
        src="dots spread.svg"
        alt="dot spread"
        className={styles.backgound_img}
      />
      <div className={styles.auth_container}>
        <div className={styles.auth_title_container}>
          <h1 className={styles.auth_title}>Verifiy Your Stamps!</h1>
          <p className={styles.auth_paragraph}>
            Please sign in with your email before continuing.
          </p>
        </div>
        <div className={styles.auth_input_code_container}>
            <label htmlFor="email" className={styles.label_input}>
                Email
            </label>
            <input type="email" placeholder="Enter your email" id="email" className={styles.auth_input} onChange={(e)=>{setEmail(e.target.value)}}/>
            {error && <p className={styles.error_message}>{error}</p>}
          <PrimaryButton className={styles.auth_button_code} onClick={signIn} disabled={load}>Sign in</PrimaryButton>
        </div>
      </div>
        <Footer/>
    </div>
  );
}
