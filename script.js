
// script.js
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const hintText = document.getElementById("hintText");

if (noBtn && yesBtn) {
  let moveCount = 0;
  const maxMoves = 10;

  function moveButton() {
    if (moveCount >= maxMoves) {
      noBtn.textContent = "Please Please Please .. click YES 😭";
      if (hintText) hintText.textContent = "ok ok. Now that you have had  your fun, click YES 😌";
      return;
    }

    moveCount++;

    const maxX = window.innerWidth - noBtn.offsetWidth - 10;
    const maxY = window.innerHeight - noBtn.offsetHeight - 10;

    const x = Math.max(10, Math.floor(Math.random() * maxX));
    const y = Math.max(10, Math.floor(Math.random() * maxY));

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    const texts = ["No", "Wait", "Stop 😭", "Be serious", "Nah", "Last chance", "are you sure?😩", "Don't click me🥹", "Please😭?", "I don't even care anymore 😒"];
  
    noBtn.textContent = texts[Math.min(moveCount, texts.length - 1)];
  }

  noBtn.addEventListener("mouseenter", moveButton);

  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
  }, { passive: false });

  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
  });

  yesBtn.addEventListener("click", () => {
    window.location.href = "congrats.html";
  });
}




