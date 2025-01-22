import React from 'react';
import styles from './StampIcon.module.css';

interface StampIconProps {
    imageUrl: string;
    altText: string;
    stamped:boolean;
}

function StampIcon({ imageUrl, altText,stamped }:StampIconProps){
    
    return (
        <div className={(stamped)?styles.stamped:styles.unstamped}>
            <div className={styles.image_container}>
                <img src={imageUrl} alt={altText} className={styles.stamp_image} />
            </div>
        </div>
    );
};

export default StampIcon;