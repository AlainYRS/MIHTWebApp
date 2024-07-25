import React from "react";
import styles from './Landing.module.css';
import Image from 'next/image';
import Link from "next/link";

 export default function LandingPage(){
    return(
        <div className={styles.LandingContainer}>
            <div className={styles.Logos}>
            <div className={styles.LogoCont} >
                <Image src={'/media/StreetFood.png'} fill alt={"Street Food"} />
            </div>
            <div className={styles.LogoCont} >
                <Image src={'/media/Logotipo HT.png'} fill alt={"Hot Tacos"} />
            </div>
            <div className={styles.LogoCont} >
                <Image src={'/media/ElPatronClear.png'} fill alt={"El Patron"} />
            </div>
            </div>
            <div className={styles.Links}>
                <Link href='https://www.hottacosrestaurant.com/Reviews' className={styles.Link}>Califica el Servicio</Link>
                <Link href='https://hottacosrestaurant.com/' className={styles.Link}>Consulta el Menú</Link>
                <Link href='https://www.hottacosrestaurant.com/Raffles' className={styles.Link}>Participa en Rifas</Link>
                <Link href='https://www.eventbrite.com/e/ncg-wrestling-presents-lucha-libra-supreme-tickets-950830508647' target="_blank" className={styles.Link}>Festeja el 15 de Septiembre con Lucha Libre en <br/><strong>El Patron Bar & Grill</strong></Link>
                <h1 className={styles.Link}>Free WiFi Netrwork: Hot Tacos Guest / VIP Guest</h1>
            </div>
        </div>
    )
 }