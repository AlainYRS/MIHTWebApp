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
        title="MI Hot Tacos" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=7a839e09-45d5-4fad-b197-66cf982b72d6&autoAuth=true&ctid=a0e6fe34-4c2b-4ada-ba92-0f478afc1cb0" allowFullScreen={true}>
      </iframe>

    </main>
  );
}
