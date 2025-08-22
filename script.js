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
  {
    question:
      "By which of these nicknames is U.S. President Zachary Taylor known?",
    image: "images/zachary-taylor.jpg",
    answers: {
      a: "Old Rough and Ready",
      b: "Old Buck",
      c: "Old Hickory",
      d: "The Great Emancipator",
    },
    correct: "a",
    fact: "Zachary Taylor (1784-1850) was an American military officer who served as the twelfth president of the United States. By the Mexican-American War, Taylor became a national hero for victories at Palo Alto, Resaca de la Palma, and Buena Vista, with newspapers and politicians praising his rugged bravery and action-oriented leadership.",
  },
  {
    question:
      "Which first and only U.S. President could speak eight foreign languages either partially or fluently?",
    image: "images/languages.jpg",
    answers: {
      a: "Zachary Taylor",
      b: "James Madison",
      c: "Andrew Jackson",
      d: "John Quincy Adams",
    },
    correct: "d",
    fact: "John Quincy Adams was a remarkable linguist, fluent in English, his native language, as well as French, German, Italian, and Spanish, which he learned and used extensively during his diplomatic service in Europe and Latin America. In addition, he was well-versed in Latin and Greek through his classical education, and he also knew Dutch from early exposure in New England and European contacts.",
  },
  {
    question:
      "The Cuban Missile Crisis of 1962 is considered the height of the Cold War where nuclear war seemed to be a hair breadth away. But Who was president during the Cuban Missile Crisis?",
    image: "images/P-2h_Neptune.jpg",
    answers: {
      a: "Richard Nixon",
      b: "John F. Kennedy",
      c: "Lyndon B. Johnson",
      d: "Dwight D. Eisenhower",
    },
    correct: "b",
    fact: "Intense negotiations took place between Kennedy and Soviet Premier Nikita Khrushchev. After days of careful diplomacy, the Soviets agreed to remove the missiles from Cuba. In return, the United States publicly pledged not to invade Cuba and secretly agreed to remove U.S. missiles from Turkey.",
  },
  {
    question:
      "World War 1 began in July 1914 but it wouldn't be until 1917 that America would join the war. Who was president during World War I?",
    image: "images/ww1.webp",
    answers: {
      a: "Warren G. Harding",
      b: "Calvin Coolidge",
      c: "Woodrow Wilson",
      d: "William Howard Taft",
    },
    correct: "c",
    fact: "The U.S. entered World War I in 1917 due to Germany’s unrestricted submarine warfare, the Zimmermann Telegram proposing a German-Mexican alliance, economic ties to the Allies, and President Wilson’s goal to “make the world safe for democracy,” leading Congress to declare war on April 6, 1917.",
  },
  {
    question:
      "There have been many odd pets that have shared the White House with presidents, even an Alligator! But which president had a pet raccoon named Rebecca at the White House?",
    image: "images/raccoon.jpg",
    answers: {
      a: "Calvin Coolidge",
      b: "Herbert Hoover",
      c: "Harry S. Truman",
      d: "Theodore Roosevelt",
    },
    correct: "a",
    fact: "Calvin Coolidge, the 30th president (1923–1929), was known for having a rather unconventional collection of pets at the White House, which included dogs, cats, birds, and even a wallaby. Originally, Rebecca was intended to be cooked and served as part of the Thanksgiving feast, a common practice at the time in some regions—but the Coolidges decided instead to keep her as a pet.",
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
