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

interface iPlatforms{
    PName?: string,
    PIcon?: string,
    PUrl: string,
}

interface iSocMed{
    PName?: string,
    PIcon?: string,
    PUrl: string,
}

interface IFooter{
    author: string,
    copyright: string,
    date: string,
    version: string,
    company: string,
    platforms?: iPlatforms[],
    socmed?: iSocMed[],
}

function Footer(props:IFooter){
    return (
        <>
            <div className={(styles.AppFooter, styles.SocialMed)}>
                {props.socmed && 
                    props.socmed.map((socmed, index) => {
                        return(
                            <a href={socmed.PUrl} key={index} target="_blank" rel="noopener noreferrer">
                                {socmed.PIcon && <Image src={socmed.PIcon} style={{borderRadius:'7px'}} width={30} height={30} alt={'Social Media'}/>}
                                {socmed.PName && socmed.PName}
                            </a>
                        )
                    })
                }
                {props.platforms && 
                    props.platforms.map((plat, index) => {
                        return(
                            <a href={plat.PUrl} target="_blank" rel="noopener noreferrer">
                                {plat.PIcon && <Image src={plat.PIcon} key={index} style={{borderRadius:'7px'}} width={30} height={30} alt={'Platforms'}/>}
                                {plat.PName && plat.PName}
                            </a>
                        )
                    })
                }
            </div>
            <h6 className={styles.Author}>Developed by {props.author} / {props.company} {props.date}</h6>
        </>
    )
}
export default React.memo(Footer)