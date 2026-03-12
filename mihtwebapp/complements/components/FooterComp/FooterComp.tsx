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

import React, { useState, useEffect } from 'react';
import styles from './FooterComp.module.css';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
import { trackEventAndThen } from "@/app/lib/analytics";

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
    copyright?: string,
    date?: string,
    version?: string,
    company?: string,
    platforms?: iPlatforms[],
    socmed?: iSocMed[],
}

function FooterComp(props:IFooter){
    const context = useAppContext().userState;

    const { States, setStates } = useAppContext().userState;
    const [State1, setState1] = useState<boolean>(false); // Estado inicial neutro
    context.States = ({...context.States, State1: State1});
    context.setStates = ({...context.setStates, setState1: setState1});
    
    const [HideHeaderFooter, setHideHeaderFooter] = useState<boolean>(false); // Consistente con SSR

    useEffect(() => {
        if (typeof window !== 'undefined') {
          let Init = window.pageYOffset
          window.onscroll = function (){
            let Last = window.pageYOffset
            if(Init >= Last){setHideHeaderFooter(true)}
            else{setHideHeaderFooter(false)}
          Init = Last
          }
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let Init = window.pageYOffset;
            const handleScroll = () => {
                const Last = window.pageYOffset;
                setHideHeaderFooter(Init >= Last);
                Init = Last;
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    

    return (
        <div id={styles.AppFooter} className={(HideHeaderFooter == true ? styles.showFooter : styles.hideFooter)}>
            {States.State1 && (
                <>
                    <p onClick={() => setStates.setState1(!States.State1)}>User ID: {context.User?.ClientID || 'N/A'}</p>
                    <FormattedMessage id="loby.slogan" defaultMessage="Slogan" />
                    <br />
                    <FormattedNumber value={19} style="currency" currency="CAD" />
                </>
            )}
            <div className={styles.SocialMedPlatforms}>
                {props.socmed && 
                    props.socmed.map((socmed, index) => {
                        return(
                            <a
                                className={styles.Footeritem}
                                href={socmed.PUrl}
                                key={index+'sm'}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    e.preventDefault();

                                    trackEventAndThen(
                                    "social_click",
                                    {
                                        platform: socmed.PName,
                                        placement: "footer",
                                    },
                                    () => {
                                        window.open(socmed.PUrl, "_blank", "noopener,noreferrer");
                                    }
                                    );
                                }}
                            >
                                {socmed.PIcon && <Image src={socmed.PIcon} style={{ width: "auto", height: "auto", borderRadius: "7px" }} width={30} height={30} alt={'Social Media'}/>}
                                {socmed.PName && socmed.PName}
                            </a>
                        )
                    })
                }
                {props.platforms && 
                    props.platforms.map((plat, index) => {
                        return(
                            <a
                                className={styles.Footeritem}
                                href={plat.PUrl}
                                key={index+'pf'}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    e.preventDefault();

                                    trackEventAndThen(
                                    "delivery_click",
                                    {
                                        platform: plat.PName,
                                        placement: "footer",
                                    },
                                    () => {
                                        window.open(plat.PUrl, "_blank", "noopener,noreferrer");
                                    }
                                    );
                                }}
                            >
                                {plat.PIcon && <Image src={plat.PIcon} style={{ width: "auto", height: "auto", borderRadius: "7px" }} width={30} height={30} alt={'Platforms'}/>}
                                {plat.PName && plat.PName}
                            </a>
                        )
                    })
                }
            </div>
            <h6 className={styles.Author}>{props.company} developed by {props.author} {props.date}</h6>
        </div>
    )
}

export default React.memo(FooterComp);