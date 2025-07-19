let tapporCount = 0;

function tappor() {
  tapporCount++;
  const msg = document.getElementById('message');
  const face = document.getElementById('troll-face');
  const friendImg = document.getElementById('friend-img');
  const sound = document.getElementById('tappor-sound');

  sound.currentTime = 0;
  sound.play();

  friendImg.style.transform = `rotate(${Math.random() * 10 - 5}deg) scale(1.05)`;
  face.style.display = 'block';
  face.style.animation = 'shake 0.3s';

  const funnyMessages = [
    "Tappor incoming, Nafisa! 🖐️",
    "Oops! Tui abar gaili 😂",
    "Tui serious naki comedy piece? 🤣",
    "Tappor +1, respect -1 🤪",
    "Ei level e ashte gele brain dorkar 🤡",
    "Nafisa.exe has crashed 💥",
    "Troll queen unlocked! 👑"
  ];

  msg.innerText = funnyMessages[tapporCount % funnyMessages.length];

  if (tapporCount >= 10) {
    msg.innerText = "Enough! Nafisa is now the official Troll Queen! 😈";
    face.style.display = 'none';
  }
}
