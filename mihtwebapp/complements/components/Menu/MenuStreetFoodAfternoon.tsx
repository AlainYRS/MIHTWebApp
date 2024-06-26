import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";

export default function Menu(){
    return(
        <div className={styles.Menu}>
            <div className={styles.MenuSectionsContainer}>
                <div className={styles.Sections}>
                    <a className={styles.SectionLink} href="#Tortas">Tortas</a>
                    <a className={styles.SectionLink} href="#HouseSpecialties/EspecialidaddelaCasa">House Specialties / Especialidad de la Casa</a>
                    <a className={styles.SectionLink} href="#Cravings/Antojitos">Cravings / Antojitos</a>
                    <a className={styles.SectionLink} href="#Tacos">Tacos</a>
                    <a className={styles.SectionLink} href="#Hamburguers/Hamburguesas">Hamburguers / Hamburguesas</a>
                    <a className={styles.SectionLink} href="#HotDogs">Hot Dogs</a>
                    <a className={styles.SectionLink} href="#FriesNachos/PapasNachos">Fries & Nachos / Papas & Nachos</a>
                    <a className={styles.SectionLink} href="#Burritos">Burritos</a>
                </div>
            </div>
            <div className={styles.MenuElements}>
                <p className={styles.SectionMenuTitle} id="Tortas"><strong>Tortas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="La Clasica"
                        Title2="Torta The Classic"
                        Price={15}
                        Description1="Preparada con una fresca telera vestida con frijol, tu carne favorita adornada con queso mozzarella, pico de gallo, lechuga y aguacate. Servida con una porción de papas fritas ."
                        Description2="Prepared with a fresh telera dressed with beans, your favourite meat is garnished with mozzarella cheese, pico de gallo, lettuce, and avocado. Served with a portion of fries."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="La Cubana"
                        Title2="Torta The Cuban"
                        Price={20}
                        Description1="Clasica telera con un toque de mayonesa y rellena de jamon, salchicha, milanesa, chorizo, huevo, lechuga, tomate, aguacate y queso mozzarella"
                        Description2="A classic telera with a touch of mayonnaise stuffed with ham, sausage, pork milanesa, chorizo, a fried egg, lettuce, tomato, avocado, and mozzarella cheese"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/HotTacosStreetFood_Torta%20cubana_350x350.webp?alt=media&token=8dd39b35-1928-4e63-987c-6e0d6eb973fb"
                    />
                    <MenuItem 
                        Title1="Pambazo"
                        Title2=""
                        Price={15}
                        Description1="Pambazo rojo relleno de papa con chorizo, lechuga, crema, queso feta, aguacate y servido con una porción de papas fritas"
                        Description2="Red pambazo stuffed with potato & chorizo, lettuce, cream, feta cheese, and avocado. Served with a portion of French fries"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/HotTacosStreetFood_Pambazo_350x350.webp?alt=media&token=289f4ef3-38ff-4ff6-9b57-de7334376902"
                    />
                    <MenuItem 
                        Title1="Pambazo Veracruzano"
                        Title2="Veracruz Pambazo"
                        Price={14}
                        Description1="El clasico pambazo autentico veracruzano. Una telera rellena de carne polaca, servido con una porción de papas fritas"
                        Description2="The classic authentic Veracruz pambazo is a telera stuffed with “polaca meat,” a mixture of chicken and cabbage with a homemade sauce. It is served with a portion of French fries"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Torta Ahogada"
                        Title2="Drowned Torta"
                        Price={18}
                        Description1="Auntentica representacion de Guadalaraja, una telera bañada en salsa de la casa y rellena de la carne de tu gusto adornada con cebolla curtida. Servida con una porción de papas fritas"
                        Description2="An authentic representation of Guadalaraja, this telera is drenched in house sauce and stuffed with the meat of your choice, garnished with cured onion. It is served with a portion of fries"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Torta%20ahogada%20drawned%20torta-2_350x350.webp?alt=media&token=2da22dc6-21e3-4496-a73b-625d70ffed38"
                    />
                    <MenuItem 
                        Title1="Torta Milanesa"
                        Title2=""
                        Price={18}
                        Description1="Una fresca telera untada de frijol refrito y mayonesa, rellena con milanesa de cerdo casera, lechuga, tomate y aguacate. Servida con una porción de papas fritas"
                        Description2="A fresh telera spread with refried beans and mayonnaise, filled with homemade pork milanesa, lettuce, tomato and avocado. Served with a portion of fries"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Torta El Chavo"
                        Title2=""
                        Price={15}
                        Description1="La torta favorita del chavo del 8. Una fresca telera untada de mayonesa rellena de queso y jamon adornada con lechuga, tomate y aguacate. Servida con una porción de papas fritas"
                        Description2="A fresh telera spread with mayonnaise filled with cheese and ham decorated with lettuce, tomato and avocado. Served with a portion of fries. The favourite torta of “El Chavo Del 8”, the main character of an iconic Mexican TV show"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Torta Chilaquil"
                        Title2=""
                        Price={18}
                        Description1="Unos clasicos chilaquiles envueltos por una fresca telera untada de frijol, chips de tortilla de maíz bañados en salsa de tu gusto verde o roja, cubiertos con proteina de tu gusto, cebolla, crema y queso feta"
                        Description2="Some classic chilaquiles wrapped in a fresh telera. A classic telera spread with refried beans and filled with corn tortilla chips bathed in a green or red sauce of your choice, covered with the protein of your choice, onion, cream and feta cheese"
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="HouseSpecialties/EspecialidaddelaCasa"><strong>House Specialties / Especialidad de la Casa</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Alambre Hot Tacos Street Food"
                        Title2=""
                        Price={25}
                        Description1="Carne asada, pastor, chorizo, jamón, chile morrón y cebolla, gratinado con una deliciosa capa de queso. Servido con tortillas"
                        Description2="Carne asada, pastor, chorizo, ham, bell pepper, and onion are topped with a delicious layer of cheese. Served with tortillas"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Alambre%20a%20la%20street%20food_350x350.webp?alt=media&token=f1cd6646-3d05-4044-be57-8e878097ac51"
                    />
                    <MenuItem 
                        Title1="Alambre Tradicional"
                        Title2=""
                        Price={25}
                        Description1="Carne asada, tocino, jamón, chile morrón y cebolla, gratinado con una deliciosa capa de queso. Servido con tortillas"
                        Description2="Carne asada, bacon, ham, bell pepper, and onion are topped with a delicious layer of cheese. Served with tortillas"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Alambre Al Pastor"
                        Title2=""
                        Price={25}
                        Description1="Carne de pastor, piña, jamón, chile morrón y cebolla, gratinado con una deliciosa capa de queso. Servido con tortillas"
                        Description2="Pastor meat, pineapple, ham, bell pepper, and onion are topped with a delicious layer of cheese. Served with tortillas"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Alambre Hawaiano"
                        Title2=""
                        Price={25}
                        Description1="Chuleta ahumada, piña, jamón, chile morrón y cebolla, gratinado con una deliciosa capa de queso. Servido con tortillas"
                        Description2="Smoked pork chop, pineapple, ham, bell pepper, and onion are topped with a delicious layer of cheese. Served with tortillas"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Alambre Vegetariano"
                        Title2=""
                        Price={23}
                        Description1="Champiõnes, tomate, aguacate, piña, chile morrón y cebolla, gratinado con una deliciosa capa de queso. Servido con tortillas"
                        Description2="Mushroom, tomato, avocado, pineapple, bell pepper, and onion are topped with a delicious layer of cheese. Served with tortillas"
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Cravings/Antojitos"><strong>Cravings / Antojitos</strong></p>
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
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Flutes"
                        Title2="Flautas"
                        Price={14}
                        Description1="Tacos dorados enrollados y rellenos de pollo o papa. Adornados con lechuga, crema, queso, pico de gallo y aguacate"
                        Description2="Classic corn tortillas filled with chicken or potatoes are rolled up, deep-fried, and topped with lettuce, sour cream, feta cheese, pico de gallo, and avocado"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Tostilocos"
                        Title2=""
                        Price={14}
                        Description1="Botana que encanta. Tostitos con queso cheddar, jalapeños en vinagre, cacahuates japoneses, granos de elote y chorizo. Bañados con valentina"
                        Description2="A snack that everyone loves. Tostitos with cheddar cheese, pickled jalapeños, Japanese peanuts, corn and chorizo. Bathed with valentina sauce"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Dorilocos"
                        Title2=""
                        Price={11}
                        Description1="Clasico antojito callejero. Doritos de queso, jicama, pepino, zanahoria rallada, cacahuates japoneses, cueritos, chamoy, miguelito y jugo de limon"
                        Description2="Classic Mexican street snack. Cheese Doritos, jicama, cucumber, grated carrot, Japanese peanuts, cueritos, chamoy, miguelito and lime juice"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Prepared Chicharron"
                        Title2="Chicharron Preparado"
                        Price={14}
                        Description1="Chicharron grande untado de mayonesa y adornado con lechuga, cueritos, tomate, pepino y rebanadas de aguacate. Bañado en salda valentina, crema y queso"
                        Description2="A large pork chicharron spread with mayonnaise is garnished with lettuce, cueritos, tomato, cucumber, and avocado slices. It is bathed in valentina sauce, cream, and cheese"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Chicharron%20preparado_350x350.webp?alt=media&token=a8aa559d-754b-4133-b02e-78d59f3b432e"
                    />
                    <MenuItem 
                        Title1="Esquite"
                        Title2=""
                        Price={14}
                        Description1="Sublime y con estilo. Granos de maíz, mantequilla, mayonesa, queso feta fresco, chile en polvo y jugo de limon"
                        Description2="Sublime and stylish. Corn garnished with butter, Mayonnaise, fresh feta cheese, chile powder and lime juice"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Esquite_350x350.webp?alt=media&token=48538a08-0337-4692-b1e3-318cd51a68b5"
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Tacos"><strong>Tacos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Beef (Asada) Taco"
                        Title2="Taco de Asada"
                        Price={5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Tongue Taco"
                        Title2="Taco de Lengua"
                        Price={5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Al Pastor Taco"
                        Title2="Taco al Pastor"
                        Price={4}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Pulled Pork Taco"
                        Title2="Taco de Carnitas"
                        Price={4}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Pork Skin Taco"
                        Title2="Taco de Cuerito"
                        Price={4}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Birria Taco"
                        Title2="Taco de Birria"
                        Price={6}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Chicken Taco"
                        Title2="Taco de Pollo"
                        Price={4.5}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Chorizo Taco"
                        Title2="Taco de Chorizo"
                        Price={4}
                        Description1=""
                        Description2=""
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Hamburguers/Hamburguesas"><strong>Hamburguers / Hamburguesas</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Hamburguesa Clasica"
                        Title2="Clasic Burguer"
                        Price={15}
                        Description1="Hamburguesa casera, adornada con lechuga fresca, tomate, cebolla, queso cheddar y servida con una porción de papas fritas"
                        Description2="A homemade burger garnished with fresh lettuce, tomato, onion, and cheddar cheese and served with a portion of fries"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Hamburguesa Hawaina"
                        Title2="Hawaiian Burger"
                        Price={17}
                        Description1="Hamburguesa casera, adornada con lechuga fresca, tomate, cebolla, queso cheddar, tocino, una rebanada de piña y servida con una porción de papas fritas"
                        Description2="A homemade burger garnished with fresh lettuce, tomato, onion, cheddar cheese, bacon, and a slice of pineapple. Served with a side of fries"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Hamburguesa Chipotle"
                        Title2="Chipotle Burguer"
                        Price={17}
                        Description1="Hamburguesa casera, adornada con lechuga fresca, tomate, cebolla, queso cheddar, tocino, aderezo chipotle de la casa y servida con una porción de papas fritas"
                        Description2="A homemade burger garnished with fresh lettuce, tomato, onion, cheddar cheese, bacon, and house chipotle dressing. Served with a side of fries"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Hamburguesa BBQ"
                        Title2="BBQ Burguer"
                        Price={17}
                        Description1="Hamburguesa casera, adornada con lechuga fresca, tomate, cebolla, queso cheddar, tocino, aderezo BBQ de la casa y servida con una porción de papas fritas"
                        Description2="A homemade burger garnished with fresh lettuce, tomato, onion, cheddar cheese, bacon, and house BBQ dressing. Served with a side of fries"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Hamburguesa Guacamole"
                        Title2="Guacamole Burguer"
                        Price={18}
                        Description1="Hamburguesa casera, adornada con lechuga fresca, tomate, cebolla, queso cheddar, tocino, guacamole hecho en el momento y servida con una porción de papas fritas"
                        Description2="A homemade burger garnished with fresh lettuce, tomato, onion, cheddar cheese, bacon, and house guacamole. Served with a side of fries"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Hamburguesa Popper"
                        Title2="Popper Burguer"
                        Price={18}
                        Description1="Hamburguesa casera, adornada con lechuga fresca, tomate, cebolla, queso cheddar, jalapeño relleno de queso crema y envuelto con tocino. Servida con una porción de papas fritas"
                        Description2="A homemade burger garnished with fresh lettuce, tomato, onion, cheddar cheese and topped with a jalapeño popper wrapped in bacon. Served with a side of fries"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/HotTacosStreetFood_Poper%20hamburger_350x350.webp?alt=media&token=1c4cd914-8d93-4fa2-8cb1-1584329b8325"
                    />
                    <MenuItem 
                        Title1="Hamburguesa de Pollo"
                        Title2="Chicken Burguer"
                        Price={17}
                        Description1="Hamburguesa de pollo casera, adornada con lechuga fresca, tomate, cebolla, queso cheddar, aderezo chipotle de la casa y servida con una porción de papas fritas"
                        Description2="A homemade chicken burger garnished with fresh lettuce, tomato, onion, cheddar cheese and house chipotle dressing. Served with a side of fries"
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="HotDogs"><strong>Hot Dogs</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Classic Hot Dog"
                        Title2="Hot Dog Clasico"
                        Price={4}
                        Description1="Clasico hot dog vestido con catsup, mayonesa, queso amarillo y mostaza"
                        Description2="Classic hot dog dressed with ketchup, mayonnaise, cheddar cheese and mustard"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="The Mummy Hot Dog"
                        Title2="Hot Dog La Momia"
                        Price={5}
                        Description1="Clasico hot dog envuelto en tocino vestido con catsup, mayonesa, queso amarillo y mostaza"
                        Description2="Classic hot dog wrapped in bacon dressed with ketchup, mayonnaise, cheddar cheese and mustard"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Guacamole HotDog"
                        Title2="Hot Dog Guacamole"
                        Price={7}
                        Description1="Clasico hot dog envuelto en tocino y cubierto en guacamole"
                        Description2="Classic hot dog wrapped in bacon and covered in guacamole"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Hot%20dog%20Guacamole_350x350.webp?alt=media&token=7395a677-09bc-4c4e-a886-cca1b92015a2"
                    />
                    <MenuItem 
                        Title1="Street Food Hot Dog"
                        Title2="Hot Dog Street Food"
                        Price={9}
                        Description1="Clasico hot dog envuelto en tocino y una costra de queso, rematado con una capa de la carne de tu gusto"
                        Description2="A classic hot dog wrapped in bacon and a cheese crust is topped with a layer of the protein of your choice"
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="FriesNachos/PapasNachos"><strong>Fries & Nachos / Papas & Nachos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="A la Hot Tacos"
                        Title2=""
                        Price={25}
                        Description1="Un clasico de la casa. Papas fritas al momento, queso amarillo derretido, mezcladas con carne asada y cubiertas en guacamole"
                        Description2="It's a house classic. Fresh fries and cheddar cheese mixed with asada and covered in guacamole"
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/HotTacosStreetFood_Papas%20a%20la%20hot%20tacos_350x350.webp?alt=media&token=24d41dd3-cf7f-4008-a656-f67dfa63a399"
                    />
                    <MenuItem 
                        Title1="A la Street Food"
                        Title2=""
                        Price={25}
                        Description1="Otro platillo inolvidable. Papas fritas al momento, queso amarillo derretido, mezcladas con tocino, la carne de tu gusto y cubiertas por una costra de queso"
                        Description2="Another unforgettable dish. Fresh fries, cheddar cheese mixed with bacon, and the protein you choose covered with a layer of melted mozzarella cheese"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Salchipulpo"
                        Title2=""
                        Price={15}
                        Description1="Papas fritas al momento mezcladas con salchichas en forma de pulpo, vestidas con catsup, mayonesa, queso amarillo, mostaza, valentina y queso"
                        Description2="Fresh fries are mixed with octopus-shaped sausages and dressed with ketchup, mayonnaise, cheddar cheese, mustard, valentina sauce, and fresh feta cheese"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Papas Supreme"
                        Title2=""
                        Price={9}
                        Description1="Papas fritas al momento bañadas con queso amarillo derretido, chorizo, lechuga, pico de gallo, crema y queso feta fresco"
                        Description2="Fresh fries topped with cheddar cheese, chorizo, lettuce, pico de gallo, cream and fresh feta cheese"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Nachos Supreme"
                        Title2=""
                        Price={9}
                        Description1="Nachos preparados al momento bañados con queso amarillo derretido, chorizo, lechuga, pico de gallo, crema y queso feta fresco"
                        Description2="Chips topped with cheddar cheese, chorizo, lettuce, pico de gallo, cream and fresh feta cheese"
                        // ImagePath=""
                    />
                </div>
                <p className={styles.SectionMenuTitle} id="Burritos"><strong>Burritos</strong></p>
                <div className={styles.SectionMenu}>
                    <MenuItem 
                        Title1="Burrito Clasico"
                        Title2="Classic Burrito"
                        Price={15}
                        Description1="Arroz, frijol, pico de gallo, queso mozzarella, lechuga y carne de tu elección: al pastor, chorizo, pollo, asada, cochinita, lengua, carnitas o aguacate. Envuelto en una deliciosa tortilla de harina y dorado directamente a la plancha."
                        Description2="Rice, beans, pico de gallo, mozzarella cheese, lettuce and your choice of protein: al pastor, chorizo, chicken, asada beef, cochinita, beef tongue, carnitas or avocado. Wrapped in a delicious flour tortilla and perfected on the grill."
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Burrito Street Food"
                        Title2="Cheesy Street Food Burrito"
                        Price={16}
                        Description1="Una de las firmas de nuestra cocina. Tortilla grande de harina, rellena de queso mozzarella, lechuga, aguacate, adereso de la casa y la carne de tu elección: carne al pastor, chorizo, pollo o asada. * Embuelto en una costra de queso!"
                        Description2="One of our kitchen’s signatures! A large flour tortilla filled with mozzarella cheese, lettuce, avocado and your choice of protein: al pastor, chorizo, chicken, asada beef, cochinita, lengua, carnitas. * Wrapped in a cheese crust."
                        ImagePath="https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/Burrito%20a%20la%20street%20food_350x350.webp?alt=media&token=b35d8b32-c8a6-44b0-8baf-3cfcbec2f200"
                    />
                    <MenuItem 
                        Title1="Burrito Ahogado"
                        Title2="Drawned Burrito"
                        Price={16}
                        Description1="La mejor mezcla de dos mundos, el burrito clasico ahogado en la salsa de la torta ahogada"
                        Description2="The best mix of two worlds, the “Classic Burrito” drenched in the “Drowned Torta” sauce"
                        // ImagePath=""
                    />
                    <MenuItem 
                        Title1="Chimichanga"
                        Title2=""
                        Price={15}
                        Description1="Un burrito frito! Una tortilla de harina rellena de arroz, frijo, carne de tu gusto y queso mozzarella frito en aceite"
                        Description2="A fried burrito! A flour tortilla filled with rice, beans, protein of your choice and mozzarella cheese deep-fried"
                        // ImagePath=""
                    />
                </div>
            </div>
        </div>
    )
}