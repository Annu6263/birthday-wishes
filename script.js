// Floating hearts effect

setInterval(() => {
  const heart = document.createElement("div");

  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = (Math.random() * 20 + 20) + "px";

  document.body.appendChild(heart);

  let pos = 100;

  const fall = setInterval(() => {
    pos--;

    heart.style.top = pos + "vh";

    if(pos < -10){
      clearInterval(fall);
      heart.remove();
    }
  }, 30);

}, 500);
