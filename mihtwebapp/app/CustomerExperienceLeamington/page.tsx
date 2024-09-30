'use client';

import styles from "@/app/CustomerExperienceLeamington/CustomerExperienceLeamington.module.css";
import Footer from '@/complements/components/FooterComp/FooterComp';
import React, { useEffect, useState } from 'react';
import Popup from "@/complements/components/Popup/Popup";
import { FbDB } from "@/public/services/firebase";
import { doc, setDoc } from "firebase/firestore"; 

const LeamingtonQuestions = [
  'Me ubicaron en una mesa rápidamente',
  'Los meseros me atendieron rápidamente',
  'Me sirvieron mi orden con rapidez',
  'La actitud del mesero fue buena',
  'Me atendieron con amabilidad',
  'Me sentí a gusto con el ambiente',
  'Volvería a visitar este restaurant',
  'Te gustaría que te atendiera de nuevo',
];

interface iQuestion {
  Question: string;
  Stars: number;
}

export default function CustomerExperience() {
  const [stars, setStars] = useState<1 | 2 | 3 | 4 | 5 | undefined>(undefined);
  const [index, setIndex] = useState<number>(0);
  const [userExperience, setUserExperience] = useState<iQuestion[]>([]);
  const [comments, setComments] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  function resetForm() {
    setStars(undefined);
    setComments("");
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
    const updatedExperience = [
      ...userExperience,
      { Question: LeamingtonQuestions[index], Stars: starValue }
    ];

    setUserExperience(updatedExperience);
    
    if (index + 1 >= LeamingtonQuestions.length) {
      handleSubmit();
    } else {
      setIndex(index + 1);
      setStars(undefined); // Reiniciar las estrellas para la siguiente pregunta
    }
    console.log(updatedExperience)
  }

  return (
    <main className={styles.CustomerExperience}>
      <div className={styles.CustExpCont}>
        <img src="./media/Hot Tacos Banner Leamington.jpg" alt="" />
        <div>
          <p className={styles.Question}>{LeamingtonQuestions[index]} ( {index+1} / {LeamingtonQuestions.length} )</p>
          <div className={styles.Stars}>
            {[5, 4, 3, 2, 1].map((star) => (
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
