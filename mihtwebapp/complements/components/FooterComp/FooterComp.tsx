/*---------------------------------------------------------
 ------------- README COMPONENT INSTRUCTIONS: -------------
 Type: Component
 Import statement: import Footer from '@/...path.../FooterComp'
 interface IFooter{
    author: string,
    copyright: string,
    date: string,
    version: string,
    styles?:{{}} // Optional inline styles
    classNames?: string // Optional multiple clases but the styling needs to be in the global styles
 }
 
 <Footer 
    author= {'Alain Y. Rivera S.'}
    copyright= {'Personal Portfolio'}
    date= {'Feb 3, 2023'}
    version= {'1.0.0'}
    className= {'AppFooter'}
    styles?:{{}}
    classNames?: string
 />
---------------------------------------------------------*/

import React from 'react';
import styles from './FooterComp.module.css';
import Image from 'next/image';

interface IFooter{
    author: string,
    copyright: string,
    date: string,
    version: string,
    company: string,
 }

function Footer(props:IFooter){
    return (
        <div className={styles.AppFooter}>
            <div id={styles.AppFooter}>
                <div className={styles.SocialMed}>
                    <a href="https://www.facebook.com/HotTacos?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <Image src={'/Icons/FacebookIcon.png'} style={{borderRadius:'7px'}} width={30} height={30} alt={'Faceboook'}/>
                    </a>
                    <a href="https://www.instagram.com/hottacosrestaurant?igsh=Y3hkMHBhNDk5M2Rl" target="_blank" rel="noopener noreferrer">
                        <Image src={'/Icons/InstaIcon.png'} style={{borderRadius:'7px'}} width={30} height={30} alt={'Instagram'}/>
                    </a>
                </div>
            </div>
            <div>
                <h6 className={styles.Author}>Developed by {props.author} for {props.company} at {props.date}</h6>
            </div>
        </div>
    )
}

export default React.memo(Footer)