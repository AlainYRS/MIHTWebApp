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
                        Price={22}
                        Description="Totopos calientes cubiertos de queso Mozzarella, queso amarillo, la carne de tu elección, jalapeños y pico de gallo."
                        // ImagePath="/media/Hot Tacos.jpg"
                    />
                    <MenuItem 
                        Title="Nachos Supreme"
                        Price={18}
                        Description="Chips preparados al momento, cubiertos con queso amarillo derretido, chorizo, lechuga, pico de gallo, crema y queso feta fresco."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Aros de Cebolla"
                        Price={8}
                        Description="Aros de cebolla fritos acompañados de aderezo."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Jalapeños"
                        Price={10}
                        Description="Deliciosos chiles jalapeños rellenos de queso filadelfia y envueltos en tocino."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Dedos de Queso"
                        Price={10}
                        Description="Piezas de deditos de mozzarella empanizado acompañados con cátsup y/o aderezo."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Calamares a la Plancha"
                        Price={18}
                        Description="Tiernos y dorados pedazos de frescos Calamares cocinados a la plancha con un sazonado perfecto en aceite y especias acompañados de salsa."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Antojitos"><strong>Antojitos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Burrito"
                        Price={15}
                        Description="Arroz, frijol, pico de gallo, queso mozzarella y carne de tu elección. Envuelto en una deliciosa tortilla de harina, dorado directamente a la plancha."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Papas Supreme Medianas"
                        Price={12}
                        Description="Papas fritas al momento, queso amarillo derretido, chorizo, lechuga, pico de gallo, crema y queso feta fresco."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Papas a la Hot Tacos"
                        Price={25}
                        Description="Papas fritas al momento, queso amarillo derretido, mezcladas con carne asada y cubiertas con guacamole."
                        ImagePath="/media/PapasHotTacos.jpg"
                    />
                    <MenuItem 
                        Title="Gringa"
                        Price={15}
                        Description="Tortilla grande de harina, rellena de queso mozzarella y la carne de su elección. Servida con lechuga y pico de gallo."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaCocinaMexicana"><strong>DeLaCocinaMexicana</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Molcajete"
                        Price={55}
                        Description="Una mezcla irresistible de pollo, arrachera, camarones, chicharrón, queso gratinado, cebolla cambray, nopal y jalapeños, acompañado de tortillas y presentado en un molcajete caliente listo para degustar."
                        ImagePath="/media/Molcajete.jpg"
                    />
                    <MenuItem 
                        Title="3 Tostadas"
                        Price={17}
                        Description="Tortilla de maíz frita vestida con frijol, lechuga, aguacate, jitomate, crema y tu carne favorita."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Torta"
                        Price={15}
                        Description="Preparada con una fresca telera vestida con frijol, tu carne favorita adornada con queso mozzarella, pico de gallo y aguacate."
                        ImagePath="/media/Torta.jpg"
                    />
                    <MenuItem 
                        Title="Huarache tricolor"
                        Price={18}
                        Description="Un diamante culinario mexicano, es una tortilla rellena de frijol, cubierta en salsa verde y roja, acompañada de la carne de tu elección, cebolla, aguacate, queso y crema."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="3 Sopes"
                        Price={18}
                        Description="Base de masa hechas a mano con gruesos bordes, cubierta con salsa verde o roja, tu carne elegida, lechuga, pico de gallo, aguacate y queso feta fresco."
                        ImagePath="/media/Sopes.jpg"
                    />
                    <MenuItem 
                        Title="Milanesa de Pollo"
                        Price={19}
                        Description="Milanesa de pollo servida con papas fritas, arroz, frijoles y tortillas. Exquisito para un exigente paladar."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Milanesa de Cerdo"
                        Price={18}
                        Description="Milanesa de cerdo servida con papas fritas, arroz, frijoles y tortillas. Exquisito para un exigente paladar."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Enchiladas de Pollo o Res"
                        Price={18}
                        Description="Suaves tortillas rellenas de pollo tierno, cebolla morada crujiente, rábano, crema suave, queso feta y cubiertas con una deliciosa salsa verde. ¡Un festín de sabores que te dejará encantado!"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Enchiladas Suizas"
                        Price={19}
                        Description="Suaves tortillas rellenas de pollo, bañadas de salsa de jitomate gratinadas con queso y adornadas con cebolla, crema."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Chilaquiles"
                        Price={17}
                        Description="Chips cocinados en salsa roja o verde, vestidos con carne o un huevo estrellado, queso feta fresco, crema y aguacate, acompañado de lechuga y arroz."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Flautas de pollo"
                        Price={15}
                        Description="Tacos fritos de pollo, acompañados de lechuga, queso feta, pico de gallo, crema y aguacate."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Flautas de papa"
                        Price={10}
                        Description="Tacos fritos rellenos de papa, acompañados de lechuga, queso feta, pico de gallo, crema y aguacate."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaParrilla"><strong>DeLaParrilla</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Carne de Res Asada"
                        Price={19}
                        Description="Acompañada de ensalada, arroz, frijol, tortillas y cebollines."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pechuga a la plancha"
                        Price={19}
                        Description="Acompañada de ensalada, arroz, frijol, tortillas y cebollines."
                        ImagePath="/media/PechugaAsada.jpg"
                    />
                    <MenuItem 
                        Title="Carnitas de puerco"
                        Price={18}
                        Description="Acompañada de ensalada, arroz, frijol y tortillas."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Costillas de cerdo a la BBQ"
                        Price={17}
                        Description="Costillas de cerdo con papas fritas."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Rib-Eye 300 gr."
                        Price={31}
                        Description="Servido con papas, chile toreado, nopal y cebollines."
                        ImagePath="/media/RibEye.jpg"
                    />
                    <MenuItem 
                        Title="Parrillada mixta para 3"
                        Price={50}
                        Description="La combinación perfecta Sí existe, es una mezcla de pimientos, chorizo, carne asada, pollo, carnitas, aguacate, cebollas cambray y queso."
                        ImagePath="/media/ParrilladaMixta.jpg"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DeLaCazuela"><strong>DeLaCazuela</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Pozole de Puerco Rojo Mediano"
                        Price={15}
                        Description="Carne de puerco y maíz pozolero creado con una mezcla de chile guajillo y especies, acompañado con guarnición de lechuga, rábano, aguacate y limón. Servido con tostadas y salsa macha."
                        ImagePath="/media/PozolePuerco.jpg"
                    />
                    <MenuItem 
                        Title="Pozole Verde Mediano"
                        Price={15}
                        Description="Pollo, maíz pozolero creado con una mezcla de tomatillo, jalapeño, cilantro y especies para un exquisito sabor mexicano, acompañado con guarnición de lechuga, rábano, aguacate y limón. Servido con tostadas y salsa macha."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Menudo de Res o Mondongo Mediano"
                        Price={15}
                        Description="Salsa ligera de chile guajillo y menudo. Servido con tortillas, cebolla, cilantro, limón y salsa macha."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Caldo de Res Mediano"
                        Price={15}
                        Description="Carne de res con papa, elote, zanahoria, calabaza y repollo. Servido con tortillas, cebolla, cilantro, limón y salsa macha."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DelMar"><strong>DelMar</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Camarones Envueltos"
                        Price={25}
                        Description="Camarones envueltos con tocino y con una cobertura de queso mozzarella. Acompañados con arroz y ensalada."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Camarones al Gusto"
                        Price={22}
                        Description="Camarones preparados al ajillo, mojo de ajo, a la diabla, a la mantequilla, al cilantro o mango habanero, acompañados con arroz y papas."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pulpo al Gusto"
                        Price={28}
                        Description="Pulpo preparado a tu gusto, ya sea al ajillo, mojo de ajo, a la diabla, a la mantequilla, al cilantro o mango habanero, acompañados con arroz, ensalada y papas."
                        ImagePath="/media/Pulpo.jpg"
                    />
                    <MenuItem 
                        Title="Caldo de Camarón"
                        Price={22}
                        Description="Camarón con zanahoria y papa. Acompañado de cilantro, cebolla, aguacate, limón y tostadas."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Ceviche de Camarón"
                        Price={17}
                        Description="Camarón, pepino, cebolla, tomate, cilantro, y jalapeño cocido por el jugo de limón."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="3 Tostadas de Camarón"
                        Price={23}
                        Description="Tortilla de maíz frita cubierta con mayonesa, camarón, cebolla, tomate, pepino, cilantro, aguacate y lechuga."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Coctel de Camarón"
                        Price={17}
                        Description="Camarones bañados en una salsa refrescante a base de cátsup, mezclados con cebolla, cilantro, y aguacate. Servido con saladitas y salsa valentina."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Sopa de Mariscos"
                        Price={25}
                        Description="Pulpo, pescado, camarón, surimi, almejas, callo de hacha. Servido con cebolla, cilantro, aguacate, limón y tostadas."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Vuelve a la Vida"
                        Price={25}
                        Description="Mezcla de mariscos: camarones, pulpo y ostión servidos más surimi con salsa coctelera de la casa, jugo de limón, aguacate, pepino, cebolla y cilantro."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="TacosQuesadillas"><strong>TacosQuesadillas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Al Pastor"
                        Price={4}
                        Description="Tacos originales mexicanos, carne marinada con la receta original de los auténticos taqueros mexicanos."
                        ImagePath="/media/AlPastor.jpg"
                    />
                    <MenuItem 
                        Title="Chorizo"
                        Price={4}
                        Description="Auténtico chorizo mexicano, marinado de manera exquisita para disfrutar su sabor perfecto."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Carnitas"
                        Price={4}
                        Description="Una fiesta mexicana de sabor en un taco con carnitas fritas en su propia manteca, creadas de manera tradicional."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Cueritos"
                        Price={4}
                        Description="El sabor en un taco con cueritos creados de manera tradicional, original de la cocina mexicana."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Bistec de Cerdo"
                        Price={4}
                        Description="Una mezcla exquisita de carne de cerdo en fajitas, asado a la plancha con cebolla juliana y especias que resaltan el sabor de la comida mexicana."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pollo"
                        Price={4.5}
                        Description="Tacos de pollo sazonado para quienes disfrutan el sabor tradicional."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Vegetariano"
                        Price={4.5}
                        Description="Taco vegetariano lleno de sabores frescos: frijoles, arroz, pico de gallo, lechuga, queso feta y crema, todo envuelto en una tortilla de maíz."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Carne Enchilada de res o de cerdo"
                        Price={5}
                        Description="Tacos de carne preparada con una mezcla de chiles que te harán sentir el sabor azteca."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Cochinita Pibil"
                        Price={5}
                        Description="Del sureste mexicano para Leamington. Carne de cerdo cocida con la receta original yucateca."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Carne Asada"
                        Price={5}
                        Description="Tacos de carne de res asada con exquisitas especias para lograr un toque fresco y jugoso al estilo mexicano."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Lengua o Cabeza"
                        Price={5}
                        Description="Tacos de lengua o cabeza de res finamente preparada para alcanzar una delicia con personalidad mexicana."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Supreme"
                        Price={6}
                        Description="Queso crema, lechuga, pico de gallo más proteína de su elección."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="¿Qué me ves?"
                        Price={7}
                        Description="Bistec de cerdo con papa, cebolla, jalapeños y aguacate. Servido en tres tortillas de largo al estilo de Tlaxcala."
                        ImagePath="/media/QueMeVes.jpg"
                    />
                    <MenuItem 
                        Title="Taco de Birria"
                        Price={6}
                        Description="Desde México para Canadá… carne de borrego con sabor indescriptible a notas de mariachi."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Gobernador"
                        Price={8}
                        Description="Tortilla de maíz acompañada de Camarones y una salsa preparada con tocino, pimientos, cebolla, queso y crema."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Quesabirria"
                        Price={8}
                        Description="Desde México para Canadá… Tortillas cubiertas de queso con carne de borrego y sabor indescriptible a notas de mariachi."
                        ImagePath="/media/Quesabirrias.jpg"
                    />
                    <MenuItem 
                        Title="Quesadilla de Cochinita Pibil"
                        Price={7}
                        Description="Rellena de cerdo marinado en achiote y queso. Un sabor tradicional y delicioso."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Quesadilla de Tinga de Pollo"
                        Price={6}
                        Description="Pollo desmenuzado en una salsa de jitomate y chipotle, servido en tortilla de maíz."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Quesadilla de Queso"
                        Price={5}
                        Description="Queso derretido en una tortilla de maíz. Una opción simple y deliciosa para los amantes del queso."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Extras"><strong>Extras</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Arroz"
                        Price={4}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Frijoles"
                        Price={4}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Chips"
                        Price={3}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pico de Gallo"
                        Price={5}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Papas"
                        Price={5}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Guacamole"
                        Price={12}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Tortillas (5 pzas)"
                        Price={2}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Chiles toreados (2 pzas)"
                        Price={2}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Nopal asado (2 pzas)"
                        Price={4}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Cebolla cambray (5 pzas)"
                        Price={3}
                        Description=""
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Postres"><strong>Postres</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Gelatina"
                        Price={3}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Gelatina Mosaico"
                        Price={5}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Duraznos con crema"
                        Price={5}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Fresas con crema"
                        Price={5}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Flan"
                        Price={6}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pan de Elote"
                        Price={7}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Arroz con Leche"
                        Price={5}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pan Vainilla"
                        Price={6}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pastel 3 Leches"
                        Price={7}
                        Description=""
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Bebidas"><strong>Bebidas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Agua Natural"
                        Price={1.5}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Agua de Sabor"
                        Price={3}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Soda en Lata"
                        Price={1.5}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Jugos"
                        Price={5}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Arizona"
                        Price={3}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Jarritos"
                        Price={3.5}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Sangría"
                        Price={3.5}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Café de Olla"
                        Price={3}
                        Description=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Café"
                        Price={2}
                        Description=""
                        // ImagePath=""
                    />
                </div>
            </div>
        </div>
    )
}