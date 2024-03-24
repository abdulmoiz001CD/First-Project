#! /usr/bin/env node
import inquirer from "inquirer";
async function mainb() {
    const answer = await inquirer.prompt([{
            message: "What is Your First Number", type: "number", name: "First_Number"
        },
        {
            message: "What is Your Second Number", type: "number", name: "Second_Number"
        },
        {
            message: "What Operation You Want To Perform", type: "list", name: "Operation",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    ]);
    if (answer.Operation === "Addition") {
        console.log(`Your Answer is Here  ${answer.First_Number + answer.Second_Number}`);
    }
    else if (answer.Operation === "Subtraction") {
        console.log(`Your Answer is Here  ${answer.First_Number - answer.Second_Number}`);
    }
    else if (answer.Operation === "Multiplication") {
        console.log(`Your Answer is Here  ${answer.First_Number * answer.Second_Number}`);
    }
    else if (answer.Operation === "Division") {
        console.log(`Your Answer is Here  ${answer.First_Number / answer.Second_Number}`);
    }
    else {
        console.log("Chose Valid Operation");
    }
}
mainb();
