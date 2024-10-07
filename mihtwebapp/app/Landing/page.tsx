import React from "react";
import styles from './Landing.module.css';
import Image from 'next/image';
import Link from "next/link";

 export default function LandingPage(){
    return(
        <div className={styles.LandingContainer}>
            {/* <div className={styles.Logos}>
            <div className={styles.LogoCont} >
                <Image src={'/media/StreetFood.png'} fill alt={"Street Food"} />
            </div>
            <div className={styles.LogoCont} >
                <Image src={'/media/Logotipo HT.png'} fill alt={"Hot Tacos"} />
            </div>
            <div className={styles.LogoCont} >
                <Image src={'/media/ElPatronClear.png'} fill alt={"El Patron"} />
            </div>
            </div> */}
            <div className={styles.Links}>
                <Link href='https://hottacosrestaurant.com/' className={styles.Link}>Menus</Link>
                <Link href='https://www.hottacosrestaurant.com/Reviews' className={styles.Link}>Califica el Servicio / Rate your Experience</Link>
                <Link href='https://www.hottacosrestaurant.com/Raffles' className={styles.Link}>Participa en Rifas / Be a part of our raffles</Link>
                {/* <h1 className={styles.Link}>Search the free WiFi Netrwork: Hot Tacos Guest / VIP Guest</h1> */}
                <div className={styles.SMR}>
                    <a href={'https://www.facebook.com/HotTacos?mibextid=LQQJ4d'} target="_blank" rel="noopener noreferrer"><img style={{borderRadius:'7px', margin:'0px 14px'}} width={30} height={30} alt={'Social Media'} src="/Icons/FacebookIcon.png" /></a>
                    <a href={'https://www.instagram.com/hottacosrestaurant?igsh=Y3hkMHBhNDk5M2Rl'} target="_blank" rel="noopener noreferrer"><img style={{borderRadius:'7px', margin:'0px 14px'}} width={30} height={30} alt={'Social Media'} src="/Icons/InstaIcon.png" /></a>
                </div>
            </div>
        </div>
    )
 }