const startButton = document.getElementById("startButton");
        const nextButton = document.getElementById("nextButton");
        const quiz = document.getElementById("quiz");
        const question = document.getElementById("question");
        const answers = document.getElementById("answers");
        const loader = document.getElementById("loader");
        const progressBar = document.querySelector(".progress-bar");
        let questionIndex = 0;
        let userAnswers = [];

        const questions = [{
                question: "What's your mood today?",
                answers: ["Optimistic", "Tired", "Stressed"]
            },
            {
                question: "What's the weather like outside?",
                answers: ["Sunny and warm", "Cool and windy", "Rainy and cold"]
            },
            {
                question: "What is your energy level?",
                answers: ["High", "Medium", "Low"]
            },
            {
                question: "How many hours did you sleep last night?",
                answers: ["More than 8 hours", "From 6 to 8 hours", "Less than 6 hours"]
            },
            {
                question: "What have you been doing for the last hour?",
                answers: ["Worked/studied", "Rested/had fun", "Cooked/cleaned"]
            },
            {
                question: "What do you prefer in the morning?",
                answers: ["Coffee", "Tea", "Green Smoothie"]
            },
            {
                question: "What do you want to get from a cup of tea?",
                answers: ["Cheerfulness and energy", "Relaxation and calmness", "Cleansing and health"]
            },
            {
                question: "How much time can you devote to preparing tea?",
                answers: ["A few minutes", "About 10 minutes", "No time, need a quick alternative"]
            },
            {
                question: "Which scent is your favorite?",
                answers: ["Floral", "Fruity", "Herbal"]
            },
            {
                question: "What do you feel most right now?",
                answers: ["Striving for excellence", "Desire for rest and relaxation", "Need for balance and harmony"]
            },
            {
                question: "What is your attitude towards tea?",
                answers: ["I love it and drink it often", "I drink it sometimes, but I don’t prefer it", "I don’t drink at all"]
            },
            {
                question: "What is most important to you when choosing tea?",
                answers: ["Quality and taste", "Health benefits", "Quick cooking"]
            }
        ];

        startButton.addEventListener("click", startQuiz);
        nextButton.addEventListener("click", showNextQuestion);

        function startQuiz() {
            startButton.classList.add("hidden");
            quiz.classList.remove("hidden");
            showQuestion();

            nextButton.textContent = "Next";
            nextButton.removeEventListener("click", showResult);
        }

        function showQuestion() {
            const currentQuestion = questions[questionIndex];
            question.textContent = currentQuestion.question;
            answers.innerHTML = "";
            currentQuestion.answers.forEach((answer, index) => {
                const div = document.createElement("div");
                div.textContent = answer;
                div.classList.add("answer");
                div.dataset.answer = `answer${index + 1}`;
                answers.appendChild(div);
            });
        }

        function showNextQuestion() {
            const selectedAnswer = document.querySelector(".answer.selected");
            if (!selectedAnswer) {
                return;
            }
            userAnswers.push(selectedAnswer.textContent);
            questionIndex++;
            if (questionIndex < questions.length) {
                showQuestion();
                updateProgressBar();
                if (questionIndex === questions.length - 1) {
                    nextButton.textContent = "Finish";
                    nextButton.removeEventListener("click", showNextQuestion);
                    nextButton.addEventListener("click", showResult);
                }
            } else {
                showResult();
            }
        }

        function updateProgressBar() {
            const progress = (questionIndex / questions.length) * 100;
            progressBar.style.width = `${progress}%`;
            progressBar.setAttribute("aria-valuenow", progress);
        }

        function showResult() {
            const resultContainer = document.createElement("div");
            resultContainer.classList.add("mt-5");
            const resultHeader = document.createElement("h2");
            resultHeader.textContent = "We recommend you try the following tea:";
            const resultTea = document.createElement("p");
            resultTea.textContent = determineTea();
            resultContainer.appendChild(resultHeader);
            resultContainer.appendChild(resultTea);
            quiz.innerHTML = "";
            quiz.appendChild(resultContainer);
        }

        function determineTea() {
            const teaVotes = {
                "Green tea": 0,
                "Black tea": 0,
                "Herbal tea": 0
            };

            userAnswers.forEach(answer => {
                switch (answer) {
                    case "Optimistic":
                        teaVotes["Green tea"]++;
                        break;
                    case "Tired":
                        teaVotes["Black tea"]++;
                        break;
                    case "Stressed":
                        teaVotes["Herbal tea"]++;
                        break;
                    case "Sunny and warm":
                        teaVotes["Green tea"]++;
                        break;
                    case "Cool and windy":
                        teaVotes["Black tea"]++;
                        break;
                    case "Rainy and cold":
                        teaVotes["Herbal tea"]++;
                        break;
                    case "High":
                        teaVotes["Green tea"]++;
                        break;
                    case "Medium":
                        teaVotes["Black tea"]++;
                        break;
                    case "Low":
                        teaVotes["Herbal tea"]++;
                        break;
                    case "More than 8 hours":
                        teaVotes["Green tea"]++;
                        break;
                    case "From 6 to 8 hours":
                        teaVotes["Black tea"]++;
                        break;
                    case "Less than 6 hours":
                        teaVotes["Herbal tea"]++;
                        break;
                    case "Worked/studied":
                        teaVotes["Green tea"]++;
                        break;
                    case "Rested/had fun":
                        teaVotes["Black tea"]++;
                        break;
                    case "Cooked/cleaned":
                        teaVotes["Herbal tea"]++;
                        break;
                    case "Coffee":
                        teaVotes["Black tea"]++;
                        break;
                    case "Tea":
                        teaVotes["Green tea"]++;
                        break;
                    case "Green Smoothie":
                        teaVotes["Herbal tea"]++;
                        break;
                    case "Cheerfulness and energy":
                        teaVotes["Green tea"]++;
                        break;
                    case "Relaxation and calmness":
                        teaVotes["Black tea"]++;
                        break;
                    case "Cleansing and health":
                        teaVotes["Herbal tea"]++;
                        break;
                    case "A few minutes":
                        teaVotes["Green tea"]++;
                        break;
                    case "About 10 minutes":
                        teaVotes["Black tea"]++;
                        break;
                    case "No time, need a quick alternative":
                        teaVotes["Herbal tea"]++;
                        break;
                    case "Floral":
                        teaVotes["Green tea"]++;
                        break;
                    case "Fruity":
                        teaVotes["Black tea"]++;
                        break;
                    case "Herbal":
                        teaVotes["Herbal tea"]++;
                        break;
                    case "Striving for excellence":
                        teaVotes["Green tea"]++;
                        break;
                    case "Desire for rest and relaxation":
                        teaVotes["Black tea"]++;
                        break;
                    case "Need for balance and harmony":
                        teaVotes["Herbal tea"]++;
                        break;
                    case "I love it and drink it often":
                        teaVotes["Green tea"]++;
                        break;
                    case "I drink it sometimes, but I don’t prefer it":
                        teaVotes["Black tea"]++;
                        break;
                    case "I don’t drink at all":
                        teaVotes["Herbal tea"]++;
                        break;
                    case "Quality and taste":
                        teaVotes["Green tea"]++;
                        break;
                    case "Health benefits":
                        teaVotes["Black tea"]++;
                        break;
                    case "Quick cooking":
                        teaVotes["Herbal tea"]++;
                        break;
                    default:
                        break;
                }
            });

            let recommendedTea = "";
            let maxVotes = 0;
            for (const [tea, votes] of Object.entries(teaVotes)) {
                if (votes > maxVotes) {
                    maxVotes = votes;
                    recommendedTea = tea;
                }
            }

            return recommendedTea;
        }

        answers.addEventListener("click", function(event) {
            const clickedElement = event.target;
            if (clickedElement.classList.contains("answer")) {
                if (clickedElement.classList.contains("selected")) {
                    clickedElement.classList.remove("selected");
                } else {
                    const allAnswers = document.querySelectorAll(".answer");
                    allAnswers.forEach(answer => {
                        answer.classList.remove("selected");
                    });
                    clickedElement.classList.add("selected");
                }
            }
        });