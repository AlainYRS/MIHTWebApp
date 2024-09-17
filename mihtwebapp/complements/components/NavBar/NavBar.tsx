import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";

interface INavBar{
    BranchName?: string,
    OnlineOrderingURL?: string,
    ImageURL?: string,
    PhoneNumber?: string,
    Directions?: string,
    FeedBackLink?: string,
    RafflesLink?: string,
    Eventlink?: string,
}
export default function NavMenu(props: INavBar){
    const [MenuDisplay, setMenuDisplay] = useState<boolean>(true)

    return (
        <nav className={styles.NavBarContainer}>
            <div className={styles.BranchIcon}>
                <img className={styles.Picture} src={props.ImageURL} alt=""/>
                <h2 className={styles.TitleNavBar}>{props.BranchName}</h2>
            </div>
            {props.OnlineOrderingURL &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={props.OnlineOrderingURL} >Hacer Pedido<p className={styles.EngTitle}>Order Online</p></a>
            }
            {props.PhoneNumber &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={"tel:+"+props.PhoneNumber} >Llamar<p className={styles.EngTitle}>Call</p></a>
            }
            {props.Directions &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={props.Directions} >Ubicación<p className={styles.EngTitle}>Directions</p></a>
            }
            {props.RafflesLink &&
                <a className={styles.MenuButtom} href={props.RafflesLink}>
                    Rifas
                    <p className={styles.EngTitle}>Raffles</p>
                </a>
            }
            {props.FeedBackLink &&
                <a className={styles.MenuButtom} href={props.FeedBackLink}>
                {/* <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={props.FeedBackLink}> */}
                    Opiniones
                    <p className={styles.EngTitle}>Reviews</p>
                    <img className={styles.restaurantji} src="https://www.restaurantji.com/badges/index.php?id=6182576&badge=badge-1-template.png" alt="Hot Tacos Mexican Restaurant is a must-visit at local restaurants"/>
                </a>
            }
            {/* {props.Eventlink &&
                <a className={styles.MenuButtom} href={props.Eventlink}  target="_blank">
                    <img className={styles.MXNFlag} src="/Icons/MXNIcon.png" alt="" />
                    Septiembre 15
                    <p className={styles.EngTitle}>El Patron Bar & Grill</p>
                    <img className={styles.restaurantji} src="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Luchador_350x350.webp?alt=media&token=134cf8a5-10f0-40b6-957a-f142ba08c4dd" alt="Hot Tacos Mexican Restaurant is a must-visit at local restaurants"/>
                </a>
            } */}
       </nav>
    );
}