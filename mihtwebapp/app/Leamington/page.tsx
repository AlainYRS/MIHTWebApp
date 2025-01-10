'use client'
import React, { useState, useEffect, useRef } from 'react';
import MenuLeamington from "@/complements/components/Menu/MenuLeamington";
import FooterComp from '@/complements/components/FooterComp/FooterComp';
import NavBar from "@/complements/components/NavBar/NavBar";
import Image from "next/image";
import SliderCardComp from '@/complements/components/SliderComp/SliderCardComp';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
import InterComp from "@/complements/components/InternationalizationComp/InternationalizationComp";

import styles from './styles.module.css';

interface iBranch{

}
export default function Leamington(props: iBranch){
    const [catrinaStyle, setCatrinaStyle] = useState({ width: '14vw', height: '14vw' });
    const [Branch, setBranch] = useState("") // ""
    const [Language, setLanguage] = useState<'es'|'en'>('es')

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', function() {
          const catrina = document.getElementById('catrina');
          const Logo = document.getElementById('HeaderLogo');
          const headerHeight = Logo?.offsetHeight;
          const scrollPosition = window.scrollY;
            if(headerHeight && catrina){
              if (scrollPosition > headerHeight) {
                // Si el usuario ha desplazado más allá de la altura del encabezado
                catrina.style.width = '7vw' // Ajusta el ancho
                catrina.style.height = '7vw' // Ajusta la altura
              } else if (scrollPosition <= headerHeight && catrina){
                // Si el usuario está en la parte superior de la página
                catrina.style.width = '14vw' // Ajusta el ancho
                catrina.style.height = '14vw' // Ajusta la altura
              }
            }
          }
        )
      }

      useEffect(() => {
    
        function handleScroll() {
          const Logo = document.getElementById('HeaderLogo');
          const headerHeight = Logo?.offsetHeight;
          const scrollPosition = window.scrollY;
    
          if (headerHeight) {
            if (scrollPosition > headerHeight) {
              setCatrinaStyle({ width: '7vw', height: '7vw' });
            } else {
              setCatrinaStyle({ width: '14vw', height: '14vw' });
            }
          }
        }    
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // El segundo argumento de useEffect ([]) indica que este efecto se ejecutará solo una vez al montar el componente
      
    return (
        <>
            <main className={styles.Main}>
                <div id={styles.GridCont1}> {/* Header */}
                    <div className={styles.HeaderLogo} id="HeaderLogo">
                    <Image src="/media/Hot Tacos Banner.jpg" fill priority sizes='(max-width: 768px) 70vw, (max-width: 1200px) 70vw, 800px' alt="Hot Tacos"/>
                    </div>
                    <a className={styles.Catrina} id="catrina" style={catrinaStyle}>
                        <Image src="/media/Catrina.png" fill sizes='(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 800px' alt="Hot Tacos"/>
                    </a>
                    <h2 className={styles.HeadParagraph2} >{Branch == "" && <FormattedMessage id='home.authentic' defaultMessage='Authentic Mexican Experience' />}
                        <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={"https://www.google.com/maps/dir//hot+tacos+windsor+ontario/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x883b2dd18c2079f3:0x7c98cd6cc1c7cbea?sa=X&ved=1t:3061&ictx=111"} ><strong>{Branch}</strong> - <u>325 Ouellette Ave</u> -</a> 
                        <u><a href={"tel:+519 818 5129"}>519 818 5129</a></u>
                    </h2>
                </div>     
                <div id={styles.GridCont2}> {/* NavBar */}
                    <NavBar
                        ImageURL={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos_350x350.webp?alt=media&token=d9a53f57-d71f-4af0-a48a-f3453ef4392d"}
                        BranchName={"Leamington"}
                        OnlineOrderingURL={"https://order.tbdine.com/pickup/28824/menu"}
                        PhoneNumber={"1-519-329-1615"}
                        Directions={"https://www.google.com/maps/dir//Hot+Tacos+Mexican+Restaurant/@42.0529949,-82.6816491,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883ac1874678d4cf:0xd04e2ab656c80fa2!2m2!1d-82.5992483!2d42.0530244?entry=ttu"}
                        Loyalty={"https://app.tableup.com/r/6740/home"}
                        FeedBackLink={"http://www.hottacosrestaurant.com/Reviews"}
                        RafflesLink={"http://www.hottacosrestaurant.com/Raffles"}
                    />
                </div>
                <div id={styles.GridCont5}> {/* Menus */}
                    <MenuLeamington />
                </div>
                <div id={styles.GridCont8}> {/* Footer */}
                    <FooterComp 
                        author= {'Alain Y. Rivera S.'}
                        copyright= {'Alain Rivera'}
                        date= {'Jan 24, 2024'}
                        version= {'1.0.0'}
                        company={'Hot Tacos & Restaurant Inc.'}
                        platforms={[
                            {
                            // PName: 'Doordash',
                            PIcon: '/Icons/Doordash.png',
                            PUrl: 'https://www.doordash.com/es-US/store/hot-tacos-restaurant-leamington-2340887/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJob3QgdGFjb3MgcmVzdGF1cmFudCIsIml0ZW1faWRzIjpbXSwic2VhcmNoX3Rlcm0iOiJob3QgdGFjbyByZXN0YXVyYW50IiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxXX0=&pickup=false',
                            },
                            {
                            // PName: 'Skip the Dishes',
                            PIcon: '/Icons/SkipTheDishes.jpg',
                            PUrl: 'https://www.skipthedishes.com/hot-tacos-talbot-street-east',
                            },
                            {
                            // PName: 'Uber Eats',
                            PIcon: '/Icons/Uber Eats.png',
                            PUrl: 'https://www.ubereats.com/ca/store/hot-tacos-restaurant/58HVtyoTVG6600eVmrKUjw?diningMode=DELIVERY&sc=SEARCH_SUGGESTION',
                            }
                        ]}
                        socmed={[
                            {
                            // PName: 'Facebook',
                            PIcon: '/Icons/FacebookIcon.png',
                            PUrl: 'https://www.facebook.com/HotTacos?mibextid=LQQJ4d',
                            },
                            {
                            // PName: 'Instagram',
                            PIcon: '/Icons/InstaIcon.png',
                            PUrl: 'https://www.instagram.com/hottacosrestaurant?igsh=Y3hkMHBhNDk5M2Rl',
                            },
                        ]}
                    />
                </div>
                <div id={styles.GridCont11}>
                    <img className={styles.ImgBackground} src="/media/AlPastor.jpg" alt="" />
                </div>
            </main>
        </>
    )
}