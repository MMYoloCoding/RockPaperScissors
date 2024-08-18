function getComputerChoice() {
  const letters = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
}

function getHumanChoice() {
  let choice = window.prompt("rock, paper, scissors?").toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    if (computerChoice == "scissors") {
      return "win";
    } else if (computerChoice == "paper") {
      return "lose";
    } else {
      return "draw";
    }
  }

  if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      return "win";
    } else if (computerChoice == "scissors") {
      return "lose";
    } else {
      return "draw";
    }
  }

  if (humanChoice == "scissors") {
    if (computerChoice == "paper") {
      return "win";
    } else if (computerChoice == "rock") {
      return "lose";
    } else {
      return "draw";
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (playRound(humanSelection, computerSelection) == "win") {
      console.log("You win! " + humanSelection + " beats " + computerSelection);
      humanScore++;
    }
    if (playRound(humanSelection, computerSelection) == "lose") {
      console.log(
        "You lose! " + computerSelection + " beats " + humanSelection
      );
      computerScore++;
    }
    if (playRound(humanSelection, computerSelection) == "draw") {
      console.log("Draw!");
    }
  }

  console.log("Game Over");
  if (humanScore > computerScore) {
    console.log(
      "You Win! with a total of " +
        humanScore +
        ", beating computer of " +
        computerScore
    );
  } else {
    console.log(
      "You lose! with a total of " +
        humanScore +
        ", being beaten by computer of " +
        computerScore
    );
  }
}

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function (e) {
  alert("Hello World! YOU DID IT! " + e.type + " is clicked!");
  e.target.style.background = "pink";
  e.target.textContent = "GG";
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", playGame);
