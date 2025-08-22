let score = 0; // using "let" for the variable as it will need to update.
const quizData = [
  // QuizData is saved as an object, required for it's various properties that will be utilized.
  {
    question:
      "During World War II, one President served longer than any other in U.S. history, guiding the nation through both the Great Depression and most of the war before passing away in office in 1945. Who was he?",
    image: "images/ww2 america.jpg",
    answers: {
      a: "Franklin D. Roosevelt",
      b: "Dwight D. Eisenhower",
      c: "Harry S. Truman",
      d: "Woodrow Wilson",
    },
    correct: "a",
    fact: "Franklin D. Roosevelt often pushed himself beyond his limits, working long hours and traveling extensively despite his limited mobility. FDR’s health declined noticeably during his fourth term, and he passed away in office in 1945, showing how deeply the burdens of leadership weighed on him personally.",
  },
  {
    question:
      "Which U.S. President delivered the longest inaugural address, lasting nearly two hours in a snowstorm without wearing a coat, hat, or gloves, and died of pneumonia one month later?",
    image: "images/1813.webp",
    answers: {
      a: "George Washington",
      b: "Abraham Lincoln",
      c: "William H. Harrison",
      d: "James Madison",
    },
    correct: "c",
    fact: "William H. Harrison earned the nickname “Old Tippecanoe” after leading U.S. forces against Tecumseh’s confederacy in 1811. This victory boosted his reputation as a frontier military leader. His grandson, Benjamin Harrison, later became the 23rd president (1889–1893).",
  },
  {
    question:
      "Before it was formally called the White House, the president’s residence in Washington, D.C. had gone by names such as the Executive Mansion and the President’s House. Which president officially made ‘The White House’ its permanent title?",
    image: "images/white_house.webp",
    answers: {
      a: "Grover Cleveland",
      b: "William Howard Taft",
      c: "Theodore Roosevelt",
      d: "Ulysses S. Grant",
    },
    correct: "c",
    fact: "It was Theodore Roosevelt who officially gave the building the name “The White House” in 1901. The building had been casually referred to as the “White House” since at least the early 1800s because of its white-painted sandstone, but Roosevelt made it official.",
  },
  {
    question:
      "A famous toy owes its name to President Theodore Roosevelt. After he refused to shoot a tied-up bear during a 1902 hunting trip in Mississippi, a cartoon depicted the event, inspiring a toy maker to create a stuffed bear. What cuddly children’s toy was named in his honor?",
    image: "images/teddy.webp",
    answers: {
      a: "Penny Doll",
      b: "Teddy Bear",
      c: "Slinky",
      d: "Rocking Horse",
    },
    correct: "b",
    fact: "Theodore Roosevelt established the foundation of the modern U.S. conservation movement, creating 5 national parks, 18 national monuments, 150 national forests, and protecting roughly 230 million acres of public land.",
  },
  {
    question:
      "Which U.S. president was known for his unusual habit of swimming naked in the Potomac River almost every morning during his presidency?",
    image: "images/adams.jpg",
    answers: {
      a: "James Buchanan",
      b: "Millard Fillmore",
      c: "Andrew Jackson",
      d: "John Quincy Adams",
    },
    correct: "d",
    fact: "journalist Anne Royall, considered one of the first female reporters in America, supposedly sat on his clothes while he swam so she could demand an interview, and he had no choice but to agree!",
  },
];

// before the logic can be created for the quiz, I must link html elements to my script. Then I can use them like building blocks.

const questionElement = document.getElementById("question"); // h2 element that will house each question.
const questionImage = document.getElementById("questionImage"); // image element to display each question's image.
const answerElements = {
  // the answerElements required an object since there are 4 choices, and is the element that is used to track the user input.
  a: document.getElementById("a"),
  b: document.getElementById("b"),
  c: document.getElementById("c"),
  d: document.getElementById("d"),
};

const answerLabels = {
  // the answerLabels are also required as this displays the answer text.
  a: document.querySelector('label[for="a"]'),
  b: document.querySelector('label[for="b"]'),
  c: document.querySelector('label[for="c"]'),
  d: document.querySelector('label[for="d"]'),
};

const questionFact = document.getElementById("factText");
const resultText = document.getElementById("resultText");

let currentQuestionIndex = 0; // this simply tracks the index of each question, and acts as the mechanism to distinguish each question.

//all elements have been linked so its time to create the logic to load the question.

function loadQuestion(index) {
  // using index as the parameter for each question.
  const q = quizData[index]; // making the quizData index a variable.
  questionElement.textContent = q.question; // take that html h2 tag named question and make its textContent equal quizData[0] question property.
  questionImage.src = q.image; // take the image html tag src and make it equal to quizData[0] image property.
  questionFact.textContent = q.fact;

  for (let key in q.answers) {
    //for in loop required for the answers object, key takes the value of the current property name (a,b,c,d).
    answerElements[key].checked = false; //on each iteration set the input to unchecked, so when a question is loaded selected answers are cleared.
    answerLabels[key].textContent = q.answers[key]; // take the label html element for answers and update the text to the value of each property.
  }
}

// utility function to get the user's selected answer
function getSelectedAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked'); // querySelector used to save the answer(input) if its checked.
  return selected ? selected.id : null; //ternary operator that returns the id(a,b,c,d) if selected, if not then return null.
}
//function to submit the selected answer
function submitAnswer() {
  const answer = getSelectedAnswer(); //new variable answer is the return from the getSelectedAnswer function.

  if (!answer) {
    //if there is no answer then return the alert and exit out of the function.
    alert("Select an answer...");
    return;
  }

  const correct = quizData[currentQuestionIndex].correct; //set correct variable to the "correct" property from the current question using quizData and the CQI
  if (answer === correct) {
    // if statement to handle logic for correct or incorrect answer.
    resultText.textContent = "Correct!";
    score++; // update the score variable with an increment.
  } else {
    resultText.textContent = `Answer: ${quizData[currentQuestionIndex].answers[correct]}`;
  }
  document.querySelector(".peripherals").style.display = "flex";
  document.querySelector(".factContainer").style.display = "block";
}

function onNextQuestion() {
  currentQuestionIndex++; //now its safe to move to the next question, increment 1 on CQI.
  if (currentQuestionIndex < quizData.length) {
    //does a check to see if CQI is less than the quizData length
    loadQuestion(currentQuestionIndex); //then loads the next question

    document.querySelector(".peripherals").style.display = "none";
    document.querySelector(".factContainer").style.display = "none";
  } else {
    // if the CQI failed the if statement and was a higher value than the quizData length then end the quiz.
    alert(`Quiz Finished! Your score: ${score} / ${quizData.length}`); // use template literal to display score out of quizData length.
  }
}
