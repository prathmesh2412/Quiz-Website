const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which programming language is known for its snake mascot?",
        answers: [
            { text: "JavaScript", correct: false },
            { text: "Python", correct: true },
            { text: "C++", correct: false },
            { text: "PHP", correct: false },
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "What does a programmer say when they’re stuck?",
        answers: [
            { text: "Help!", correct: false },
            { text: "I need a break!", correct: false },
            { text: "Let me Google that!", correct: true },
            { text: "I’ll debug it later", correct: false },
        ]
    },
    {
        question: "Why did the computer break up with the internet?",
        answers: [
            { text: "Too much cache", correct: false },
            { text: "There was no connection", correct: true },
            { text: "It was tired of buffering", correct: false },
            { text: "The signal was weak", correct: false },
        ]
    },
    {
        question: "Why do girls have such great memory?",
        answers: [
            { text: "Because they remember every detail", correct: false },
            { text: "They keep every receipt", correct: false },
            { text: "They actually listen", correct: false },
            { text: "To remind boys what they forgot", correct: true },
        ]
    },
    
    {
        question: "What do you call a computer that sings?",
        answers: [
            { text: "A soprano", correct: false },
            { text: "A Dell", correct: false },
            { text: "A musical device", correct: false },
            { text: "A rock star", correct: true },
        ]
    },
    {
        question: "What does a cloud wear under his raincoat?",
        answers: [
            { text: "A thunder", correct: false },
            { text: "A lightning bolt", correct: false },
            { text: "A thunderstorm", correct: true },
            { text: "A Wi-Fi router", correct: false },
        ]
    },
    {
        question: "Why don’t skeletons fight each other?",
        answers: [
            { text: "They don’t have the guts", correct: true },
            { text: "They are too afraid", correct: false },
            { text: "They are always bone tired", correct: false },
            { text: "They have no backbone", correct: false },
        ]
    },
    {
        question: "Why can’t you trust an atom?",
        answers: [
            { text: "They make up everything", correct: true },
            { text: "They’re too small to see", correct: false },
            { text: "They’re always up to something", correct: false },
            { text: "They like to bond", correct: false },
        ]
    },
    {
        question: "What did the one hat say to the other?",
        answers: [
            { text: "You’re a real cap-tivating friend", correct: false},
            { text: "Stay here, I'm going on ahead!", correct: true },
            { text: "It’s a top-hat situation", correct: false },
            { text: "I’m head over heels for you", correct: false },
        ]
    },
    {
        question: "What did the paper say to the pencil?",
        answers: [
            { text: "I’m a bit torn", correct: false },
            { text: "You’re drawing me in", correct: false },
            { text: "You’ve got a point", correct: false },
            { text: "I’m a bit tornI’m feeling a little sketchy", correct: true },
        ]
    },
    {
        question: "Why don’t eggs tell jokes?",
        answers: [
            { text: "They crack up", correct: true },
            { text: "They are too scrambled", correct: false },
            { text: "They don't have yolk", correct: false },
            { text: "They can’t find their shells", correct: false },
        ]
    },
    {
        question: "What’s orange and sounds like a parrot?",
        answers: [
            { text: "A carrot", correct: true },
            { text: "A pumpkin", correct: false },
            { text: "A marigold", correct: false },
            { text: "A banana", correct: false },
        ]
    },
    {
        question: "Why did the coffee file a police report?",
        answers: [
            { text: "It got mugged", correct: true },
            { text: "It was too strong", correct: false },
            { text: "It spilled the beans", correct: false },
            { text: "It got roasted", correct: false },
        ]
    },
    {
        question: "What did the ocean say to the beach?",
        answers: [
            { text: "Nothing, it just waved", correct: true },
            { text: "You rock!", correct: false },
            { text: "I need to sea you", correct: false },
            { text: "I’m shore you’ll like it", correct: false },
        ]
    },
    {
        question: "What do you get when you cross a snowman and a vampire?",
        answers: [
            { text: "A chill vampire", correct: false },
            { text: "A cold-blooded creature", correct: false },
            { text: "Frostbite", correct: true },
            { text: "Frozen blood", correct: false },
        ]
    }
];


 
 const startButton = document.getElementById("start-btn"); // Start button
 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");
 const timerElement = document.getElementById("time");
 
 let currentQuestionIndex = 0;
 let score = 0;
 let timeLeft = 15;
 let timer;
 
 const backgroundMusic = new Audio("sounds/703713__zhr__chill-background-music-2.wav");
 const correctSound = new Audio("sounds/644943__craigscottuk__quiz-gameshow-correct-ding-03.mp3");
 const incorrectSound = new Audio("sounds/587253__beetlemuse__dats-wrong.wav");
 const timesUpSound = new Audio("sounds/335909__littlerainyseasons__times-up.wav");
 
 // Function to start the quiz when Start button is clicked
 startButton.addEventListener("click", function() {
    startQuiz();
    startButton.style.display = "none";  // Hide the start button
    document.querySelector(".quiz").style.display = "block";  // Show the quiz
    backgroundMusic.play().catch((error) => {
        console.log("Error playing background music:", error); // Log if there's an error
    });
 });
 
 function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    resetTimer(); // Reset and start the timer
 }
 
 // Function to show the current question
 function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
 
    resetTimer(); // Reset and start the timer when a new question is shown
 }
 
 function resetTimer() {
    timeLeft = 15; // Reset timer to 15 seconds
    timerElement.innerText = timeLeft; // Update the display
    if (timer) {
        clearInterval(timer); // Clear any existing timer
    }
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showTimeUp();
        }
    }, 1000);
 }
 
 function showTimeUp() {
    timesUpSound.play(); // Play "time's up" sound
    questionElement.innerHTML = "Time's up!";
    nextButton.style.display = "block";
 }
 
 function resetState() {
    clearInterval(timer); // Stop the timer
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }
 
 function selectAnswer(e) {
    clearInterval(timer); // Stop the timer when an answer is selected
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        correctSound.play(); // Play correct answer sound
        selectedBtn.classList.add("correct");
        score++;
    } else {
        incorrectSound.play(); // Play incorrect answer sound
        selectedBtn.classList.add("incorrect");
    }
 
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }
 
 function showScore() {
    resetState();
    backgroundMusic.pause(); // Stop music at the end
    backgroundMusic.currentTime = 0; // Reset music to start
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }
 
 function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
 }
 
 nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz(); // Restart quiz
    }
 });
 