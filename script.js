import {cQuizData, javaQuizData, javaScriptQuizData} from "./quizData.js";
let quizData = cQuizData;  // assigning user choiced quiz data 

let userName;
let userChoicedQuiz; 
let quizOptions = document.querySelectorAll(".quizOptions");

quizOptions.forEach((quizOption)=>{
    quizOption.addEventListener("click", () => {

        userName = document.getElementById("userName").value;
        if(checkInputGiven()){
            if(quizOption.innerHTML == "C Quiz"){
               quizData = cQuizData;
               userChoicedQuiz = "c";
            }
            else if(quizOption.innerHTML == "Java Quiz"){
                quizData = javaQuizData;
                userChoicedQuiz = "java";
            }
            else{
                quizData = javaScriptQuizData;
                userChoicedQuiz = "javaScript";
            }

            document.getElementById('loginPage').style.display = "none";
            document.getElementById('mainPage').style.display = "block";
            document.getElementById('footerContainer').style.display = "flex";  //instead of block
            loadPage();
        }  
    })
})

function checkInputGiven(){
    if(document.getElementById('userName').value == ""){
        document.getElementById('userName').style.boxShadow = "1px 1px 6px 0px red";
        return false;
    }
    else{
        if(userName.length >= 15){
            document.getElementById('userName').style.boxShadow = "1px 1px 6px 0px red";
            document.getElementById("userName").value = "";
            document.getElementById("userName").placeholder = "Enter small name";
            return false;
        }
        else if(checkAlradyNameExist(userName)){
            document.getElementById('userName').style.boxShadow = "1px 1px 6px 0px red";
            document.getElementById("userName").value = "";
            document.getElementById("userName").placeholder = "Name already exist";
            return false;
        }
        else{
            let capitalize = document.getElementById("userName").value;
            userName = capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
            return true;
        }
    }
}

function checkAlradyNameExist(userName){
    for (let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i); // names

        if(key == userName){
            return true;
        }
    }
    return false; 
}




// ======================= Main Page ===========================





let index = 0;
let score = 0;
let buttonClicked = false;
let counter = 0;
let answer;
let options = document.querySelectorAll(".options");
let icons = document.querySelectorAll(".icons");

function loadPage(){
    document.getElementById("question").innerHTML = `${index+1}.  ${quizData[index].question}`;
    document.getElementById("option1").innerHTML = quizData[index].option1;
    document.getElementById("option2").innerHTML = quizData[index].option2;
    document.getElementById("option3").innerHTML = quizData[index].option3;
    document.getElementById("option4").innerHTML = quizData[index].option4;
    answer = quizData[index].answer;

    options.forEach(option => option.style.background = "transparent");
    icons.forEach(icon => icon.style.display = "none");

    document.getElementById("questionCounter").innerHTML = `Questions:  ${index+1}/${quizData.length}`;
    document.getElementById("scoreCounter").innerHTML = `Score:  ${score}/${quizData.length}`;

    buttonClicked = false;
    checkOption();
}

function checkOption(){
    options.forEach((option)=>{
        option.addEventListener("click",()=>{
            if(buttonClicked == false){
                if(option.value == answer){
                    option.style.background = "linear-gradient(200deg, rgb(108 255 108),rgb(213 255 213))";
                    document.getElementById("scoreCounter").innerHTML = `Score:  ${++score}/${quizData.length}`;
                }
                else{
                    option.style.background = "linear-gradient(200deg, rgb(251 100 100), rgb(251, 206, 206))";
                    options.forEach((option)=>{
                        if(option.value == answer){
                            option.style.background = "linear-gradient(200deg, rgb(108 255 108),rgb(213 255 213))";
                        }
                    });
                }
                document.getElementById(`correctIcon${answer}`).style.display = "block";
                if(option.value != answer){
                    document.getElementById(`wrongIcon${option.value}`).style.display = "block";
                }
                buttonClicked = true;
            }
        });
    });
}

document.getElementById("next").addEventListener("click",()=>{
    if(buttonClicked == true){
        if((index+1) < quizData.length){
            index++;
            loadPage();
        }
        else{
            document.getElementById('mainPage').style.display = "none";
            document.getElementById('footerContainer').style.display = "none";
            
            scorePage(score);
        }
    } 
});






// ======================= Score Page ===========================




function scorePage(score){
    document.getElementById('scorePage').style.display = "block";
    

    if(score == quizData.length){
        document.getElementById("scoreInfo-name").innerHTML = `Awesome  ${userName}`;
    }
    else if(score >= quizData.length/2){
        document.getElementById("scoreInfo-name").innerHTML = `Good  ${userName}`;
    }
    else{
        document.getElementById("scoreInfo-name").innerHTML = `Nice try ${userName}`;
    }

    document.getElementById("scoreInfo-score").innerHTML = `You scored:  ${score}/${quizData.length}`;

    scoreBoard();
}

function scoreBoard(){
    let localStorageData = JSON.parse(localStorage.getItem(`${userChoicedQuiz}QuizRecords`)) || {};  // taking user choiced quiz records 
    localStorageData[userName] = score.toString();                                              // adding name and score in new o
    localStorage.setItem(`${userChoicedQuiz}QuizRecords`,JSON.stringify(localStorageData));  // adding object to localStorage
 
    let localStorageDataArray = Object.entries(localStorageData);           // convert object to array of objects
    localStorageDataArray.sort((a,b) => parseInt(b[1]) - parseInt(a[1]));   // sort in descending order
    localStorageData = Object.fromEntries(localStorageDataArray);           // convert array of objects to object

    let top5 = 0;
    for (let key in localStorageData) {
        if(top5 == 5){
            break;
        }

        if(localStorageData.hasOwnProperty(key)) {
            let value = localStorageData[key];
            addToScoreBoard(key, value);
            top5++;
        }
    }
}


function addToScoreBoard(key, value){
    let namesContainer = document.querySelector(".names");
    let scoreContainer = document.querySelector(".score");
    let serialNumContainer = document.querySelector(".serialNum");

    let names = [];
    let scores = [];
    let serialNum = [];

    serialNum[counter] = document.createElement("p");
    serialNum[counter].innerHTML = counter+1;

    names[counter] = document.createElement("p");
    names[counter].innerHTML = key;

    scores[counter] = document.createElement("p");
    scores[counter].innerHTML = value;

    namesContainer.appendChild(names[counter]);
    scoreContainer.appendChild(scores[counter]);
    serialNumContainer.appendChild(serialNum[counter]);

    counter++;
    
}
 


document.querySelector(".tryAgain").onclick = ()=>{
    location.reload();
}


hiddenButtons();
function hiddenButtons(){
    let cClicked = false;
    let javaClicked = false;
    let javaScriptClicked = false;

    document.getElementById("cQuiz").addEventListener("dblclick",()=>{
        cClicked = true;
    })
    document.getElementById("javaQuiz").addEventListener("dblclick",()=>{
        javaClicked = true;
    })
    document.getElementById("javaQuiz").addEventListener("dblclick",()=>{
        javaScriptClicked = true;
    })
    document.getElementById("quizHeading").addEventListener("dblclick",()=>{
        if(cClicked){
            localStorage.removeItem("cQuizRecords");
        }
        else if(javaClicked){
            localStorage.removeItem("javaQuizRecords");
        }
        else{
            localStorage.removeItem("javaScriptQuizRecords");
        }
        document.getElementById('userName').style.boxShadow = "1px 1px 4px -1px black";
        hiddenButtons();
    })
}

