let sysList=[];
let usersList=[];
let started=false;
let level=0;
let btns=["red","green","ligthgreen","orange"];
let higScore=0;

let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("Game is started");
        started=true;
        levelUp();
    }
});

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function overFlash(){
    let body=document.querySelector("body");
    body.classList.add("overflash");
    setTimeout(function(){
        body.classList.remove("overflash");
    },100)
}
function levelUp(){
    usersList=[];
    level++;
    h2.innerText=`Level${level}`;

    randIndex=Math.floor(Math.random() * 4);
    randButton=btns[randIndex];
    randColor=document.querySelector(`.${randButton}`);
    sysList.push(randButton);
    console.log(`game list ${sysList}`);
    flash(randColor);

}

function checkAns(index){
    if(usersList[index]==sysList[index])
    {
        if(usersList.length==sysList.length)
        {
            levelUp();
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score is ${level}<br> Press any key to restart`;
        if(level>higScore)
        {
            higScore=level;
            let h3=document.querySelector("h3");
            h3.innerText=`Highest Score = ${level}`;
        }
        // reset();
        overFlash();
        sysList=[];
        usersList=[];
        started=false;
        level=0;
    }
}

function clickedBtn(){
    let btn=this;
    flash(btn);
    userColor=btn.getAttribute("id");
    usersList.push(userColor);
    // console.log(`user list ${usersList}`);
    checkAns(usersList.length-1)
}
let allBtns=document.querySelectorAll(".inner");
for(let btn of allBtns)
{
    btn.addEventListener("click",clickedBtn);
}

// function reset(){
//     sysList=[];
//     usersList=[];
//     started=false;
//     level=0;
// }