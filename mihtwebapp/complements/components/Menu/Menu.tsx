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
                    <a className={styles.SectionLink} href="#">Especiales</a>
                </div>
            </div>
            <div className={styles.MenuElements}>
                <p className={styles.SectionMenuTitle} id="Entradas"><strong>Entradas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Nachos calientes con Asada o Pollo"
                        TitleEng="Hot Nachos with Asada or Chicken"
                        Price={22}
                        Description="Totopos calientes cubiertos de queso Mozzarella, queso amarillo, la carne de tu elección, jalapeños y pico de gallo."
                        DescriptionEng="Hot tortilla chips covered with Mozzarella cheese, yellow cheese, your choice of meat, jalapeños, and pico de gallo."
                        // ImagePath="/media/Hot Tacos.jpg"
                    />
                    <MenuItem 
                        Title="Nachos Supreme"
                        TitleEng=""
                        Price={18}
                        Description="Chips preparados al momento, cubiertos con queso amarillo derretido, chorizo, lechuga, pico de gallo, crema y queso feta fresco."
                        DescriptionEng="Chips prepared on the spot, topped with melted yellow cheese, chorizo, lettuce, pico de gallo, cream, and fresh feta cheese."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Aros de Cebolla"
                        TitleEng="Onion Rings"
                        Price={8}
                        Description="Aros de cebolla fritos acompañados de aderezo."
                        DescriptionEng="Fried onion rings served with dressing."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Jalapeños"
                        TitleEng=""
                        Price={10}
                        Description="Deliciosos chiles jalapeños rellenos de queso filadelfia y envueltos en tocino."
                        DescriptionEng="Jalapeno peppers stuffed with cheese."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Dedos de Queso"
                        TitleEng="Cheese Sticks"
                        Price={10}
                        Description="Piezas de deditos de mozzarella empanizado acompañados con cátsup y/o aderezo."
                        DescriptionEng="Breaded mozzarella cheese sticks served with ketchup and/or dressing."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Calamares a la Plancha"
                        TitleEng="Fried Calamari"
                        Price={18}
                        Description="Tiernos y dorados pedazos de frescos Calamares cocinados a la plancha con un sazonado perfecto en aceite y especias acompañados de salsa."
                        DescriptionEng="Tender and breaded pieces of fresh calamari with perfect seasoning in oil and spices accompanied by dressing."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Antojitos"><strong>Antojitos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Burrito"
                        TitleEng=""
                        Price={15}
                        Description="Arroz, frijol, pico de gallo, queso mozzarella y carne de tu elección. Envuelto en una deliciosa tortilla de harina, dorado directamente a la plancha."
                        DescriptionEng="Rice, beans, pico de gallo, mozzarella cheese, and your choice of meat. Wrapped in a delicious flour tortilla and griddled directly."
                        ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Papas Supreme Medianas"
                        TitleEng="Supreme Fries"
                        Price={12}
                        Description="Papas fritas al momento, queso amarillo derretido, chorizo, lechuga, pico de gallo, crema y queso feta fresco."
                        DescriptionEng="Freshly fried potatoes with melted yellow cheese, chorizo, lettuce, pico de gallo, cream, and fresh feta cheese."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Papas a la Hot Tacos"
                        TitleEng="Hot Tacos Fries"
                        Price={25}
                        Description="Papas fritas al momento, queso amarillo derretido, mezcladas con carne asada y cubiertas con guacamole."
                        DescriptionEng="Freshly fried potatoes with melted yellow cheese, mixed with grilled beef, and topped with guacamole."
                        ImagePath="/media/PapasHotTacos.jpg"
                    />
                    <MenuItem 
                        Title="Gringa"
                        TitleEng=""
                        Price={15}
                        Description="Tortilla grande de harina, rellena de queso mozzarella y la carne de su elección. Servida con lechuga y pico de gallo."
                        DescriptionEng="Large flour tortilla filled with mozzarella cheese and your choice of meat. Served with lettuce and pico de gallo."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaCocinaMexicana"><strong>DeLaCocinaMexicana</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Molcajete"
                        TitleEng=""
                        Price={55}
                        Description="Una mezcla irresistible de pollo, arrachera, camarones, chicharrón, queso gratinado, cebolla cambray, nopal y jalapeños, acompañado de tortillas y presentado en un molcajete caliente listo para degustar."
                        DescriptionEng="An irresistible mix of chicken, skirt steak, shrimp, pork rind, gratinated cheese, green onions, nopales, and jalapenos, with tortillas and presented in a hot molcajete ready to enjoy."
                        ImagePath="/media/Molcajete.jpg"
                    />
                    <MenuItem 
                        Title="3 Tostadas"
                        TitleEng=""
                        Price={17}
                        Description="Tortilla de maíz frita vestida con frijol, lechuga, aguacate, jitomate, crema y tu carne favorita."
                        DescriptionEng="Fried corn tortilla dressed with beans, lettuce, avocado, tomato, cream, and your favorite meat."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Torta"
                        TitleEng=""
                        Price={15}
                        Description="Preparada con una fresca telera vestida con frijol, tu carne favorita adornada con queso mozzarella, pico de gallo y aguacate."
                        DescriptionEng="Prepared with a fresh telera roll dressed with beans, your favorite meat adorned with mozzarella cheese, pico de gallo, and avocado. Served with a portion of French fries."
                        ImagePath="/media/Torta.jpg"
                    />
                    <MenuItem 
                        Title="Huarache tricolor"
                        TitleEng="Tricolor Huarache"
                        Price={18}
                        Description="Un diamante culinario mexicano, es una tortilla rellena de frijol, cubierta en salsa verde y roja, acompañada de la carne de tu elección, cebolla, aguacate, queso y crema."
                        DescriptionEng="A Mexican culinary gem, a tortilla filled with beans, covered in green and red sauce, accompanied by your choice of meat, onions, avocado, cheese and cream."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="3 Sopes"
                        TitleEng=""
                        Price={18}
                        Description="Base de masa hechas a mano con gruesos bordes, cubierta con salsa verde o roja, tu carne elegida, lechuga, pico de gallo, aguacate y queso feta fresco."
                        DescriptionEng="Handmade masa base with thick edges, covered with green or red sauce, your chosen meat, lettuce, pico de gallo, avocado, and fresh feta cheese."
                        ImagePath="/media/Sopes.jpg"
                    />
                    <MenuItem 
                        Title="Milanesa de Pollo"
                        TitleEng="Chicken Milanese"
                        Price={19}
                        Description="Milanesa de pollo servida con papas fritas, arroz, frijoles y tortillas. Exquisito para un exigente paladar."
                        DescriptionEng="Chicken milanese served with french fries, rice, beans, and tortillas. Exquisite for a discerning palate."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Milanesa de Cerdo"
                        TitleEng="Pork Milanese"
                        Price={18}
                        Description="Milanesa de cerdo servida con papas fritas, arroz, frijoles y tortillas. Exquisito para un exigente paladar."
                        DescriptionEng="Pork milanese served with french fries, rice, beans, and tortillas. Exquisite for a discerning palate."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Enchiladas de Pollo o Res"
                        TitleEng="Chicken or Beef Enchiladas"
                        Price={18}
                        Description="Suaves tortillas rellenas de pollo tierno, cebolla morada crujiente, rábano, crema suave, queso feta y cubiertas con una deliciosa salsa verde. ¡Un festín de sabores que te dejará encantado!"
                        DescriptionEng="Soft tortillas filled with tender chicken, crispy purple onions, radish, smooth cream, feta cheese, and covered with a delicious green sauce. A feast of flavors that will leave you delighted!"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Enchiladas Suizas"
                        TitleEng="Swiss Enchiladas"
                        Price={19}
                        Description="Suaves tortillas rellenas de pollo, bañadas de salsa de jitomate gratinadas con queso y adornadas con cebolla, crema."
                        DescriptionEng="Soft tortillas filled with chicken, bathed in tomato sauce, gratinated with cheese, and adorned with onion and cream."
                        ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Chilaquiles"
                        TitleEng=""
                        Price={17}
                        Description="Chips cocinados en salsa roja o verde, vestidos con carne o un huevo estrellado, queso feta fresco, crema y aguacate, acompañado de lechuga y arroz."
                        DescriptionEng="Chips cooked in red or green sauce, dressed with meat or a fried egg, fresh feta cheese, cream, and avocado, accompanied by lettuce and rice."
                        ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Flautas de pollo"
                        TitleEng="Chicken Flutes"
                        Price={15}
                        Description="Tacos fritos de pollo, acompañados de lechuga, queso feta, pico de gallo, crema y aguacate."
                        DescriptionEng="Fried chicken tacos, accompanied by lettuce, fresh feta cheese, pico de gallo, cream, and avocado."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Flautas de papa"
                        TitleEng="Potato Flutes"
                        Price={10}
                        Description="Tacos fritos rellenos de papa, acompañados de lechuga, queso feta, pico de gallo, crema y aguacate."
                        DescriptionEng="Fried tacos filled with potatoes, accompanied by lettuce, fresh feta cheese, pico de gallo, cream, and avocado."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaParrilla"><strong>DeLaParrilla</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Carne de Res Asada"
                        TitleEng="Grilled Beef"
                        Price={19}
                        Description="Acompañada de ensalada, arroz, frijol, tortillas y cebollines."
                        DescriptionEng="Served with salad, rice, beans, tortillas, and green onions."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pechuga a la plancha"
                        TitleEng="Grilled Chicken Breast"
                        Price={19}
                        Description="Acompañada de ensalada, arroz, frijol, tortillas y cebollines."
                        DescriptionEng="Served with salad, rice, beans, tortillas, and green onions."
                        ImagePath="/media/PechugaAsada.jpg"
                    />
                    <MenuItem 
                        Title="Carnitas de puerco"
                        TitleEng="Pork Carnitas"
                        Price={18}
                        Description="Acompañada de ensalada, arroz, frijol y tortillas."
                        DescriptionEng="Served with salad, rice, beans and tortillas."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Costillas de cerdo a la BBQ"
                        TitleEng="BBQ Pork Ribs"
                        Price={17}
                        Description="Costillas de cerdo con papas fritas."
                        DescriptionEng="Pork ribs with fries."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Rib-Eye 300 gr."
                        TitleEng=""
                        Price={31}
                        Description="Servido con papas, chile toreado, nopal y cebollines."
                        DescriptionEng="Served with potatoes, grilled chili, nopal, and spring onions."
                        ImagePath="/media/RibEye.jpg"
                    />
                    <MenuItem 
                        Title="Parrillada mixta para 3"
                        TitleEng="Mixed Grill for 3"
                        Price={50}
                        Description="La combinación perfecta Sí existe, es una mezcla de pimientos, chorizo, carne asada, pollo, carnitas, aguacate, cebollas cambray y queso."
                        DescriptionEng="The perfect combination does exist, it's a mix of bell peppers, chorizo, grilled beef, chicken, carnitas, avocado, green onions, and cheese."
                        ImagePath="/media/ParrilladaMixta.jpg"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaCazuela"><strong>DeLaCazuela</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Pozole de Puerco Rojo Mediano"
                        TitleEng="Red Pork Pozole"
                        Price={15}
                        Description="Carne de puerco y maíz pozolero creado con una mezcla de chile guajillo y especies, acompañado con guarnición de lechuga, rábano, aguacate y limón. Servido con tostadas y salsa macha."
                        DescriptionEng="Pork and pozole corn created with a blend of guajillo chili and spices, accompanied by garnishes of lettuce, radish, avocado, and lemon. Served with tostadas and macha sauce."
                        ImagePath="/media/PozolePuerco.jpg"
                    />
                    <MenuItem 
                        Title="Pozole Verde Mediano"
                        TitleEng="Green Pozole"
                        Price={15}
                        Description="Pollo, maíz pozolero creado con una mezcla de tomatillo, jalapeño, cilantro y especies para un exquisito sabor mexicano, acompañado con guarnición de lechuga, rábano, aguacate y limón. Servido con tostadas y salsa macha."
                        DescriptionEng="Chicken, pozole corn created with a blend of tomatillo, jalapeno, cilantro, and spices for an exquisite Mexican flavor, accompanied by garnishes of lettuce, radish, avocado, and lemon. Served with tostadas and macha sauce."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Menudo de Res o Mondongo Mediano"
                        TitleEng="Beef Tripe Stew or Mondongo"
                        Price={15}
                        Description="Salsa ligera de chile guajillo y menudo. Servido con tortillas, cebolla, cilantro, limón y salsa macha."
                        DescriptionEng="Light guajillo chili sauce and menudo. Served with tortillas, onion, cilantro, lemon, and macha sauce."
                        ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Caldo de Res Mediano"
                        TitleEng="Beef Broth"
                        Price={15}
                        Description="Carne de res con papa, elote, zanahoria, calabaza y repollo. Servido con tortillas, cebolla, cilantro, limón y salsa macha."
                        DescriptionEng="Beef with potatoes, corn, carrots, squash, and cabbage. Served with tortillas, onion, cilantro, lemon, and macha sauce."
                        ImagePath="Photo"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DelMar"><strong>DelMar</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Camarones Envueltos"
                        TitleEng="Wrapped Shrimp"
                        Price={25}
                        Description="Camarones envueltos con tocino y con una cobertura de queso mozzarella. Acompañados con arroz y ensalada."
                        DescriptionEng="Shrimp wrapped in bacon and covered with mozzarella cheese. Served with rice or steamed vegetables."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Camarones al Gusto"
                        TitleEng="Shrimp Special"
                        Price={22}
                        Description="Camarones preparados al ajillo, mojo de ajo, a la diabla, a la mantequilla, al cilantro o mango habanero, acompañados con arroz y papas."
                        DescriptionEng="Shrimp prepared garlic-style, garlic mojo, devil-style, buttered, cilantro-style, or habanero mango style, accompanied by rice and potatoes."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pulpo al Gusto"
                        TitleEng="Octopus Special"
                        Price={28}
                        Description="Pulpo preparado a tu gusto, ya sea al ajillo, mojo de ajo, a la diabla, a la mantequilla, al cilantro o mango habanero, acompañados con arroz, ensalada y papas."
                        DescriptionEng="Octopus prepared garlic-style, garlic mojo, devil-style, buttered, cilantro-style, or habanero mango style, served with rice, salad, and potatoes."
                        ImagePath="/media/Pulpo.jpg"
                    />
                    <MenuItem 
                        Title="Caldo de Camarón"
                        TitleEng="Shrimp Broth"
                        Price={22}
                        Description="Camarón con zanahoria y papa. Acompañado de cilantro, cebolla, aguacate, limón y tostadas."
                        DescriptionEng="Shrimp with carrots and potatoes. Served with cilantro, onion, avocado, lemon, and tostadas."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Ceviche de Camarón"
                        TitleEng="Shrimp Ceviche"
                        Price={17}
                        Description="Camarón, pepino, cebolla, tomate, cilantro, y jalapeño cocido por el jugo de limón."
                        DescriptionEng="Shrimp, cucumber, onion, tomato, cilantro, and jalapeno cooked by lime juice."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="3 Tostadas de Camarón"
                        TitleEng="3 Shrimp Tostada"
                        Price={23}
                        Description="Tortilla de maíz frita cubierta con mayonesa, camarón, cebolla, tomate, pepino, cilantro, aguacate y lechuga."
                        DescriptionEng="Fried corn tortilla covered with mayonnaise, shrimp, onion, tomato, cucumber, cilantro, avocado, and lettuce."
                        ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Coctel de Camarón"
                        TitleEng="Shrimp Cocktail"
                        Price={17}
                        Description="Camarones bañados en una salsa refrescante a base de cátsup, mezclados con cebolla, cilantro, y aguacate. Servido con saladitas y salsa valentina."
                        DescriptionEng="Shrimp bathed in a refreshing ketchup-based sauce, mixed with onion, cilantro, and avocado. Served with saltines and Valentina sauce."
                        ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Sopa de Mariscos"
                        TitleEng="Seafood Soup"
                        Price={25}
                        Description="Pulpo, pescado, camarón, surimi, almejas, callo de hacha. Servido con cebolla, cilantro, aguacate, limón y tostadas."
                        DescriptionEng="Octopus, fish, shrimp, surimi, clams. Served with onion, cilantro, avocado, lemon, and tostadas."
                        ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Vuelve a la Vida"
                        TitleEng="Back to Life"
                        Price={25}
                        Description="Mezcla de mariscos: camarones, pulpo y ostión servidos más surimi con salsa coctelera de la casa, jugo de limón, aguacate, pepino, cebolla y cilantro."
                        DescriptionEng="Seafood mix: shrimp, octopus, and oyster served with surimi, house cocktail sauce, lemon juice, avocado, cucumber, onion, and cilantro."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="TacosQuesadillas"><strong>TacosQuesadillas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Al Pastor"
                        TitleEng=""
                        Price={4}
                        Description="Tacos originales mexicanos, carne marinada con la receta original de los auténticos taqueros mexicanos."
                        DescriptionEng="Authentic Mexican tacos, marinated meat with the original recipe of authentic Mexican taqueros."
                        ImagePath="/media/AlPastor.jpg"
                    />
                    <MenuItem 
                        Title="Chorizo"
                        TitleEng=""
                        Price={4}
                        Description="Auténtico chorizo mexicano, marinado de manera exquisita para disfrutar su sabor perfecto."
                        DescriptionEng="Authentic Mexican chorizo, exquisitely marinated to savor its perfect flavor."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Carnitas"
                        TitleEng="Pulled Pork"
                        Price={4}
                        Description="Una fiesta mexicana de sabor en un taco con carnitas fritas en su propia manteca, creadas de manera tradicional."
                        DescriptionEng="A Mexican flavor party in a taco with fried pulled pork in their own lard, made in a traditional way."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Cueritos"
                        TitleEng="Pork Skin"
                        Price={4}
                        Description="El sabor en un taco con cueritos creados de manera tradicional, original de la cocina mexicana."
                        DescriptionEng="The flavor in a taco with pork skin created in the traditional, original Mexican cuisine."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Bistec de Cerdo"
                        TitleEng="Pork Steak"
                        Price={4}
                        Description="Una mezcla exquisita de carne de cerdo en fajitas, asado a la plancha con cebolla juliana y especias que resaltan el sabor de la comida mexicana."
                        DescriptionEng="An exquisite blend of pork in fajitas, grilled with julienne onions and spices that enhance the flavor of Mexican cuisine."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pollo"
                        TitleEng="Chicken"
                        Price={4.5}
                        Description="Tacos de pollo sazonado para quienes disfrutan el sabor tradicional."
                        DescriptionEng="Seasoned chicken tacos for those who enjoy traditional flavor."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Vegetariano"
                        TitleEng="Vegetarian"
                        Price={4.5}
                        Description="Taco vegetariano lleno de sabores frescos: frijoles, arroz, pico de gallo, lechuga, queso feta y crema, todo envuelto en una tortilla de maíz."
                        DescriptionEng="Vegetarian taco bursting with fresh flavors: beans, rice, pico de gallo, lettuce, feta cheese, and sour cream, all wrapped in a corn tortilla."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Carne Enchilada de res o de cerdo"
                        TitleEng="Enchilada meat, Beef or Pork"
                        Price={5}
                        Description="Tacos de carne preparada con una mezcla de chiles que te harán sentir el sabor azteca."
                        DescriptionEng="Tacos made with meat prepared with a blend of chilies that will make you feel the Aztec flavor."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Cochinita Pibil"
                        TitleEng=""
                        Price={5}
                        Description="Del sureste mexicano para Leamington. Carne de cerdo cocida con la receta original yucateca."
                        DescriptionEng="From the Mexican southeast to Leamington, pork cooked with the original Yucatecan recipe."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Carne Asada"
                        TitleEng="Beef (Asada)"
                        Price={5}
                        Description="Tacos de carne de res asada con exquisitas especias para lograr un toque fresco y jugoso al estilo mexicano."
                        DescriptionEng="Tacos with grilled beef seasoned with exquisite spices to achieve a fresh and juicy Mexican touch."
                        ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Lengua o Cabeza"
                        TitleEng="Tongue or beef Head"
                        Price={5}
                        Description="Tacos de lengua o cabeza de res finamente preparada para alcanzar una delicia con personalidad mexicana."
                        DescriptionEng="Tacos with finely prepared beef tongue or head for a delight with Mexican personality."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Supreme"
                        TitleEng=""
                        Price={6}
                        Description="Queso crema, lechuga, pico de gallo más proteína de su elección."
                        DescriptionEng="Cream cheese, lettuce, pico de gallo, plus your choice of protein."
                        ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="¿Qué me ves?"
                        TitleEng="What you looking at? "
                        Price={7}
                        Description="Bistec de cerdo con papa, cebolla, jalapeños y aguacate. Servido en tres tortillas de largo al estilo de Tlaxcala."
                        DescriptionEng="Pork steak with potatoes, onions, jalapenos, and avocado. Served on three Tlaxcala-style tortillas."
                        ImagePath="/media/QueMeVes.jpg"
                    />
                    <MenuItem 
                        Title="Taco de Birria"
                        TitleEng="Birria Taco "
                        Price={6}
                        Description="Desde México para Canadá… carne de borrego con sabor indescriptible a notas de mariachi."
                        DescriptionEng="From Mexico to Canada... lamb with an indescribable flavor reminiscent of mariachi notes."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Gobernador"
                        TitleEng="Governor"
                        Price={8}
                        Description="Tortilla de maíz acompañada de Camarones y una salsa preparada con tocino, pimientos, cebolla, queso y crema."
                        DescriptionEng="Corn tortilla accompanied by shrimp and a sauce prepared with bacon, peppers, onions, cheese and cream."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Quesabirria"
                        TitleEng=""
                        Price={8}
                        Description="Desde México para Canadá… Tortillas cubiertas de queso con carne de borrego y sabor indescriptible a notas de mariachi."
                        DescriptionEng="From Mexico to Canada... Tortillas covered with cheese and lamb meat with an indescribable flavor reminiscent of mariachi notes."
                        ImagePath="/media/Quesabirrias.jpg"
                    />
                    <MenuItem 
                        Title="Quesadilla de Cochinita Pibil"
                        TitleEng="Cochinita Pibil Quesadilla "
                        Price={7}
                        Description="Rellena de cerdo marinado en achiote y queso. Un sabor tradicional y delicioso."
                        DescriptionEng="Filled with pork marinated in achiote and cheese. A traditional and delicious flavor."
                        ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Quesadilla de Tinga de Pollo"
                        TitleEng="Chicken Tinga Quesadilla "
                        Price={6}
                        Description="Pollo desmenuzado en una salsa de jitomate y chipotle, servido en tortilla de maíz."
                        DescriptionEng="Shredded chicken in a tomato and chipotle sauce, served in a corn tortilla."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Quesadilla de Queso"
                        TitleEng="Cheese Quesadilla"
                        Price={5}
                        Description="Queso derretido en una tortilla de maíz. Una opción simple y deliciosa para los amantes del queso."
                        DescriptionEng="Melted cheese in a corn tortilla. A simple and delicious option for cheese lovers."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Extras"><strong>Extras</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Arroz"
                        TitleEng="Rice"
                        Price={4}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Frijoles"
                        TitleEng="Beans"
                        Price={4}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Chips"
                        TitleEng=""
                        Price={3}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pico de Gallo"
                        TitleEng=""
                        Price={5}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Papas"
                        TitleEng="Fries"
                        Price={5}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Guacamole"
                        TitleEng=""
                        Price={12}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Tortillas (5 pzas)"
                        TitleEng=""
                        Price={2}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Chiles toreados (2 pzas)"
                        TitleEng="Grilled Chilies (2 pzs)"
                        Price={2}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Nopal asado (2 pzas)"
                        TitleEng="Grilled Nopal Cactus (2 pieces)"
                        Price={4}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Cebolla cambray (5 pzas)"
                        TitleEng="Green Onions (5 pieces)"
                        Price={3}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Postres"><strong>Postres</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Gelatina Mosaico"
                        TitleEng="Mosaic Jelly"
                        Price={5}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Duraznos con crema"
                        TitleEng="Peaches with Cream"
                        Price={5}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Fresas con crema"
                        TitleEng="Strawberries with Cream"
                        Price={5}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Flan"
                        TitleEng=""
                        Price={6}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pan de Elote"
                        TitleEng="Cornbread"
                        Price={7}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Arroz con Leche"
                        TitleEng="Rice Pudding"
                        Price={5}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pan Vainilla"
                        TitleEng="Vanilla Bread"
                        Price={6}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pastel 3 Leches"
                        TitleEng="3 Milks Desert"
                        Price={7}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Bebidas"><strong>Bebidas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Agua Natural"
                        TitleEng="Natural Water"
                        Price={1.5}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Agua de Sabor"
                        TitleEng="Flavoured Water"
                        Price={3}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Soda en Lata"
                        TitleEng="Pop"
                        Price={1.5}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Jugos"
                        TitleEng="Juice"
                        Price={5}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Arizona"
                        TitleEng=""
                        Price={3}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Jarritos"
                        TitleEng=""
                        Price={3.5}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Sangría"
                        TitleEng=""
                        Price={3.5}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Café de Olla"
                        TitleEng="Coffee of the Pot"
                        Price={3}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Café"
                        TitleEng=""
                        Price={2}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                </div>
            </div>
        </div>
    )
}