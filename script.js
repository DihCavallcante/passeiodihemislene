function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // posição horizontal aleatória
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

  document.getElementById('heart-container').appendChild(heart);

  // remover coração após 6 segundos
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// criar vários corações
setInterval(createHeart, 300);
