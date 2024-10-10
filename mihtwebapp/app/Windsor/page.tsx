'use client'
import React, { useState, useEffect, useRef } from 'react';
import MenuWindsor from "@/complements/components/Menu/MenuWindsor";
import Footer from '@/complements/components/FooterComp/FooterComp';
import NavBar from "@/complements/components/NavBar/NavBar";
import Image from "next/image";
import SliderCardComp from '@/complements/components/SliderComp/SliderCardComp';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';

import styles from './styles.module.css';

interface iBranch{

}
export default function Windsor(props: iBranch){
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
                    <h2 className={styles.HeadParagraph2} >{Branch == "" && "Authentic Mexican Experience"}
                        <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href={"https://www.google.com/maps/dir//hot+tacos+windsor+ontario/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x883b2dd18c2079f3:0x7c98cd6cc1c7cbea?sa=X&ved=1t:3061&ictx=111"} ><strong>{Branch}</strong> - <u>325 Ouellette Ave</u> -</a> 
                        <u><a href={"tel:+519 818 5129"}>519 818 5129</a></u>
                    </h2>
                </div>     

                <div id={styles.GridCont2}> {/* NavBar */}
                    <NavBar
                        ImageURL={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos%20Windsor_350x350.webp?alt=media&token=fedf2bf1-967d-4eb1-a2ca-44c4746738d3"}
                        BranchName={"Windsor"}
                        OnlineOrderingURL={"https://order.tbdine.com/pickup/51513/menu"}
                        PhoneNumber={"1-519-818-5129"}
                        Directions={"https://www.google.com/maps/dir/42.3109168,-83.046867/hot+tacos+windsor+ontario/@42.3140328,-83.0539755,15z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x883b2dd18c2079f3:0x7c98cd6cc1c7cbea!2m2!1d-83.0391109!2d42.3170951?entry=ttu"}
                        FeedBackLink={"http://www.hottacosrestaurant.com/Reviews"}
                        RafflesLink={"http://www.hottacosrestaurant.com/Raffles"}
                    />
                </div>
                <div id={styles.GridCont3}> {/* Slider */}
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

                <div id={styles.GridCont4}> {/* Schedule */}
                    <table className={styles.BusinessHours}>
                        <thead className={styles.TableHead}>
                        <tr className={styles.ScheduleRow}>
                            <th className={styles.ScheduleDay}>{Branch}</th>
                            <th className={styles.ScheduleOpen}>Open (Apertura)</th>
                            <th className={styles.ScheduleClose}>Close (Cierre)</th>
                        </tr>
                        </thead>
                        <tbody className={styles.TableBody}>
                        <tr className={styles.ScheduleRow}>
                            <td className={styles.ScheduleDay}>Monday (Lunes)</td>
                            <td className={styles.ScheduleOpen}>11:00 am</td>
                            <td className={styles.ScheduleClose}>9:00 pm</td>
                        </tr>
                        <tr className={styles.ScheduleRow}>
                            <td className={styles.ScheduleDay}>Tuesday (Martes)</td>
                            <td className={styles.ScheduleOpen}>11:00 am</td>
                            <td className={styles.ScheduleClose}>9:00 pm</td>
                        </tr>
                        <tr className={styles.ScheduleRow}>
                            <td className={styles.ScheduleDay}>Wednesday (Miércoles)</td>
                            <td className={styles.ScheduleOpen}>11:00 am</td>
                            <td className={styles.ScheduleClose}>9:00 pm</td>
                        </tr>
                        <tr className={styles.ScheduleRow}>
                            <td className={styles.ScheduleDay}>Thursday (Jueves)</td>
                            <td className={styles.ScheduleOpen}>11:00 am</td>
                            <td className={styles.ScheduleClose}>9:00 pm</td>
                        </tr>
                        <tr className={styles.ScheduleRow}>
                            <td className={styles.ScheduleDay}>Friday (Viernes)</td>
                            <td className={styles.ScheduleOpen}>11:00 am</td>
                            <td className={styles.ScheduleClose}>9:00 pm</td>
                        </tr>
                        <tr className={styles.ScheduleRow}>
                            <td className={styles.ScheduleDay}>Saturday (Sábado)</td>
                            <td className={styles.ScheduleOpen}>11:00 am</td>
                            <td className={styles.ScheduleClose}>9:00 pm</td>
                        </tr>
                        <tr className={styles.ScheduleRow}>
                            <td className={styles.ScheduleDay}>Sunday (Domingo)</td>
                            <td className={styles.ScheduleOpen}>2:00 pm</td>
                            <td className={styles.ScheduleClose}>9:00 pm</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div id={styles.GridCont5}> {/* Menus */}
                    <MenuWindsor />
                </div>

                <div id={styles.GridCont8}> {/* Footer */}
                    <Footer 
                        author= {'Alain Y. Rivera S.'}
                        copyright= {'Alain Rivera'}
                        date= {'Jan 24, 2024'}
                        version= {'1.0.0'}
                        company={'Hot Tacos & Restaurant Inc.'}
                        platforms={[
                            {
                            // PName: 'Doordash',
                            PIcon: '/Icons/Doordash.png',
                            PUrl: 'https://www.doordash.com/es-US/store/hot-tacos-restaurant---windsor-windsor-28078584/?event_type=autocomplete&pickup=false',
                            },
                            {
                            // PName: 'Skip the Dishes',
                            PIcon: '/Icons/SkipTheDishes.jpg',
                            PUrl: 'https://www.skipthedishes.com/hot-tacos-ouellette-ave',
                            },
                            {
                            // PName: 'Uber Eats',
                            PIcon: '/Icons/Uber Eats.png',
                            PUrl: 'https://www.ubereats.com/store/hot-tacos-restaurant-windsor/lb8T3K1CW420ob1pafD7lw?utm_source=menu-maker',
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