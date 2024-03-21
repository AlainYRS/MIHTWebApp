import React from "react";
import styles from "./NavBar.module.css";

interface INavBar{
    BranchName?: string,
    OnlineOrderingURL?: string,
    ImageURL?: string,
    PhoneNumber?: string,
    Directions?: string,
    FeedBackLink?: string,
}
export default function NavMenu(props: INavBar){
    return (
        <nav className={styles.NavBarContainer}>
            <div className={styles.BranchIcon}>
                <img className={styles.Picture} src={props.ImageURL} alt=""/>
                <h2 className={styles.TitleNavBar}>{props.BranchName}</h2>
            </div>
            {/* {props.OnlineOrderingURL &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={props.OnlineOrderingURL} >Hacer pedido<br/><p className={styles.EngTitle}>Order Online</p></a>
            } */}
            {props.PhoneNumber &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={"tel:+"+props.PhoneNumber} >Pedido Telefónico<br/><p className={styles.EngTitle}>Call to Order</p></a>
            }
            {props.Directions &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={props.Directions} >Como llegar<br/><p className={styles.EngTitle}>Directions</p></a>
            }
            {props.FeedBackLink &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={props.FeedBackLink}>Dinos tu Opinión<br/><p className={styles.EngTitle}>Feedback</p></a>
            }
        </nav>
    );
}