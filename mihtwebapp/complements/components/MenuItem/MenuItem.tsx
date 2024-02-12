import React from "react";
import styles from "./MenuItem.module.css";
import Image from "next/image";

interface iMenuItem {
    Title: string,
    TitleEng: string,
    Description?: string,
    DescriptionEng?: string,
    ImagePath?: string,
    Price: number,
}

export default function MenuItem(props:iMenuItem){
    return(
        <div className={styles.MIDiv} id={"#"+props.Title}>
            <h1 className={styles.MITitle}>{props.Title}</h1>
            <h1 className={styles.MITitleEng}>{props.TitleEng}</h1>
            <h2 className={styles.MIPrice}>CA ${props.Price}</h2>
            <p className={styles.MIDescriptionEng}>{props.DescriptionEng}</p>
            <p className={styles.MIDescription}>{props.Description}</p>
            <br/>
            {props.ImagePath && 
                <div className={styles.MIZoom}>
                    <div className={styles.MIImg}>
                        {/* <Image src={props.ImagePath} fill style={{objectFit: 'contain'}} sizes='(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 800px' alt={props.Title}/> */}
                        <img src={props.ImagePath} style={{objectFit: 'contain'}} sizes='(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 800px' alt={props.Title}/>
                    </div>
                </div>
            }
        </div>
    )
}