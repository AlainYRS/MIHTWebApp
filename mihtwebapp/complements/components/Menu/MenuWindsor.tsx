'use client';

import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";
import { FormattedMessage } from "react-intl";
import { trackEvent } from "@/app/lib/analytics";

const handleSectionClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string,
  hash: string
) => {
  e.preventDefault();

  trackEvent("menu_section_click", {
    section_id: sectionId,
  });

  window.setTimeout(() => {
    window.location.hash = hash;
  }, 50);
};

export default function Menu(){
    return(
        <div className={styles.Menu}>
            <div className={styles.MenuSectionsContainer}>
                <div className={styles.Sections}>
                    <a
                    className={styles.SectionLink}
                    href="#Ensaladas"
                    onClick={(e) => handleSectionClick(e, "Ensaladas", "Ensaladas")}
                    >
                    <FormattedMessage id='htw.Ensaladas' defaultMessage='Ensaladas' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#SopasCaldos"
                    onClick={(e) => handleSectionClick(e, "SopasCaldos", "SopasCaldos")}
                    >
                    <FormattedMessage id='htw.SopasCaldos' defaultMessage='Sopas y Caldos' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#PlatosFuertes"
                    onClick={(e) => handleSectionClick(e, "PlatosFuertes", "PlatosFuertes")}
                    >
                    <FormattedMessage id='htw.PlatosFuertes' defaultMessage='Platos Fuertes' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#DelMar"
                    onClick={(e) => handleSectionClick(e, "DelMar", "DelMar")}
                    >
                    <FormattedMessage id='htw.DelMar' defaultMessage='Del Mar' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#Enchiladas"
                    onClick={(e) => handleSectionClick(e, "Enchiladas", "Enchiladas")}
                    >
                    <FormattedMessage id='htw.SEnchiladas' defaultMessage='Enchiladas' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#Tacos"
                    onClick={(e) => handleSectionClick(e, "Tacos", "Tacos")}
                    >
                    <FormattedMessage id='htw.Tacos' defaultMessage='Tacos' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#Antojitos"
                    onClick={(e) => handleSectionClick(e, "Antojitos", "Antojitos")}
                    >
                    <FormattedMessage id='htw.Antojitos' defaultMessage='Antojitos' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#AntojitosBarra"
                    onClick={(e) => handleSectionClick(e, "AntojitosBarra", "AntojitosBarra")}
                    >
                    <FormattedMessage id='htw.AntojitosBarra' defaultMessage='Antojitos de la Barra' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#Postres"
                    onClick={(e) => handleSectionClick(e, "Postres", "Postres")}
                    >
                    <FormattedMessage id='htw.Postres' defaultMessage='Postres' />
                    </a>
                </div>
            </div>
            <div className={styles.MenuElements}>
                <p className={styles.SectionMenuTitle} id="Ensaladas"><strong><FormattedMessage id='htw.Ensaladas' defaultMessage='Ensaladas' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.EnsaladaCasa"
                        Title1={<FormattedMessage id='htw.EnsaladaCasa' defaultMessage='EnsaladaCasa' />}
                        Description1={<FormattedMessage id='htwdescr.EnsaladaCasa' defaultMessage='EnsaladaCasa' />}
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="SopasCaldos"><strong><FormattedMessage id='htw.SopasCaldos' defaultMessage='Sopas y Caldos' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.SopaAzteca"
                        Title1={<FormattedMessage id='htw.SopaAzteca' defaultMessage='SopaAzteca' />}
                        Description1={<FormattedMessage id='htwdescr.SopaAzteca' defaultMessage='SopaAzteca' />}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Sopa%20Azteca_350x350.webp?alt=media&token=cc1e7f58-7635-456a-96ca-800ee7d4657f"
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.ConsomeBirria"
                        Title1={<FormattedMessage id='htw.ConsomeBirria' defaultMessage='ConsomeBirria' />}
                        Description1={<FormattedMessage id='htwdescr.ConsomeBirria' defaultMessage='ConsomeBirria' />}
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="PlatosFuertes"><strong><FormattedMessage id='htw.PlatosFuertes' defaultMessage='Platos Fuertes' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.CarneAsada"
                        Title1={<FormattedMessage id='htw.CarneAsada' defaultMessage='CarneAsada' />}
                        Description1={<FormattedMessage id='htwdescr.CarneAsada' defaultMessage='CarneAsada' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.PechugaPlancha"
                        Title1={<FormattedMessage id='htw.PechugaPlancha' defaultMessage='PechugaPlancha' />}
                        Description1={<FormattedMessage id='htwdescr.PechugaPlancha' defaultMessage='PechugaPlancha' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.RibEye300g"
                        Title1={<FormattedMessage id='htw.RibEye300g' defaultMessage='RibEye300g' />}
                        Description1={<FormattedMessage id='htwdescr.RibEye300g' defaultMessage='RibEye300g' />}
                        // ImagePath=""
                    />
                    {/* <MenuItem 
                        Title1="Rib Eye Steak 450 g"
                        Title2="Rib Eye Steak 450 g"
                        // Price={38}
                        Description1="450 gramos con chile jalapeño, nopal, ccebollas verdes y papas de la casa."
                        Description2="450 grams with jalapeño pepper, nopal, green onions, house potato."
                        // ImagePath=""
                    /> */}
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.Carnitas"
                        Title1={<FormattedMessage id='htw.Carnitas' defaultMessage='Carnitas' />}
                        Description1={<FormattedMessage id='htwdescr.Carnitas' defaultMessage='Carnitas' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.Chilaquiles"
                        Title1={<FormattedMessage id='htw.Chilaquiles' defaultMessage='Chilaquiles' />}
                        Description1={<FormattedMessage id='htwdescr.Chilaquiles' defaultMessage='Chilaquiles' />}
                        // ImagePath="Photo"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DelMar"><strong><FormattedMessage id='htw.DelMar' defaultMessage='Del Mar' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.PulpoGusto"
                        Title1={<FormattedMessage id='htw.PulpoGusto' defaultMessage='PulpoGusto' />}
                        Description1={<FormattedMessage id='htwdescr.PulpoGusto' defaultMessage='PulpoGusto' />}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Pulpo%20al%20Gusto_350x350.webp?alt=media&token=073b9147-4aab-401a-8c79-eb8ec8bae518"
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.CamaronesGusto"
                        Title1={<FormattedMessage id='htw.CamaronesGusto' defaultMessage='CamaronesGusto' />}
                        Description1={<FormattedMessage id='htwdescr.CamaronesGusto' defaultMessage='CamaronesGusto' />}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Camarones%20Empanizados_350x350.webp?alt=media&token=55230475-f7ba-4478-b0a3-98452b5797c4"
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.CoctelCamarón"
                        Title1={<FormattedMessage id='htw.CoctelCamarón' defaultMessage='CoctelCamarón' />}
                        Description1={<FormattedMessage id='htwdescr.CoctelCamarón' defaultMessage='CoctelCamarón' />}
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Enchiladas"><strong><FormattedMessage id='htw.SEnchiladas' defaultMessage='Enchiladas' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.Enchiladas"
                        Title1={<FormattedMessage id='htw.Enchiladas' defaultMessage='Enchiladas' />}
                        Description1={<FormattedMessage id='htwdescr.Enchiladas' defaultMessage='Enchiladas' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.EnchiladasSuizas"
                        Title1={<FormattedMessage id='htw.EnchiladasSuizas' defaultMessage='EnchiladasSuizas' />}
                        Description1={<FormattedMessage id='htwdescr.EnchiladasSuizas' defaultMessage='EnchiladasSuizas' />}
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.Enfrijoladas"
                        Title1={<FormattedMessage id='htw.Enfrijoladas' defaultMessage='Enfrijoladas' />}
                        Description1={<FormattedMessage id='htwdescr.Enfrijoladas' defaultMessage='Enfrijoladas' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.EnchiladasTricolor"
                        Title1={<FormattedMessage id='htw.EnchiladasTricolor' defaultMessage='EnchiladasTricolor' />}
                        Description1={<FormattedMessage id='htwdescr.EnchiladasTricolor' defaultMessage='EnchiladasTricolor' />}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Enchiladas%20Tricolor_350x350.webp?alt=media&token=b5c32b49-3a9e-46d5-8391-d4022f089ac4"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Tacos"><strong><FormattedMessage id='htw.Tacos' defaultMessage='Tacos' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.TacoAlPastor"
                        Title1={<FormattedMessage id='htw.TacoAlPastor' defaultMessage='TacoAlPastor' />}
                        Description1={<FormattedMessage id='htwdescr.TacoAlPastor' defaultMessage='TacoAlPastor' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.TacoChorizo"
                        Title1={<FormattedMessage id='htw.TacoChorizo' defaultMessage='TacoChorizo' />}
                        Description1={<FormattedMessage id='htwdescr.TacoChorizo' defaultMessage='TacoChorizo' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.TacoCarnitas"
                        Title1={<FormattedMessage id='htw.TacoCarnitas' defaultMessage='TacoCarnitas' />}
                        Description1={<FormattedMessage id='htwdescr.TacoCarnitas' defaultMessage='TacoCarnitas' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.TacoLengua"
                        Title1={<FormattedMessage id='htw.TacoLengua' defaultMessage='TacoLengua' />}
                        Description1={<FormattedMessage id='htwdescr.TacoLengua' defaultMessage='TacoLengua' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.TacoCarneAsada"
                        Title1={<FormattedMessage id='htw.TacoCarneAsada' defaultMessage='TacoCarneAsada' />}
                        Description1={<FormattedMessage id='htwdescr.TacoCarneAsada' defaultMessage='TacoCarneAsada' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.TacoPollo"
                        Title1={<FormattedMessage id='htw.TacoPollo' defaultMessage='TacoPollo' />}
                        Description1={<FormattedMessage id='htwdescr.TacoPollo' defaultMessage='TacoPollo' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.TacoCochinitaPibil"
                        Title1={<FormattedMessage id='htw.TacoCochinitaPibil' defaultMessage='TacoCochinitaPibil' />}
                        Description1={<FormattedMessage id='htwdescr.TacoCochinitaPibil' defaultMessage='TacoCochinitaPibil' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.TacoBirria"
                        Title1={<FormattedMessage id='htw.TacoBirria' defaultMessage='TacoBirria' />}
                        Description1={<FormattedMessage id='htwdescr.TacoBirria' defaultMessage='TacoBirria' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.Quesabirria"
                        Title1={<FormattedMessage id='htw.Quesabirria' defaultMessage='Quesabirria' />}
                        Description1={<FormattedMessage id='htwdescr.Quesabirria' defaultMessage='Quesabirria' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.TacoPescado"
                        Title1={<FormattedMessage id='htw.TacoPescado' defaultMessage='TacoPescado' />}
                        Description1={<FormattedMessage id='htwdescr.TacoPescado' defaultMessage='TacoPescado' />}
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.TacoGobernador"
                        Title1={<FormattedMessage id='htw.TacoGobernador' defaultMessage='TacoGobernador' />}
                        Description1={<FormattedMessage id='htwdescr.TacoGobernador' defaultMessage='TacoGobernador' />}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Taco%20Gobernador_350x350.webp?alt=media&token=ea68e358-54af-4c9f-94f0-ddcb8208aab2"
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.TacoVegetariano"
                        Title1={<FormattedMessage id='htw.TacoVegetariano' defaultMessage='TacoVegetariano' />}
                        Description1={<FormattedMessage id='htwdescr.TacoVegetariano' defaultMessage='TacoVegetariano' />}
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Antojitos"><strong><FormattedMessage id='htw.Antojitos' defaultMessage='Antojitos' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.Gringa"
                        Title1={<FormattedMessage id='htw.Gringa' defaultMessage='Gringa' />}
                        Description1={<FormattedMessage id='htwdescr.Gringa' defaultMessage='Gringa' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.FlautasPollo"
                        Title1={<FormattedMessage id='htw.FlautasPollo' defaultMessage='FlautasPollo' />}
                        Description1={<FormattedMessage id='htwdescr.FlautasPollo' defaultMessage='FlautasPollo' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.FlautasPapas"
                        Title1={<FormattedMessage id='htw.FlautasPapas' defaultMessage='FlautasPapas' />}
                        Description1={<FormattedMessage id='htwdescr.FlautasPapas' defaultMessage='FlautasPapas' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.Burrito"
                        Title1={<FormattedMessage id='htw.Burrito' defaultMessage='Burrito' />}
                        Description1={<FormattedMessage id='htwdescr.Burrito' defaultMessage='Burrito' />}
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.Sope"
                        Title1={<FormattedMessage id='htw.Sope' defaultMessage='Sope' />}
                        Description1={<FormattedMessage id='htwdescr.Sope' defaultMessage='Sope' />}
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="AntojitosBarra"><strong><FormattedMessage id='htw.AntojitosBarra' defaultMessage='Antojitos de la Barra' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.NachosCalientes"
                        Title1={<FormattedMessage id='htw.NachosCalientes' defaultMessage='NachosCalientes' />}
                        Description1={<FormattedMessage id='htwdescr.NachosCalientes' defaultMessage='NachosCalientes' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.PapasSupreme"
                        Title1={<FormattedMessage id='htw.PapasSupreme' defaultMessage='PapasSupreme' />}
                        Description1={<FormattedMessage id='htwdescr.PapasSupreme' defaultMessage='PapasSupreme' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.MiniFlautas"
                        Title1={<FormattedMessage id='htw.MiniFlautas' defaultMessage='MiniFlautas' />}
                        Description1={<FormattedMessage id='htwdescr.MiniFlautas' defaultMessage='MiniFlautas' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.Tostadas"
                        Title1={<FormattedMessage id='htw.Tostadas' defaultMessage='Tostadas' />}
                        Description1={<FormattedMessage id='htwdescr.Tostadas' defaultMessage='Tostadas' />}
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Postres"><strong><FormattedMessage id='htw.Postres' defaultMessage='Postres' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.Helado"
                        Title1={<FormattedMessage id='htw.Helado' defaultMessage='Helado' />}
                        Description1={<FormattedMessage id='htwdescr.Helado' defaultMessage='Helado' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.PastelChocolate"
                        Title1={<FormattedMessage id='htw.PastelChocolate' defaultMessage='PastelChocolate' />}
                        Description1={<FormattedMessage id='htwdescr.PastelChocolate' defaultMessage='PastelChocolate' />}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="Windsor"
                        analyticsItemId="htw.PastelQueso"
                        Title1={<FormattedMessage id='htw.PastelQueso' defaultMessage='PastelQueso' />}
                        Description1={<FormattedMessage id='htwdescr.PastelQueso' defaultMessage='PastelQueso' />}
                        // ImagePath=""
                    />
                </div>
            </div>
        </div>
    )

}