import React from "react";
import styles from "./MenuItem.module.css";
import Image from "next/image";

interface iMenuItem {
    Title: string,
    Description?: string,
    ImagePath?: string,
    Price: number,
}

export default function MenuItem(props:iMenuItem){
    return(
        <div className={styles.MIDiv}>
            <h1 className={styles.MITitle}>{props.Title} <strong>CA ${props.Price}</strong></h1>
            <p className={styles.MIDescription}>{props.Description}</p>
            {props.ImagePath && 
                <div className={styles.MIImg}>
                    <Image src={props.ImagePath} fill alt={props.Title}/>
                </div>
            }
        </div>
    )
}