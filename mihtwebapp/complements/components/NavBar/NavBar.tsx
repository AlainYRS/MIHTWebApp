import React from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";

export default function NavMenu(){
    return (
        <nav className={styles.NavBarContainer}>
            <div className={styles.LogoContainer}>
                <Image src="/Icons/HTIcons/icon-144x144.png" fill alt="Hot Tacos Logo"/>
            </div>
            <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href="https://order.tbdine.com/pickup/28824/menu" >Hacer pedido</a>
            <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href="tel:+1-519-329-1615" >Pedido Telefónico</a>
            <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href="https://www.google.com/maps/dir//Hot+Tacos+Mexican+Restaurant/@42.0529949,-82.6816491,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883ac1874678d4cf:0xd04e2ab656c80fa2!2m2!1d-82.5992483!2d42.0530244?entry=ttu" >Como llegar</a>
            <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href="https://www.google.com/search?q=Hot+Tacos+Mexican+Restaurant&oq=hot&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MhUIBBAuGCcYrwEYxwEYgAQYigUYjgUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgwIBxAAGEMYgAQYigUyDQgIEC4YxwEY0QMYgAQyBwgJEAAYjwLSAQkzOTYxajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8&lqi=ChxIb3QgVGFjb3MgTWV4aWNhbiBSZXN0YXVyYW50SP7mtdeLsICACFo-EAAQARACEAMYABgBGAIYAyIcaG90IHRhY29zIG1leGljYW4gcmVzdGF1cmFudCoKCAIQABABEAIQAzICZW6SARJtZXhpY2FuX3Jlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTXhja3BMYnpoblJSQUKqAUUQATIfEAEiGw77zvW_g1eMG3zgLIufMx5wXH_5RvSPTrVAxzIgEAIiHGhvdCB0YWNvcyBtZXhpY2FuIHJlc3RhdXJhbnQ#lkt=LocalPoiReviews&rlimm=15009981570700808098">Dinos tu Opinión</a>
            {/* <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href="https://www.google.com/search?q=Hot+Tacos+Mexican+Restaurant&oq=hot&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MhUIBBAuGCcYrwEYxwEYgAQYigUYjgUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgwIBxAAGEMYgAQYigUyDQgIEC4YxwEY0QMYgAQyBwgJEAAYjwLSAQkzOTYxajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8&lqi=ChxIb3QgVGFjb3MgTWV4aWNhbiBSZXN0YXVyYW50SP7mtdeLsICACFo-EAAQARACEAMYABgBGAIYAyIcaG90IHRhY29zIG1leGljYW4gcmVzdGF1cmFudCoKCAIQABABEAIQAzICZW6SARJtZXhpY2FuX3Jlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTXhja3BMYnpoblJSQUKqAUUQATIfEAEiGw77zvW_g1eMG3zgLIufMx5wXH_5RvSPTrVAxzIgEAIiHGhvdCB0YWNvcyBtZXhpY2FuIHJlc3RhdXJhbnQ#rlimm=15009981570700808098">Perfil de Hot Tacos</a> */}
            {/* <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href="https://www.google.com.mx/maps/place/Hot+Tacos+Restaurante+Mexicano/@42.0530284,-82.6018232,17z/data=!3m1!4b1!4m6!3m5!1s0x883ac1874678d4cf:0xd04e2ab656c80fa2!8m2!3d42.0530244!4d-82.5992483!16s%2Fg%2F11j2ygvxwz?entry=ttu" >Hot Tacos Mexican Restaurant</a> */}
        </nav>
    )
;}