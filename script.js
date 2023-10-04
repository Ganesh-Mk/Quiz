import {cQuizData, javaQuizData, javaScriptQuizData, evsAllQuizData} from "./quizData.js";
let quizData;  // assigning user choiced quiz data 



let evsOptions = document.querySelectorAll(".evsOptions");
let evsQuizData;
let numeberOfQuiz = 1; 

let userName;
let userChoicedQuiz = "evs"; 
let fontSizeControl = false;
let quizOptions = document.querySelectorAll(".quizOptions");


let index = 0;
let score = 0;
let buttonClicked = false;
let counter = 0;
let answer;
let options = document.querySelectorAll(".options");
let icons = document.querySelectorAll(".icons");

addButtonsClick();
function addButtonsClick(){
    quizOptions.forEach((quizOption)=>{
        quizOption.addEventListener("click", () => {

            icons.forEach(icon => icon.style.display = "none"); // for icon glitch
            
            userName = document.getElementById("userName").value;
            if(checkInputGiven()){
                if(quizOption.value == "c"){
                   quizData = cQuizData;
                   userChoicedQuiz = "c";
                }
                else if(quizOption.value == "java"){
                    quizData = javaQuizData;
                    userChoicedQuiz = "java";
                }
                else if(quizOption.value == "javaScript"){
                    quizData = javaScriptQuizData;
                    userChoicedQuiz = "javaScript";
                }
                else{
                    quizData = evsAllQuizData;
                    userChoicedQuiz = "evs";
                    document.getElementById('loginPage').style.display = "none";
                    document.getElementById('evsPage').style.display = "block";
                    document.getElementById('mainPage').style.display = "none";
                    document.getElementById('footerContainer').style.display = "none";  //instead of block
                    fontSizeControl = true;
                    evsQuizPage();
                }

                if(quizOption.innerHTML != "EVS Quiz"){
                    document.getElementById('loginPage').style.display = "none";
                    document.getElementById('mainPage').style.display = "block";
                    document.getElementById('footerContainer').style.display = "flex";  //instead of block
                    loadPage();
                }
            }  
        })
    })
}







// EVS Quiz Page


function evsQuizPage(){
    evsOptions.forEach((evsOption)=>{
        evsOption.addEventListener("click", () => {

            if(evsOption.value == "50Quiz"){
                evsQuizData = evsAllQuizData.slice(0, 50); 
            }
            else if(evsOption.value == "100Quiz"){
                evsQuizData = evsAllQuizData.slice(0, 100); 
            }
            else if(evsOption.value == "250Quiz"){
                evsQuizData = evsAllQuizData.slice(0, 250); 
            }
            else{
                let RandNum = Math.floor(Math.random() * 240);
                evsQuizData = evsAllQuizData.slice(RandNum, RandNum+10);
            }

            document.getElementById('evsPage').style.display = "none";
            document.getElementById('mainPage').style.display = "block";
            document.getElementById('footerContainer').style.display = "flex";
            
            quizData = evsQuizData;
            console.log(evsQuizData);

            document.getElementById('evsPage').style.display = "none";
            document.getElementById('loginPage').style.display = "none";
            document.getElementById('mainPage').style.display = "block";
            document.getElementById('footerContainer').style.display = "flex";  //instead of block

            userChoicedQuiz == "evs";
            loadPage();
        })
    })
}


function checkInputGiven(){
    icons.forEach(icon => icon.style.display = "block"); // for icon glitch

    if(document.getElementById('userName').value == ""){
        document.getElementById('userName').style.boxShadow = "1px 1px 6px 0px red";
        document.getElementById('userName').value == "Unknown"
        userName = "Unknown";
        return true;
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







function loadPage(){
    document.getElementById("question").innerHTML = `${index+1}.  ${quizData[index].question}`;
    document.getElementById("option1").innerHTML = quizData[index].option1;
    document.getElementById("option2").innerHTML = quizData[index].option2;
    document.getElementById("option3").innerHTML = quizData[index].option3;
    document.getElementById("option4").innerHTML = quizData[index].option4;
    answer = quizData[index].answer;

    options.forEach(option => option.style.background = "transparent");
    icons.forEach(icon => icon.style.display = "none");

    if(fontSizeControl == true){
        let bigSizeOptionQuiz = [11, 47, 217, 225, 227];
        let bigSizeQuestionQuiz = [144, 145, 213];

        if (bigSizeOptionQuiz.includes(index)) {
            options.forEach(option => option.style.fontSize = "0.82rem");
        }
        else{
            options.forEach(option => option.style.fontSize = "1rem");
        }

        if (bigSizeQuestionQuiz.includes(index)) {
            document.getElementById("question").style.fontSize = "0.8rem";
        }
        else{
            document.getElementById("question").style.fontSize = "1rem";
        }
    }

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
                    option.style.background = "linear-gradient(200deg, rgb(251 100 100 / 70%), rgb(250 197 197))";
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


nextButton();
function nextButton(){
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
}




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
    if(fontSizeControl == true){  // entered inside EVS quiz
        document.getElementById("top5Text").innerHTML = "top 5 in EVS";
    }

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

let names = [];
let scores = [];
let serialNum = [];

function addToScoreBoard(key, value){
    let namesContainer = document.querySelector(".names");
    let scoreContainer = document.querySelector(".score");
    let serialNumContainer = document.querySelector(".serialNum");



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
 
tryAgainButton();
function tryAgainButton(){
    document.querySelector(".tryAgain").onclick = ()=>{
        location.reload();
    }
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















