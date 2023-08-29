const storyElement = document.getElementById("story");
const choiceButton = document.getElementById("choice");
const requiredEncounters = 5;

let numEncounters = 0;
let lastEncounter = -1;
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

function genRandom() {
	if (lastEncounter >= 0) {
		randomEncounter = encounters[Math.floor(Math.random() * encounters.length)];
	} else {
		for (let i = 0; randomEncounter != lastEncounter; i++) {
			randomEncounter = encounters[Math.floor(Math.random() * encounters.length)];
		}
	}
	return randomEncounter;
};

choiceButton.addEventListener("click", () => {
	if (choiceButton.textContent === "Play again") {
		numEncounters = 0;
		for (let i = 0; i < inventory.length; i++) {
			inventory[i] = false;
		}
	} else {
		if (numEncounters < requiredEncounters) {
			randomEncounter = genRandom();
			lastEncounter = randomEncounter;
			storyElement.textContent = encounters[randomEncounter];
			choiceButton.textContent = "Continue";
			numEncounters++;
		} else {
			storyElement.textContent = "The end!";
			choiceButton.textContent = "Play again";
		}
	}
});