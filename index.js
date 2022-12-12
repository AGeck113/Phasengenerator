import { createPhase } from "./components/Phasegenerator.js";
import { phases } from "./components/PhasesDatabase.js";
import {
  player1,
  player2,
  player3,
  player4,
} from "./components/CreatePlayers.js";

console.clear();
const button = document.querySelector('[data-js="startGameButton"]');
const form = document.querySelector('[data-js="setup"]');
const homepage = document.querySelector('[data-js="homePage"]');
const gamePage = document.querySelector('[data-js="activeGame"]');
const endRound = document.querySelector('[data-js="endRoundButton"]');
const checkForm = document.querySelector('[data-js="checkGame"]');
const ol = document.querySelector('[data-js="phaseContainer"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  //   const inputsRequired = data.NumberOfPlayers;
  homepage.classList.add("hidden");
  gamePage.classList.remove("hidden");
  const times = data.numberOfPhases;
  const people = data.NumberOfPlayers;
  player1(data);
  player2(data);
  player3(data);
  player4(data);
  repeat(createPhase, times);
  endRound.classList.remove("hidden");
  checkForm.classList.remove("hidden");
  gamePage.classList.remove("hidden");
  ol.classList.remove("hidden");
});

function repeat(func, times) {
  for (let x = 0; x < times; x++) {
    func(phases);
  }
}

const inputPlayers = document.querySelector('[data-js="numberOfPlayers"]');
inputPlayers.addEventListener("input", () => {
  const input1 = document.querySelector('[data-js="inputPlayer1"]');
  const input2 = document.querySelector('[data-js="inputPlayer2"]');
  const input3 = document.querySelector('[data-js="inputPlayer3"]');
  const input4 = document.querySelector('[data-js="inputPlayer4"]');
  const labelInput1 = document.querySelector('[data-js="labelInput1"]');
  const labelInput2 = document.querySelector('[data-js="labelInput2"]');
  const labelInput3 = document.querySelector('[data-js="labelInput3"]');
  const labelInput4 = document.querySelector('[data-js="labelInput4"]');

  const countOfPlayers = inputPlayers.value;
  if (countOfPlayers == 4) {
    input1.classList.remove("hidden");
    input2.classList.remove("hidden");
    input3.classList.remove("hidden");
    input4.classList.remove("hidden");
    labelInput1.classList.remove("hidden");
    labelInput2.classList.remove("hidden");
    labelInput3.classList.remove("hidden");
    labelInput4.classList.remove("hidden");
  } else if (countOfPlayers == 3) {
    input1.classList.remove("hidden");
    input2.classList.remove("hidden");
    input3.classList.remove("hidden");
    input4.classList.add("hidden");
    labelInput1.classList.remove("hidden");
    labelInput2.classList.remove("hidden");
    labelInput3.classList.remove("hidden");
    labelInput4.classList.add("hidden");
  } else if (countOfPlayers == 2) {
    input1.classList.remove("hidden");
    input2.classList.remove("hidden");
    input3.classList.add("hidden");
    input4.classList.add("hidden");
    labelInput1.classList.remove("hidden");
    labelInput2.classList.remove("hidden");
    labelInput3.classList.add("hidden");
    labelInput4.classList.add("hidden");
  }
});

let activePhasePlayer1 = 1;
let activePhasePlayer2 = 1;
let activePhasePlayer3 = 1;
let activePhasePlayer4 = 1;
const phase1 = document.querySelector('[data-js="phase1"]');
const phase2 = document.querySelector('[data-js="phase2"]');
const phase3 = document.querySelector('[data-js="phase3"]');
const phase4 = document.querySelector('[data-js="phase4"]');

function check1(checked) {
  if (checked.checkGame1 == "on") {
    activePhasePlayer1++;
    phase1.textContent = `You are in Phase ${activePhasePlayer1}`;
  }
}
function check2(checked) {
  if (checked.checkGame2 == "on") {
    activePhasePlayer2++;
    phase2.textContent = `You are in Phase ${activePhasePlayer2}`;
  }
}
function check3(checked) {
  if (checked.checkGame3 == "on") {
    activePhasePlayer3++;
    phase3.textContent = `You are in Phase ${activePhasePlayer3}`;
  }
}
function check4(checked) {
  if (checked.checkGame4 == "on") {
    activePhasePlayer4++;
    phase4.textContent = `You are in Phase ${activePhasePlayer4}`;
  }
}
checkForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  check1(data);
  check2(data);
  check3(data);
  check4(data);
  //   if (data.checkGame1 == "on") {
  //     activePhasePlayer1++;
  //     phase1.textContent = `You are in Phase ${activePhasePlayer1}`;
  //   }
  //   if (data.checkGame2 == "on") {
  //     activePhasePlayer2++;
  //     phase2.textContent = `You are in Phase ${activePhasePlayer2}`;
  //   }
  //   if (data.checkGame3 == "on") {
  //     activePhasePlayer3++;
  //     phase3.textContent = `You are in Phase ${activePhasePlayer3}`;
  //   }
  //   if (data.checkGame4 == "on") {
  //     activePhasePlayer4++;
  //     phase4.textContent = `You are in Phase ${activePhasePlayer4}`;
  //   }
});
