
// Array com diferentes tipos de flores
const flowers = [
    '🌸', '💐', '🌷', '🌹', '🌺', '🌻'
];

let score = 0;

// Função para criar uma flor em uma posição aleatória na tela
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.fontSize = `${Math.floor(Math.random() * 30) + 20}px`;
    
    const posX = Math.random() * (window.innerWidth - 100);
    const posY = Math.random() * (window.innerHeight - 100);
    flower.style.position = 'absolute';
    flower.style.left = `${posX}px`;
    flower.style.top = `${posY}px`;
    
    flower.addEventListener('click', () => {
        flower.remove();
        score++;
        document.getElementById('score').textContent = score;
    });

    document.body.appendChild(flower);

    // Remover a flor depois de alguns segundos
    setTimeout(() => {
        flower.remove();
    }, 5000);
}

// Gerar uma nova flor a cada segundo
setInterval(createFlower, 1000);
