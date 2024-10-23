'use client';

import React, { useState, useEffect } from "react";
import styles from '@/app/Raffles/Raffles.module.css';
import Footer from '@/complements/components/FooterComp/FooterComp';
import { Firebase, FbStorage, FbAuth, FbDB, FbFunct } from "@/public/services/firebase";
import { addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore"; 
import Popup from "@/complements/components/Popup/Popup";
import BranchComp from "@/complements/components/BranchComponent/Branch";

interface iClient{
    ClientName: string,
    ClientPhone: number | string,
    ClientEmail: string,
    Corporation: string,
    date: Date,
  }
export default function Raffles(){
    const [Corporation,setCorporation] = useState("")
    const [ClientName,setClientName] = useState("");
    const [ClientPhone,setClientPhone] = useState("");
    const [ClientEmail,setClientEmail] = useState("");
    const [Disclaimer,setDisclaimer] = useState<boolean>(false);
    const [Customer,setCustomer] = useState<iClient>({
      Corporation: "",
      ClientName: "",
      ClientPhone: "",
      ClientEmail: "",
      date: new Date(),
    })
    const [showPopup, setShowPopup] = useState(false);
    
    function resetForm() {
      setCorporation("");
      setClientName("");
      setClientPhone("");
      setClientEmail("");
      setCustomer({
        Corporation: "",
        ClientName: "",
        ClientPhone: "",
        ClientEmail: "",
        date: new Date(),
      });
    }
  
    async function handleSubmit(Participant: iClient) {
      const docName = Participant.date.toISOString();
      await setDoc(doc(FbDB, "Raffles", docName), Participant);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        resetForm();
      }, 700);
    }
  
    useEffect(() => {
    setCustomer({
        Corporation,
        ClientName,
        ClientPhone,
        ClientEmail,
        date: new Date(),
      })
    }, [Corporation, ClientName, ClientPhone, ClientEmail]);
        
    return(
        <>
          {Corporation == "" ? 
                <div className={styles.Branches}>
                    <h2 className={styles.SubLeyends}>Donde te encuentras?</h2>
                    <BranchComp 
                        Name={"Hot Tacos Leamington"}
                        Address={"16 Talbot Street E"}
                        Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos_350x350.webp?alt=media&token=d9a53f57-d71f-4af0-a48a-f3453ef4392d"}
                        setState={setCorporation}
                        />
                    {/*<BranchComp 
                        Name={"Street Food"}
                        Address={"26 Erie St S"}
                        Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Access%20Image%20SF_350x350.webp?alt=media&token=7d92c9ac-a29f-4838-92f8-7a35520c9b54"}
                        setState={setCorporation}
                    />*/}
                    <BranchComp 
                        Name={"Hot Tacos Windsor"}
                        Address={"325 Ouellette Ave"}
                        Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos%20Windsor_350x350.webp?alt=media&token=fedf2bf1-967d-4eb1-a2ca-44c4746738d3"}
                        setState={setCorporation}
                    />
                </div>
                :
                <>
                    <img className={styles.Logo} src={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Catrina_350x350.webp?alt=media&token=e4e502d3-058b-418e-a277-773e27ba5c12"} alt="" />
                    <h1 className={styles.Chosen} onClick={()=>{setCorporation("")}}>Participas en rifas de {Corporation}</h1>
                    <div className={styles.CustomerData}>
                        <input className={styles.CustomerInput} type='text'placeholder="Nombre" onChange={(e)=>setClientName(e.target.value)} required/>
                        <input className={styles.CustomerInput} type='email'placeholder="Email" onChange={(e)=>setClientPhone(e.target.value)} />
                        <input className={styles.CustomerInput} type='text'placeholder="Teléfono" onChange={(e)=>setClientEmail(e.target.value)} />
                    </div>
                    <div className={styles.GiftOption}>
                        <input type="checkbox" onClick={()=>setDisclaimer(!Disclaimer)}/><label>Acepto Terminos y Condiciones</label>
                    </div>
                    {Disclaimer &&
                        <button type="button" className={styles.suboton} onClick={(e)=>handleSubmit(Customer)} >Participar</button>
                    }
                    <div id={styles.GridCont2}> {/* Footer */}
                        <Footer 
                            author= {'Alain Y. Rivera S.'}
                            copyright= {'Alain Rivera'}
                            date= {'June 30, 2024'}
                            version= {'1.0.0'}
                            company={'Hot Tacos Restaurants Chain'}
                            socmed={[
                                {
                                // PName: 'Facebook',
                                PIcon: '/Icons/FacebookIcon.png',
                                PUrl: 'https://www.facebook.com/HotTacos?mibextid=LQQJ4d',
                                },
                                {
                                // PName: 'Instagram',
                                PIcon: '/Icons/InstaIcon.png',
                                PUrl: 'https://www.instagram.com/hottacosrestaurant?igsh=Y3hkMHBhNDk5M2Rl" target="_blank" rel="noopener noreferrer',
                                },
                            ]}
                        />
                    </div>
                </>
            }
            {showPopup && 
                <Popup 
                    Message={"Gracias por participar, Suerte!"}
                />
            }
        </>
    )
}