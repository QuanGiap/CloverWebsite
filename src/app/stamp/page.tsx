'use client'; // Mark this as a client component
import Footer from '@/component/Footer/Footer';
import styles from './page.module.css'
export default function StampPage(){
    return <div className={styles.back_ground_page}>
        <div className={styles.title_page}>
            <h1></h1>
        </div>
        <Footer/>
    </div>
}