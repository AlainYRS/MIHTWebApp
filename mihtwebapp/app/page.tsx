import Image from "next/image";
import NavBar from "@/complements/components/NavBar/NavBar";
import styles from "./main.module.css";
import Menu from "@/complements/components/Menu/Menu";
import Footer from '@/complements/components/FooterComp/FooterComp'


export default function Home() {
  // const mapaEstaticoUrl = "https://maps.app.goo.gl/fw18xgWNgxTyMctC8";
  const mapaEstaticoUrl = `https://maps.googleapis.com/maps/api/staticmap?center=42.05327130119621,-82.59920537477937&zoom=13&size=600x450&key=${process.env.NEXT_PUBLIC_AYRS_API_Key}`;

  return (
    <main>
      <div className={styles.HeaderLogo}>
        <Image src="/media/Hot Tacos Banner.jpg" fill alt="Hot Tacos"/>
      </div>
      <NavBar/>
      <h1 className={styles.HeadParagraph1} >Hot Tacos & Restaurant</h1>
      <h2 className={styles.HeadParagraph2} >Authentic Mexican Restaurant in Leamington</h2>
      <h3 className={styles.HeadParagraph3} ><a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href="https://www.google.com/maps/dir//Hot+Tacos+Mexican+Restaurant/@42.0529949,-82.6816491,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883ac1874678d4cf:0xd04e2ab656c80fa2!2m2!1d-82.5992483!2d42.0530244?entry=ttu"><u>16 Talbot Street E, Leamington ON, N8H 1L2</u></a> -   <a target="_blank" rel="noopener noreferrer" className={styles.MenuButtom} href="tel:+1-519-3291615" ><u className={styles.PhoneLink}>519 329 1615</u></a></h3>
      <div className={styles.MainDish}>
        <Image src="/media/HotTacosMenus.jpg" fill alt="Hot Tacos"/>
      </div>
      <div className={styles.secciones}></div>
      <Menu />
      {/* <div className={styles.MI}>
        <iframe className={styles.PowerBI}
          title="Report Section" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZDkyOWI3MjQtNDJjMC00NDdlLWIxZWUtNDM2ZmU0NzcyMmRjIiwidCI6ImEwZTZmZTM0LTRjMmItNGFkYS1iYTkyLTBmNDc4YWZjMWNiMCJ9" allowFullScreen={true}>
        </iframe>
      </div> */}
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
{/* 
      <iframe
        width="600"   // Ancho del iframe
        height="450"  // Altura del iframe
        loading="lazy"
        src={mapaEstaticoUrl}  // Sustituye con la URL de tu mapa estático
        aria-hidden="false"
      ></iframe> */}
 
      <Footer 
          author= {'Alain Y. Rivera S.'}
          copyright= {'Alain Rivera'}
          date= {'Jan 24, 2024'}
          version= {'1.0.0'}
          company={'Hot Tacos & Restaurant Inc.'}
      />

      

    </main>
  );
}
