import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";

export default function Menu(){
    return(
        <div className={styles.Menu}>
            <div className={styles.MenuSectionsContainer}>
                <div className={styles.Sections}>
                    <a className={styles.SectionLink} href="#Entrees/Entradas">Entrees / Entradas</a>
                    <a className={styles.SectionLink} href="#Eggsyourway/Huevo">Eggs your way / Huevos</a>
                    <a className={styles.SectionLink} href="#SpecialDishes/DesayunosEspeciales">Special Dishes / Desayunos Especiales</a>
                    <a className={styles.SectionLink} href="#Cravings/AntojitosBreakfast">Cravings / Antojitos</a>
                    <a className={styles.SectionLink} href="#Soups/Caldo">Soups / Caldos</a>
                </div>
            </div>
            <div className={styles.MenuElements}>
                <p className={styles.SectionMenuTitle} id="Entrees/Entradas"><strong>Entrees / Entradas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Coctel de Fruta"
                        Title2="Fruit Bowl"
                        Price={11}
                        Description1="Servido con granola y acompañado de tu elección de yogurt o queso cottage."
                        Description2="Served with granola and complemented by your choice of yogurt or cottage cheese."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Coctel%20de%20Frutas_350x350.webp?alt=media&token=1fc33f5d-a956-46b5-acf1-fdce2184d5ef"
                    />
                    <MenuItem 
                        Title1="Guacamole"
                        Title2=""
                        Price={12}
                        Description1="Aguacate machacado y mezclado con jitomate, cebolla, cilantro, jugo de limón y sal. Servido con sus debidos totopos de maíz autenticos de la casa."
                        Description2="Mashed avocado mixed with tomato, onion, cilantro, lemon juice, and salt. Served with signature homemade corn chips"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Guacamole_350x350.webp?alt=media&token=0b457545-e864-4d0f-b418-78ee7a451567"
                    />
                    <MenuItem 
                        Title1="Pan Dulce"
                        Title2="Sweet Bread"
                        Price={3}
                        Description1="Autentico y tradicional pan dulce Mexicano, para que te sientas en casa."
                        Description2="Authentic and traditional Mexican sweet bread, so you feel at home."
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Eggsyourway/Huevo"><strong>Eggs your way / Huevos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Huevos Estrellados"
                        Title2="Classic Eggs"
                        Price={11}
                        Description1="2 huevos preparados a tu gusto. Acompañados de tus guarniciones favoritas."
                        Description2="2 eggs cooked your way. Accompanied by your favourite sides."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Revueltos"
                        Title2="Omelette or Scrambled"
                        Price={13}
                        Description1="3 huevos combinados con tu elección de tus ingredientes favoritos: cebolla blanca, cebolla morada, cilantro, tomate, ajo, espinaca, champiñones, jalapeños, queso mozzarela, queso feta, salsa roja o salsa verde. Acompañados de tus guarniciones favoritas."
                        Description2="3 eggs combined with your selection from your favourite ingredients: White onion, red onion, cilantro, tomato, garlic, spinach, mushrooms, jalapenos, mozzarella cheese, feta cheese, red sauce or green sauce. Served with your favourite sides."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Clasicos Mexicanos"
                        Title2="Classic Mexican Style"
                        Price={14}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="SpecialDishes/DesayunosEspeciales"><strong>Special Dishes / Desayunos Especiales</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Enfrijoladas Tlacotalpeñas"
                        Title2=""
                        Price={14}
                        Description1="4 tortillas de maíz rellenas de queso bañadas con salsa de frijol. Servidas con queso feta, chiles toreados y tu opcion de proteina: chorizo, pastor o pollo. Asada disponible por un costo adicional."
                        Description2="4 corn tortillas stuffed with cheese dipped in homemade bean sauce. Served with feta cheese, chiles toreados (grilled jalapeños) and your choice of protein: chorizo, pastor or chicken. * Asada beef is available for an additional cost."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Enfrijoladas%20Tlacotalpe%C3%B1as_350x350.webp?alt=media&token=074b9c6b-cb4e-4c5b-aa37-09d6852bf08e"
                    />
                    <MenuItem 
                        Title1="Chilaquiles"
                        Title2=""
                        Price={15}
                        Description1="Tortilla de maiz frita bañada en la salsa de tu eleccion verde o roja, servidos con cebolla fresca, tu proteina favorita, crema, queso y aguacate."
                        Description2="Fried corn tortilla simmered in the sauce of your choice, either red or green sauce, topped with freshly chopped onions, your favourite protein, sour cream, feta cheese and avocado."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Chilaquiles_350x350.webp?alt=media&token=91c18eb4-998b-4f11-98f4-65378d86b4a8"
                    />
                    <MenuItem 
                        Title1="Enchiladas Verdes o Rojas"
                        Title2="Green or Red Enchiladas"
                        Price={18}
                        Description1="Suaves ortillas de maíz rellenas de huevo, pollo o queso. Bañadas en la salsa de tu elección y vestidas con cebolla fresca, crema y queso."
                        Description2="Soft corn tortillas filled with egg, chicken, or cheese, bathed in the sauce of your choice, red or green, and topped with freshly chopped onions, sour cream, and cheese."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Enchiladas%20verdes_350x350.webp?alt=media&token=3b5e7e48-9a01-4b53-977a-2252311b7061"
                    />
                    <MenuItem 
                        Title1="Enchiladas Suizas"
                        Title2="Swiss Enchiladas"
                        Price={19}
                        Description1="Suaves tortillas de maíz rellenas de pollo, bañada en salsa de jitomate, gratinadas con queso y adornadas con cebolla y crema."
                        Description2="Soft corn tortillas filled with chicken, bathed in tomato sauce, gratinated with cheese and topped with freshly chopped onions and sour cream."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Burrito Street Food"
                        Title2="Cheesy Street Food Burrito"
                        Price={16}
                        Description1="Una de las firmas de nuestra cocina. Tortilla grande de harina, rellena de queso mozzarella, lechuga, aguacate, adereso de la casa y la carne de tu elección: carne al pastor, chorizo, pollo o asada. * Embuelto en una costra de queso!"
                        Description2="One of our kitchen’s signatures! A large flour tortilla filled with mozzarella cheese, lettuce, avocado and your choice of protein: al pastor, chorizo, chicken, asada beef, cochinita, lengua, carnitas. * Wrapped in a cheese crust."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Burrito Clasico"
                        Title2="Classic Burrito"
                        Price={15}
                        Description1="Arroz, frijol, pico de gallo, queso mozzarella, lechuga y carne de tu elección: al pastor, chorizo, pollo, asada, cochinita, lengua, carnitas o aguacate. Envuelto en una deliciosa tortilla de harina y dorado directamente a la plancha."
                        Description2="Rice, beans, pico de gallo, mozzarella cheese, lettuce and your choice of protein: al pastor, chorizo, chicken, asada beef, cochinita, beef tongue, carnitas or avocado. Wrapped in a delicious flour tortilla and perfected on the grill."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Gringa"
                        Title2=""
                        Price={15}
                        Description1="Tortilla grande de harina, rellena de queso mozzarella y la carne de tu elección: al pastor, chorizo, pollo, asada, cochinita, lengua, carnitas o aguacate. Servida con ensalada"
                        Description2="A large flour tortilla is filled with mozzarella cheese and the meat you choose: al pastor, chorizo, chicken, asada beef, cochinita, beef tongue, carnitas, or avocado. It is served with lettuce and pico de gallo"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Club Sandwich"
                        Title2=""
                        Price={17}
                        Description1="El clasico sandwich de pan blanco de caja embadurnado con mayonesa, vestido con lechuga, tomate, jamón, tocino y pollo a la plancha. Servido con una guarnicion de frescas papas a la francesa."
                        Description2="White bread with mayonnaise topped with fresh lettuce, tomato, ham, bacon and grilled chicken covered by another piece of white bread. Served with a side of French fries"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Club%20sandwich_350x350.webp?alt=media&token=e4915b3d-1179-4122-9bd7-70742f713ffb"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Cravings/AntojitosBreakfast"><strong>Cravings / Antojitos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Empanadas"
                        Title2=""
                        Price={14}
                        Description1="Masa de maiz hecha en casa rellena de tu proteina favorita, fritas y adornadas con lechuga, crema, queso, pico de gallo y aguacate"
                        Description2="Handmade corn dough patties filled with your favourite protein and topped with lettuce, sour cream, feta cheese, pico de gallo and avocado"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Gorditas"
                        Title2=""
                        Price={14}
                        Description1="Masa de maiz hecha en casa rellena de tu proteina favorita, fritas y adornadas con lechuga, crema, queso, pico de gallo y aguacate"
                        Description2="Handmade corn dough tortillas filled with your favourite protein topped with lettuce, sour cream, feta cheese, pico de gallo and avocado"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Doraditas"
                        Title2=""
                        Price={14}
                        Description1="Tacos dorados rellenos de papa y chorizo y adornados con lechuga, crema, queso, pico de gallo y aguacate"
                        Description2="Hardshell corn tortilla taco is filled with homemade potato and chorizo filling and topped with lettuce, sour cream, feta cheese, pico de gallo and avocado"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Doraditas_350x350.webp?alt=media&token=677802fb-2e2c-452c-b902-dd1fa83a2693"
                    />
                    <MenuItem 
                        Title1="Flutes"
                        Title2="Flautas"
                        Price={14}
                        Description1="Tacos dorados enrollados y rellenos de pollo o papa. Adornados con lechuga, crema, queso, pico de gallo y aguacate"
                        Description2="Classic corn tortillas filled with chicken or potatoes are rolled up, deep-fried, and topped with lettuce, sour cream, feta cheese, pico de gallo, and avocado"
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Soups/Caldo"><strong>Soups / Caldo</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Mole de Olla"
                        Title2=""
                        Price={18}
                        Description1="Caldo preparado de una mezcla de chiles, carne y verduras (zanahoria, elote, papa, ejote). Servido con cebolla, cilantro, limon y tortillas de maíz"
                        Description2="Authentically homemade beef broth made with a mixture of different chiles, beef and vegetables (carrots, corn, potatoes, green beans). Served with cilantro, onion, limes and tortillas"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Menudo o Mondongo"
                        Title2="Beef Tripe Stew"
                        Price={18}
                        Description1="Caldo ligero preparado de chile guajillo y menudo. Servido con cebolla, cilantro, limon, tortillas de maíz y  salsa matcha"
                        Description2="Light guajillo chile broth and beef tripe. Served with cilantro, onion, limes, tortillas and matcha sauce"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/HotTacosStreetFood_Menudo_350x350.webp?alt=media&token=d836d1f2-2df8-4fc6-b8fe-464bb74c4d4e"
                    />
                </div>
            </div>
        </div>
    )
}