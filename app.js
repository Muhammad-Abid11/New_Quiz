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
var wrong = 0;
next = (e) => {
    if (qArray[count].answer === e.innerHTML) {
        // console.log("next working")
        score++;
    }
    else (
        // console.log("Failed")
        wrong++
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
    // console.log("start show question working " + count)

    //Question Text
    var question = document.getElementById("question");
    question.innerHTML = qArray[count].question;
    //Question Option
    var options = document.getElementsByClassName("btn");
    for (var i = 0; i <= 3; i++) {
        options[i].innerHTML = qArray[count].options[i];
    }
    // console.log("show question working " + count)

}


clearScreen = () => {

    var content = document.getElementById("content");
    content.setAttribute("id", "content_hide");
    // Result Display
    var result_hide = document.getElementById("result_hide");
    result_hide.setAttribute("id", "result_display");
    var heading = document.getElementById("heading");
    var h4 = document.createElement("h4");
    var text_h4 = document.createTextNode("You got the " + score + " out of " + qArray.length);
    h4.appendChild(text_h4);
    heading.appendChild(h4);
}







