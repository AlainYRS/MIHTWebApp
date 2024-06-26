import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";

export default function Menu(){
    return(
        <div className={styles.Menu}>
            <div className={styles.MenuSectionsContainer}>
                <div className={styles.Sections}>
                    <a className={styles.SectionLink} href="#Entradas">Entradas</a>
                    <a className={styles.SectionLink} href="#Antojitos">Antojitos</a>
                    <a className={styles.SectionLink} href="#DeLaCocinaMexicana">De la Cocina Mexicana</a>
                    <a className={styles.SectionLink} href="#DeLaParrilla">De la Parrilla</a>
                    <a className={styles.SectionLink} href="#DeLaCazuela">De la Cazuela</a>
                    <a className={styles.SectionLink} href="#DelMar">Del Mar</a>
                    <a className={styles.SectionLink} href="#TacosQuesadillas">Tacos & Quesadillas</a>
                    <a className={styles.SectionLink} href="#Extras">Extras</a>
                    <a className={styles.SectionLink} href="#Postres">Postres</a>
                    <a className={styles.SectionLink} href="#Bebidas">Bebidas</a>
                </div>
            </div>
            <div className={styles.MenuElements}>
                <p className={styles.SectionMenuTitle} id="Entradas"><strong>Entradas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Nachos calientes con Asada o Pollo"
                        Title2="Hot Nachos with Asada or Chicken"
                        Price={22}
                        Description1="Totopos calientes cubiertos de queso Mozzarella, queso amarillo, la carne de tu elección, jalapeños y pico de gallo."
                        Description2="Hot tortilla chips covered with Mozzarella cheese, yellow cheese, your choice of meat, jalapeños, and pico de gallo."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Nachos%20Supreme_350x350.webp?alt=media&token=80c9f9fa-a3c0-4493-80d0-f0dfa565564b"
                    />
                    <MenuItem 
                        Title1="Nachos Supreme"
                        Title2=""
                        Price={18}
                        Description1="Chips preparados al momento, cubiertos con queso amarillo derretido, chorizo, lechuga, pico de gallo, crema y queso feta fresco."
                        Description2="Chips prepared on the spot, topped with melted yellow cheese, chorizo, lettuce, pico de gallo, cream, and fresh feta cheese."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Nachos%20Calientes_350x350.webp?alt=media&token=63a398d6-3709-495c-a640-95f043686015"
                    />
                    <MenuItem 
                        Title1="Aros de Cebolla"
                        Title2="Onion Rings"
                        Price={8}
                        Description1="Aros de cebolla fritos acompañados de aderezo."
                        Description2="Fried onion rings served with dressing."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Aros%20de%20Cebolla_350x350.webp?alt=media&token=87acc055-3207-48d1-ba04-4b9cd6e586e1"
                    />
                    <MenuItem 
                        Title1="Jalapeños"
                        Title2=""
                        Price={10}
                        Description1="Deliciosos chiles jalapeños rellenos de queso filadelfia y envueltos en tocino."
                        Description2="Jalapeno peppers stuffed with cheese."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Jalapenos_350x350.webp?alt=media&token=fd704c8c-25ae-4455-831c-14c76f352fd5"
                    />
                    <MenuItem 
                        Title1="Dedos de Queso"
                        Title2="Cheese Sticks"
                        Price={10}
                        Description1="Piezas de deditos de mozzarella empanizado acompañados con cátsup y/o aderezo."
                        Description2="Breaded mozzarella cheese sticks served with ketchup and/or dressing."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Dedos%20De%20Queso_350x350.webp?alt=media&token=1c1f1576-2972-4103-958d-ac6dbb13e1bd"
                    />
                    <MenuItem 
                        Title1="Calamares Empanizados"
                        Title2="Fried Calamari"
                        Price={18}
                        Description1="Tiernos y dorados pedazos de frescos Calamares cocinados a la plancha con un sazonado perfecto en aceite y especias acompañados de salsa."
                        Description2="Tender and breaded pieces of fresh calamari with perfect seasoning in oil and spices accompanied by dressing."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Calamres%20Empanizados_350x350.webp?alt=media&token=5af51759-1baa-4e24-9b9b-f9a7aafc2ddf"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Antojitos"><strong>Antojitos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Burrito"
                        Title2=""
                        Price={15}
                        Description1="Arroz, frijol, pico de gallo, queso mozzarella y carne de tu elección. Envuelto en una deliciosa tortilla de harina, dorado directamente a la plancha."
                        Description2="Rice, beans, pico de gallo, mozzarella cheese, and your choice of meat. Wrapped in a delicious flour tortilla and griddled directly."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Burrito_350x350.webp?alt=media&token=52550f3a-2852-4685-a376-88821e5366df"
                    />
                    <MenuItem 
                        Title1="Papas Supreme Medianas"
                        Title2="Supreme Fries"
                        Price={12}
                        Description1="Papas fritas al momento, queso amarillo derretido, chorizo, lechuga, pico de gallo, crema y queso feta fresco."
                        Description2="Freshly fried potatoes with melted yellow cheese, chorizo, lettuce, pico de gallo, cream, and fresh feta cheese."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/SupremeFries_350x350.webp?alt=media&token=50d185c9-9dc4-49a5-ba82-b0d08dbd222c"
                    />
                    <MenuItem 
                        Title1="Papas a la Hot Tacos"
                        Title2="Hot Tacos Fries"
                        Price={25}
                        Description1="Papas fritas al momento, queso amarillo derretido, mezcladas con carne asada y cubiertas con guacamole."
                        Description2="Freshly fried potatoes with melted yellow cheese, mixed with grilled beef, and topped with guacamole."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/PapasHotTacos_350x350.webp?alt=media&token=0d90f04d-cb6f-4f2f-aa76-6445d7d0c463"
                    />
                    <MenuItem 
                        Title1="Gringa"
                        Title2=""
                        Price={15}
                        Description1="Tortilla grande de harina, rellena de queso mozzarella y la carne de su elección. Servida con lechuga y pico de gallo."
                        Description2="Large flour tortilla filled with mozzarella cheese and your choice of meat. Served with lettuce and pico de gallo."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Gringa_350x350.webp?alt=media&token=bb2d8afe-e425-4743-b5cb-4b8a52157758"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaCocinaMexicana"><strong>DeLaCocinaMexicana</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Molcajete"
                        Title2=""
                        Price={55}
                        Description1="Una mezcla irresistible de pollo, arrachera, camarones, chicharrón, queso gratinado, cebolla cambray, nopal y jalapeños, acompañado de tortillas y presentado en un molcajete caliente listo para degustar."
                        Description2="An irresistible mix of chicken, skirt steak, shrimp, pork rind, gratinated cheese, green onions, nopales, and jalapenos, with tortillas and presented in a hot molcajete ready to enjoy."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Molcajete_350x350.webp?alt=media&token=bce207ae-6e04-48c8-ad38-1c2187d39b94"
                    />
                    <MenuItem 
                        Title1="3 Tostadas"
                        Title2=""
                        Price={17}
                        Description1="Tortilla de maíz frita vestida con frijol, lechuga, aguacate, jitomate, crema y tu carne favorita."
                        Description2="Fried corn tortilla dressed with beans, lettuce, avocado, tomato, cream, and your favorite meat."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tostadas_350x350.webp?alt=media&token=181dce26-9963-47c6-8ea5-1a6f7de53b99"
                    />
                    <MenuItem 
                        Title1="Torta"
                        Title2=""
                        Price={15}
                        Description1="Preparada con una fresca telera vestida con frijol, tu carne favorita adornada con queso mozzarella, pico de gallo y aguacate."
                        Description2="Prepared with a fresh telera roll dressed with beans, your favorite meat adorned with mozzarella cheese, pico de gallo, and avocado. Served with a portion of French fries."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Torta_350x350.webp?alt=media&token=ed4c0c2d-52a4-4d31-8bb4-b52b496cda04"
                    />
                    <MenuItem 
                        Title1="Huarache tricolor"
                        Title2="Tricolor Huarache"
                        Price={18}
                        Description1="Un diamante culinario mexicano, es una tortilla rellena de frijol, cubierta en salsa verde y roja, acompañada de la carne de tu elección, cebolla, aguacate, queso y crema."
                        Description2="A Mexican culinary gem, a tortilla filled with beans, covered in green and red sauce, accompanied by your choice of meat, onions, avocado, cheese and cream."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/HTC-Huarache_350x350.webp?alt=media&token=99f28aab-4f0b-40bb-960e-451f1e437e2d"
                    />
                    <MenuItem 
                        Title1="3 Sopes"
                        Title2=""
                        Price={18}
                        Description1="Base de masa hechas a mano con gruesos bordes, cubierta con salsa verde o roja, tu carne elegida, lechuga, pico de gallo, aguacate y queso feta fresco."
                        Description2="Handmade masa base with thick edges, covered with green or red sauce, your chosen meat, lettuce, pico de gallo, avocado, and fresh feta cheese."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Sopes_350x350.webp?alt=media&token=68b5a574-2b4d-43e5-8f1c-ac4033f3db13"
                    />
                    <MenuItem 
                        Title1="Milanesa de Pollo"
                        Title2="Chicken Milanese"
                        Price={19}
                        Description1="Milanesa de pollo servida con papas fritas, arroz, frijoles y tortillas. Exquisito para un exigente paladar."
                        Description2="Chicken milanese served with french fries, rice, beans, and tortillas. Exquisite for a discerning palate."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Milanesa%20de%20pollo_350x350.webp?alt=media&token=6182493d-5d68-4da3-9e57-9b81572cf0dd"
                    />
                    <MenuItem 
                        Title1="Milanesa de Cerdo"
                        Title2="Pork Milanese"
                        Price={18}
                        Description1="Milanesa de cerdo servida con papas fritas, arroz, frijoles y tortillas. Exquisito para un exigente paladar."
                        Description2="Pork milanese served with french fries, rice, beans, and tortillas. Exquisite for a discerning palate."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Milanesa%20de%20pollo_350x350.webp?alt=media&token=6182493d-5d68-4da3-9e57-9b81572cf0dd"
                    />
                    <MenuItem 
                        Title1="Enchiladas de Pollo o Res"
                        Title2="Chicken or Beef Enchiladas"
                        Price={18}
                        Description1="Suaves tortillas rellenas de pollo tierno, cebolla morada crujiente, rábano, crema suave, queso feta y cubiertas con una deliciosa salsa verde. ¡Un festín de sabores que te dejará encantado!"
                        Description2="Soft tortillas filled with tender chicken, crispy purple onions, radish, smooth cream, feta cheese, and covered with a delicious green sauce. A feast of flavors that will leave you delighted!"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Enchiladas_350x350.webp?alt=media&token=f223b4e2-4f91-44d4-b60c-ffd519ac81eb"
                    />
                    <MenuItem 
                        Title1="Enchiladas Suizas"
                        Title2="Swiss Enchiladas"
                        Price={19}
                        Description1="Suaves tortillas rellenas de pollo, bañadas de salsa de jitomate gratinadas con queso y adornadas con cebolla, crema."
                        Description2="Soft tortillas filled with chicken, bathed in tomato sauce, gratinated with cheese, and adorned with onion and cream."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Enchiladas%20Suizas_350x350.webp?alt=media&token=ce90a664-f394-4a6e-b87e-10f01be0117b"
                    />
                    <MenuItem 
                        Title1="Chilaquiles"
                        Title2=""
                        Price={17}
                        Description1="Chips cocinados en salsa roja o verde, vestidos con carne o un huevo estrellado, queso feta fresco, crema y aguacate, acompañado de lechuga y arroz."
                        Description2="Chips cooked in red or green sauce, dressed with meat or a fried egg, fresh feta cheese, cream, and avocado, accompanied by lettuce and rice."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Chilaquiles_350x350.webp?alt=media&token=b0417840-474f-4f05-9162-240961cdfd86"
                    />
                    <MenuItem 
                        Title1="Flautas de pollo"
                        Title2="Chicken Flutes"
                        Price={15}
                        Description1="Tacos fritos de pollo, acompañados de lechuga, queso feta, pico de gallo, crema y aguacate."
                        Description2="Fried chicken tacos, accompanied by lettuce, fresh feta cheese, pico de gallo, cream, and avocado."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Flautas_350x350.webp?alt=media&token=031d43d4-d8f7-4e7a-8f14-e3a2fb52ed51"
                    />
                    <MenuItem 
                        Title1="Flautas de papa"
                        Title2="Potato Flutes"
                        Price={10}
                        Description1="Tacos fritos rellenos de papa, acompañados de lechuga, queso feta, pico de gallo, crema y aguacate."
                        Description2="Fried tacos filled with potatoes, accompanied by lettuce, fresh feta cheese, pico de gallo, cream, and avocado."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Flautas_350x350.webp?alt=media&token=031d43d4-d8f7-4e7a-8f14-e3a2fb52ed51"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaParrilla"><strong>DeLaParrilla</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Carne de Res Asada"
                        Title2="Grilled Beef"
                        Price={19}
                        Description1="Acompañada de ensalada, arroz, frijol, tortillas y cebollines."
                        Description2="Served with salad, rice, beans, tortillas, and green onions."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Carne%20de%20Res%20Asada_350x350.webp?alt=media&token=644ef74a-5f9b-4622-8e25-2b75225bb4ec"
                    />
                    <MenuItem 
                        Title1="Pechuga a la plancha"
                        Title2="Grilled Chicken Breast"
                        Price={19}
                        Description1="Acompañada de ensalada, arroz, frijol, tortillas y cebollines."
                        Description2="Served with salad, rice, beans, tortillas, and green onions."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/PechugaAsada_350x350.webp?alt=media&token=71ab4f79-bc00-4870-b186-c657ab730777"
                    />
                    <MenuItem 
                        Title1="Carnitas de puerco"
                        Title2="Pork Carnitas"
                        Price={18}
                        Description1="Acompañada de ensalada, arroz, frijol y tortillas."
                        Description2="Served with salad, rice, beans and tortillas."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Carnitas_350x350.webp?alt=media&token=bcc56324-8155-4caf-8b25-95c48be4cff1"
                    />
                    <MenuItem 
                        Title1="Costillas de cerdo a la BBQ"
                        Title2="BBQ Pork Ribs"
                        Price={17}
                        Description1="Costillas de cerdo con papas fritas."
                        Description2="Pork ribs with fries."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Costillas%20de%20Puerco_350x350.webp?alt=media&token=5b4cd5d3-0c94-413b-983b-a508beccfe49"
                    />
                    <MenuItem 
                        Title1="Rib-Eye 300 gr."
                        Title2=""
                        Price={31}
                        Description1="Servido con papas, chile toreado, nopal y cebollines."
                        Description2="Served with potatoes, grilled chili, nopal, and spring onions."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/RibEye_350x350.webp?alt=media&token=13c77054-a15a-4ad6-abbd-ec194de06eeb"
                    />
                    <MenuItem 
                        Title1="Parrillada mixta para 3"
                        Title2="Mixed Grill for 3"
                        Price={50}
                        Description1="La combinación perfecta Sí existe, es una mezcla de pimientos, chorizo, carne asada, pollo, carnitas, aguacate, cebollas cambray y queso."
                        Description2="The perfect combination does exist, it's a mix of bell peppers, chorizo, grilled beef, chicken, carnitas, avocado, green onions, and cheese."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/ParrilladaMixta_350x350.webp?alt=media&token=70d39363-e9a3-4c30-9514-b5e8551d6a2d"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaCazuela"><strong>DeLaCazuela</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Pozole de Puerco Rojo Mediano"
                        Title2="Red Pork Pozole"
                        Price={15}
                        Description1="Carne de puerco y maíz pozolero creado con una mezcla de chile guajillo y especies, acompañado con guarnición de lechuga, rábano, aguacate y limón. Servido con tostadas y salsa macha."
                        Description2="Pork and pozole corn created with a blend of guajillo chili and spices, accompanied by garnishes of lettuce, radish, avocado, and lemon. Served with tostadas and macha sauce."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/PozolePuerco_350x350.webp?alt=media&token=153e2dbd-1089-4321-907a-e2c5f161af54"
                    />
                    <MenuItem 
                        Title1="Pozole Verde Mediano"
                        Title2="Green Pozole"
                        Price={15}
                        Description1="Pollo, maíz pozolero creado con una mezcla de tomatillo, jalapeño, cilantro y especies para un exquisito sabor mexicano, acompañado con guarnición de lechuga, rábano, aguacate y limón. Servido con tostadas y salsa macha."
                        Description2="Chicken, pozole corn created with a blend of tomatillo, jalapeno, cilantro, and spices for an exquisite Mexican flavor, accompanied by garnishes of lettuce, radish, avocado, and lemon. Served with tostadas and macha sauce."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Pozole%20Verde_350x350.webp?alt=media&token=fe8aad42-ef46-4d5d-9aa5-bbabe53f9643"
                    />
                    <MenuItem 
                        Title1="Menudo de Res o Mondongo Mediano"
                        Title2="Beef Tripe Stew or Mondongo"
                        Price={15}
                        Description1="Salsa ligera de chile guajillo y menudo. Servido con tortillas, cebolla, cilantro, limón y salsa macha."
                        Description2="Light guajillo chili sauce and menudo. Served with tortillas, onion, cilantro, lemon, and macha sauce."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/MENUDO%20DE%20RES_350x350.webp?alt=media&token=c45d827c-079a-4b28-9b67-990529bb9425"
                    />
                    <MenuItem 
                        Title1="Caldo de Res Mediano"
                        Title2="Beef Broth"
                        Price={15}
                        Description1="Carne de res con papa, elote, zanahoria, calabaza y repollo. Servido con tortillas, cebolla, cilantro, limón y salsa macha."
                        Description2="Beef with potatoes, corn, carrots, squash, and cabbage. Served with tortillas, onion, cilantro, lemon, and macha sauce."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Caldo%20de%20Res_350x350.webp?alt=media&token=16450f15-c032-4b10-b962-d205ce1537c6"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DelMar"><strong>DelMar</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Camarones Envueltos"
                        Title2="Wrapped Shrimp"
                        Price={25}
                        Description1="Camarones envueltos con tocino y con una cobertura de queso mozzarella. Acompañados con arroz y ensalada."
                        Description2="Shrimp wrapped in bacon and covered with mozzarella cheese. Served with rice or steamed vegetables."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Camarones al Gusto"
                        Title2="Shrimp Special"
                        Price={22}
                        Description1="Camarones preparados al ajillo, mojo de ajo, a la diabla, a la mantequilla, al cilantro o mango habanero, acompañados con arroz y papas."
                        Description2="Shrimp prepared garlic-style, garlic mojo, devil-style, buttered, cilantro-style, or habanero mango style, accompanied by rice and potatoes."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Especial%20de%20Camaron_350x350.webp?alt=media&token=ef6b235f-0158-490c-bb75-0f63e68a10f0"
                    />
                    <MenuItem 
                        Title1="Pulpo al Gusto"
                        Title2="Octopus Special"
                        Price={28}
                        Description1="Pulpo preparado a tu gusto, ya sea al ajillo, mojo de ajo, a la diabla, a la mantequilla, al cilantro o mango habanero, acompañados con arroz, ensalada y papas."
                        Description2="Octopus prepared garlic-style, garlic mojo, devil-style, buttered, cilantro-style, or habanero mango style, served with rice, salad, and potatoes."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Pulpo%202_350x350.webp?alt=media&token=30f05d4e-5149-4764-b613-8bcf68652a1b"
                    />
                    <MenuItem 
                        Title1="Caldo de Camarón"
                        Title2="Shrimp Broth"
                        Price={22}
                        Description1="Camarón con zanahoria y papa. Acompañado de cilantro, cebolla, aguacate, limón y tostadas."
                        Description2="Shrimp with carrots and potatoes. Served with cilantro, onion, avocado, lemon, and tostadas."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Caldo%20de%20Camaron_350x350.webp?alt=media&token=523a47e9-c314-49ce-9749-13d2a3747b92"
                    />
                    <MenuItem 
                        Title1="Ceviche de Camarón"
                        Title2="Shrimp Ceviche"
                        Price={17}
                        Description1="Camarón, pepino, cebolla, tomate, cilantro, y jalapeño cocido por el jugo de limón."
                        Description2="Shrimp, cucumber, onion, tomato, cilantro, and jalapeno cooked by lime juice."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Ceviche_350x350.webp?alt=media&token=b0181e55-7b93-4e5c-a9a2-c78f7f0720f4"
                    />
                    <MenuItem 
                        Title1="3 Tostadas de Camarón"
                        Title2="3 Shrimp Tostada"
                        Price={23}
                        Description1="Tortilla de maíz frita cubierta con mayonesa, camarón, cebolla, tomate, pepino, cilantro, aguacate y lechuga."
                        Description2="Fried corn tortilla covered with mayonnaise, shrimp, onion, tomato, cucumber, cilantro, avocado, and lettuce."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tostadas%20De%20Camaron_350x350.webp?alt=media&token=7f9bb669-32c8-475a-a8d6-57a25dc99572"
                    />
                    <MenuItem 
                        Title1="Coctel de Camarón"
                        Title2="Shrimp Cocktail"
                        Price={17}
                        Description1="Camarones bañados en una salsa refrescante a base de cátsup, mezclados con cebolla, cilantro, y aguacate. Servido con saladitas y salsa valentina."
                        Description2="Shrimp bathed in a refreshing ketchup-based sauce, mixed with onion, cilantro, and avocado. Served with saltines and Valentina sauce."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Coctel%20De%20Camaron_350x350.webp?alt=media&token=2a1a9dac-ec2f-4bac-a1cc-595ee56994ef"
                    />
                    <MenuItem 
                        Title1="Sopa de Mariscos"
                        Title2="Seafood Soup"
                        Price={25}
                        Description1="Pulpo, pescado, camarón, surimi, almejas, callo de hacha. Servido con cebolla, cilantro, aguacate, limón y tostadas."
                        Description2="Octopus, fish, shrimp, surimi, clams. Served with onion, cilantro, avocado, lemon, and tostadas."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Sopa%20De%20Marisco_350x350.webp?alt=media&token=f0802e1b-0730-41f6-ad5f-e278770f4523"
                    />
                    <MenuItem 
                        Title1="Vuelve a la Vida"
                        Title2="Back to Life"
                        Price={25}
                        Description1="Mezcla de mariscos: camarones, pulpo y ostión servidos más surimi con salsa coctelera de la casa, jugo de limón, aguacate, pepino, cebolla y cilantro."
                        Description2="Seafood mix: shrimp, octopus, and oyster served with surimi, house cocktail sauce, lemon juice, avocado, cucumber, onion, and cilantro."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Vuelve%20a%20la%20Vida_350x350.webp?alt=media&token=05a21533-edb8-48cb-9427-df94ddbeed71"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="TacosQuesadillas"><strong>TacosQuesadillas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Al Pastor"
                        Title2=""
                        Price={4}
                        Description1="Tacos originales mexicanos, carne marinada con la receta original de los auténticos taqueros mexicanos."
                        Description2="Authentic Mexican tacos, marinated meat with the original recipe of authentic Mexican taqueros."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20al%20Pastor_350x350.webp?alt=media&token=139c2d88-5441-4808-9522-b899d3062b98"
                    />
                    <MenuItem 
                        Title1="Chorizo"
                        Title2=""
                        Price={4}
                        Description1="Auténtico chorizo mexicano, marinado de manera exquisita para disfrutar su sabor perfecto."
                        Description2="Authentic Mexican chorizo, exquisitely marinated to savor its perfect flavor."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Chorizo_350x350.webp?alt=media&token=f0ca998e-f0b6-4ac4-b4db-85debde1542b"
                    />
                    <MenuItem 
                        Title1="Carnitas"
                        Title2="Pulled Pork"
                        Price={4}
                        Description1="Una fiesta mexicana de sabor en un taco con carnitas fritas en su propia manteca, creadas de manera tradicional."
                        Description2="A Mexican flavor party in a taco with fried pulled pork in their own lard, made in a traditional way."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Carnitas_350x350.webp?alt=media&token=e3fe56f0-9fbf-41ea-a3fa-d847f2461e17"
                    />
                    <MenuItem 
                        Title1="Cueritos"
                        Title2="Pork Skin"
                        Price={4}
                        Description1="El sabor en un taco con cueritos creados de manera tradicional, original de la cocina mexicana."
                        Description2="The flavor in a taco with pork skin created in the traditional, original Mexican cuisine."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Cueritos_350x350.webp?alt=media&token=213871eb-4dc4-434d-88fd-14a315c32509"
                    />
                    <MenuItem 
                        Title1="Bistec de Cerdo"
                        Title2="Pork Steak"
                        Price={4}
                        Description1="Una mezcla exquisita de carne de cerdo en fajitas, asado a la plancha con cebolla juliana y especias que resaltan el sabor de la comida mexicana."
                        Description2="An exquisite blend of pork in fajitas, grilled with julienne onions and spices that enhance the flavor of Mexican cuisine."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Pollo"
                        Title2="Chicken"
                        Price={4.5}
                        Description1="Tacos de pollo sazonado para quienes disfrutan el sabor tradicional."
                        Description2="Seasoned chicken tacos for those who enjoy traditional flavor."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Pollo_350x350.webp?alt=media&token=6fa3adf7-ecef-4277-b297-b82af6922445"
                    />
                    <MenuItem 
                        Title1="Vegetariano"
                        Title2="Vegetarian"
                        Price={4.5}
                        Description1="Taco vegetariano lleno de sabores frescos: frijoles, arroz, pico de gallo, lechuga, queso feta y crema, todo envuelto en una tortilla de maíz."
                        Description2="Vegetarian taco bursting with fresh flavors: beans, rice, pico de gallo, lettuce, feta cheese, and sour cream, all wrapped in a corn tortilla."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Carne Enchilada de res o de cerdo"
                        Title2="Enchilada meat, Beef or Pork"
                        Price={5}
                        Description1="Tacos de carne preparada con una mezcla de chiles que te harán sentir el sabor azteca."
                        Description2="Tacos made with meat prepared with a blend of chilies that will make you feel the Aztec flavor."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Cochinita Pibil"
                        Title2=""
                        Price={5}
                        Description1="Del sureste mexicano para Leamington. Carne de cerdo cocida con la receta original yucateca."
                        Description2="From the Mexican southeast to Leamington, pork cooked with the original Yucatecan recipe."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Cochinita%20Pibil_350x350.webp?alt=media&token=51ddaa6b-7fb2-432e-9635-f17a4afbda21"
                    />
                    <MenuItem 
                        Title1="Carne Asada"
                        Title2="Beef (Asada)"
                        Price={5}
                        Description1="Tacos de carne de res asada con exquisitas especias para lograr un toque fresco y jugoso al estilo mexicano."
                        Description2="Tacos with grilled beef seasoned with exquisite spices to achieve a fresh and juicy Mexican touch."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Asada_350x350.webp?alt=media&token=65c90a54-4ece-4956-a009-c87b3266f155"
                    />
                    <MenuItem 
                        Title1="Cabeza"
                        Title2="Beef Head"
                        Price={5}
                        Description1="Tacos de cabeza de res finamente preparada para alcanzar una delicia con personalidad mexicana."
                        Description2="Tacos with finely prepared beef head for a delight with Mexican personality."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Cabeza_350x350.webp?alt=media&token=07f55a2e-d84b-4d18-aef4-29f8a6308cfe"
                    />
                    <MenuItem 
                        Title1="Lengua"
                        Title2="Beef Tongue"
                        Price={5}
                        Description1="Tacos de lengua de res finamente preparada para alcanzar una delicia con personalidad mexicana."
                        Description2="Tacos with finely prepared beef tongue for a delight with Mexican personality."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Tacos%20de%20Lengua_350x350.webp?alt=media&token=c8f6d86d-33f3-4bbc-9564-2e33ed5fbb9e"
                    />
                    <MenuItem 
                        Title1="Supreme"
                        Title2=""
                        Price={6}
                        Description1="Queso crema, lechuga, pico de gallo más proteína de su elección."
                        Description2="Cream cheese, lettuce, pico de gallo, plus your choice of protein."
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        Title1="¿Qué me ves?"
                        Title2="What you looking at? "
                        Price={7}
                        Description1="Bistec de cerdo con papa, cebolla, jalapeños y aguacate. Servido en tres tortillas de largo al estilo de Tlaxcala."
                        Description2="Pork steak with potatoes, onions, jalapenos, and avocado. Served on three Tlaxcala-style tortillas."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/QueMeVes_350x350.webp?alt=media&token=66c84051-5ce1-43e4-94e9-8b286728add9"
                    />
                    <MenuItem 
                        Title1="Taco de Birria"
                        Title2="Birria Taco "
                        Price={6}
                        Description1="Desde México para Canadá… carne de borrego con sabor indescriptible a notas de mariachi."
                        Description2="From Mexico to Canada... lamb with an indescribable flavor reminiscent of mariachi notes."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Gobernador"
                        Title2="Governor"
                        Price={8}
                        Description1="Tortilla de maíz acompañada de Camarones y una salsa preparada con tocino, pimientos, cebolla, queso y crema."
                        Description2="Corn tortilla accompanied by shrimp and a sauce prepared with bacon, peppers, onions, cheese and cream."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Taco%20Gobernador_350x350.webp?alt=media&token=ea68e358-54af-4c9f-94f0-ddcb8208aab2"
                    />
                    <MenuItem 
                        Title1="Quesabirria"
                        Title2=""
                        Price={8}
                        Description1="Desde México para Canadá… Tortillas cubiertas de queso con carne de borrego y sabor indescriptible a notas de mariachi."
                        Description2="From Mexico to Canada... Tortillas covered with cheese and lamb meat with an indescribable flavor reminiscent of mariachi notes."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/HotTacosStreetFood_Quesabirrias_350x350.webp?alt=media&token=7a46c229-7087-4082-9e31-1d3651f1c33f"
                    />
                    <MenuItem 
                        Title1="Quesadilla de Cochinita Pibil"
                        Title2="Cochinita Pibil Quesadilla "
                        Price={7}
                        Description1="Rellena de cerdo marinado en achiote y queso. Un sabor tradicional y delicioso."
                        Description2="Filled with pork marinated in achiote and cheese. A traditional and delicious flavor."
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        Title1="Quesadilla de Tinga de Pollo"
                        Title2="Chicken Tinga Quesadilla "
                        Price={6}
                        Description1="Pollo desmenuzado en una salsa de jitomate y chipotle, servido en tortilla de maíz."
                        Description2="Shredded chicken in a tomato and chipotle sauce, served in a corn tortilla."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Quesadilla%20de%20Tinga_350x350.webp?alt=media&token=d74a390c-c04c-4a97-88a9-856bae0334b7"
                    />
                    <MenuItem 
                        Title1="Quesadilla de Queso"
                        Title2="Cheese Quesadilla"
                        Price={5}
                        Description1="Queso derretido en una tortilla de maíz. Una opción simple y deliciosa para los amantes del queso."
                        Description2="Melted cheese in a corn tortilla. A simple and delicious option for cheese lovers."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Extras"><strong>Extras</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Arroz"
                        Title2="Rice"
                        Price={4}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Frijoles"
                        Title2="Beans"
                        Price={4}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Chips"
                        Title2=""
                        Price={3}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Pico de Gallo"
                        Title2=""
                        Price={5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Papas"
                        Title2="Fries"
                        Price={5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Guacamole"
                        Title2=""
                        Price={12}
                        Description1=""
                        Description2=""
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Guacamole_350x350.webp?alt=media&token=0b457545-e864-4d0f-b418-78ee7a451567"
                    />
                    <MenuItem 
                        Title1="Tortillas (5 pzas)"
                        Title2=""
                        Price={2}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Chiles toreados (2 pzas)"
                        Title2="Grilled Chilies (2 pzs)"
                        Price={2}
                        Description1=""
                        Description2=""
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Chiles_350x350.webp?alt=media&token=a07b45a2-827e-4a70-af29-70170cf85a72"
                    />
                    <MenuItem 
                        Title1="Nopal asado (2 pzas)"
                        Title2="Grilled Nopal Cactus (2 pieces)"
                        Price={4}
                        Description1=""
                        Description2=""
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Nopales_350x350.webp?alt=media&token=d038bb57-926b-418a-aaa5-43ce240f39e9"
                    />
                    <MenuItem 
                        Title1="Cebolla cambray (5 pzas)"
                        Title2="Green Onions (5 pieces)"
                        Price={3}
                        Description1=""
                        Description2=""
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Cebollas_350x350.webp?alt=media&token=3ced1e43-f624-48a4-82f9-ca9db9702fa0"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Postres"><strong>Postres</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Gelatina Mosaico"
                        Title2="Mosaic Jelly"
                        Price={5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Duraznos con crema"
                        Title2="Peaches with Cream"
                        Price={5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Fresas con crema"
                        Title2="Strawberries with Cream"
                        Price={5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Flan"
                        Title2=""
                        Price={6}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Pan de Elote"
                        Title2="Cornbread"
                        Price={7}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Arroz con Leche"
                        Title2="Rice Pudding"
                        Price={5}
                        Description1=""
                        Description2=""
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Postre%20Arroz%20Dulce_350x350.webp?alt=media&token=936ed626-89b2-4a37-bc11-1baebbb0ab34"
                    />
                    <MenuItem 
                        Title1="Pan Vainilla"
                        Title2="Vanilla Bread"
                        Price={6}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Pastel 3 Leches"
                        Title2="3 Milks Desert"
                        Price={7}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Bebidas"><strong>Bebidas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Agua Natural"
                        Title2="Natural Water"
                        Price={1.5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Agua de Sabor"
                        Title2="Flavoured Water"
                        Price={3}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Soda en Lata"
                        Title2="Pop"
                        Price={1.5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Jugos"
                        Title2="Juice"
                        Price={5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Arizona"
                        Title2=""
                        Price={3}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Jarritos"
                        Title2=""
                        Price={3.5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Sangría"
                        Title2=""
                        Price={3.5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Café de Olla"
                        Title2="Coffee from the Pot"
                        Price={3}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Café"
                        Title2=""
                        Price={2}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                </div>
            </div>
        </div>
    )
}