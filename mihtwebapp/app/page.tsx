'use client';

import Image from "next/image";
import NavBar from "@/complements/components/NavBar/NavBar";
import styles from "./page.module.css";
import Menu from "@/complements/components/Menu/Menu";
import Footer from '@/complements/components/FooterComp/FooterComp';
import SliderCardComp from '@/complements/components/SliderComp/SliderCardComp';
import React, { useEffect } from 'react';
import { handleScroll, handleMouseMovement } from './pageFunctions';

export default function Home() {
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
            catrina.style.opacity = '0.7';
          } else if (scrollPosition <= headerHeight && catrina){
            // Si el usuario está en la parte superior de la página
            catrina.style.width = '14vw' // Ajusta el ancho
            catrina.style.height = '14vw' // Ajusta la altura
            catrina.style.opacity = '1';
          }
        }
      }
    );
  }


  useEffect(() => {
    // Agrega el listener de evento al montar el componente
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMovement);
  
    // Limpia el listener de evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMovement);
    };
  }, []); // El segundo argumento de useEffect ([]) indica que este efecto se ejecutará solo una vez al montar el componente
  
  return (
    <main className={styles.Main}>
      <div id={styles.GridCont1}>
        <div className={styles.HeaderLogo} id="HeaderLogo">
          <Image src="/media/Hot Tacos Banner.jpg" fill alt="Hot Tacos"/>
        </div>
        <a className={styles.Catrina} id="catrina">
          <Image src="/media/Catrina.png" fill alt="Hot Tacos"/>
        </a>
        <h2 className={styles.HeadParagraph2} >Authentic Mexican Restaurant</h2>
        <h3 className={styles.HeadParagraph3} ><a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href="https://www.google.com/maps/dir//Hot+Tacos+Mexican+Restaurant/@42.0529949,-82.6816491,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883ac1874678d4cf:0xd04e2ab656c80fa2!2m2!1d-82.5992483!2d42.0530244?entry=ttu"><u>16 Talbot Street E, Leamington ON, N8H 1L2</u></a> -   <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href="tel:+1-519-3291615" ><u className={styles.PhoneLink}>519 329 1615</u></a></h3>
      </div>
      
      <div id={styles.GridCont2}>
        <NavBar/>
      </div>

      <div id={styles.GridCont3}>
        <SliderCardComp
          ImgSeconds={1} // Seconds for each image previos to be changed for the next one
          DispGalleries={{
            display: true,
            position: 'bottom',
          }}
          classNames={"styles.MainGallery"}
          GalleryID=""
          styles={""}
          width={350}
          height={350}
          galleries={[
            {
              images:[
                '/media/AlPastor.jpg',
                '/media/Ceviche.jpg',
                '/media/HotTacosMenus.jpg',
                '/media/Molcajete.jpg',
                '/media/PapasHotTacos.jpg',
                '/media/ParrilladaMixta.jpg',
                '/media/PechugaAsada.jpg',
                '/media/PozolePuerco.jpg',
                '/media/Promo3.jpg',
                '/media/Pulpo.jpg',
                '/media/QueMeVes.jpg',
                '/media/Quesabirrias.jpg',
                '/media/RibEye.jpg',
                '/media/Sopes.jpg',
                '/media/Torta.jpg',
                '/media/Catrina.png',
              ],
              title: "Platillos Hot Tacos",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            }
          ]}
        />
      </div>

      <div id={styles.GridCont4}>
        <table className={styles.BusinessHours}>
          <thead className={styles.TableHead}>
            <tr className={styles.ScheduleRow}>
              <th className={styles.ScheduleDay}></th>
              <th className={styles.ScheduleOpen}>Apertura</th>
              <th className={styles.ScheduleClose}>Cierre</th>
            </tr>
          </thead>
          <tbody className={styles.TableBody}>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Lunes</td>
              <td className={styles.ScheduleOpen}>-</td>
              <td className={styles.ScheduleClose}>-</td>
            </tr>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Martes</td>
              <td className={styles.ScheduleOpen}>12:00 am</td>
              <td className={styles.ScheduleClose}>7:00 pm</td>
            </tr>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Miércoles</td>
              <td className={styles.ScheduleOpen}>12:00 am</td>
              <td className={styles.ScheduleClose}>8:30 pm</td>
            </tr>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Jueves</td>
              <td className={styles.ScheduleOpen}>11:30 am</td>
              <td className={styles.ScheduleClose}>8:30 pm</td>
            </tr>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Viernes</td>
              <td className={styles.ScheduleOpen}>11:30 am</td>
              <td className={styles.ScheduleClose}>8:30 pm</td>
            </tr>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Sábado</td>
              <td className={styles.ScheduleOpen}>12:00 pm</td>
              <td className={styles.ScheduleClose}>8:00 pm</td>
            </tr>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Domingo</td>
              <td className={styles.ScheduleOpen}>10:00 am</td>
              <td className={styles.ScheduleClose}>7:00 pm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id={styles.GridCont5}>
        <Menu />
      </div>

      <div id={styles.GridCont6}>
        {/* <div className={styles.MI}>
          <iframe className={styles.PowerBI}
            title="Report Section" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZDkyOWI3MjQtNDJjMC00NDdlLWIxZWUtNDM2ZmU0NzcyMmRjIiwidCI6ImEwZTZmZTM0LTRjMmItNGFkYS1iYTkyLTBmNDc4YWZjMWNiMCJ9" allowFullScreen={true}>
          </iframe>
        </div> */}
      </div>

      <div id={styles.GridCont7}>
        {/* 
        <iframe
          width="600"   // Ancho del iframe
          height="450"  // Altura del iframe
          loading="lazy"
          src={mapaEstaticoUrl}  // Sustituye con la URL de tu mapa estático
          aria-hidden="false"
        ></iframe> */}
      </div>

      <div id={styles.GridCont8}>
        <Footer 
            author= {'Alain Y. Rivera S.'}
            copyright= {'Alain Rivera'}
            date= {'Jan 24, 2024'}
            version= {'1.0.0'}
            company={'Hot Tacos & Restaurant Inc.'}
        />
      </div>
    </main>
  );
}
