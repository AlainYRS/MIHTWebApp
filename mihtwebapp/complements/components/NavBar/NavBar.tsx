import React, { useState } from "react";
import styles from "./NavBar.module.css";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
import Image from "next/image";

interface INavBar{
    BranchName?: string,
    OnlineOrderingURL?: string,
    ImageURL?: string,
    PhoneNumber?: string,
    Directions?: string,
    FeedBackLink?: string,
    RafflesLink?: string,
    Loyalty?: string,
}
export default function NavBar(props: INavBar){
    const [MenuDisplay, setMenuDisplay] = useState<boolean>(true)

    return (
        <nav className={styles.NavBarContainer}>
            <div className={styles.BranchIcon}>
                <img className={styles.Picture} src={props.ImageURL} alt=""/>
                <h2 className={styles.TitleNavBar}>{props.BranchName}</h2>
            </div>
            {props.OnlineOrderingURL &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={props.OnlineOrderingURL} ><FormattedMessage id='home.orderonline' defaultMessage='Order Online' /></a>
            }
            {props.PhoneNumber &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={"tel:+"+props.PhoneNumber} ><FormattedMessage id='home.call' defaultMessage='Call' /></a>
            }
            {props.Directions &&
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={props.Directions} ><FormattedMessage id='home.go' defaultMessage='Directions' /></a>
            }
            {props.Loyalty &&
                <a className={styles.MenuButtom} href={props.Loyalty}  target="_blank"><FormattedMessage id='home.loyalty' defaultMessage='Loyalty Program' /></a>
            }
            {props.RafflesLink &&
                <a className={styles.MenuButtom} href={props.RafflesLink}><FormattedMessage id='home.raffles' defaultMessage='Raffles' /></a>
            }
            {props.FeedBackLink &&
                <a className={styles.MenuButtom} href={props.FeedBackLink}><FormattedMessage id='home.review' defaultMessage='Reviews' />
                    <img className={styles.restaurantji} src="https://www.restaurantji.com/badges/index.php?id=6182576&badge=badge-1-template.png" alt="Hot Tacos Mexican Restaurant is a must-visit at local restaurants"/>
                </a>
            }
       </nav>
    );
}