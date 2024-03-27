import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";

export default function Menu(){
    return(
        <div className={styles.Menu}>
            <div className={styles.MenuSectionsContainer}>
                <div className={styles.Sections}>
                    <a className={styles.SectionLink} href="#Ensaladas">Ensaladas</a>
                    <a className={styles.SectionLink} href="#SopasCaldos">Sopas y Caldos</a>
                    <a className={styles.SectionLink} href="#PlatosFuertes">Platos Fuertes</a>
                    <a className={styles.SectionLink} href="#DelMar">Del Mar</a>
                    <a className={styles.SectionLink} href="#Enchiladas">Enchiladas</a>
                    <a className={styles.SectionLink} href="#Tacos">Tacos</a>
                    <a className={styles.SectionLink} href="#Antojitos">Antojitos</a>
                    <a className={styles.SectionLink} href="#AntojitosBarra">Antojitos de la Barra</a>
                    <a className={styles.SectionLink} href="#Postres">Postres</a>
                </div>
            </div>
            <div className={styles.MenuElements}>
                <p className={styles.SectionMenuTitle} id="Ensaladas"><strong>Ensaladas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title2="Ensalada de la Casa"
                        Title1="House Salad"
                        Price={17}
                        Description2="Lechuga, pico de gallo, aguacate, pechuga de pollo asada y vinagreta de cilantro de la casa."
                        Description1="Lettuce, pico de gallo, avocado, grilled chicken breast, and house dressing."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="SopasCaldos"><strong>Sopas y Caldos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title2="Sopa Azteca"
                        Title1="Aztec Soup"
                        Price={13}
                        Description2="Tiras de tortilla crujientes bañadas en caldillo de jitomate, chiles secos y especias mexicanas. Con queso, crema, aguacate, chicharrón, y hojuelas de chile pasilla."
                        Description1="Crispy tortilla strips deeped in a red broth made with tomatos, peppers and mexican spices. With cheese, sour cream, avocado, chicharron, and pasilla pepper flakes."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Consome de Birria."
                        Title1="Birria Broth."
                        Price={17}
                        Description2="Consomé con carne de cordero, cebolla, cilantro, limón y tortillas."
                        Description1="Broth with lamb meat, onion, cilantro, lime, & tortillas."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="PlatosFuertes"><strong>Platos Fuertes</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title2="Carne Asada"
                        Title1="Grilled Beef"
                        Price={23}
                        Description2="Bistec de res con cebollas verdes, arroz, frijoles refritos, acompañado de ensalada."
                        Description1="Beef steak with green onions, rice, refried beans and salad on the side."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Pechuga a la plancha"
                        Title1="Grilled Breast"
                        Price={23}
                        Description2="Pechuga de pollo asada, acompañada de arroz, frijoles refritos y ensalada."
                        Description1="Grilled chicken breast, with rice, refried beans and salad on the side."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Rib Eye Steak 300 g"
                        Title1="Rib Eye Steak 300 g"
                        Price={31}
                        Description2="300 gramos con chile jalapeño, nopal, ccebollas verdes y papas de la casa."
                        Description1="300 grams with jalapeño pepper, nopal, green onions, house potato."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Rib Eye Steak 450 g"
                        Title1="Rib Eye Steak 450 g"
                        Price={38}
                        Description2="450 gramos con chile jalapeño, nopal, ccebollas verdes y papas de la casa."
                        Description1="450 grams with jalapeño pepper, nopal, green onions, house potato."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Carnitas"
                        Title1="Carnitas"
                        Price={22}
                        Description2="Platillo tradicional mexicano elaborado con carne de cerdo sazonada y cocida a fuego lento. Servido con arroz, frijoles y ensalada."
                        Description1="A traditional Mexican dish made from seasoned and slow-cooked pork. Served with rice, beans, and salad."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Chilaquiles"
                        Title1="Chilaquiles"
                        Price={18}
                        Description2="Chips cocinados en salsa roja o verde, cubiertos con carne de su elección, huevo frito, queso feta fresco, crema, y aguacate. Acompañado con frijoles."
                        Description1="Chips cooked in red or green sauce, topped with your choice of meat, fried egg, fresh feta cheese, sour cream, and avocado. Aside with lettuce and rice."
                        // ImagePath="Photo"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DelMar"><strong>Del Mar</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title2="Pulpo al Gusto"
                        Title1="Octopus"
                        Price={30}
                        Description2="Pulpo preparado a tu gusto, ya sea al ajillo, a la diabla, o al cilantro acompañados con arroz, ensalada, y tortillas."
                        Description1="Your choice of garlic, diabla, y ajillo(garlic, guajillo pepper), or coriander vinaigrette. Comes with rice, salad, and tortillas."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Camarones al Gusto"
                        Title1="Shrimp"
                        Price={25}
                        Description2="Camarones preparados a tu gusto, ya sea al ajillo, a la diabla, mango habanero, o empanizado. Acompañados con arroz, ensalada, y tortillas."
                        Description1="Your choice of garlic, diabla, y ajillo (garlic, guajillo pepper), mango habanero, or breaded. Comes with rice, salad, and tortillas."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Coctel de Camarón"
                        Title1="Shrimp cocktail"
                        Price={17}
                        Description2="Camarones bañados en una salsa refrescante a base de cátsup, mezclados con cebolla, cilantro, y aguacate. Servido con saladitas y salsa valentina."
                        Description1="Shrimp bathed in a refreshing ketchup-based sauce, mixed with onion, cilantro, and avocado. Served with saladitas and valentina sauce."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Enchiladas"><strong>Enchiladas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title2="Enchiladas Verdes o Rojas"
                        Title1="Green or Red Enchiladas"
                        Price={19}
                        Description2="Tortilla suave rellena de pollo cubierta con salsa roja o verde, con lechuga, queso fetta, crema, cebolla, cubierta con aguacate. Servido con arroz."
                        Description1="Soft tortilla filled with chiken covered with a red or green sauce, with lettuce, fetta cheese, sour cream, onion and topped with avocado. Served with rice on the side."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Enchiladas Suizas"
                        Title1="Swiss Enchiladas"
                        Price={21}
                        Description2="Torillas suaves y rellenas de pollo, bañadas de salsa verde, crema y queso derretido."
                        Description1="Soft tortilla filled with chicken covered with green sauce, sour cream and melted cheese."
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        Title2="Enfrijoladas"
                        Title1=""
                        Price={19}
                        Description2="Torillas suaves y rellenas de carne de su elección cubierta con salsa de frijoles, cebolla, crema, y queso feta."
                        Description1="Soft tortilla filled with your choice of meat covered with beans sauce, onion, sour cream, and topped with feta cheese."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Enchiladas Tricolor"
                        Title1="Tricolor Enchiladas"
                        Price={23}
                        Description2="6 enchiladas en total rellenas de pollo. (2) cubiertas con salsa verde, (2) enchiladas suizas, y (2) enchiladas rojas."
                        Description1="A total of 6 chicken enchiladas; (2) covered with green sauce, (2) enchiladas suizas, and (2) red enchiladas."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Tacos"><strong>Tacos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title2="Al Pastor"
                        Title1="Al Pastor"
                        Price={5}
                        Description2="Cerdo marinado con la receta original de auténticos taqueros mexicanos. Cocinado en un asador vertical llamado “trompo”."
                        Description1="Pork marinated with the original recipe of authentic Mexican taqueros. Cooked on a vertical rotisserie called a “trompo”."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Chorizo"
                        Title1="Chorizo"
                        Price={5}
                        Description2="Auténtico chorizo mexicano, marinado de manera exquisita para disfrutar su sabor perfecto."
                        Description1="Authentic Mexican chorizo, exquisitely marinated to savor its perfect flavor."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Carnitas"
                        Title1="Puller Pork"
                        Price={5}
                        Description2="Una fiesta mexicana de sabor en un taco con carnitas fritas en su propia manteca, creadas de manera tradicional."
                        Description1="A Mexican flavor party in a taco with fried pulled pork in their own lard, made in a traditional way."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Lengua"
                        Title1="Tongue"
                        Price={5.5}
                        Description2="Tacos de lengua o cabeza de res finamente preparada para alcanzar una delicia con personalidad mexicana."
                        Description1="Tacos with finely prepared beef tongue for a delight with, Mexican personality."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Carne Asada"
                        Title1="Carne Asada (beef)"
                        Price={5.5}
                        Description2="Tacos de carne de res asada con exquisitas especias para lograr un toque fresco y jugoso al estilo mexicano."
                        Description1="Tacos with grilled beef seasoned with exquisite spices to achieve a fresh and juicy touch."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Pollo"
                        Title1="Chicken"
                        Price={5.5}
                        Description2="Tacos de pollo sazonado para quienes disfrutan el sabor tradicional."
                        Description1="Seasoned chicken tacos for those who enjoy traditional flavor."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Cochinita Pibil"
                        Title1=""
                        Price={6}
                        Description2="Del sureste mexicano para Windsor. Carne de cerdo cocida con la receta original yucateca."
                        Description1="From the Mexican southeast to Windsor, pork cooked with the original Yucatecan recipe."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Taco de Birria"
                        Title1="Birria Taco "
                        Price={6.5}
                        Description2="Desde México para Canadá… carne de borrego con sabor indescriptible a notas de mariachi."
                        Description1="From Mexico to Windsor... lamb with an indescribable flavor!"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Quesabirria"
                        Title1="Quesabirria"
                        Price={8}
                        Description2="Tortilla de maíz, carne de borrego, queso derretido, acompañado con caldo de birria."
                        Description1="Corn tortilla, lamb meat, melted cheese, with birria broth on the side."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Taco de Pescado"
                        Title1="Fish taco"
                        Price={6}
                        Description2="Tortilla suave, pescado asado y mayonesa de chipotle."
                        Description1="Soft tortilla, grilled fish, and chipotle mayo."
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        Title2="Taco gobernador"
                        Title1="Governor Taco"
                        Price={8}
                        Description2="Camarones, salsa cremosa hecha con pimientos, cebolla roja, tocino, queso, y crema."
                        Description1="Shrimp, creamy sauce made with bell peppers, red onion, bacon, sour cream, and cheese."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Taco%20Gobernador_350x350.webp?alt=media&token=ea68e358-54af-4c9f-94f0-ddcb8208aab2Photo"
                    />
                    <MenuItem 
                        Title2="Taco Vegetariano"
                        Title1="Veggie taco"
                        Price={4}
                        Description2="Frijoles refritos, arroz, lechuga, queso, y crema."
                        Description1="Refried beans, rice, lettuce, cheese, and sour cream."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Antojitos"><strong>Antojitos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title2="Gringa"
                        Title1="Gringas"
                        Price={17}
                        Description2="Tortilla grande de harina, rellena de queso mozzarella, y la carne de su elección. Acompañado con ensalada."
                        Description1="Flour tortilla filled with cheese, your choice of meat, and salad on the side."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Flautas de pollo"
                        Title1="Chicken Flutes"
                        Price={18}
                        Description2="4 tacos crujientes fritos con lechuga, queso fetta, crema, cebolla, aguacate, y papa."
                        Description1="4 crunchy deep fried taco with lettuce, fetta cheese, sour cream, onion, avocado, and potato."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Flautas de Papas"
                        Title1="Potato Flautas"
                        Price={13}
                        Description2="4 tacos crujientes fritos con lechuga, queso fetta, crema, cebolla, aguacate, y papa."
                        Description1="4 crunchy deep fried taco with lettuce, fetta cheese, sour cream, onion, avocado, and potato."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Burrito"
                        Title1=""
                        Price={11}
                        Description2="Tortilla de harina mediana con carne de su elección, frijoles refritos, arroz, y queso."
                        Description1="Medium flour tortilla wrap with your choice of meat, refried beans, rice, and cheese."
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        Title2="Sope"
                        Title1="Sope"
                        Price={9}
                        Description2="Base de masa hecha a mano con bordes gruesos, untanda con frijol, cubierta de salsa verde o roja. Con carne de su elección, lechuga, pico de gallo, aguacate, queso feta fresco, y crema."
                        Description1="Handmade masa base with thick edges, spread with beans, covered with green or red sauce. Your choice of meat, lettuce, pico de gallo, avocado, fresh feta cheese, and sour cream."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="AntojitosBarra"><strong>Antojitos de la Barra</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title2="Nachos Calientes de Pollo o Asada o Mezclado"
                        Title1="Hot Nachos Chicken or Asada (beef) or Mixed"
                        Price={9}
                        Description2="Chips de tortilla calientes cubiertos con queso mozzarella, queso amarillo, su carne de elección, jalapeños y pico de gallo."
                        Description1="Hot tortilla chips topped with mozzarella cheese, yellow cheese, your choice of meat, jalapenos, and pico de gallo."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Papas Supreme medianas"
                        Title1="Fries supreme medium"
                        Price={12}
                        Description2="Papas fritas al momento, queso amarillo derretido, chorizo, lechuga, pico de gallo, crema, y queso feta fresco."
                        Description1="Fresh french fries, with melted yellow cheese, chorizo, lettuce, pico de gallo, sour cream, and fresh feta cheese."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Mini Flautas"
                        Title1="Flutes Mini"
                        Price={9}
                        Description2="Tacos pequeño frito de papa, y pollo. Acompañado con aderezo de la casa."
                        Description1="Small fried potato and chicken tacos, with house dipping sauce."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Tostadas"
                        Title1=""
                        Price={7}
                        Description2="Tortilla de maíz frita con frijoles, lechuga, aguacate, tomate, crema, y carne de su elección."
                        Description1="Fried corn tortilla dressed with beans, lettuce, avocado, tomato, sour cream, and your choice of meat."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Postres"><strong>Postres</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title2="Helado de aguacate/vainilla."
                        Title1="Avocado/Vanilla Icecream"
                        Price={10}
                        Description2=""
                        Description1=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Pastel de chocolate con helado de vainilla."
                        Title1="Chocolate cake with vanilla icecream"
                        Price={9}
                        Description2=""
                        Description1=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title2="Pastel de queso."
                        Title1="Cheese cake"
                        Price={9}
                        Description2=""
                        Description1=""
                        // ImagePath=""
                    />
                </div>
            </div>
        </div>
    )

}