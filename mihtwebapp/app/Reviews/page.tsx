'use client';

import Image from "next/image";
import styles from "@/app/Reviews/Reviews.module.css";
import Footer from '@/complements/components/FooterComp/FooterComp';
import React, { useEffect, useState } from 'react';
import BranchComp from "@/complements/components/BranchComponent/Branch";
import EmployeeComp from "@/complements/components/EmployeeComponent/Employee";
import Popup from "@/complements/components/Popup/Popup";
import { Firebase, FbStorage, FbAuth, FbDB, FbFunct } from "@/public/services/firebase";
import { addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore"; 
import { handleQuery } from '@/app/Reviews/ReviewsFunctions'


interface iExperience{
  Coorporation: string,
  Stars: 1 | 2 | 3 | 4 | 5 | undefined,
  About: string,
  Employee: string,
  Comments: string,
  date: Date,
}

export default function Reviews() {
  const [Coorporation,setCoorporation] = useState("")
  const [CoorpsArray,setCoorpsArray] = useState<[]>()
  const [Stars,setStars] = useState<1 | 2 | 3 | 4 | 5 | undefined>()
  const [About,setAbout] = useState("")
  const [Employee,setEmployee] = useState("")
  const [MiniEmp,setMiniEmp] = useState("")
  const [EmpArray,setEmpArray] = useState<[]>()
  const [Comments,setComments] = useState("")
  const [Feedback,setFeedback] = useState<iExperience>({
    Coorporation: "",
    Stars: undefined,
    About: "",
    Employee: "",
    Comments: "",
    date: new Date(),
  })
  const [showPopup, setShowPopup] = useState(false);
  
  function resetForm() {
    setCoorporation("");
    setStars(undefined);
    setAbout("");
    setEmployee("");
    setComments("");
    setFeedback({
      Coorporation: "",
      Stars: undefined,
      About: "",
      Employee: "",
      Comments: "",
      date: new Date(),
    });
  }

  async function handleSubmit(Feedback: iExperience) {
    const docName = Feedback.date.toISOString();
    await setDoc(doc(FbDB, "Feedback", docName), Feedback);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      resetForm();
    }, 700);
  }

  useEffect(() => {
    handleQuery(
      {
        database: FbDB,
        collection: "Coorporations",
        field: "Active",
        condition: "==",
        value: true,
        setArray: setCoorpsArray,
      }
    )
  }, [])

  useEffect(() => {
    setFeedback({
      Coorporation,
      Stars,
      About,
      Employee,
      Comments,
      date: new Date(),
    })
  }, [Coorporation, Stars, About, Employee, Comments]);
    
  // interface iCorporation {
  //   Corporation: string,
  //   ShortName: string;
  //   Address: string;
  //   Image: string;
  // }

  return (
    <main className={styles.Main}>
      <h1 className={styles.Leyends} id={styles.Head}>Dinos tus comentarios</h1><br/>
      <div id={styles.GridCont1}> {/* Branches */}
        <div className={styles.Branches}>
          {Coorporation == "" ? 
                <>
                  <h2 className={styles.SubLeyends}>Donde te atendimos?</h2>
                  <BranchComp 
                    Name={"Hot Tacos Leamington"}
                    Address={"16 Talbot Street E"}
                    Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos_350x350.webp?alt=media&token=d9a53f57-d71f-4af0-a48a-f3453ef4392d"}
                    setState={setCoorporation}
                    />
                  <BranchComp 
                    Name={"Hot Tacos Street Food"}
                    Address={"26 Erie St S"}
                    Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Access%20Image%20SF_350x350.webp?alt=media&token=7d92c9ac-a29f-4838-92f8-7a35520c9b54"}
                    setState={setCoorporation}
                  />
                  <BranchComp 
                    Name={"Hot Tacos Windsor"}
                    Address={"325 Ouellette Ave"}
                    Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20Tacos%20Windsor_350x350.webp?alt=media&token=fedf2bf1-967d-4eb1-a2ca-44c4746738d3"}
                    setState={setCoorporation}
                  />
                </>
              :
                <>
                  <h1 className={styles.Chosen} onClick={()=>{setCoorporation(""), setStars(undefined), setAbout(""), setEmployee(""), setComments("")}}>Lugar: {Coorporation}</h1>
                  {Stars == undefined ?
                      <>
                        <h2 className={styles.SubLeyends}>Como fue tu experiencia?</h2>
                        <div className={styles.Stars}>
                          <img onClick={() => setStars(1)} src="/Icons/Star.png" alt="" />
                          <img onClick={() => setStars(2)} src="/Icons/Star.png" alt="" />
                          <img onClick={() => setStars(3)} src="/Icons/Star.png" alt="" />
                          <img onClick={() => setStars(4)} src="/Icons/Star.png" alt="" />
                          <img onClick={() => setStars(5)} src="/Icons/Star.png" alt="" />
                        </div>
                      </>
                    :
                      <>
                        <h1 className={styles.Chosen} onClick={()=>{setStars(undefined), setAbout(""), setEmployee(""), setComments("")}}>Experiencia: {Stars} <img className={styles.StarRate} src="/Icons/Star.png" alt="" /></h1>
                        {!About ?
                            <>
                              <h2 className={styles.SubLeyends}>Acerca de:</h2>
                              <div className={styles.Options}>
                                <h3 className={styles.Option} onClick={()=>setAbout('El Servicio')}>Service / El Servicio</h3>
                                <h3 className={styles.Option} onClick={()=>setAbout('Los Alimentos')}>Food / Los Alimentos</h3>
                                <h3 className={styles.Option} onClick={()=>setAbout('El Lugar')}>Place / El Lugar</h3>
                              </div>
                            </>
                          :
                            <>
                              <h1 className={styles.Chosen} onClick={()=>{setAbout(""), setEmployee(""), setComments("")}}>De: {About}</h1>
                              {About == "El Servicio" ? 
                                  (!Employee ?
                                      <>
                                          <h2 className={styles.SubLeyends}>Quien te atendio?</h2>
                                          {/* {LoadEmployees(Coorporation)} */}
                                          {Coorporation == 'Hot Tacos Windsor' &&
                                            <div className={styles.Branches}>
                                              <EmployeeComp 
                                                Name={"Maria"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Windsor%20Maria_350x350.webp?alt=media&token=1bd42309-e294-4d2a-85c0-0eb1279b5c05"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                                />
                                              <EmployeeComp 
                                                Name={"Valentina"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Windsor%20Valentina_350x350.webp?alt=media&token=e53250a1-23b6-4be8-8b2f-05a358b3c8b9"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Pauline"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Windsor%20Pauline_350x350.webp?alt=media&token=7c504762-957d-4e7b-a275-96c8afe6dee8"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Daniela"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Windsor%20Daniela_350x350.webp?alt=media&token=27114215-d15b-4b4e-99b9-b2b52568c2d0"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Jasmin"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Windsor%20Jasmin_350x350.webp?alt=media&token=c4ac81ec-5a5f-43d2-b1ae-b32b73dee561"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Joshua"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Windsor%20Jhesua_350x350.webp?alt=media&token=3e122c07-9cb8-488c-a35d-01a31b50c444"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Camilo"}
                                                Image={""}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                            </div>
                                          }
                                          {Coorporation == 'Hot Tacos Street Food' &&
                                            <div className={styles.Branches}>
                                              <EmployeeComp 
                                                Name={"Eduardo"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Eduardo%20Garnica_350x350.webp?alt=media&token=4d1d7794-33ed-4df0-aac0-fd1bcb88d3ed"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                                />
                                              <EmployeeComp 
                                                Name={"Tamara"}
                                                Image={""}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Yolanda"}
                                                Image={""}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                            </div>
                                          }
                                          {Coorporation == 'Hot Tacos Leamington' &&
                                            <div className={styles.Branches}>
                                              <EmployeeComp 
                                                Name={"Victor"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Victor_350x350.webp?alt=media&token=16a49387-a318-40cf-b2f7-6319d8ad808d"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Martha"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Martha_350x350.webp?alt=media&token=02b4c886-685e-4bfa-b794-9df39e29f544"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Nery"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Nery%20Reyes_350x350.webp?alt=media&token=1bc0268f-7ed3-4e68-987e-984c9d7d5c9d"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Alondra"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Alondra_350x350.webp?alt=media&token=0de069ea-8178-4367-b076-fca8e1f9cdd8"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Nincya"}
                                                Image={""}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Erick"}
                                                Image={""}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Paula"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Paula_350x350.webp?alt=media&token=7e91e95b-1ea5-4e6c-a497-bb6a05859704"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Iraida"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Iraida_350x350.webp?alt=media&token=e3a7fa77-7ee8-4bfe-80e1-6499b685167c"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                                />
                                              <EmployeeComp 
                                                Name={"Fany"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Fany_350x350.webp?alt=media&token=b8b658c3-f51b-4dfd-8352-f297e827b118"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Dayana"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Dayana_350x350.webp?alt=media&token=1bce9f6a-1cc0-4ccc-afc5-15f962822efd"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Edith"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Edith_350x350.webp?alt=media&token=f5ccb960-12ec-4c97-b07d-a67a49aab057"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Diego"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Diego_350x350.webp?alt=media&token=b11425fa-f4da-4978-9010-ff266a331ddc"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                              <EmployeeComp 
                                                Name={"Robbie"}
                                                Image={"https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Robbie_350x350.webp?alt=media&token=0cfc5c6c-e693-41a7-97e2-3d59b8c6d150"}
                                                setState={setEmployee}
                                                setImg={setMiniEmp}
                                              />
                                            </div>
                                          }
                                      </>                
                                    :
                                      <>
                                        <h1 className={styles.Chosen}>Atendido por: {Employee} <div className={styles.ContaminiPict}><img className={styles.miniPict} src={MiniEmp} alt="mini"/></div></h1>
                                        <h2 className={styles.SubLeyends}>Danos tu comentarios</h2>
                                        <textarea className={styles.Feedback} onChange={(e)=>setComments(e.target.value)}></textarea>
                                        <button type="button" className={styles.Submit} onClick={(e)=>handleSubmit(Feedback)} >Enviar mi Comentario</button>
                                      </>
                                  )
                                :
                                  <>
                                    <h2 className={styles.SubLeyends}>Danos tu comentarios</h2>
                                    <textarea className={styles.Feedback} onChange={(e)=>setComments(e.target.value)}></textarea>
                                    <button type="button" className={styles.Submit} onClick={(e)=>handleSubmit(Feedback)} >Enviar mi Comentario</button>
                                  </>
                              }
                            </>
                        }
                      </>
                  }
                </>
          }
        </div>
        {/* <div>
          <button type="button" className={styles.Submit}
          onClick={(e)=>handleQuery({
            database: FbDB,
            collection: "Feedback",
            field: "Stars",
            condition: "==",
            value: 5,
          })} >Consultar</button>
        </div> */}
      </div>
      <div id={styles.GridCont2}> {/* Footer */}
          <Footer 
              author= {'Alain Y. Rivera S.'}
              copyright= {'Alain Rivera'}
              date= {'May 31, 2024'}
              version= {'1.0.0'}
              company={Coorporation}
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
      {showPopup && 
        <Popup 
          Message={"Thanks for your commments!"}
        />
      }
    </main>
  );
}
