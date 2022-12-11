import { phases } from "./PhasesDatabase.js";

const gamePage = document.querySelector('[data-js="activeGame"]');
const homepage = document.querySelector('[data-js="homePage"]');
const form = document.querySelector('[data-js="setup"]');
const inputNames = document.querySelector('[data-js="inputPlayersName"]');

export function player1(players) {
  if (players.player1 != "") {
    const playerContainer = document.querySelector('[data-js="p1"]');
    const player = document.createElement("p");
    const phase = document.querySelector('[data-js="phase1"]');
    phase.textContent = "Phase 1!";
    player.classList.add("player");
    playerContainer.classList.add("playerContainer");
    player.textContent = players.player1;
    gamePage.append(playerContainer);
    playerContainer.append(player);
    playerContainer.append(phase);
  }
}

export function player2(players) {
  if (players.player2 != "") {
    const playerContainer = document.querySelector('[data-js="p2"]');
    const player = document.createElement("p");
    player.classList.add("player");
    playerContainer.classList.add("playerContainer");
    player.textContent = players.player2;
    gamePage.append(playerContainer);
    playerContainer.append(player);
    const phase = document.querySelector('[data-js="phase2"]');
    phase.textContent = "Phase 1!";
    playerContainer.append(phase);
  }
}
export function player3(players) {
  if (players.player3 != "") {
    const playerContainer = document.querySelector('[data-js="p3"]');
    const player = document.createElement("p");
    player.classList.add("player");
    playerContainer.classList.add("playerContainer");
    player.textContent = players.player3;
    gamePage.append(playerContainer);
    playerContainer.append(player);
    const phase = document.querySelector('[data-js="phase3"]');
    phase.textContent = "Phase 1!";
    playerContainer.append(phase);
  }
}
export function player4(players) {
  if (players.player4 != "") {
    const playerContainer = document.querySelector('[data-js="p4"]');
    const player = document.createElement("p");
    player.classList.add("player");
    playerContainer.classList.add("playerContainer");
    player.textContent = players.player4;
    gamePage.append(playerContainer);
    playerContainer.append(player);
    const phase = document.querySelector('[data-js="phase4"]');
    phase.textContent = "Phase 1!";
    playerContainer.append(phase);
  }
}
