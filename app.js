

const body = document.body;
const answerButtons = document.querySelectorAll('.card__content--btn');
const answerCards = document.querySelectorAll('.card__content--answer');
const form = document.querySelector('.form')
const tagList = document.querySelector('.tag__list')
const darkModusBtn = document.querySelector('.dark')
const questionTextarea = document.querySelector('#question');
const answerTextarea = document.querySelector('#answer');

let firstime = true;

const markButtons = document.querySelectorAll('.card__logo').forEach((button) => {
    
    button.addEventListener('click', (e) => {
        
        let whiteButton = 'http://127.0.0.1:5500/images/white-icon.png';
        let blackButton = 'http://127.0.0.1:5500/images/addicon.png';

       (button.src === whiteButton) 
            ? button.src = blackButton 
            : button.src = whiteButton;
    })
})  
answerButtons.forEach((answerButtonEl) => {
    

    answerButtonEl.addEventListener('click', (e) => {
        const answerCardEl = answerButtonEl.nextElementSibling;
     
            answerCardEl.classList.toggle('hidden')    
            
            answerCardEl.classList.contains('hidden') 
                ? answerButtonEl.textContent = 'Show Answer!'
                :  answerButtonEl.textContent = 'Hide Answer!'; 
    });
})
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
       
        const data = new FormData(e.target);
    
        const SIMPLIFIED_FORM = Object.fromEntries(data);
    
        
        const question = document.createElement('p')
        question.classList.add('.card__content--question')
        question.style.fontSize = '45px'
        question.textContent = SIMPLIFIED_FORM.question; 
    
        const answer = document.createElement('p')
        answer.classList.add('card__content--answer')
        answer.textContent = SIMPLIFIED_FORM.answer; 
    
        const tag = document.createElement('p')
        tag.classList.add('card__content--tag')
        tag.textContent = SIMPLIFIED_FORM.tag; 
    
        const cardContainer = document.createElement('DIV');
    
        cardContainer.append(question, answer, tag);
        cardContainer.classList.add('card')
        tagList.append(cardContainer)

        questionTextarea.textContent = '';
        answerTextarea.textContent = '';
    });

}
if(answerTextarea) {
    answerTextarea.addEventListener('input',(e) => {
        const parent = answerTextarea.parentElement;
        countingTypeLength(e.target.value, 150, parent)
        colorBorders(answerTextarea, e.target.value)
      
    })
}
if(answerTextarea) {
    questionTextarea.addEventListener('input',(e) => {
        const parent = questionTextarea.parentElement;
        countingTypeLength(e.target.value, 76, parent)
        colorBorders(questionTextarea, e.target.value)
    })
}




function countingTypeLength(infoText, limit, parentPath) {
    const answerContainer = parentPath;
    const resultMessage = document.createElement('p');
    resultMessage.classList.add('form__length--tag')
  
   let info = infoText;
   const answerLength = info.length
   const answerInputLimit = limit;
   let result = answerInputLimit - answerLength;
  
   answerContainer.appendChild(resultMessage);
   const prevElement = resultMessage.previousSibling;
  

    (firstime) 
            ? firstime = false 
            : prevElement.remove();

            resultMessage.textContent =  `You have ${result} characters left!`;

    if(answerLength < 1) {
        resultMessage.classList.add('hidden')
    }
};

function colorBorders(element, lengthEl) {

    if(lengthEl.length > 10) {
        element.style.border = "thick solid yellow";
    }
    if(lengthEl.length > 15) {
        element.style.border = "thick solid orange";
    }
    if(lengthEl.length > 25) {
        element.style.border = "thick solid blue";
    }
    if(lengthEl.length > 30) {
        element.style.border = "thick solid green";
    }
    if(lengthEl.length === 0) {
        element.style.border = 'none';
    }
    
   
}

darkModusBtn.addEventListener('click', () => {
    darkMode(darkModusBtn)
})

function darkMode(e) {

    console.log(e)
    let normalModus = 'http://127.0.0.1:5500/images/icons8-dark-mode-64.png';
    let darkModus = 'http://127.0.0.1:5500/images/iconcolor.png';

        if(e.src === normalModus) {
            e.src = darkModus 
            body.classList.remove('color')
        } else {
            e.src = normalModus 
            body.classList.add('color') 
        }
}
