const box = document.getElementsByClassName("box");
const ply = document.getElementById("player");
const result = document.getElementById("result");
const res2 = document.getElementById("res2");
const game = document.getElementById("d2");
const playagin = document.getElementById("Playagin");
const pbtn = document.getElementById("pbtn");
const gname = document.getElementById("gname");
const home = document.getElementById("start");

let playersymbol = "X";
let player = 1;

pbtn.addEventListener("click", () => {
  gname.style.display = "flex";
  game.style.display = "flex";
  home.style.display = "none";
});

ply.innerHTML = `Player ${player} : ${playersymbol}`;

const showresult = (winner) => {
  res2.firstElementChild.nextElementSibling.innerHTML = winner;
};

playagin.addEventListener("click", () => {
  location.reload();
});

let filledbox = 0;
for (let x of box) {
  x.addEventListener("click", () => {
    if (!x.innerHTML) {

      filledbox++;
      x.innerHTML = playersymbol;

      let b1 = document.getElementById("b1").innerHTML || 1;
      let b2 = document.getElementById("b2").innerHTML || 2;
      let b3 = document.getElementById("b3").innerHTML || 3;
      let b4 = document.getElementById("b4").innerHTML || 4;
      let b5 = document.getElementById("b5").innerHTML || 5;
      let b6 = document.getElementById("b6").innerHTML || 6;
      let b7 = document.getElementById("b7").innerHTML || 7;
      let b8 = document.getElementById("b8").innerHTML || 8;
      let b9 = document.getElementById("b9").innerHTML || 9;

      if (
        (b1 == b2 && b2 == b3) ||
        (b1 == b4 && b4 == b7) ||
        (b7 == b8 && b8 == b9) ||
        (b3 == b6 && b6 == b9) ||
        (b1 == b5 && b5 == b9) ||
        (b3 == b5 && b5 == b7) ||
        (b4 == b5 && b5 == b6) ||
        (b2 == b5 && b5 == b8)
      ) {
        showresult(`🏆 Player ${player} win the match 🏆`);
        game.style.display = "none";
        result.style.display = "flex";
      } else if (filledbox == 9) {
        showresult(`😟 Match Tie! 😟 `);
        res2.firstElementChild.innerHTML = `😅 Oops 😅 `
        result.style.display = "flex";
        game.style.display = "none";
      }

      player == 1 ? (player = 2) : (player = 1);
      playersymbol == "X" ? (playersymbol = "O") : (playersymbol = "X");
      ply.innerHTML = `Player ${player} : ${playersymbol}`;
    }
  });
}