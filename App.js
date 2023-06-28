const questions = [
    {
        'que': 'Which of the following is the markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'a',
    },
    {
        'que': 'What is the cashcadding style sheet',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'b',
    },
    {
        'que': 'what is the highly secure language',
        'a': 'HTML',
        'b': 'C++',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'b',
    },
    {
        'que': 'What is the object oreanted programing language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Java',
        'correct': 'd',
    }
]
let index = 0;
let totl = questions.length;
let right = 0,
    wrong = 0;
const quesBox = docoment.getElementById("quesBox")
const optionInputs = docoment.quarySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = ' ${index+1}) ${data.que}';
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
       right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                return input.value;
            }

        }
        
    )
    
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}
   
const endQuiz = () => {
    docoment.getElementById("box").innerHTML = 
       <h3> Thanku for playing Quiz </h3>

}

// inital call
loadQuestion();