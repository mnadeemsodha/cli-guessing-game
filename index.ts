#! /usr/bin/env node
 
 import inquirer from "inquirer";      
 
// const randomNumber = 13

const randomNumber = Math.floor(Math.random() * 6 + 1)

const answer = await inquirer.prompt([
    {name: "userguessednumber", type : "number", message : "Please guess a number between 1 - 6 : "},
 
]);
if(answer.userguessednumber === randomNumber){
    console.log("Congrats! you guessed a right number")
} else {console.log("Oh! you guessed a wrong number")

}