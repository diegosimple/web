const carrossel = document.querySelector('.carrossel');
let position = 0;
const step = carrossel.offsetWidth; // Define a largura do passo igual à largura do carrossel

function slide(direction) {
  position += direction * step;
  position = Math.max(position, -step * (carrossel.children.length - 1));
  position = Math.min(position, 0);
  carrossel.style.transform = `translateX(${position}px)`;
}

setInterval(() => slide(-1), 3000); // Troca as imagens a cada 3 segundos (opcional)
