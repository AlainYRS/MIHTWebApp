export const handleScroll = () => {
  console.log('Se hizo scroll');
  const scrollY = window.scrollY;
  console.log('Valor de desplazamiento vertical:', scrollY);
  // Aquí puedes colocar la lógica que deseas ejecutar cuando ocurra el evento de desplazamiento (scroll)
};
export const handleMouseMovement = (event: MouseEvent) => {
  // Obtener la posición actual del mouse
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  // console.log('Posición del mouse - X:', mouseX, ' Y:', mouseY);

  // Realizar acciones según la dirección del movimiento del mouse
  if (mouseX < window.innerWidth / 2) {
    // El mouse se mueve hacia la izquierda
    // console.log('Mouse se mueve hacia la izquierda');
  } else {
    // El mouse se mueve hacia la derecha
    // console.log('Mouse se mueve hacia la derecha');
  }

  if (mouseY < window.innerHeight / 2) {
    // El mouse se mueve hacia arriba
    // console.log('Mouse se mueve hacia arriba');
  } else {
    // El mouse se mueve hacia abajo
    // console.log('Mouse se mueve hacia abajo');
  }
};
