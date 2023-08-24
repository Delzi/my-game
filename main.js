const storyElement = document.getElementById("story");
const choiceButton = document.getElementById("choice");

let scene = 0;

const scenes = [
  "Welcome to the game! You find yourself in a mysterious forest.",
  "You come across a fork in the path. Which way do you go?"
  // Add more scenes and choices here
];

choiceButton.addEventListener("click", () => {
  scene++;
  if (scene < scenes.length) {
    storyElement.textContent = scenes[scene];
  } else {
    storyElement.textContent = "The end of the game. Thanks for playing!";
    choiceButton.style.display = "none";
  }
});
