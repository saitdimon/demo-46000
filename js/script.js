


// масив обектов
let questions = [
    {
        question: "Какой метод JavaScript используется для добавления нового элемента в конец массива?",
        options: ["add", "append", "push", "insert"],
        correctAnswer: "push"
    },
    {
        question: "Как звали первого прагромиста",
        options: ["Ада", "Игорь", "Леха", "Лилипут"],
        correctAnswer: "Ада"
    },
    {
        question: "Кто придумал js",
        options: ["Адага", "Бренданом", "Лируиг", "Автарит"],
        correctAnswer: "Бренданом"
    },
    {
        question: " кто ты ",
        options: ["лох", "лехыч", "бебрв ", "бебр"],
        correctAnswer: "бебр"
    },
    {
        question: "Как звали максима",
        options: ["Ада", "Игорь", "максим", "Лилипут"],
        correctAnswer: "максим"
    },
    {
        question: "кто создал 2389",
        options: ["47856а", "1233", "г", "дщдш"],
        correctAnswer: "47856а"
    }
]
let currentQuestion = 0 // текущий вопрос 
let correctAnswer = 0 // пр ответы 

let button = document.getElementById("submit");
let usernameInput = document.getElementById("username");
let username;
let bebr = document.querySelector(".bebr")
button.addEventListener('click', (e) => {
    bebr.style.display = "none";
})



// функция для отображения вопроса варианта ответа
function displayQuestion() {
    let questionElement = document.getElementById("question");
    // размещяем вопрос на станице
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    let optionsElement = document.getElementById("options"); // получиь для размищения кнрогпок
    optionsElement.innerHTML = ""; // очещяет содержитмаоеа блоук 

    // получить массив ответов 
    let optionsArray = questions[currentQuestion].options;

    // создать кнопки с вароиантами ответами  и привизать к ним ФУНКЦИЮ 

    optionsArray.forEach((option) => {
        let button = document.createElement("button");
        optionsElement.append(button);
        button.textContent = option;
        button.classList.add('glow-on-hover')
    })

    // добдвляенпм в аброботчик событи\я на блоук с кнопками 
    optionsElement.addEventListener('click', (e) => {
        // запись в переменнную в элемент накоторую тыкунулои 
        let target = e.target;
        console.log(target.textContent);
        //вызвать функцию переходиим к следущиму вопросу 
        nextQuestion(target.textContent);

    }, { once: true });
}
// функция перехода к следущиму вопатосу 

function nextQuestion(answer) {
    //если  кликнуть на правельный отвкет то  поделитсчяы 6на один сечтик правельтных ответогв 
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswer++;
    }
    currentQuestion++; // перейти кследущему вопросу
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

// фунция отобразженеие результата теста ата
function displayResult() {
    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
    let resultElement = document.getElementById("result");
    questionElement.style.display = "none"; // выключить видимось блоков ответов 
    optionsElement.style.display = "none"; // выключить видимось блоков ответов 
    resultElement.textContent = `Правильных ответов ${correctAnswer} из ${questions.length}`;
}



displayQuestion();