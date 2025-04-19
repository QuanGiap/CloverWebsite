"use client"; // Mark this as a client component

import Footer from "@/component/Footer/Footer";
import styles from "./page.module.css";
import { useState } from "react";
import PrimaryButton from "@/component/PrimaryButton/PrimaryButton";
import { submitStamp } from "@/tool/ApiCall";
export default function SubmitPage() {
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message,setMessage] = useState("")
  const saveStamp = async () => {
    setLoad(true);
    try{
      const [error,res] = await submitStamp(email,code);
      if(error) throw error;
    }catch(e){
      alert(e);
    }
    setLoad(false);
  };
  return (
    <div className={styles.submit_background}>
      <img
        src="dots spread.svg"
        alt="dot spread"
        className={styles.backgound_img}
      />
      <div className={styles.submit_container}>
        <div className={styles.submit_title_container}>
          <h1 className={styles.submit_title}>Submit Your Stamps!</h1>
        </div>
        <div className={styles.submit_input_container}>
          <div className={styles.input_group}>
            <label htmlFor="email" className={styles.label_input}>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              value={email}
              className={styles.submit_input}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="email" className={styles.label_input}>
              Code
            </label>
            <input
              type="email"
              placeholder="Enter your code"
              id="code"
              className={styles.submit_input}
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
          </div>
          {message && <div>{message}</div>}
          <PrimaryButton className={styles.submit_button_code} disabled={load}>
            Submit Stamp
          </PrimaryButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}
