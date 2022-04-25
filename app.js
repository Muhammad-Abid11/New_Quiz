var qArray = [
    {
        question: "Q: What is the color of blood when it's inside your body?",
        answer: "red",
        options: [
            "green",
            "blue",
            "orange",
            "red"
        ]
    },
    {
        question: "Q: Which is the fastest bird in the world?",
        answer: "Falcon",
        options: [
            "Bald",
            "Raven",
            "Falcon",
            "Hummingbird",
        ]
    },
    {
        question: "A figure with 3 sides is known as a?",
        answer: "Triangle ",
        options: [
            "Triangle ",
            "square",
            "oval",
            "rectangle"
        ]
    },
    {
        question: "Which is the largest three-digit number?",
        answer: "999",
        options: [
            "453",
            "999",
            "245",
            "444",
        ]
    },
    {
        question: "One kilogram equals how many grams?",
        answer: "1000",
        options: [
            "1000",
            "745",
            "900",
            "769",
        ]
    },
];
var count = 0;
var score = 0;
var num = qArray.length;

next = (e) => {
    if (qArray[count].answer === e.innerHTML) {
        console.log("next working")
        score++;
    }
    else (
        console.log("Failed")
    )
    count++;
    if (count < num) {
        showQuestion();
    }
    else {
        clearScreen();
    }

}

showQuestion = () => {
    console.log("start show question working " + count)

    //Question Text
    var question = document.getElementById("question");
    question.innerHTML = qArray[count].question;
    //Question Option
    var options = document.getElementsByClassName("btn");
    for (var i = 0; i <= 3; i++) {
        options[i].innerHTML = qArray[count].options[i];
    }
    console.log("show question working " + count)

}


clearScreen = () => {

    var content = document.getElementById("content");
    content.setAttribute("id", "hide");
    // Result Display
    var heading = document.getElementById("heading");
    var h1 = document.createElement("h1");
    var h1Text = document.createTextNode("Result");
    h1.appendChild(h1Text);
    heading.appendChild(h1);

}