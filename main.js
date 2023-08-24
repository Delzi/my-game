const storyElement = document.getElementById("story");
const choiceButton = document.getElementById("choice");

let scene = 0;

const scenes = [
  "Welcome to the game! You find yourself in a mysterious forest.",
  "You come across a fork in the path. Which way do you go?"
  // Add more scenes and choices here
];

choiceButton.addEventListener("click", () => {
  if (scene === 0) {
    storyElement.textContent = "You pick the left path and discover a hidden treasure!";
    choiceButton.textContent = "Continue";
  } else if (scene === 1) {
    storyElement.textContent = "You come across a friendly gnome who offers to guide you.";
    choiceButton.textContent = "Follow the gnome";
  } else if (scene === 2) {
    storyElement.textContent = "The gnome leads you to a magical portal. Do you enter?";
    choiceButton.textContent = "Enter the portal";
  } else if (scene === 3) {
    storyElement.textContent = "You find yourself in a new realm filled with wonders!";
    choiceButton.style.display = "none"; // Hide the button to indicate the end
  }
  scene++;
});
