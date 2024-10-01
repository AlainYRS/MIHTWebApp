'use client';

import styles from "@/app/CustomerExperienceLeamington/CustomerExperienceLeamington.module.css";
import Footer from '@/complements/components/FooterComp/FooterComp';
import React, { useEffect, useState } from 'react';
import Popup from "@/complements/components/Popup/Popup";
import { FbDB } from "@/public/services/firebase";
import { doc, setDoc } from "firebase/firestore"; 

const LeamingtonQuestions = [
  'Servicio?',
  'Ambiente?',
  'Sabor?',
  'Precios?',
  'Regresará?',
  'Nos Recomendará?',
];

interface iQuestion {
  Question: string;
  Stars: number;
}

export default function CustomerExperience() {
  const [stars, setStars] = useState<1 | 2 | 3 | 4 | 5 | undefined>(undefined);
  const [index, setIndex] = useState<number>(0);
  const [userExperience, setUserExperience] = useState<iQuestion[]>([]);
  const [UsrExpRate, setUsrExpRate] = useState<number>(0);
  const [comments, setComments] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  function resetForm() {
    setStars(undefined);
    setComments("");
    setUsrExpRate(0);
    setIndex(0);
    setUserExperience([]);
  }

  async function handleSubmit() {
    const docName = new Date().toISOString(); // El nombre del documento debe ser un string
    await setDoc(doc(FbDB, "Customer Experience", docName), {
      responses: userExperience,
      comments,
    });
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      resetForm();
    }, 2000);
  }

  function handleAnswers(starValue: number) {
    console.log(starValue)
    const updatedExperience = [
      ...userExperience,
      { Question: LeamingtonQuestions[index], Stars: starValue }
    ];

    setUserExperience(updatedExperience);
    
    if (index + 1 >= LeamingtonQuestions.length) {
      handleSubmit();
    } else {
      setIndex(index + 1);
      setUsrExpRate(UsrExpRate+starValue)
      setStars(undefined); // Reiniciar las estrellas para la siguiente pregunta
    }
    console.log(updatedExperience)
  }

  return (
    <main className={styles.CustomerExperience}>
      <div className={styles.CustExpCont}>
        <img className={styles.Banner} src="./media/Hot Tacos Banner Leamington.jpg" alt="" />
        <div>
          <p className={styles.Question}>{LeamingtonQuestions[index]}</p>
          <div className={styles.ProgressBarCont}>
            <div className={styles.ProgressBarBorder}>
              <div className={styles.ProgressBarBackground} style={{width:`${index/LeamingtonQuestions.length*70}%`}}></div>
            </div>
            Experiencia del Cliente
            <div className={styles.ProgressBarBorder2}>
              <div className={styles.ProgressBarBackground2} style={{width:`${UsrExpRate/(LeamingtonQuestions.length*5)*100*.7}%`}}></div>
            </div>
          </div>
          <div className={styles.Stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                onClick={() => handleAnswers(star)}
                className={styles.IconFace}
                src={`./Icons/${star}StarsFace.png`}
                alt={`${star} Stars`}
              />
            ))}
          </div>
        </div>
        <textarea
          className={styles.comments}
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <div className={styles.LogoLeyend}>
            <img src="" alt="" />
        </div>
      </div>
      <div id={styles.GridCont2}> {/* Footer */}
        <Footer
          author={'Alain Y. Rivera S.'}
          copyright={'Alain Rivera'}
          date={'Oct 2, 2024'}
          version={'1.0.0'}
          company={'Restaurant Chain'}
        />
      </div>
      {showPopup && <Popup Message="Thanks for your answers!" />}
    </main>
  );
}
