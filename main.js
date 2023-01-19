const qNum = document.getElementById('questionNumber')
const qQuestion = document.getElementById('question')
const qQuestion2 = document.getElementsByClassName('questions')[0]
const sbtnElement = document.getElementById('sbtn')
// const json = questions.json


// readTextFile("./questions.json", function(text){
//     var data = JSON.parse(text);
//     console.log(data);
// });


fetch('./questions.json')
    .then((response) => response.json())
    .then((data) =>{
        for(const question of data) {
            console.log(data)
            addQuestion(question.QuestionNumber, question.Question)
        }

        
    })


    let questions = []

    function addQuestion(QuestionNumber, Question, ) {
        const qNumElement = document.createElement('div')
        qNumElement.classList.add('card', 'mb-3')

        qNumElement.innerHTML = `
            <div class = "card-body">
                <h1>${QuestionNumber}</h1>
                <p>${Question}</p> 
                <input type="text" n>
            </div>       
        `

        // sbtnElement.addEventListener('click', (event)=>{
        //     if(${Awnser} != )
        // })

        qQuestion2.appendChild(qNumElement)
    }

    

