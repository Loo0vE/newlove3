const heart = document.getElementById('heart');
const container = document.querySelector('.container');

const messages = [
    "Perdóname mi amor",
    "Te amo con todo mi corazón",
    "Siento mucho no haber estado ahi para ti cuando me necesitabas ;(",
    "Perdon por haberme quedado dormido mi reina ;c",
    "De verdad lo siento mucho mi amor",
    "De todo corazon lo lamento mi niña ;/",
    "Te juro que no fue por que quise corazon",
    "Desde el fondo de mi corazon te pido perdon mi reina",
];

function getRandomHeartPosition() {
    const heartRect = heart.getBoundingClientRect();
    const positions = [
        // Parte superior del corazón
        { x: heartRect.left + heartRect.width/2, y: heartRect.top },
        // Parte inferior del corazón
        { x: heartRect.left + heartRect.width/2, y: heartRect.bottom },
        // Lado izquierdo del corazón
        { x: heartRect.left, y: heartRect.top + heartRect.height/2 },
        // Lado derecho del corazón
        { x: heartRect.right, y: heartRect.top + heartRect.height/2 },
        // Esquina superior izquierda
        { x: heartRect.left, y: heartRect.top },
        // Esquina superior derecha
        { x: heartRect.right, y: heartRect.top },
        // Centro del corazón
        { x: heartRect.left + heartRect.width/2, y: heartRect.top + heartRect.height/2 }
    ];
    
    return positions[Math.floor(Math.random() * positions.length)];
}

function createBubble(message) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = message;
    
    // Obtener una posición aleatoria del corazón
    const startPos = getRandomHeartPosition();
    
    // Movimiento aleatorio
    const moveX = (Math.random() - 0.5) * 400;
    const moveY = (Math.random() - 0.5) * 400;
    
    bubble.style.left = `${startPos.x}px`;
    bubble.style.top = `${startPos.y}px`;
    bubble.style.setProperty('--moveX', `${moveX}px`);
    bubble.style.setProperty('--moveY', `${moveY}px`);
    
    container.appendChild(bubble);
    
    // Eliminar la burbuja después de la animación
    setTimeout(() => {
        bubble.remove();
    }, 4000);
}

let currentIndex = 0;

heart.addEventListener('click', () => {
    createBubble(messages[currentIndex]);
    currentIndex = (currentIndex + 1) % messages.length;
    
    // Efecto de latido al hacer clic
    heart.style.transform = 'rotate(-45deg) scale(0.9)';
    setTimeout(() => {
        heart.style.transform = 'rotate(-45deg) scale(1)';
    }, 150);
});