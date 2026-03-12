'use client';

import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
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
                    href="#Antojitos"
                    onClick={(e) => handleSectionClick(e, "Antojitos", "Antojitos")}
                    >
                    <FormattedMessage id='leamington.snacks' defaultMessage='Snacks' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#DeLaCocinaMexicana"
                    onClick={(e) => handleSectionClick(e, "DeLaCocinaMexicana", "DeLaCocinaMexicana")}
                    >
                    <FormattedMessage id='leamington.cuisine' defaultMessage='cuisine' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#DeLaParrilla"
                    onClick={(e) => handleSectionClick(e, "DeLaParrilla", "DeLaParrilla")}
                    >
                    <FormattedMessage id='leamington.grill' defaultMessage='grill' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#DeLaCazuela"
                    onClick={(e) => handleSectionClick(e, "DeLaCazuela", "DeLaCazuela")}
                    >
                    <FormattedMessage id='leamington.pot' defaultMessage='pot' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#DelMar"
                    onClick={(e) => handleSectionClick(e, "DelMar", "DelMar")}
                    >
                    <FormattedMessage id='leamington.sea' defaultMessage='sea' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#TacosQuesadillas"
                    onClick={(e) => handleSectionClick(e, "TacosQuesadillas", "TacosQuesadillas")}
                    >
                    <FormattedMessage id='leamington.tacos' defaultMessage='tacos' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#Extras"
                    onClick={(e) => handleSectionClick(e, "Extras", "Extras")}
                    >
                    <FormattedMessage id='leamington.sides' defaultMessage='sides' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#Postres"
                    onClick={(e) => handleSectionClick(e, "Postres", "Postres")}
                    >
                    <FormattedMessage id='leamington.deserts' defaultMessage='deserts' />
                    </a>

                    <a
                    className={styles.SectionLink}
                    href="#Bebidas"
                    onClick={(e) => handleSectionClick(e, "Bebidas", "Bebidas")}
                    >
                    <FormattedMessage id='leamington.beverages' defaultMessage='beverages' />
                    </a>
                </div>
            </div>
            <div className={styles.MenuElements}>
                <p className={styles.SectionMenuTitle} id="Antojitos"><strong><FormattedMessage id='leamington.snacks' defaultMessage='snacks' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="Antojitos"
                        analyticsItemId="htlsnacks.Guacamole"
                        Title1={<FormattedMessage id='htlsnacks.Guacamole' defaultMessage='Guacamole'/>}
                        Description1={<FormattedMessage id='htlsnacksdescr.Guacamole' defaultMessage='Guacamole'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Guacamole_350x350.webp?alt=media&token=0b457545-e864-4d0f-b418-78ee7a451567"
                    />
                    <MenuItem 
                        analyticsSectionId="Antojitos"
                        analyticsItemId="htlsnacks.NachosSupreme"
                        Title1={<FormattedMessage id='htlsnacks.NachosSupreme' defaultMessage='NachosSupreme'/>}
                        Description1={<FormattedMessage id='htlsnacksdescr.NachosSupreme' defaultMessage='NachosSupreme'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Nachos%20Calientes_350x350.webp?alt=media&token=63a398d6-3709-495c-a640-95f043686015"
                    />
                    <MenuItem 
                        analyticsSectionId="Antojitos"
                        analyticsItemId="htlsnacks.Burrito"
                        Title1={<FormattedMessage id='htlsnacks.Burrito' defaultMessage='Burrito'/>}
                        Description1={<FormattedMessage id='htlsnacksdescr.Burrito' defaultMessage='Burrito'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Burrito_350x350.webp?alt=media&token=52550f3a-2852-4685-a376-88821e5366df"
                    />
                    <MenuItem 
                        analyticsSectionId="Antojitos"
                        analyticsItemId="htlsnacks.PapasSupreme"
                        Title1={<FormattedMessage id='htlsnacks.PapasSupreme' defaultMessage='PapasSupreme'/>}
                        Description1={<FormattedMessage id='htlsnacksdescr.PapasSupreme' defaultMessage='PapasSupreme'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/SupremeFries_350x350.webp?alt=media&token=50d185c9-9dc4-49a5-ba82-b0d08dbd222c"
                    />
                    <MenuItem 
                        analyticsSectionId="Antojitos"
                        analyticsItemId="htlsnacks.PapasHotTacos"
                        Title1={<FormattedMessage id='htlsnacks.PapasHotTacos' defaultMessage='PapasHotTacos'/>}
                        Description1={<FormattedMessage id='htlsnacksdescr.PapasHotTacos' defaultMessage='PapasHotTacos'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/PapasHotTacos_350x350.webp?alt=media&token=0d90f04d-cb6f-4f2f-aa76-6445d7d0c463"
                    />
                    <MenuItem 
                        analyticsSectionId="Antojitos"
                        analyticsItemId="htlsnacks.Gringa"
                        Title1={<FormattedMessage id='htlsnacks.Gringa' defaultMessage='Gringa'/>}
                        Description1={<FormattedMessage id='htlsnacksdescr.Gringa' defaultMessage='Gringa'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Gringa_350x350.webp?alt=media&token=bb2d8afe-e425-4743-b5cb-4b8a52157758"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaCocinaMexicana"><strong><FormattedMessage id='leamington.cuisine' defaultMessage='cuisine' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="DeLaCocinaMexicana"
                        analyticsItemId="htlcuisine.Molcajete"
                        Title1={<FormattedMessage id='htlcuisine.Molcajete' defaultMessage='Molcajete'/>}
                        Description1={<FormattedMessage id='htlcuisinedescr.Molcajete' defaultMessage='Molcajete'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Molcajete_350x350.webp?alt=media&token=bce207ae-6e04-48c8-ad38-1c2187d39b94"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCocinaMexicana"
                        analyticsItemId="htlcuisine.Tostadas"
                        Title1={<FormattedMessage id='htlcuisine.Tostadas' defaultMessage='Tostadas'/>}
                        Description1={<FormattedMessage id='htlcuisinedescr.Tostadas' defaultMessage='Tostadas'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tostadas_350x350.webp?alt=media&token=181dce26-9963-47c6-8ea5-1a6f7de53b99"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCocinaMexicana"
                        analyticsItemId="htlcuisine.Torta"
                        Title1={<FormattedMessage id='htlcuisine.Torta' defaultMessage='Torta'/>}
                        Description1={<FormattedMessage id='htlcuisinedescr.Torta' defaultMessage='Torta'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Torta_350x350.webp?alt=media&token=ed4c0c2d-52a4-4d31-8bb4-b52b496cda04"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCocinaMexicana"
                        analyticsItemId="htlcuisine.HuaracheTricolor"
                        Title1={<FormattedMessage id='htlcuisine.HuaracheTricolor' defaultMessage='HuaracheTricolor'/>}
                        Description1={<FormattedMessage id='htlcuisinedescr.HuaracheTricolor' defaultMessage='HuaracheTricolor'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/HTC-Huarache_350x350.webp?alt=media&token=99f28aab-4f0b-40bb-960e-451f1e437e2d"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCocinaMexicana"
                        analyticsItemId="htlcuisine.Sopes"
                        Title1={<FormattedMessage id='htlcuisine.Sopes' defaultMessage='Sopes'/>}
                        Description1={<FormattedMessage id='htlcuisinedescr.Sopes' defaultMessage='Sopes'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Sopes_350x350.webp?alt=media&token=68b5a574-2b4d-43e5-8f1c-ac4033f3db13"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCocinaMexicana"
                        analyticsItemId="htlcuisine.Enchiladas"
                        Title1={<FormattedMessage id='htlcuisine.Enchiladas' defaultMessage='Enchiladas'/>}
                        Description1={<FormattedMessage id='htlcuisinedescr.Enchiladas' defaultMessage='Enchiladas'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Enchiladas_350x350.webp?alt=media&token=f223b4e2-4f91-44d4-b60c-ffd519ac81eb"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCocinaMexicana"
                        analyticsItemId="htlcuisine.Chilaquiles"
                        Title1={<FormattedMessage id='htlcuisine.Chilaquiles' defaultMessage='Chilaquiles'/>}
                        Description1={<FormattedMessage id='htlcuisinedescr.Chilaquiles' defaultMessage='Chilaquiles'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Chilaquiles_350x350.webp?alt=media&token=b0417840-474f-4f05-9162-240961cdfd86"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaParrilla"><strong><FormattedMessage id='leamington.grill' defaultMessage='grill' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.CarneAsada"
                        Title1={<FormattedMessage id='htlgrill.CarneAsada' defaultMessage='CarneAsada'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.CarneAsada' defaultMessage='CarneAsada'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Carne%20de%20Res%20Asada_350x350.webp?alt=media&token=644ef74a-5f9b-4622-8e25-2b75225bb4ec"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.PechugaPlancha"
                        Title1={<FormattedMessage id='htlgrill.PechugaPlancha' defaultMessage='PechugaPlancha'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.PechugaPlancha' defaultMessage='PechugaPlancha'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/PechugaAsada_350x350.webp?alt=media&token=71ab4f79-bc00-4870-b186-c657ab730777"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.CarnitasPuerco"
                        Title1={<FormattedMessage id='htlgrill.CarnitasPuerco' defaultMessage='CarnitasPuerco'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.CarnitasPuerco' defaultMessage='CarnitasPuerco'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Carnitas_350x350.webp?alt=media&token=bcc56324-8155-4caf-8b25-95c48be4cff1"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.CostillasBBQ"
                        Title1={<FormattedMessage id='htlgrill.CostillasBBQ' defaultMessage='CostillasBBQ'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.CostillasBBQ' defaultMessage='CostillasBBQ'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Costillas%20de%20Puerco_350x350.webp?alt=media&token=5b4cd5d3-0c94-413b-983b-a508beccfe49"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.ParrilladaMixta"
                        Title1={<FormattedMessage id='htlgrill.ParrilladaMixta' defaultMessage='ParrilladaMixta'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.ParrilladaMixta' defaultMessage='ParrilladaMixta'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/ParrilladaMixta_350x350.webp?alt=media&token=70d39363-e9a3-4c30-9514-b5e8551d6a2d"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaCazuela"><strong><FormattedMessage id='leamington.pot' defaultMessage='pot' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="DeLaCazuela"
                        analyticsItemId="htlpot.PozoleRojo"
                        Title1={<FormattedMessage id='htlpot.PozoleRojo' defaultMessage='PozoleRojo'/>}
                        Description1={<FormattedMessage id='htlpotdescr.PozoleRojo' defaultMessage='PozoleRojo'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/PozolePuerco_350x350.webp?alt=media&token=153e2dbd-1089-4321-907a-e2c5f161af54"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCazuela"
                        analyticsItemId="htlpot.Menudo"
                        Title1={<FormattedMessage id='htlpot.Menudo' defaultMessage='Menudo'/>}
                        Description1={<FormattedMessage id='htlpotdescr.Menudo' defaultMessage='Menudo'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/MENUDO%20DE%20RES_350x350.webp?alt=media&token=c45d827c-079a-4b28-9b67-990529bb9425"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCazuela"
                        analyticsItemId="htlpot.CaldoRes"
                        Title1={<FormattedMessage id='htlpot.CaldoRes' defaultMessage='CaldoRes'/>}
                        Description1={<FormattedMessage id='htlpotdescr.CaldoRes' defaultMessage='CaldoRes'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Caldo%20de%20Res_350x350.webp?alt=media&token=16450f15-c032-4b10-b962-d205ce1537c6"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DelMar"><strong><FormattedMessage id='leamington.sea' defaultMessage='sea' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="DeLaCazuela"
                        analyticsItemId="htlsea.CaldoCamarón"
                        Title1={<FormattedMessage id='htlsea.CaldoCamarón' defaultMessage='CaldoCamarón'/>}
                        Description1={<FormattedMessage id='htlseadescr.CaldoCamarón' defaultMessage='CaldoCamarón'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Caldo%20de%20Camaron_350x350.webp?alt=media&token=523a47e9-c314-49ce-9749-13d2a3747b92"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCazuela"
                        analyticsItemId="htlsea.CevicheCamarón"
                        Title1={<FormattedMessage id='htlsea.CevicheCamarón' defaultMessage='CevicheCamarón'/>}
                        Description1={<FormattedMessage id='htlseadescr.CevicheCamarón' defaultMessage='CevicheCamarón'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Ceviche_350x350.webp?alt=media&token=b0181e55-7b93-4e5c-a9a2-c78f7f0720f4"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCazuela"
                        analyticsItemId="htlsea.CoctelCamarón"
                        Title1={<FormattedMessage id='htlsea.CoctelCamarón' defaultMessage='CoctelCamarón'/>}
                        Description1={<FormattedMessage id='htlseadescr.CoctelCamarón' defaultMessage='CoctelCamarón'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Coctel%20De%20Camaron_350x350.webp?alt=media&token=2a1a9dac-ec2f-4bac-a1cc-595ee56994ef"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCazuela"
                        analyticsItemId="htlsea.SopaMariscos"
                        Title1={<FormattedMessage id='htlsea.SopaMariscos' defaultMessage='SopaMariscos'/>}
                        Description1={<FormattedMessage id='htlseadescr.SopaMariscos' defaultMessage='SopaMariscos'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Sopa%20De%20Marisco_350x350.webp?alt=media&token=f0802e1b-0730-41f6-ad5f-e278770f4523"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaCazuela"
                        analyticsItemId="htlsea.VuelveVida"
                        Title1={<FormattedMessage id='htlsea.VuelveVida' defaultMessage='VuelveVida'/>}
                        Description1={<FormattedMessage id='htlseadescr.VuelveVida' defaultMessage='VuelveVida'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Vuelve%20a%20la%20Vida_350x350.webp?alt=media&token=05a21533-edb8-48cb-9427-df94ddbeed71"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="TacosQuesadillas"><strong><FormattedMessage id='leamington.tacos' defaultMessage='tacos' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.CarnitasPuerco"
                        Title1={<FormattedMessage id='htlgrill.CarnitasPuerco' defaultMessage='CarnitasPuerco'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.CarnitasPuerco' defaultMessage='CarnitasPuerco'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Carnitas%20de%20Puerco_350x350.webp?alt=media&token=139c2d88-5441-4808-9522-b899d3062b98"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.CostillasBBQ"
                        Title1={<FormattedMessage id='htlgrill.CostillasBBQ' defaultMessage='CostillasBBQ'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.CostillasBBQ' defaultMessage='CostillasBBQ'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Costillas%20al%20BBQ_350x350.webp?alt=media&token=f0ca998e-f0b6-4ac4-b4db-85debde1542b"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.ParrilladaMixta"
                        Title1={<FormattedMessage id='htlgrill.ParrilladaMixta' defaultMessage='ParrilladaMixta'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.ParrilladaMixta' defaultMessage='ParrilladaMixta'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Parrillada%20Mixta_350x350.webp?alt=media&token=e3fe56f0-9fbf-41ea-a3fa-d847f2461e17"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.TacoPastor"
                        Title1={<FormattedMessage id='htlgrill.TacoPastor' defaultMessage='TacoPastor'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.TacoPastor' defaultMessage='TacoPastor'/>}

                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20al%20Pastor_350x350.webp?alt=media&token=139c2d88-5441-4808-9522-b899d3062b98"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.TacoChorizo"
                        Title1={<FormattedMessage id='htlgrill.TacoChorizo' defaultMessage='TacoChorizo'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.TacoChorizo' defaultMessage='TacoChorizo'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Chorizo_350x350.webp?alt=media&token=f0ca998e-f0b6-4ac4-b4db-85debde1542b"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.TacoCarnitas"
                        Title1={<FormattedMessage id='htlgrill.TacoCarnitas' defaultMessage='TacoCarnitas'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.TacoCarnitas' defaultMessage='TacoCarnitas'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Carnitas_350x350.webp?alt=media&token=e3fe56f0-9fbf-41ea-a3fa-d847f2461e17"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.TacoCueritos"
                        Title1={<FormattedMessage id='htlgrill.TacoCueritos' defaultMessage='TacoCueritos'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.TacoCueritos' defaultMessage='TacoCueritos'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Cueritos_350x350.webp?alt=media&token=213871eb-4dc4-434d-88fd-14a315c32509"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.TacoPollo"
                        Title1={<FormattedMessage id='htlgrill.TacoPollo' defaultMessage='TacoPollo'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.TacoPollo' defaultMessage='TacoPollo'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Pollo_350x350.webp?alt=media&token=6fa3adf7-ecef-4277-b297-b82af6922445"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlgrill.TacoVegetariano"
                        Title1={<FormattedMessage id='htlgrill.TacoVegetariano' defaultMessage='TacoVegetariano'/>}
                        Description1={<FormattedMessage id='htlgrilldescr.TacoVegetariano' defaultMessage='TacoVegetariano'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htltacos.TacoCochinitaPibil"
                        Title1={<FormattedMessage id='htltacos.TacoCochinitaPibil' defaultMessage='TacoCochinitaPibil'/>}
                        Description1={<FormattedMessage id='htltacosdescr.TacoCochinitaPibil' defaultMessage='TacoCochinitaPibil'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Cochinita%20Pibil_350x350.webp?alt=media&token=51ddaa6b-7fb2-432e-9635-f17a4afbda21"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htltacos.TacoCarneAsada"
                        Title1={<FormattedMessage id='htltacos.TacoCarneAsada' defaultMessage='TacoCarneAsada'/>}
                        Description1={<FormattedMessage id='htltacosdescr.TacoCarneAsada' defaultMessage='TacoCarneAsada'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Asada_350x350.webp?alt=media&token=65c90a54-4ece-4956-a009-c87b3266f155"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htltacos.TacoCabeza"
                        Title1={<FormattedMessage id='htltacos.TacoCabeza' defaultMessage='TacoCabeza'/>}
                        Description1={<FormattedMessage id='htltacosdescr.TacoCabeza' defaultMessage='TacoCabeza'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Cabeza_350x350.webp?alt=media&token=07f55a2e-d84b-4d18-aef4-29f8a6308cfe"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htltacos.TacoLengua"
                        Title1={<FormattedMessage id='htltacos.TacoLengua' defaultMessage='TacoLengua'/>}
                        Description1={<FormattedMessage id='htltacosdescr.TacoLengua' defaultMessage='TacoLengua'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Lengua_350x350.webp?alt=media&token=c8f6d86d-33f3-4bbc-9564-2e33ed5fbb9e"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htltacos.TacoSupreme"
                        Title1={<FormattedMessage id='htltacos.TacoSupreme' defaultMessage='TacoSupreme'/>}
                        Description1={<FormattedMessage id='htltacosdescr.TacoSupreme' defaultMessage='TacoSupreme'/>}
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htltacos.TacoBirria"
                        Title1={<FormattedMessage id='htltacos.TacoBirria' defaultMessage='TacoBirria'/>}
                        Description1={<FormattedMessage id='htltacosdescr.TacoBirria' defaultMessage='TacoBirria'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htltacos.Quesabirria"
                        Title1={<FormattedMessage id='htltacos.Quesabirria' defaultMessage='Quesabirria'/>}
                        Description1={<FormattedMessage id='htltacosdescr.Quesabirria' defaultMessage='Quesabirria'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/HotTacosStreetFood_Quesabirrias_350x350.webp?alt=media&token=7a46c229-7087-4082-9e31-1d3651f1c33f"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htltacos.QuesadillaCochinitaPibil"
                        Title1={<FormattedMessage id='htltacos.QuesadillaCochinitaPibil' defaultMessage='QuesadillaCochinitaPibil'/>}
                        Description1={<FormattedMessage id='htltacosdescr.QuesadillaCochinitaPibil' defaultMessage='QuesadillaCochinitaPibil'/>}
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htltacos.QuesadillaTingaPollo"
                        Title1={<FormattedMessage id='htltacos.QuesadillaTingaPollo' defaultMessage='QuesadillaTingaPollo'/>}
                        Description1={<FormattedMessage id='htltacosdescr.QuesadillaTingaPollo' defaultMessage='QuesadillaTingaPollo'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Quesadilla%20de%20Tinga_350x350.webp?alt=media&token=d74a390c-c04c-4a97-88a9-856bae0334b7"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htltacos.QuesadillaQueso"
                        Title1={<FormattedMessage id='htltacos.QuesadillaQueso' defaultMessage='QuesadillaQueso'/>}
                        Description1={<FormattedMessage id='htltacosdescr.QuesadillaQueso' defaultMessage='QuesadillaQueso'/>}
                        // ImagePath=""
                    />
                </div>
                
                <p className={styles.SectionMenuTitle} id="Extras"><strong><FormattedMessage id='leamington.sides' defaultMessage='sides' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlsides.Arroz"
                        Title1={<FormattedMessage id='htlsides.Arroz' defaultMessage='Arroz'/>}
                        Description1={<FormattedMessage id='htlsidesdescr.Arroz' defaultMessage='Arroz'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlsides.Frijoles"
                        Title1={<FormattedMessage id='htlsides.Frijoles' defaultMessage='Frijoles'/>}
                        Description1={<FormattedMessage id='htlsidesdescr.Frijoles' defaultMessage='Frijoles'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlsides.Chips"
                        Title1={<FormattedMessage id='htlsides.Chips' defaultMessage='Chips'/>}
                        Description1={<FormattedMessage id='htlsidesdescr.Chips' defaultMessage='Chips'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlsides.PicoGallo"
                        Title1={<FormattedMessage id='htlsides.PicoGallo' defaultMessage='PicoGallo'/>}
                        Description1={<FormattedMessage id='htlsidesdescr.PicoGallo' defaultMessage='PicoGallo'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlsides.Papas"
                        Title1={<FormattedMessage id='htlsides.Papas' defaultMessage='Papas'/>}
                        Description1={<FormattedMessage id='htlsidesdescr.Papas' defaultMessage='Papas'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlsides.Tortillas"
                        Title1={<FormattedMessage id='htlsides.Tortillas' defaultMessage='Tortillas'/>}
                        Description1={<FormattedMessage id='htlsidesdescr.Tortillas' defaultMessage='Tortillas'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlsides.ChilesToreados"
                        Title1={<FormattedMessage id='htlsides.ChilesToreados' defaultMessage='ChilesToreados'/>}
                        Description1={<FormattedMessage id='htlsidesdescr.ChilesToreados' defaultMessage='ChilesToreados'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Chiles_350x350.webp?alt=media&token=a07b45a2-827e-4a70-af29-70170cf85a72"
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlsides.CebollaCambray"
                        Title1={<FormattedMessage id='htlsides.CebollaCambray' defaultMessage='CebollaCambray'/>}
                        Description1={<FormattedMessage id='htlsidesdescr.CebollaCambray' defaultMessage='CebollaCambray'/>}
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Cebollas_350x350.webp?alt=media&token=3ced1e43-f624-48a4-82f9-ca9db9702fa0"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Bebidas"><strong><FormattedMessage id='leamington.beverages' defaultMessage='beverages' /></strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlbeverages.AguaNatural"
                        Title1={<FormattedMessage id='htlbeverages.AguaNatural' defaultMessage='AguaNatural'/>}
                        Description1={<FormattedMessage id='htlbeveragesdescr.AguaNatural' defaultMessage='AguaNatural'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlbeverages.AguaSabor"
                        Title1={<FormattedMessage id='htlbeverages.AguaSabor' defaultMessage='AguaSabor'/>}
                        Description1={<FormattedMessage id='htlbeveragesdescr.AguaSabor' defaultMessage='AguaSabor'/>}
                        // ImagePath=""
                    />
                    
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlbeverages.SodaLata"
                        Title1={<FormattedMessage id='htlbeverages.SodaLata' defaultMessage='SodaLata'/>}
                        Description1={<FormattedMessage id='htlbeveragesdescr.SodaLata' defaultMessage='SodaLata'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlbeverages.Jugos"
                        Title1={<FormattedMessage id='htlbeverages.Jugos' defaultMessage='Jugos'/>}
                        Description1={<FormattedMessage id='htlbeveragesdescr.Jugos' defaultMessage='Jugos'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlbeverages.Arizona"
                        Title1={<FormattedMessage id='htlbeverages.Arizona' defaultMessage='Arizona'/>}
                        Description1={<FormattedMessage id='htlbeveragesdescr.Arizona' defaultMessage='Arizona'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlbeverages.Jarritos"
                        Title1={<FormattedMessage id='htlbeverages.Jarritos' defaultMessage='Jarritos'/>}
                        Description1={<FormattedMessage id='htlbeveragesdescr.Jarritos' defaultMessage='Jarritos'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlbeverages.Sangría"
                        Title1={<FormattedMessage id='htlbeverages.Sangría' defaultMessage='Sangría'/>}
                        Description1={<FormattedMessage id='htlbeveragesdescr.Sangría' defaultMessage='Sangría'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlbeverages.CaféOlla"
                        Title1={<FormattedMessage id='htlbeverages.CaféOlla' defaultMessage='CaféOlla'/>}
                        Description1={<FormattedMessage id='htlbeveragesdescr.CaféOlla' defaultMessage='CaféOlla'/>}
                        // ImagePath=""
                    />
                    <MenuItem 
                        analyticsSectionId="DeLaParrilla"
                        analyticsItemId="htlbeverages.Café"
                        Title1={<FormattedMessage id='htlbeverages.Café' defaultMessage='Café'/>}
                        Description1={<FormattedMessage id='htlbeveragesdescr.Café' defaultMessage='Café'/>}
                        // ImagePath=""
                    />
                </div>
            </div>
        </div>
    )
}