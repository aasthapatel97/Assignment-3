// 2. Create an array of question and answer objects. It should be at least three different objects.
let myFlashcards = [
    {
        question: 'What is the capital of India?',
        answer: 'New Delhi',
        img: "Answer1.jpeg",
    },
    {
        question: 'Which is the National Bird of India?',
        answer: 'Peacock'
        img: "Answer2.jpeg",
    },
    {
        question: 'When does India celebrate its independence day?',
        answer: '15th August'
        img: "Answer3.jpeg",
    }
];

// card index
currentIndex = 0;

// 3. Use iteration to cycle through the array and print the question and answer to the console. 
function printFlashcards(cards) {
    i = 0;
    while(i < cards.length )
    {
        console.log((i + 1) + ': Question: ' + cards[i].question + ', Answer: ' + cards[i].answer);
        i++;
    }
}

printFlashcards(myFlashcards);

// when select card, move to next question
function onSelectCard() {
    console.log("OnSelectCard");
    currentIndex++;
    if( currentIndex >= myFlashcards.length )
        currentIndex = myFlashcards.length - 1;

    displayCard(currentIndex);
}

// display question
function displayCard(index) {
    document.getElementById('number').innerText = 'Question #' + (index + 1);
    document.getElementById('question').innerText = myFlashcards[index].question;
    document.getElementById('tooltip').style.display = 'none';
    document.getElementById('answer').innerText = myFlashcards[currentIndex].answer;
}

// when select question, display answer
//function onSelectQuestion(event) {
    //event.stopPropagation();
    //document.getElementById('answer').innerText = myFlashcards[currentIndex].answer;
//}

// when hover on question, show tooltip 
//function onMouseOver() {
  //  document.getElementById('tooltip').style.display = 'block';
//}

// when leave on question, hide tooltip 
//function onMouseOut() {
  //  document.getElementById('tooltip').style.display = 'none';
//}


displayCard(currentIndex);
