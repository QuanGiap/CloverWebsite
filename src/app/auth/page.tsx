'use client'; // Mark this as a client component

import Footer from "@/component/Footer/Footer";
import styles from "./page.module.css";
import { useState } from "react";
import axios from "axios";
export default function AuthPage() {
  const [load,setLoad] = useState(false);
  const [email,setEmail] = useState('');
  const [code,setCode] = useState('');
  const sendCode = async () => {
    setLoad(true);
    try{
      const response = await axios.post('/api/auth/email', { email });
      setLoad(false);
      if(response.status < 300 && response.status >= 200){
        alert('Code sent successfully');
      }
    }catch(e){
      setLoad(false);
      alert(e);
    }
  };
  const getToken = async () => {
    setLoad(true);
    try{
      const response = await axios.post('/api/auth', { email, code });
      setLoad(false);
      if(response.status < 300 && response.status >= 200){
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('user',email);
        window.location.href = '/stamp';
      }
    }catch(e){
      setLoad(false);
      alert(e);
    }
  };
  return (
    <div className={styles.auth_background}>
      <img
        src="dots spread.svg"
        alt="dot spread"
        className={styles.backgound_img}
      />
      <div className={styles.auth_container}>
        <div className={styles.auth_title_container}>
          <h1 className={styles.auth_title}>Verifiy Your stamps!</h1>
          <p className={styles.auth_paragraph}>
            Please sign in with your email before continuing.
          </p>
        </div>
        <div className={styles.auth_input_email_container}>
            <label htmlFor="email" className={styles.label_input}>
                Email
            </label>
            <div className={styles.auth_input_email_button_container}>
            <input type="email" placeholder="Enter your email" id="email" className={styles.auth_input} onChange={(e)=>{setEmail(e.target.value)}}/>
            <button disabled={load} className={styles.auth_button_email} onClick={sendCode}>Send code</button>
            </div>
        </div>
        <div className={styles.auth_input_code_container}>
          <label htmlFor="code" className={styles.label_input}>
            Verication Code
          </label>
          <input placeholder="Enter verification code" type="text" id="code" className={styles.auth_input}  onChange={(e)=>{setCode(e.target.value)}}/>
          <button disabled={load} className={styles.auth_button_code} onClick={getToken}>Verify code</button>
        </div>
      </div>
        <Footer/>
    </div>
  );
}
