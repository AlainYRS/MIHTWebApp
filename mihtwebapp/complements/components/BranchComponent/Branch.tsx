import React, {useState} from "react";
import Image from "next/image";
import styles from "@/complements/components/BranchComponent/Branch.module.css";
import Link from "next/link";

interface IBranch{
    Name: string,
    Location?: string,
    Phone?: string,
    Address?: string,
    OnlineSells?: string,
    Image?: string,
    setState?: any,
    onClickLink?: string,
}

export default function BranchComp(props: IBranch){
    return(
        <div className={styles.BranchComp} onClick={()=>props.setState(props.Name)}>
            <h2 className={styles.BranchName}>{props.Name}</h2>
            {props.onClickLink ?
                <a href={props.onClickLink ? props.onClickLink : ''}>
                    <img className={styles.Picture} src={props.Image} alt=""/>
                </a>
                :
                    <img className={styles.Picture} src={props.Image} alt=""/>
            }
            <h3 className={styles.HeadParagraph3} >
                <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} 
                    href={props.Location ? props.Location : ''}>
                    <u>{props.Address}</u>
                </a><br/>
                {props.Phone && 
                    <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={"tel:+"+props.Phone.toString()} >
                        <u className={styles.PhoneLink}>{props.Phone.toString()}</u>
                    </a>
                }
            </h3>
        </div>
    )
}