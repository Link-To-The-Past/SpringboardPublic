const letters = [
  "littleA.png",
  "littleB.png",
  "littleC.png",
  "littleD.png",
  "littleE.png",
  "littleF.png",
  "littleG.png",
  "littleH.png",
  "littleI.png",
  "littleJ.png",
  "littleK.png",
  "littleL.png",
  "littleM.png",
  "littleN.png",
  "littleO.png",
  "littleP.png",
  "littleQ.png",
  "littleR.png",
  "littleS.png",
  "littleT.png",
  "littleU.png",
  "littleV.png",
  "littleW.png",
  "littleX.png",
  "littleY.png",
  "littleZ.png",
  "bigA.png",
  "bigB.png",
  "bigC.png",
  "bigD.png",
  "bigE.png",
  "bigF.png",
  "bigG.png",
  "bigH.png",
  "bigI.png",
  "bigJ.png",
  "bigK.png",
  "bigL.png",
  "bigM.png",
  "bigN.png",
  "bigO.png",
  "bigP.png",
  "bigQ.png",
  "bigR.png",
  "bigS.png",
  "bigT.png",
  "bigU.png",
  "bigV.png",
  "bigW.png",
  "bigX.png",
  "bigY.png",
  "bigZ.png",
];
let selectedLetters = [];
window.addEventListener("load", function () {
  document.querySelector(".Start").addEventListener("click", startGame);
});
function startGame(event) {
  const table = document.querySelector("table");
  let rockCounter = 0;
  for (let i = 0; i < 4; i++) {
    const row = document.createElement("tr");
    for (let i = 0; i < 13; i++) {
      const td = document.createElement("td");
      const image = document.createElement("img");
      image.src = "./Rock.png";
      image.alt = "Rock";
      image.id = rockCounter;
      image.addEventListener("click", flip);
      td.appendChild(image);
      row.appendChild(td);
      rockCounter++;
    }
    table.appendChild(row);
  }
  shuffle(letters);
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function flip(event) {
  event.target.src = letters[event.target.id];
  const found = selectedLetters.find((it) => it === letters[event.target.id]);
  console.log(found);
  if (!found) {
    selectedLetters.push(letters[event.target.id]);
  }
  event.target.classList.add("dude");
  match();
}
function match() {
  if (selectedLetters.length == 2) {
    console.log(selectedLetters);
    const firstLetter = selectedLetters[0]
      .replace("little", "")
      .replace("big", "")
      .replace(".png", "");
    const secondLetter = selectedLetters[1]
      .replace("little", "")
      .replace("big", "")
      .replace(".png", "");
    console.log(firstLetter, secondLetter);
    if (firstLetter === secondLetter) {
      selectedLetters = [];
    } else {
      const firstIndex = letters.findIndex((it) => it === selectedLetters[0]);
      const secondIndex = letters.findIndex((it) => it === selectedLetters[1]);
      console.log(firstIndex, secondIndex);
      const firstRock = document.getElementById(firstIndex);
      const secondRock = document.getElementById(secondIndex);
      console.log(firstRock, secondRock);
      setTimeout(function () {
        firstRock.src = "./Rock.png";
        secondRock.src = "./Rock.png";
      }, 1000);
      selectedLetters = [];
    }
    console.log(selectedLetters);
  }
}
