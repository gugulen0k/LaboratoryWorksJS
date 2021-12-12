(function(){
    function buildQuiz(){
        const output = [];
        questions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];

                for(let letter in currentQuestion.answers){
                    answers.push(
                        `<label>
                             <input type="radio" name="question${questionNumber}" value="${letter}">
                             ${letter} :
                             ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }

                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );

        quizContainer.html(output.join(''));
    }

    function showResults(){
        const answerContainers = $('.answers');
        let numCorrect = 0;
        questions.forEach( (currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            }
            else{
                answerContainers[questionNumber].style.color = 'red';
            }
        });
        resultsContainer.html(`${Math.round((numCorrect / questions.length) * 100)}% correct answers`)
    }

    const quizContainer = $('#quiz');
    const resultsContainer = $('#results');
    const submitButton = $('#submit');
    const questions = [
        {
            question: "Who invented JavaScript?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich",
                d: "Bill Gates",
                e: "Mark Zuckerberg"
            },
            correctAnswer: "c"
        },
        {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "npm",
                c: "TypeScript",
                d: "Redux Toolkit",
                e: "React"
            },
            correctAnswer: "b"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint",
                e: "Nothing"
            },
            correctAnswer: "d"
        }
    ];

    // Kick things off
    buildQuiz();

    // Event listeners
    submitButton.on('click', showResults);
})();

