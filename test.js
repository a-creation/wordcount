// check if variables have been declared, if not declare the variables and assign them to undefined

if (
  typeof text !== "undefined" &&
  typeof numwords !== "undefined" &&
  typeof numCharacters !== "undefined" &&
  typeof numSentences !== "undefined" &&
  typeof l !== "undefined" &&
  typeof s !== "undefined" &&
  typeof index !== "undefined"
) {
  let text = undefined;
  let numwords = undefined;
  let numCharacters = undefined;
  let numSentences = undefined;
  let l = undefined;
  let s = undefined;
  let index = undefined;
}

// assign text to selection on the current window
text = window.getSelection().toString();

// calculate number of words, characters, and sentences
numWords = text.split(/\W+/).length;
numCharacters = text.replace(" ", "").length;
numSentences = text.concat(" ").split(". ").length;

//algorithm to determine level of writing
l = numCharacters * (100 / numWords);
s = numSentences * (100 / numWords);
index = 0.0588 * l - 0.296 * s - 15.8;

if (index < 1) grade = "1";
else if (index > 16) grade = "16+";
else grade = Math.floor(index);

// testing via console logs of text, index, grade
console.log("text", text);
console.log("numWords", numWords);
console.log("grade", grade);

// adding the numWords element into the popup.html
// document.getElementById

// append number of words selected and grade to document body

// 🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛 "it's a feauture not a bug" 🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛

// if (
//   typeof wordCounterText !== "undefined" &&
//   typeof gradeText !== "undefined"
// ) {
//   let textContainer = undefined;
//   let wordCounterText = undefined;
//   let gradeText = undefined;
// }&& !wordCounterText && !gradeText

if (typeof textContainer !== "undefined") {
  // let textContainer = undefined;
  // let wordCounterText = undefined;
  // let gradeText = undefined;
  wordCounterText.value = numWords.toString() + " words selected.";
  gradeText.value = "Grade: " + grade;
}

if (typeof textContainer === "undefined") {
  let textContainer = document.createElement("div", { id: "textContainer" });
  let wordCounterText = document.createElement("textarea");
  let gradeText = document.createElement("textarea");
  wordCounterText.readOnly = true;
  gradeText.readOnly = true;
  gradeText.value = "Grade: " + grade;
  wordCounterText.value = numWords.toString() + " words selected.";
  textContainer.appendChild(wordCounterText);
  textContainer.appendChild(gradeText);
  document.body.appendChild(textContainer);
}
// } else {

//   // textContainer.replaceChild();
// }

// textContainer = document.createElement("div");
// wordCounterText = document.createElement("textarea");
// gradeText = document.createElement("textarea");

// textContainer.appendChild(wordCounterText);
// textContainer.appendChild(gradeText);
// gradeText.value = "Grade: " + grade;
// document.body.appendChild(textContainer);
// wordCounterText.value = numWords.toString() + " words selected.";

// if (!textContainer || !textContainer.hasChildNodes()) {
//   let textContainer = document.createElement("div");
//   textContainer.appendChild(wordCounterText);
//   textContainer.appendChild(gradeText);
//   gradeText.value = "Grade: " + grade;
//   wordCounterText.value = numWords.toString() + " words selected.";
//   wordCounterText.readOnly = true;
//   gradeText.readOnly = true;
// } else {
//   gradeText.value = "Grade: " + grade;
//   // textContainer.appendChild(gradeText);
//   textContainer.replaceChild(gradeText, gradeText);
// }

/*******  original code snippet?   ******/
// if (
//   typeof wordCounterText !== "undefined" &&
//   typeof gradeText !== "undefined"
// ) {
//   let textContainer = undefined;
//   let wordCounterText = undefined;
//   let gradeText = undefined;
// }

// textContainer = document.createElement("div");
// wordCounterText = document.createElement("textarea");
// gradeText = document.createElement("textarea");
// wordCounterText.readOnly = true;
// gradeText.readOnly = true;
// textContainer.appendChild(wordCounterText);
// textContainer.appendChild(gradeText);
// gradeText.value = "Grade: " + grade;
// document.body.appendChild(textContainer);
// wordCounterText.value = numWords.toString() + " words selected.";
