const storyElement = document.getElementById("story");
const choiceButton = document.getElementById("choice");
const requiredEncounters = 5;

let numEncounters = 0;
let randomEncounter = Math.random();
let inventory = {
  "Item1": false,
  "Item2": false
};

const encounters = [
  "This is a random encounter; Goblins!",
  "This is a random encounter; Monkeys!",
  "This is a random encounter; Flowers!",
];

choiceButton.addEventListener("click", () => {
  if (numEncounters < requiredEncounters) {
    storyElement.textContent = encounters[Math.floor(Math.random() * encounters.length)];
    choiceButton.textContent = "Continue";
    numEncounters++;
  } else {
    storyElement.textContent = "The end!";
    choiceButton.style.display = "none";
  }
});
