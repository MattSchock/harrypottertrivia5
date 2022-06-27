
// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is the name of the pub where dumbledores army is created",
    a: [{ text: "The Three broomsticks", isCorrect: false },
        { text: "The cleveland steamers", isCorrect: false },
        { text: "The Hogs head", isCorrect: true },
        { text: "The Leaky Cauldron", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Who found the room of requirement?",
    a: [{ text: "Ron", isCorrect: false, isSelected: false },
        { text: "Hermoine", isCorrect: false },
        { text: "Harry Potter", isCorrect: false },
        { text: "Neville", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Who kills Sirius Black?",
    a: [{ text: "Voldemort", isCorrect: false },
        { text: "Dobby the house elf", isCorrect: false },
        { text: "Bellatrix Lestrange", isCorrect: true },
        { text: "Lucius Malfoy", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Which death eater presuades Harry Potter to turn in his prophecy?",
    a: [{ text: "Voldemort", isCorrect: false },
        { text: "Dobby the house elf", isCorrect: false },
        { text: "Bellatrix Lestrange", isCorrect: false },
        { text: "Lucius Malfoy", isCorrect: true }
    ]

},
{
    id: 4,
    q: "How old was the kid that Dudley beat up at the start of the movie?",
    a: [{ text: "8", isCorrect: false },
        { text: "11", isCorrect: false },
        { text: "10", isCorrect: true },
        { text: "9", isCorrect: false }
    ]

},
{
    id: 5,
    q: "What place is used as Headquarters for the order of the phoenix",
    a: [{ text: "The room of requirement", isCorrect: false },
        { text: "Sirius Blacks house", isCorrect: true },
        { text: "The Hogs Head", isCorrect: false },
        { text: "Lucius Malfoy's butthole", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Who escorts Harry potter to his ministry hearing?",
    a: [{ text: "Voldemort", isCorrect: false },
        { text: "Professor Dumbledore", isCorrect: false },
        { text: "Ron Weasley", isCorrect: false },
        { text: "Arthur Weasley", isCorrect: true }
    ]

},
{
    id: 7,
    q: "Death Eaters have the dark mark on which arm?",
    a: [{ text: "Left", isCorrect: true },
        { text: "Right", isCorrect: false },
        { text: "tramp stamp", isCorrect: false },
        { text: "none", isCorrect: false }
    ]

},
{
    id: 8,
    q: "What is dumbledores full name",
    a: [{ text: "Albus Percival Wulfric Brian Dumbledore", isCorrect: true },
        { text: "Albus Wulfric Percival Brian Dumbledore", isCorrect: false },
        { text: "Albus Brian Wulfric Percival Dumbledore", isCorrect: false },
        { text: "Albus The Dong Dumbledore", isCorrect: false }
    ]

},
{
    id: 8,
    q: "Besides Harry, Who else can see Thestrals?",
    a: [{ text: "Cho Chang", isCorrect: false },
        { text: "Neville Longbottom", isCorrect: false },
        { text: "Albus the Dong Dumbledore", isCorrect: false },
        { text: "Luna Lovegood", isCorrect: true }
    ]

},
{
    id: 9,
    q: "Where did Harry and Cho Kiss for the first time?",
    a: [{ text: "The room of requirement", isCorrect: true },
        { text: "The three broomsticks", isCorrect: false },
        { text: "on their lips, you perv", isCorrect: false },
        { text: "In the hallway of Hogwarts", isCorrect: false }
    ]

},
{
    id: 10,
    q: "When was the movie released?",
    a: [{ text: "2006", isCorrect: false },
        { text: "2008", isCorrect: false },
        { text: "2005", isCorrect: false },
        { text: "2007", isCorrect: true }
    ]

},
{
    id: 11,
    q: "What is the name of the witness that Dumbledore calls at Harrys hearing",
    a: [{ text: "Voldemort", isCorrect: false },
        { text: "Mrs. Arabella Figg", isCorrect: true },
        { text: "Mr Cornabus Fleck", isCorrect: false },
        { text: "Mrs Augusta Longbottom", isCorrect: false }
    ]

},
]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 8) {
    id++;
    iterate(id);
    console.log(id);
}

})