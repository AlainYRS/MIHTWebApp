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
        <div className={styles.MIDiv} id={"#"+props.Title}>
            <h1 className={styles.MITitle}>{props.Title}</h1>
            <h2 className={styles.MIPrice}>CA ${props.Price}</h2>
            <p className={styles.MIDescription}>{props.Description}</p>
            <br/>
            {props.ImagePath && 
                <div className={styles.MIZoom}>
                    <div className={styles.MIImg}>
                        <Image src={props.ImagePath} fill alt={props.Title}/>
                    </div>
                </div>
            }
        </div>
    )
}