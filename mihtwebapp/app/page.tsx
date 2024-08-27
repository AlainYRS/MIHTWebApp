'use client';

import Image from "next/image";
import NavBar from "@/complements/components/NavBar/NavBar";
import styles from "./page.module.css";
import MenuStreetFoodBreakfast from "@/complements/components/Menu/MenuStreetFoodBreakfast";
import MenuStreetFoodAfternoon from "@/complements/components/Menu/MenuStreetFoodAfternoon";
import MenuLeamington from "@/complements/components/Menu/MenuLeamington";
import MenuWindsor from "@/complements/components/Menu/MenuWindsor";
import Footer from '@/complements/components/FooterComp/FooterComp';
import SliderCardComp from '@/complements/components/SliderComp/SliderCardComp';
import React, { useEffect, useState } from 'react';
import PlayerComp from '@/complements/components/PlayerComp/PlayerComp';
import BranchComp from "@/complements/components/BranchComponent/Branch";
import Link from 'next/link';

export default function Home() {
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
        <h2 className={styles.HeadParagraph2} >{Branch == "" && "Authentic Mexican Experience"}
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
        {Branch=="" &&
          <>
            {/* <!-- Versión en español --> */}
            <p className={styles.SEOEspañol}>¡Hot Tacos te da la bienvenida a Leamington y Windsor, Ontario! Con cuatro años de apoyo de la comunidad latina y canadiense, platos variados para una experiencia mexicana auténtica, y un rápido crecimiento, somos el principal restaurante mexicano. ¡Descubre por qué somos el favorito de los amantes de la comida mexicana!</p>
            {/* <!-- Versión en inglés --> */}
            <p className={styles.SEOEnglish}>Hot Tacos welcomes you to Leamington and Windsor, Ontario! With four years of support from the Latin and Canadian community, diverse dishes for an authentic Mexican experience, and rapid growth, we are the top Mexican restaurant. Find out why we are the favorite for Mexican cuisine lovers!</p>
          </>
        }
      </div>

      <div id={styles.GridCont2}> {/* NavBar */}
        {Branch=="Windsor" &&
            <NavBar
              ImageURL={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos%20Windsor_350x350.webp?alt=media&token=fedf2bf1-967d-4eb1-a2ca-44c4746738d3"}
              BranchName={"Windsor"}
              OnlineOrderingURL={"https://order.tbdine.com/pickup/51513/menu"}
              PhoneNumber={"1-519-818-5129"}
              Directions={"https://www.google.com/maps/dir/42.3109168,-83.046867/hot+tacos+windsor+ontario/@42.3140328,-83.0539755,15z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x883b2dd18c2079f3:0x7c98cd6cc1c7cbea!2m2!1d-83.0391109!2d42.3170951?entry=ttu"}
              FeedBackLink={"http://www.hottacosrestaurant.com/Reviews"}
              RafflesLink={"http://www.hottacosrestaurant.com/Raffles"}
              Eventlink={"https://www.eventbrite.com/e/ncg-wrestling-presents-lucha-libra-supreme-tickets-950830508647"}
              // FeedBackLink={"https://www.google.com/search?q=Hot+Tacos+Mexican+Restaurant&oq=hot&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MhUIBBAuGCcYrwEYxwEYgAQYigUYjgUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgwIBxAAGEMYgAQYigUyDQgIEC4YxwEY0QMYgAQyBwgJEAAYjwLSAQkzOTYxajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8&lqi=ChxIb3QgVGFjb3MgTWV4aWNhbiBSZXN0YXVyYW50SP7mtdeLsICACFo-EAAQARACEAMYABgBGAIYAyIcaG90IHRhY29zIG1leGljYW4gcmVzdGF1cmFudCoKCAIQABABEAIQAzICZW6SARJtZXhpY2FuX3Jlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTXhja3BMYnpoblJSQUKqAUUQATIfEAEiGw77zvW_g1eMG3zgLIufMx5wXH_5RvSPTrVAxzIgEAIiHGhvdCB0YWNvcyBtZXhpY2FuIHJlc3RhdXJhbnQ#lkt=LocalPoiReviews&rlimm=15009981570700808098"}
            />
        }
        {Branch=="Street Food" &&
          <NavBar
            ImageURL={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/StreetFood_350x350.webp?alt=media&token=c3e59fbb-4ec2-4a23-9c14-4442febb1d7a"}
            BranchName={"Street Food"}
            OnlineOrderingURL={"https://www.clover.com/online-ordering/hot-tacos-street-food"}
            PhoneNumber={"1-226-936-2953"}
            Directions={"https://www.google.com/maps/dir//Hot+Tacos+Street+Food,+Erie+Street+South,+Leamington,+ON/@42.0525494,-82.6820086,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x883ac1fb07467f03:0x562a0e9ef0c923a2!2m2!1d-82.5996073!2d42.0524514?entry=ttu"}
            FeedBackLink={"http://www.hottacosrestaurant.com/Reviews"}
            RafflesLink={"http://www.hottacosrestaurant.com/Raffles"}
            Eventlink={"https://www.eventbrite.com/e/ncg-wrestling-presents-lucha-libra-supreme-tickets-950830508647"}
            // FeedBackLink={"https://www.google.com/search?gs_ssp=eJwFwTEOgCAMAMC4mji6szjTgiLwBH-BSHEwaZQOPN-7cdJVI0p_oL4dYYgLdO9tykgn7KvbCWyEvjmToIRCkIOxyRzzzaIkZW6qyVeKKGK-flrCF1E&q=hot+tacos+street+food&oq=hot+tacos+&gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyBggAEEUYOzINCAEQLhivARjHARiABDINCAIQLhivARjHARiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRhAMgYIBhBFGDkyBwgHEAAYgATSAQk1MzYyajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8"}
          />
        }
        {Branch=="Leamington" &&
          <NavBar
            ImageURL={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos_350x350.webp?alt=media&token=d9a53f57-d71f-4af0-a48a-f3453ef4392d"}
            BranchName={"Leamington"}
            OnlineOrderingURL={"https://order.tbdine.com/pickup/28824/menu"}
            PhoneNumber={"1-519-329-1615"}
            Directions={"https://www.google.com/maps/dir//Hot+Tacos+Mexican+Restaurant/@42.0529949,-82.6816491,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883ac1874678d4cf:0xd04e2ab656c80fa2!2m2!1d-82.5992483!2d42.0530244?entry=ttu"}
            FeedBackLink={"http://www.hottacosrestaurant.com/Reviews"}
            RafflesLink={"http://www.hottacosrestaurant.com/Raffles"}
            Eventlink={"https://www.eventbrite.com/e/ncg-wrestling-presents-lucha-libra-supreme-tickets-950830508647"}
            // FeedBackLink={"https://www.google.com/search?q=Hot+Tacos+Mexican+Restaurant&oq=hot&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MhUIBBAuGCcYrwEYxwEYgAQYigUYjgUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgwIBxAAGEMYgAQYigUyDQgIEC4YxwEY0QMYgAQyBwgJEAAYjwLSAQkzOTYxajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8&lqi=ChxIb3QgVGFjb3MgTWV4aWNhbiBSZXN0YXVyYW50SP7mtdeLsICACFo-EAAQARACEAMYABgBGAIYAyIcaG90IHRhY29zIG1leGljYW4gcmVzdGF1cmFudCoKCAIQABABEAIQAzICZW6SARJtZXhpY2FuX3Jlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTXhja3BMYnpoblJSQUKqAUUQATIfEAEiGw77zvW_g1eMG3zgLIufMx5wXH_5RvSPTrVAxzIgEAIiHGhvdCB0YWNvcyBtZXhpY2FuIHJlc3RhdXJhbnQ#lkt=LocalPoiReviews&rlimm=15009981570700808098"}
          />
        }
      </div>

      <div id={styles.GridCont3}> {/* Slider */}
        {Branch == "Windsor" &&
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
        }
        {/* {Branch == "Street Food" &&
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
        } */}
        {Branch == "Leamington" &&
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
        }
      </div>

      <div id={styles.GridCont4}> {/* Schedule */}
        {Branch=="Windsor" &&
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
                <td className={styles.ScheduleOpen}>11:00 am</td>
                <td className={styles.ScheduleClose}>9:00 pm</td>
              </tr>
            </tbody>
          </table>
        }
        {Branch=="Street Food" &&
          <table className={styles.BusinessHours}>
            <thead className={styles.TableHead}>
              <tr className={styles.ScheduleRow}>
                <th className={styles.ScheduleDay}>{Branch}</th>
                <th className={styles.ScheduleOpen}>Desayuno (Breakfast)</th>
                <th className={styles.ScheduleClose}>Tardes (Afternoon)</th>
              </tr>
            </thead>
            <tbody className={styles.TableBody}>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Lunes (Monday)</td>
                <td className={styles.ScheduleOpen}>8am to 1pm</td>
                <td className={styles.ScheduleOpen}>5pm to 9pm</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Martes (Tuesday)</td>
                <td className={styles.ScheduleClose}>Closed</td>
                <td className={styles.ScheduleClose}>Closed</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Miércoles (Wednesday)</td>
                <td className={styles.ScheduleOpen}>8am to 1pm</td>
                <td className={styles.ScheduleOpen}>5pm to 9pm</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Jueves (Thursday)</td>
                <td className={styles.ScheduleOpen}>8am to 1pm</td>
                <td className={styles.ScheduleOpen}>5pm to 9pm</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Viernes (Friday)</td>
                <td className={styles.ScheduleOpen}>8am to 1pm</td>
                <td className={styles.ScheduleOpen}>5pm to 9pm</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Sábado (Saturday)</td>
                <td className={styles.ScheduleOpen}>8am to 1pm</td>
                <td className={styles.ScheduleOpen}>5pm to 9pm</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Domingo (Sunday)</td>
                <td className={styles.ScheduleOpen}>8am to 1pm</td>
                <td className={styles.ScheduleOpen}>5pm to 9pm</td>
              </tr>
            </tbody>
          </table>
        }
        {Branch=="Leamington" &&
          <table className={styles.BusinessHours}>
            <thead className={styles.TableHead}>
              <tr className={styles.ScheduleRow}>
                <th className={styles.ScheduleDay}>{Branch}</th>
                <th className={styles.ScheduleOpen}>Apertura (Open)</th>
                <th className={styles.ScheduleClose}>Cierre (Close)</th>
              </tr>
            </thead>
            <tbody className={styles.TableBody}>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Lunes (Monday)</td>
                <td className={styles.ScheduleOpen}>Closed</td>
                <td className={styles.ScheduleClose}>Closed</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Martes (Tuesday)</td>
                <td className={styles.ScheduleOpen}>11:00 pm</td>
                <td className={styles.ScheduleClose}>9:00 pm</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Miércoles (Wednesday)</td>
                <td className={styles.ScheduleOpen}>11:00 pm</td>
                <td className={styles.ScheduleClose}>9:00 pm</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Jueves (Thursday)</td>
                <td className={styles.ScheduleOpen}>11:00 am</td>
                <td className={styles.ScheduleClose}>9:00 pm</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Viernes (Friday)</td>
                <td className={styles.ScheduleOpen}>11:00 am</td>
                <td className={styles.ScheduleClose}>9:00 pm</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Sábado (Saturday)</td>
                <td className={styles.ScheduleOpen}>11:00 am</td>
                <td className={styles.ScheduleClose}>9:00 pm</td>
              </tr>
              <tr className={styles.ScheduleRow}>
                <td className={styles.ScheduleDay}>Domingo (Sunday)</td>
                <td className={styles.ScheduleOpen}>11:00 am</td>
                <td className={styles.ScheduleClose}>8:00 pm</td>
              </tr>
            </tbody>
          </table>
        }
      </div>

      <div id={styles.GridCont5}> {/* Menus */}
        {Branch=="Windsor" &&
          <MenuWindsor />
        }
        {Branch=="Street Food" &&
          <>
            <MenuStreetFoodBreakfast />
            <MenuStreetFoodAfternoon />
          </>
        }
        {Branch=="Leamington" &&
          <MenuLeamington />
        }
      </div>

      <div id={styles.GridCont6}> {/* Reports */}
        {/* <div className={styles.MI}>
          <iframe className={styles.PowerBI}
            title="Report Section" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZDkyOWI3MjQtNDJjMC00NDdlLWIxZWUtNDM2ZmU0NzcyMmRjIiwidCI6ImEwZTZmZTM0LTRjMmItNGFkYS1iYTkyLTBmNDc4YWZjMWNiMCJ9" allowFullScreen={true}>
          </iframe>
        </div> */}
      </div>

      <div id={styles.GridCont7}> {/* Maps */}
        {/* 
        <iframe
          width="600"   // Ancho del iframe
          height="450"  // Altura del iframe
          loading="lazy"
          src={mapaEstaticoUrl}  // Sustituye con la URL de tu mapa estático
          aria-hidden="false"
        ></iframe> */}
      </div>

      <div id={styles.GridCont8}> {/* Footer */}
        {Branch=="Windsor" &&
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
        }
        {Branch=="Leamington" &&
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
        }
        {Branch=="Street Food" &&
          <Footer 
              author= {'Alain Y. Rivera S.'}
              copyright= {'Alain Rivera'}
              date= {'Jan 24, 2024'}
              version= {'1.0.0'}
              company={'Hot Tacos Street Food Inc.'}
              platforms={[
                {
                  // PName: 'Doordash',
                  PIcon: '/Icons/Doordash.png',
                  PUrl: 'https://www.doordash.com/es-US/store/hot-tacos-street-food-leamington-29095814/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiIyNiBlcmllIHN0cmVldCBzLCBsZWFtaW5ndG9uIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6IjI2IGVyaWUgc3RyZWV0IHMgbGVhbWluZ3RvbiIsInZlcnRpY2FsX2lkIjotOTk5LCJ2ZXJ0aWNhbF9uYW1lIjoiYWxsIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMV19&pickup=false',
                },
                {
                  // PName: 'Skip the Dishes',
                  PIcon: '/Icons/SkipTheDishes.jpg',
                  PUrl: 'https://www.skipthedishes.com/hot-tacos-talbot-street-east',
                },
                {
                  // PName: 'Uber Eats',
                  PIcon: '/Icons/Uber Eats.png',
                  PUrl: 'https://www.ubereats.com/ca/store/hot-tacos-street-food/djfQQXgbUDiMyLj26jovaA?diningMode=DELIVERY&sc=SEARCH_SUGGESTION',
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
        }
        {Branch=="" &&
          <Footer 
            author= {'Alain Y. Rivera S.'}
            copyright= {'Alain Rivera'}
            date= {'Jan 24, 2024'}
            version= {'1.0.0'}
            company={'Restaurant Group'}
          />
        }
      </div>

      <div id={styles.GridCont9}>  {/* Player */}
        {/* <PlayerComp
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
        /> */}
      </div>

      <div id={styles.GridCont10}> {/* Branches */}
        {Chosen==false &&
          <>
            <div>
              <div className={styles.PlayerCont}>
                  {Player ?
                    <div className={styles.ImgsContainer}>
                      <PlayerComp
                      // url={'/media/Video Lucha Independencia - compreso a 480p.mp4'}
                      url={'https://youtu.be/T75dJjvU6N8'}
                      setState={setActPlayer}
                      width={450}
                      height={210}
                      readOnly={false}
                      vertical={'Center'}
                      horizontal={'Center'}
                      position={'absolute'}
                      volume={1} //': .01 | .25 | .5 | .75 | 1,'
                      typeDevice={true}
                      controls={true}
                      playing={true}
                      autoplay={true}
                      muted={false}
                      loop={true}
                      />
                    </div>
                  :
                    <div className={styles.ImgsContainer}>
                      <img className={styles.PlayerImg} onClick={()=>setPlayer(true)} src="/media/Lucha de Independencia.jpg" alt="" />
                      <img className={styles.PlayerPlay} onClick={()=>setPlayer(true)} src="/Icons/VideoIcon.png" alt="" />
                      <img className={styles.PlayerLogo} onClick={()=>setPlayer(true)} src="/media/ElPatronClear.png" alt="" />
                    </div>
                  }
                <h1>Ven a la lucha de independencia <br/>15 de Septiembre en El Patron Bar & Grill</h1>
              </div>
            </div>
            <div className={styles.Branches}>
              <BranchComp 
                Name={"Leamington"}
                Address={"16 Talbot Street E, Leamington ON, N8H 1L2"}
                Location={"https://www.google.com/maps/dir//Hot+Tacos+Mexican+Restaurant/@42.0529949,-82.6816491,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883ac1874678d4cf:0xd04e2ab656c80fa2!2m2!1d-82.5992483!2d42.0530244?entry=ttu"}
                Phone={"+1 519 329 1615"}
                OnlineSells={"https://order.tbdine.com/pickup/28824/menu"}
                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos%20Leamington_350x350.webp?alt=media&token=4877403b-8deb-4a7b-9698-0de7e1c172b2"}
                setState={setBranch}
                />
              <BranchComp 
                Name={"Street Food"}
                Address={"26 Erie St S, Leamington, ON N8H 1R6"}
                Location={"https://maps.app.goo.gl/1ie6ruZfKYL8YmHu9"}
                Phone={"+1 226 936 2953"}
                OnlineSells={"https://www.clover.com/online-ordering/hot-tacos-street-food"}
                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Access%20Image%20SF_350x350.webp?alt=media&token=7d92c9ac-a29f-4838-92f8-7a35520c9b54"}
                setState={setBranch}
              />
              <BranchComp 
                Name={"Windsor"}
                Address={"325 Ouellette Ave, Windsor, ON N9A 4J1"}
                Location={"https://maps.app.goo.gl/Li6UnVBbNbqhBed49"}
                Phone={"+1 519 818 5129"}
                OnlineSells={"https://order.tbdine.com/pickup/51513/menu"}
                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos%20Windsor_350x350.webp?alt=media&token=fedf2bf1-967d-4eb1-a2ca-44c4746738d3"}
                setState={setBranch}
              />
            </div>
          </>
        }
      </div>
    </main>
  );
}
