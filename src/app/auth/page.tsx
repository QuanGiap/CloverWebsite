'use client'; // Mark this as a client component

import Footer from "@/component/Footer/Footer";
import styles from "./page.module.css";

export default function AuthPage() {
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
            <input type="email" placeholder="Enter your email" id="email" className={styles.auth_input} />
            <button className={styles.auth_button_email}>Send code</button>
            </div>
        </div>
        <div className={styles.auth_input_code_container}>
          <label htmlFor="code" className={styles.label_input}>
            Verication Code
          </label>
          <input placeholder="Enter verification code" type="text" id="code" className={styles.auth_input} />
          <button className={styles.auth_button_code} onClick={()=>window.location.href = '/stamp'}>Verify code</button>
        </div>
      </div>
        <Footer/>
    </div>
  );
}
