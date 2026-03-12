'use client';

import Image from "next/image";
import NavBar from "@/complements/components/NavBar/NavBar";
import styles from "./page.module.css";
import MenuLeamington from "@/complements/components/Menu/MenuLeamington";
import MenuWindsor from "@/complements/components/Menu/MenuWindsor";
import Footer from '@/complements/components/FooterComp/FooterComp';
import SliderCardComp from '@/complements/components/SliderComp/SliderCardComp';
import React, { useEffect, useState } from 'react';
import PlayerComp from '@/complements/components/PlayerComp/PlayerComp';
import BranchComp from "@/complements/components/BranchComponent/Branch";
import Link from 'next/link';
import { useAppContext } from "@/context/AppContext";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import InterComp from "@/complements/components/InternationalizationComp/InternationalizationComp";
import { trackEvent } from "@/app/lib/analytics";

export default function Home() {
  const contextUsr = useAppContext().userState.User;
  const [catrinaStyle, setCatrinaStyle] = useState({ width: '14vw', height: '14vw' });
  const [Player, setPlayer] = useState(false)
  const [Branch, setBranch] = useState("") // ""
  const [Chosen, setChosen] = useState(false) // false
  const [ActPlayer, setActPlayer] = useState(false)

  // const mapaEstaticoUrl = "https://maps.app.goo.gl/fw18xgWNgxTyMctC8";
  // const mapaEstaticoUrl = `https://maps.googleapis.com/maps/api/staticmap?center=42.05327130119621,-82.59920537477937&zoom=13&size=600x450&key=${process.env.NEXT_PUBLIC_AYRS_API_Key}`;

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
  
  useEffect(()=>{
    {Branch !=="" && setChosen(true)}
  },[Branch])

  return (
    <main className={styles.Main}>
      <div id={styles.GridCont1}> {/* Header */}
        <div className={styles.HeaderLogo} id="HeaderLogo">
          <Image src="/media/Hot Tacos Banner.jpg" fill priority sizes='(max-width: 768px) 70vw, (max-width: 1200px) 70vw, 800px' alt="Hot Tacos"/>
        </div>
        <a className={styles.Catrina} id="catrina" style={catrinaStyle}>
          {Branch == "Street Food" ?
            <Image src="/media/StreetFood.png" fill sizes='(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 800px' alt="Hot Tacos"/>
            :
            <Image src="/media/Catrina.png" fill sizes='(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 800px' alt="Hot Tacos"/>
          }
        </a>
        <h2 className={styles.HeadParagraph2} >{Branch == "" && <FormattedMessage id='home.slogan' defaultMessage='Authentic Mexican Experience' />}
          {Branch == "Windsor" && 
            <>
              <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={"https://www.google.com/maps/dir//hot+tacos+windsor+ontario/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x883b2dd18c2079f3:0x7c98cd6cc1c7cbea?sa=X&ved=1t:3061&ictx=111"} ><strong>{Branch}</strong> - <u>325 Ouellette Ave</u> -</a> 
              <u><a href={"tel:+519 818 5129"}>519 818 5129</a></u>
            </>
          }
          {Branch == "Leamington" && 
            <>
              <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={"https://www.google.com/maps/dir//Hot+Tacos+Mexican+Restaurant/@42.0529949,-82.6816491,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883ac1874678d4cf:0xd04e2ab656c80fa2!2m2!1d-82.5992483!2d42.0530244?entry=ttu"} ><strong>{Branch}</strong> - <u>16 Talbot Street E</u> -</a> 
              <u><a href={"tel:+519 329 1615"}>519 329 1615</a></u>
            </>
          }
          {Chosen &&
            <h3 className={styles.HeadParagraph4} onClick={()=> {setBranch(""), setChosen(false)}}><strong>Cambiar / Change</strong> </h3>
          }
        </h2>

      </div>
      <div id={styles.GridCont2}> {/* SEO */}
          <p className={styles.SEOEspañol}><FormattedMessage id='home.Welcome' defaultMessage='Welcome' /></p>
      </div>

      <div id={styles.GridCont8}> {/* Footer */}
        <FooterComp 
          author= {'Alain Y. Rivera S.'}
          copyright= {'Alain Rivera'}
          date= {'Jan 24, 2024'}
          version= {'1.0.0'}
          company={'Restaurant Group'}
        />
      </div>

      <div id={styles.GridCont10}> {/* Branches */}
        {Chosen==false &&
          <div className={styles.Branches}>
            <BranchComp 
              Name={"Leamington"}
              analyticsLocationId="leamington"
              Address={"16 Talbot Street E, Leamington ON, N8H 1L2"}
              Location={"https://www.google.com/maps/dir//Hot+Tacos+Mexican+Restaurant/@42.0529949,-82.6816491,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883ac1874678d4cf:0xd04e2ab656c80fa2!2m2!1d-82.5992483!2d42.0530244?entry=ttu"}
              Phone={"+1 519 329 1615"}
              OnlineSells={"https://order.tbdine.com/pickup/28824/menu"}
              Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos%20Leamington_350x350.webp?alt=media&token=4877403b-8deb-4a7b-9698-0de7e1c172b2"}
              // setState={setBranch}
              // onClickLink="http://localhost:3000/Leamington"
              onClickLink="https://hottacosrestaurant.com/Leamington"
              />
            {/* <BranchComp 
              Name={"Street Food"}
              Address={"26 Erie St S, Leamington, ON N8H 1R6"}
              Location={"https://maps.app.goo.gl/1ie6ruZfKYL8YmHu9"}
              Phone={"+1 226 936 2953"}
              OnlineSells={"https://www.clover.com/online-ordering/hot-tacos-street-food"}
              Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Access%20Image%20SF_350x350.webp?alt=media&token=7d92c9ac-a29f-4838-92f8-7a35520c9b54"}
              // setState={setBranch}
              // onClickLink="http://localhost:3000/StreetFood"
              onClickLink="https://hottacosrestaurant.com/StreetFood"
            /> */}
            <BranchComp 
              Name={"Windsor"}
              analyticsLocationId="windsor"
              Address={"325 Ouellette Ave, Windsor, ON N9A 4J1"}
              Location={"https://maps.app.goo.gl/Li6UnVBbNbqhBed49"}
              Phone={"+1 519 818 5129"}
              OnlineSells={"https://order.tbdine.com/pickup/51513/menu"}
              Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos%20Windsor_350x350.webp?alt=media&token=fedf2bf1-967d-4eb1-a2ca-44c4746738d3"}
              // setState={setBranch}
              // onClickLink="http://localhost:3000/Windsor"
              onClickLink="https://hottacosrestaurant.com/Windsor"
            />
          </div>
        }
      </div>

      <div id={styles.GridCont11}> {/* Background Image */}
        <img className={styles.ImgBackground} src="/media/AlPastor.jpg" alt="" />
      </div>
    </main>
  );
}
