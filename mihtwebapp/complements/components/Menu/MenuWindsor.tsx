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
                        Title="Ensalada de la Casa"
                        TitleEng="House Salad"
                        Price={17}
                        Description="Lechuga, pico de gallo, aguacate, pechuga de pollo asada y vinagreta de cilantro de la casa."
                        DescriptionEng="Lettuce, pico de gallo, avocado, grilled chicken breast, and house dressing."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="SopasCaldos"><strong>Sopas y Caldos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Sopa Azteca"
                        TitleEng="Aztec Soup"
                        Price={13}
                        Description="Tiras de tortilla crujientes bañadas en caldillo de jitomate, chiles secos y especias mexicanas. Con queso, crema, aguacate, chicharrón, y hojuelas de chile pasilla."
                        DescriptionEng="Crispy tortilla strips deeped in a red broth made with tomatos, peppers and mexican spices. With cheese, sour cream, avocado, chicharron, and pasilla pepper flakes."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Consome de Birria."
                        TitleEng="Birria Broth."
                        Price={17}
                        Description="Consomé con carne de cordero, cebolla, cilantro, limón y tortillas."
                        DescriptionEng="Broth with lamb meat, onion, cilantro, lime, & tortillas."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="PlatosFuertes"><strong>Platos Fuertes</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Carne Asada"
                        TitleEng="Grilled Beef"
                        Price={23}
                        Description="Bistec de res con cebollas verdes, arroz, frijoles refritos, acompañado de ensalada."
                        DescriptionEng="Beef steak with green onions, rice, refried beans and salad on the side."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pechuga a la plancha"
                        TitleEng="Grilled Breast"
                        Price={23}
                        Description="Pechuga de pollo asada, acompañada de arroz, frijoles refritos y ensalada."
                        DescriptionEng="Grilled chicken breast, with rice, refried beans and salad on the side."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Rib Eye Steak 300 g"
                        TitleEng="Ryb Eye Steak 300 g"
                        Price={31}
                        Description="300 gramos con chile jalapeño, nopal, ccebollas verdes y papas de la casa."
                        DescriptionEng="300 grams with jalapeño pepper, nopal, green onions, house potato."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Rib Eye Steak 450 g"
                        TitleEng="Ryb Eye Steak 450 g"
                        Price={38}
                        Description="450 gramos con chile jalapeño, nopal, ccebollas verdes y papas de la casa."
                        DescriptionEng="450 grams with jalapeño pepper, nopal, green onions, house potato."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Carnitas"
                        TitleEng="Carnitas"
                        Price={22}
                        Description="Platillo tradicional mexicano elaborado con carne de cerdo sazonada y cocida a fuego lento. Servido con arroz, frijoles y ensalada."
                        DescriptionEng="A traditional Mexican dish made from seasoned and slow-cooked pork. Served with rice, beans, and salad."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Chilaquiles"
                        TitleEng="Chilaquiles"
                        Price={18}
                        Description="Chips cocinados en salsa roja o verde, cubiertos con carne de su elección, huevo frito, queso feta fresco, crema, y aguacate. Acompañado con frijoles."
                        DescriptionEng="Chips cooked in red or green sauce, topped with your choice of meat, fried egg, fresh feta cheese, sour cream, and avocado. Aside with lettuce and rice."
                        // ImagePath="Photo"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="DelMar"><strong>Del Mar</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                            Title="Pulpo al Gusto"
                            TitleEng="Octopus"
                            Price={30}
                            Description="Pulpo preparado a tu gusto, ya sea al ajillo, a la diabla, o al cilantro acompañados con arroz, ensalada, y tortillas."
                            DescriptionEng="Your choice of garlic, diabla, y ajillo(garlic, guajillo pepper), or coriander vinaigrette. Comes with rice, salad, and tortillas."
                            // ImagePath=""
                        />
                    <MenuItem 
                        Title="Camarones al Gusto"
                        TitleEng="Shrimp"
                        Price={25}
                        Description="Camarones preparados a tu gusto, ya sea al ajillo, a la diabla, mango habanero, o empanizado. Acompañados con arroz, ensalada, y tortillas."
                        DescriptionEng="Your choice of garlic, diabla, y ajillo (garlic, guajillo pepper), mango habanero, or breaded. Comes with rice, salad, and tortillas."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Coctel de Camarón"
                        TitleEng="Shrimp cocktail"
                        Price={17}
                        Description="Camarones bañados en una salsa refrescante a base de cátsup, mezclados con cebolla, cilantro, y aguacate. Servido con saladitas y salsa valentina."
                        DescriptionEng="Shrimp bathed in a refreshing ketchup-based sauce, mixed with onion, cilantro, and avocado. Served with saladitas and valentina sauce."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Enchiladas"><strong>Enchiladas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Verdes o Rojas"
                        TitleEng="Verdes o Rojas"
                        Price={19}
                        Description="Tortilla suave rellena de pollo cubierta con salsa roja o verde, con lechuga, queso fetta, crema, cebolla, cubierta con aguacate. Servido con arroz."
                        DescriptionEng="Soft tortilla filled with chiken covered with a red or green sauce, with lettuce, fetta cheese, sour cream, onion and topped with avocado. Served with rice on the side."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Suizas"
                        TitleEng="Swiss Enchiladas"
                        Price={21}
                        Description="Torillas suaves y rellenas de pollo, bañadas de salsa verde, crema y queso derretido."
                        DescriptionEng="Soft tortilla filled with chicken covered with green sauce, sour cream and melted cheese."
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Enfrijoladas"
                        TitleEng=""
                        Price={19}
                        Description="Torillas suaves y rellenas de carne de su elección cubierta con salsa de frijoles, cebolla, crema, y queso feta."
                        DescriptionEng="Soft tortilla filled with your choice of meat covered with beans sauce, onion, sour cream, and topped with feta cheese."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Tricolor"
                        TitleEng=""
                        Price={23}
                        Description="6 enchiladas en total rellenas de pollo. (2) cubiertas con salsa verde, (2) enchiladas suizas, y (2) enchiladas rojas."
                        DescriptionEng="A total of 6 chicken enchiladas; (2) covered with green sauce, (2) enchiladas suizas, and (2) red enchiladas."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Tacos"><strong>Tacos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Al Pastor"
                        TitleEng="Al Pastor"
                        Price={5}
                        Description="Cerdo marinado con la receta original de auténticos taqueros mexicanos. Cocinado en un asador vertical llamado “trompo”."
                        DescriptionEng="Pork marinated with the original recipe of authentic Mexican taqueros. Cooked on a vertical rotisserie called a “trompo”."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Chorizo"
                        TitleEng="Chorizo"
                        Price={5}
                        Description="Auténtico chorizo mexicano, marinado de manera exquisita para disfrutar su sabor perfecto."
                        DescriptionEng="Authentic Mexican chorizo, exquisitely marinated to savor its perfect flavor."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Carnitas"
                        TitleEng="Carnitas"
                        Price={5}
                        Description="Una fiesta mexicana de sabor en un taco con carnitas fritas en su propia manteca, creadas de manera tradicional."
                        DescriptionEng="A Mexican flavor party in a taco with fried pulled pork in their own lard, made in a traditional way."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Lengua"
                        TitleEng="Tongue"
                        Price={5.5}
                        Description="Tacos de lengua o cabeza de res finamente preparada para alcanzar una delicia con personalidad mexicana."
                        DescriptionEng="Tacos with finely prepared beef tongue for a delight with, Mexican personality."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Carne Asada"
                        TitleEng="Carne Asada (beef)"
                        Price={5.5}
                        Description="Tacos de carne de res asada con exquisitas especias para lograr un toque fresco y jugoso al estilo mexicano."
                        DescriptionEng="Tacos with grilled beef seasoned with exquisite spices to achieve a fresh and juicy touch."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pollo"
                        TitleEng="Chicken"
                        Price={5.5}
                        Description="Tacos de pollo sazonado para quienes disfrutan el sabor tradicional."
                        DescriptionEng="Seasoned chicken tacos for those who enjoy traditional flavor."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Cochinita Pibil"
                        TitleEng=""
                        Price={6}
                        Description="Del sureste mexicano para Windsor. Carne de cerdo cocida con la receta original yucateca."
                        DescriptionEng="From the Mexican southeast to Windsor, pork cooked with the original Yucatecan recipe."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Taco de Birria"
                        TitleEng="Birria Taco "
                        Price={6.5}
                        Description="Desde México para Canadá… carne de borrego con sabor indescriptible a notas de mariachi."
                        DescriptionEng="From Mexico to Windsor... lamb with an indescribable flavor!"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Quesabirria"
                        TitleEng="Quesabirria"
                        Price={8}
                        Description="Tortilla de maíz, carne de borrego, queso derretido, acompañado con caldo de birria."
                        DescriptionEng="Corn tortilla, lamb meat, melted cheese, with birria broth on the side."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Taco de Pescado"
                        TitleEng="Fish taco"
                        Price={6}
                        Description="Tortilla suave, pescado asado y mayonesa de chipotle."
                        DescriptionEng="Soft tortilla, grilled fish, and chipotle mayo."
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Taco gobernador"
                        TitleEng="Taco gobernador"
                        Price={8}
                        Description="Camarones, salsa cremosa hecha con pimientos, cebolla roja, tocino, queso, y crema."
                        DescriptionEng="Shrimp, creamy sauce made with bell peppers, red onion, bacon, sour cream, and cheese."
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Taco Vegetariano"
                        TitleEng="Veggie taco"
                        Price={4}
                        Description="Frijoles refritos, arroz, lechuga, queso, y crema."
                        DescriptionEng="Refried beans, rice, lettuce, cheese, and sour cream."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Antojitos"><strong>Antojitos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Gringa"
                        TitleEng="Gringas"
                        Price={17}
                        Description="Tortilla grande de harina, rellena de queso mozzarella, y la carne de su elección. Acompañado con ensalada."
                        DescriptionEng="Flour tortilla filled with cheese, your choice of meat, and salad on the side."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Flautas de pollo"
                        TitleEng="Chicken Flutes"
                        Price={18}
                        Description="4 tacos crujientes fritos con lechuga, queso fetta, crema, cebolla, aguacate, y papa."
                        DescriptionEng="4 crunchy deep fried taco with lettuce, fetta cheese, sour cream, onion, avocado, and potato."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Flautas de Papas"
                        TitleEng="Potato Flautas"
                        Price={13}
                        Description="4 tacos crujientes fritos con lechuga, queso fetta, crema, cebolla, aguacate, y papa."
                        DescriptionEng="4 crunchy deep fried taco with lettuce, fetta cheese, sour cream, onion, avocado, and potato."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Burrito"
                        TitleEng=""
                        Price={11}
                        Description="Tortilla de harina mediana con carne de su elección, frijoles refritos, arroz, y queso."
                        DescriptionEng="Medium flour tortilla wrap with your choice of meat, refried beans, rice, and cheese."
                        // ImagePath="Photo"
                    />
                    <MenuItem 
                        Title="Sope"
                        TitleEng="Sope"
                        Price={9}
                        Description="Base de masa hecha a mano con bordes gruesos, untanda con frijol, cubierta de salsa verde o roja. Con carne de su elección, lechuga, pico de gallo, aguacate, queso feta fresco, y crema."
                        DescriptionEng="Handmade masa base with thick edges, spread with beans, covered with green or red sauce. Your choice of meat, lettuce, pico de gallo, avocado, fresh feta cheese, and sour cream."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="AntojitosBarra"><strong>Antojitos de la Barra</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Nachos Calientes de Pollo o Asada/ o Mezclado"
                        TitleEng="Hot Nachos Chicken or Asada (beef)/or Mixed"
                        Price={9}
                        Description="Chips de tortilla calientes cubiertos con queso mozzarella, queso amarillo, su carne de elección, jalapeños y pico de gallo."
                        DescriptionEng="Hot tortilla chips topped with mozzarella cheese, yellow cheese, your choice of meat, jalapenos, and pico de gallo."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Papas Supreme medianas"
                        TitleEng="Fries supreme medium"
                        Price={12}
                        Description="Papas fritas al momento, queso amarillo derretido, chorizo, lechuga, pico de gallo, crema, y queso feta fresco."
                        DescriptionEng="Fresh french fries, with melted yellow cheese, chorizo, lettuce, pico de gallo, sour cream, and fresh feta cheese."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Mini Flautas"
                        TitleEng="Flutes Mini"
                        Price={9}
                        Description="Tacos pequeño frito de papa, y pollo. Acompañado con aderezo de la casa."
                        DescriptionEng="Small fried potato and chicken tacos, with house dipping sauce."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Tostadas"
                        TitleEng=""
                        Price={7}
                        Description="Tortilla de maíz frita con frijoles, lechuga, aguacate, tomate, crema, y carne de su elección."
                        DescriptionEng="Fried corn tortilla dressed with beans, lettuce, avocado, tomato, sour cream, and your choice of meat."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Postres"><strong>Postres</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title="Helado de aguacate/vainilla."
                        TitleEng="Avocado/Vanilla  Icecream"
                        Price={10}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pastel de chocolate con helado de vainilla."
                        TitleEng="Chocolate cake with  vanilla icecream1"
                        Price={9}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title="Pastel de queso."
                        TitleEng="Cheese cake"
                        Price={9}
                        Description=""
                        DescriptionEng=""
                        // ImagePath=""
                    />
                </div>
            </div>
        </div>
    )

}