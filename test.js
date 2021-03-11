// function getSelectionText() {
//     var text = "";
//     if (window.getSelection) {
//         text = window.getSelection().toString();
//     } else if (document.selection && document.selection.type != "Control") {
//         text = document.selection.createRange().text;
//     }
//     return text;
// } 

// OMFGOMFOMGOMFOGMOMGOMOMGOMOMFOGMOMFOMGOMFOGMOFMMOG


let text = window.getSelection().toString();
console.log(text)

let numWords = text.split(/\W+/).length;
let numCharacters = text.replace(' ', '').length;
let temp = text + ' ';
let numSentences = temp.split(". ").length - 1;
console.log(numWords)


//algorithm to determine level of writing

let l = numCharacters * (100 / numWords)
let s = numSentences * (100 / numWords)
let index = (0.0588 * l) - (0.296 * s) - 15.8;

console.log(index)
    
if (index < 1) grade = '1'
else if (index > 16) grade = '16+'
else grade = Math.floor(index)

// printf("Grade 16+\n");
//     }
//     else if (index < 1)
//     {
//         printf("Before Grade 1\n");
//     }
//     else
//     {
//         printf("Grade %.0f\n", round(index));


// adding the numWords element into the popup.html
// document.getElementById

document.body.appendChild(document.createTextNode(numWords.toString() + " words selected."));
document.body.appendChild(document.createTextNode("Grade: " + grade));




// console.log(numWords)

// float L = character * (100 / word);
// float S = sentence * (100 / word);
// float index = (0.0588 * L) - (0.296 * S) - 15.8;


// int main(void)
// {

// //asks for text with get string function

//     string x = get_string("Text: ");

// //intializing integer length of string and floats to store characters, words, sentences. "Word" starts at 1 since I count words with spaces.

//     int length = strlen(x);
//     float character = 0;
//     float word = 1;
//     float sentence = 0;

// //for every character in the string, checking if upper/lowercase (character++), if there's a space (word++),
// //or if a period/question mark/exclamation point (sentence++)

//     for (int i = 0; i < length; i++)
//     {
//         if (isupper(x[i]) || islower(x[i]))
//         {
//             character++;
//         }
//         else if (isspace(x[i]))
//         {
//             word++;
//         }
//         else if (x[i] == 33 || x[i] == 46 || x[i] == 63)
//         {
//             sentence++;
//         }
//     }

// //index formula

// float L = character * (100 / word);
// float S = sentence * (100 / word);
// float index = (0.0588 * L) - (0.296 * S) - 15.8;

// //if statement to print out statements for index > 16 and < 1. Else, print out grade rounded to the nearest whole number.

//     if (index > 16)
//     {
//         printf("Grade 16+\n");
//     }
//     else if (index < 1)
//     {
//         printf("Before Grade 1\n");
//     }
//     else
//     {
//         printf("Grade %.0f\n", round(index));
//     }

// }