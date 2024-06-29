import React, {useState} from "react";
import styles from "@/complements/components/EmployeeComponent/Employee.module.css";

interface IEmployee{
    Name: string,
    Image?: string,
    setState: any,
    setImg: any,
}

export default function EmployeeComp(props: IEmployee){
    return(
        <div className={styles.EmployeeComp} onClick={()=>{props.setState(props.Name), props.setImg(props.Image)}}>
            <h2 className={styles.EmployeeName}>{props.Name}</h2>
            <img className={styles.Picture} src={props.Image} alt=""/>
        </div>
    )
}