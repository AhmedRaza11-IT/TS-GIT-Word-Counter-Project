#! /usr/bin/node
import inquirer from 'inquirer';

const answer: 
{
    sentence: string;
} = await inquirer.prompt
    (
        [
            {
                type: 'input',
                name: 'sentence',
                message: 'Enter a sentence:'
            }
        ]
    );
const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(`${word.length} words found in the sentence.`);