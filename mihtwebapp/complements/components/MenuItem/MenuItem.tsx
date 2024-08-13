import React from "react";
import styles from "./MenuItem.module.css";
import Image from "next/image";

interface iMenuItem {
    Title1: string,
    Title2?: string,
    Description1?: string,
    Description2?: string,
    ImagePath?: string,
    Price?: number,
}

export default function MenuItem(props:iMenuItem){
    return(
        <div className={styles.MIDiv} id={"#"+props.Title1}>
            <h1 className={styles.MITitle1}>{props.Title1}</h1>
            <h1 className={styles.MITitle2}>{props.Title2}</h1>
            {props.Price && 
                <h2 className={styles.MIPrice}>CA ${props.Price}</h2>
            }
            <p className={styles.MIDescription1}>{props.Description1}</p>
            <p className={styles.MIDescription2}>{props.Description2}</p>
            <br/>
            {props.ImagePath && 
                <div className={styles.MIZoom}>
                    <div className={styles.MIImg}>
                        <img src={props.ImagePath} style={{objectFit: 'contain'}} sizes='(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 800px' alt={props.Title1}/>
                    </div>
                </div>
            }
        </div>
    )
}