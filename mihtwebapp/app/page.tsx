import Image from "next/image";
import NavBar from "@/complements/components/NavBar/NavBar"
import styles from "./main.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.HeaderLogo}>
        <Image src="/media/Hot Tacos Banner.jpg" fill alt="Hot Tacos"/>
      </div>
      <NavBar/>
      <h1 className={styles.HeadParagraph} >Hot Tacos & Restaurant</h1>
      <h2 className={styles.HeadParagraph} >Authentic Mexican Restaurant in Leamington</h2>
      <h3 className={styles.HeadParagraph} >Open today until 8:00 PM</h3>
      <div className={styles.MainDish}>
        <Image src="/media/HotTacosMenus.jpg" fill alt="Hot Tacos"/>
      </div>
      <iframe className={styles.PowerBI}
        title="Report Section" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZDkyOWI3MjQtNDJjMC00NDdlLWIxZWUtNDM2ZmU0NzcyMmRjIiwidCI6ImEwZTZmZTM0LTRjMmItNGFkYS1iYTkyLTBmNDc4YWZjMWNiMCJ9" allowFullScreen={true}>
      </iframe>
    </main>
  );
}
