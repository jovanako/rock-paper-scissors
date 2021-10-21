const userChoiceDisplay = document.createElement("h1")
userChoiceDisplay.innerHTML = "User choice: "
const computerChoiceDisplay = document.createElement("h1")
computerChoiceDisplay.innerHTML = "Computer choice: "
const resultDisplay = document.createElement("h1")
resultDisplay.innerHTML = "&nbsp;"
const gameGrid = document.getElementById("game")

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ["rock", "paper", "scissors"]

const handleClick = (e) => {
  const userChoice = e.target.id
  userChoiceDisplay.innerHTML = "User choice: " + userChoice
  const computerChoice = generateComputerChoice()
  getResults(userChoice, computerChoice)
}

const generateComputerChoice = () => {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoiceDisplay.innerHTML = "Computer choice: " + computerChoice
  return computerChoice
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button")
  button.id = choices[i]
  button.innerHTML = choices[i]
  button.addEventListener("click", handleClick)
  gameGrid.appendChild(button)
}

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML = "YOU WIN!"
      break
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = "YOU LOSE!"
      break
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      resultDisplay.innerHTML = "IT'S A DRAW!"
      break
  }
}