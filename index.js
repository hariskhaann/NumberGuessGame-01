#!/usr/bin/env node
import inquirer from "inquirer";
let score = 0;
async function startloop() {
    let again;
    do {
        await guessNumber();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ["Yes", "No",],
                message: "Do you want to continue: "
            }
        ]);
    } while (again.restart === "Yes");
}
startloop();
async function guessNumber() {
    let guessNum = Math.floor(Math.random() * 10);
    let tip;
    if (guessNum % 2 == 0) {
        tip = "Tip: Number is even.";
    }
    else {
        tip = "Tip: Number is odd.";
    }
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: `Guess a number between 1 to 10 (${tip})`
        }
    ]);
    console.log(`Your Guess${answer.userGuess} and system generates ${guessNum}`);
    if (answer.userGuess === guessNum) {
        score++;
        console.log(`Congratulations your answer is correct. Your score is: ${score}`);
    }
    else {
        console.log(`Wrong guess. Your score is: ${score}. Better luck next time. `);
    }
}
