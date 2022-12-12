import { phases } from "./PhasesDatabase.js";

const phaseContainer = document.querySelector('[data-js="phaseContainer"]');

export function createPhase(phases) {
  const newPhase = { cardsNeeded: 0, text: "" };
  while (newPhase.cardsNeeded < 6) {
    const randomIndex = getRandomInt(phases.length);
    const newTask = phases[randomIndex];
    newPhase.text = `${newTask.text}, ${newPhase.text}`;
    const phase = document.createElement("li");
    phase.classList.add("newPhase");
    phase.textContent = newPhase.text;
    newPhase.cardsNeeded = newPhase.cardsNeeded + newTask.cards;
    if (newPhase.cardsNeeded > 5) {
      phaseContainer.append(phase);
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
