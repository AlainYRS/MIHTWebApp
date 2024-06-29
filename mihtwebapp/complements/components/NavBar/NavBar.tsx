import React from "react";
import styles from "./NavBar.module.css";

interface INavBar{
    BranchName?: string,
    OnlineOrderingURL?: string,
    ImageURL?: string,
    PhoneNumber?: string,
    Directions?: string,
    FeedBackLink?: string,
    RafflesLink?: string,
}
export default function NavMenu(props: INavBar){
    return (
        <nav className={styles.NavBarContainer}>
            <div className={styles.BranchIcon}>
                <img className={styles.Picture} src={props.ImageURL} alt=""/>
                <h2 className={styles.TitleNavBar}>{props.BranchName}</h2>
            </div>
            {props.OnlineOrderingURL &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={props.OnlineOrderingURL} >Pedir en Linea<br/><p className={styles.EngTitle}>Order Online</p></a>
            }
            {props.PhoneNumber &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={"tel:+"+props.PhoneNumber} >Pedido Telefónico<br/><p className={styles.EngTitle}>Call to Order</p></a>
            }
            {props.Directions &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={props.Directions} >Como llegar<br/><p className={styles.EngTitle}>Directions</p></a>
            }
            {props.FeedBackLink &&
                <a className={styles.MenuButtom} href={props.FeedBackLink}>
                {/* <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={props.FeedBackLink}> */}
                    Opiniones<br/>
                    <p className={styles.EngTitle}>Reviews</p>
                    <img className={styles.restaurantji} src="https://www.restaurantji.com/badges/index.php?id=6182576&badge=badge-1-template.png" alt="Hot Tacos Mexican Restaurant is a must-visit at local restaurants"/>
                </a>
            }
            {props.RafflesLink &&
                <a className={styles.MenuButtom} href={props.RafflesLink}>
                    Rifas<br/>
                    <p className={styles.EngTitle}>Raffles</p>
                </a>
            }
        </nav>
    );
}