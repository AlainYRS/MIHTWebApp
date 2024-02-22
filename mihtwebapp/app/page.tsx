'use client';

import Image from "next/image";
import NavBar from "@/complements/components/NavBar/NavBar";
import styles from "./page.module.css";
import Menu from "@/complements/components/Menu/Menu";
import Footer from '@/complements/components/FooterComp/FooterComp';
import SliderCardComp from '@/complements/components/SliderComp/SliderCardComp';
import React, { useEffect, useState } from 'react';
import PlayerComp from '@/complements/components/PlayerComp/PlayerComp'

export default function Home() {
  const [catrinaStyle, setCatrinaStyle] = useState({ width: '14vw', height: '14vw' });
  const [Player,setPlayer] = useState(true)
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
    );
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
    <main className={styles.Main}>
      <div id={styles.GridCont1}>
        <div className={styles.HeaderLogo} id="HeaderLogo">
          <Image src="/media/Hot Tacos Banner.jpg" fill priority sizes='(max-width: 768px) 70vw, (max-width: 1200px) 70vw, 800px' alt="Hot Tacos"/>
        </div>
        {/* <a className={styles.Catrina} id="catrina">
          <Image src="/media/Catrina.png" fill sizes='(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 800px' alt="Hot Tacos"/>
        </a> */}
        <a className={styles.Catrina} id="catrina" style={catrinaStyle}>
          <Image src="/media/Catrina.png" fill sizes='(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 800px' alt="Hot Tacos"/>
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
          width={300}
          height={300}
          galleries={[
            {
              images:[
                // '/media/AlPastor.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/AlPastor_350x350.webp?alt=media&token=00224201-3dc2-42a6-9d70-62f7cd6a3a1d',
              ],
              title: "Al Pastor",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            }
            ,
            {
              images:[
                // '/media/Ceviche.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Ceviche_350x350.webp?alt=media&token=b0181e55-7b93-4e5c-a9a2-c78f7f0720f4',
              ],
              title: "Ceviche",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/HotTacosMenus.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/HotTacosMenus_350x350.webp?alt=media&token=c390f254-b127-49f3-8a30-7217090a00d1',
              ],
              title: "Platillos de Hot Tacos",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/Molcajete.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Molcajete_350x350.webp?alt=media&token=bce207ae-6e04-48c8-ad38-1c2187d39b94',
              ],
              title: "Molcajete",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/PapasHotTacos.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/PapasHotTacos_350x350.webp?alt=media&token=0d90f04d-cb6f-4f2f-aa76-6445d7d0c463',
              ],
              title: "Papas Hot Tacos",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/ParrilladaMixta.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/ParrilladaMixta_350x350.webp?alt=media&token=70d39363-e9a3-4c30-9514-b5e8551d6a2d',
              ],
              title: "Parrillada Mixta",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/PechugaAsada.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/PechugaAsada_350x350.webp?alt=media&token=71ab4f79-bc00-4870-b186-c657ab730777',
              ],
              title: "Pechuga Asada",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/PozolePuerco.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/PozolePuerco_350x350.webp?alt=media&token=153e2dbd-1089-4321-907a-e2c5f161af54',
              ],
              title: "Pozole de Puerco",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/Promo3.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Promo3_350x350.webp?alt=media&token=a9b1a546-50fb-411c-a8ca-b29b5765befe',
              ],
              title: "Promoción",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/Pulpo.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Pulpo_350x350.webp?alt=media&token=139ab8d0-4fc6-4d44-8441-0c45b73bc963',
              ],
              title: "Pulpo",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/QueMeVes.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/QueMeVes_350x350.webp?alt=media&token=66c84051-5ce1-43e4-94e9-8b286728add9',
              ],
              title: "Que Me Ves",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/Quesabirrias.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Quesabirrias_350x350.webp?alt=media&token=5c391787-6784-4dca-b121-d6cd39b81004',
              ],
              title: "Quesabirrias",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/RibEye.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/RibEye_350x350.webp?alt=media&token=13c77054-a15a-4ad6-abbd-ec194de06eeb',
              ],
              title: "Rib Eye",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/Sopes.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Sopes_350x350.webp?alt=media&token=68b5a574-2b4d-43e5-8f1c-ac4033f3db13',
              ],
              title: "Sopes",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/Torta.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Torta_350x350.webp?alt=media&token=ed4c0c2d-52a4-4d31-8bb4-b52b496cda04',
              ],
              title: "Torta",
              shortdesc: "Platillos de Hot Tacos",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
            {
              images:[
                // '/media/Torta.jpg',
                'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Wall%20e_350x350.webp?alt=media&token=6d37c3c2-0c0e-404f-b0cf-9dc08ddac1df',
              ],
              title: "Wall e",
              shortdesc: "Hot Tacos New Member",
              url:'https://order.tbdine.com/pickup/28824/menu',
            },
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
              <td className={styles.ScheduleOpen}>11:00 pm</td>
              <td className={styles.ScheduleClose}>8:00 pm</td>
              {/* <td className={styles.ScheduleOpen}>12:00 pm</td> */}
              {/* <td className={styles.ScheduleClose}>7:00 pm</td> */}
            </tr>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Miércoles</td>
              <td className={styles.ScheduleOpen}>11:00 pm</td>
              <td className={styles.ScheduleClose}>8:00 pm</td>
              {/* <td className={styles.ScheduleOpen}>12:00 pm</td>
              <td className={styles.ScheduleClose}>8:30 pm</td> */}
            </tr>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Jueves</td>
              <td className={styles.ScheduleOpen}>11:00 am</td>
              <td className={styles.ScheduleClose}>10:00 pm</td>
              {/* <td className={styles.ScheduleOpen}>11:30 am</td>
              <td className={styles.ScheduleClose}>8:30 pm</td> */}
            </tr>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Viernes</td>
              <td className={styles.ScheduleOpen}>11:00 am</td>
              <td className={styles.ScheduleClose}>10:00 pm</td>
              {/* <td className={styles.ScheduleOpen}>11:30 am</td>
              <td className={styles.ScheduleClose}>8:30 pm</td> */}
            </tr>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Sábado</td>
              <td className={styles.ScheduleOpen}>11:00 am</td>
              <td className={styles.ScheduleClose}>10:00 pm</td>
              {/* <td className={styles.ScheduleOpen}>12:00 pm</td>
              <td className={styles.ScheduleClose}>8:00 pm</td> */}
            </tr>
            <tr className={styles.ScheduleRow}>
              <td className={styles.ScheduleDay}>Domingo</td>
              <td className={styles.ScheduleOpen}>11:00 am</td>
              <td className={styles.ScheduleClose}>8:00 pm</td>
              {/* <td className={styles.ScheduleOpen}>10:00 am</td>
              <td className={styles.ScheduleClose}>7:00 pm</td> */}
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
      {/* <div id={styles.GridCont9}>
        <PlayerComp
          url={'https://www.youtube.com/watch?v=EeuLoj0rb08'} 
          // url={'https://www.youtube.com/shorts/48YexYtT0UA'} 
          setState={setPlayer}
          width={400} // number,
          height={400} // number,
          readOnly={true} // boolean,
          vertical={'Top'} // 'Top' | 'Bottom' | 'Center',
          horizontal={'Left'} // 'Left' | 'Right' | 'Center',
          position={'relative'} // 'relative' | 'fixed' | 'absolute' | 'static' | 'sticky',
          volume={0.01} //.01 | .25 | .5 | .75 | 1,
          typeDevice={false} // boolean,
          controls={false} // boolean,
          playing={true} // boolean,
          autoPlay={true} // boolean,
          muted={true} // boolean,
          loop={true} // boolean,
        />
      </div> */}


    </main>
  );
}
