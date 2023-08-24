const storyElement = document.getElementById("story");
const choiceButton = document.getElementById("choice");

let numEncounters = 0;
let randomEncounter = Math.random();
let inventory = [
  "Item1" = false;
  "Item2" = false;
];

const encounters = [
  "This is a random encounter; Goblins!",
  "This is a random encounter; Monkeys!",
  "This is a random encounter; Flowers!",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

choiceButton.addEventListener("click", () => {
  randomEncounter = encounters[getRandomInt(encounters.length)]
  
    storyElement.textContent = randomEncounter;
    choiceButton.textContent = "Continue";


  
    numEncounters++;
  if (numEncounters >= 5) {
    storyElement.textContent = "The end!";
    choiceButton.style.display = "none"; // Hide the button to indicate the end
  }
  
});
