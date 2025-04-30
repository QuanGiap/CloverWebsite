'use client'; // Mark this as a client component

import Footer from "@/component/Footer/Footer";
import styles from "./page.module.css";
import { FormEvent, useState } from "react";
import PrimaryButton from "@/component/PrimaryButton/PrimaryButton";
import { login } from "@/tool/ApiCall";
export default function AuthPage() {
  const [load,setLoad] = useState(false);
  const [email,setEmail] = useState('');
  const [error,setError] = useState("");
  const signIn = async (e:FormEvent<HTMLFormElement>) =>{
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
        <form className={styles.auth_input_code_container} onSubmit={(e)=>{e.preventDefault();signIn(e);}}>
            <label htmlFor="email" className={styles.label_input}>
                Email
            </label>
            <input type="email" required placeholder="Enter your email" id="email" className={styles.auth_input} onChange={(e)=>{setEmail(e.target.value)}}/>
            {error && <p className={styles.error_message}>{error}</p>}
          <PrimaryButton type="submit" className={styles.auth_button_code} disabled={load}>Sign in</PrimaryButton>
        </form>
      </div>
        <Footer/>
    </div>
  );
}
