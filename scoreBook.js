const main = document.getElementById('main');
const display = document.getElementById('display')
const enter = document.getElementById('enter');
const addOne = document.getElementById('oneP');
const subOne = document.getElementById('oneN');
const four = document.getElementById('four');
const six = document.getElementById('six');
const no = document.getElementById('noBall');
const wide = document.getElementById('wide');
const wicket = document.getElementById('wicket');
const startMatch = document.getElementById('submit');
display.value=0;
showRuns.value=0;
showWickets.value=0;
let fallOfWicket="";
let ballCount=0;
let extra="";
let over=0;

function addDisplay(add){
    display.value += add;
    display.innerText = display.value;
}
function clearDisplay(){
    display.innerText = 0;
}
function wrapVariables(){
    let overData="";
    const currentOver = document.getElementById('currentOver');
    const showOver = document.getElementById('showOvers');
    const overInfo = document.getElementById('overStats');
    return function ballOverInfo(){
        console.log('ok');
        if(!extra)ballCount++;
        overData +=`${display.value} ${extra}"${fallOfWicket}`;
        if(!fallOfWicket || display.value){
            currentOver.innerText += `${display.value} ${extra}${fallOfWicket}"`;
        }else{
            currentOver.innerText += `${fallOfWicket}"`;
            fallOfWicket="";
        }
        extra="";
        display.value=0;
        display.innerText=0;
        if(ballCount == 6){
            ballCount=0;
            over++;
            const bowler = document.createElement('option');
            bowler.innerText= currentOver.innerText ;
            overInfo.append(bowler);
            console.log('one over');
            overData="";
            currentOver.innerText="";
        }
        showOver.innerText=`${over}.${ballCount}`
    }
}
const ballInOver = wrapVariables();

startMatch.addEventListener('dblclick',()=>{
    main.style.display='inline'
    startMatch.style.display='none';
})
function updateStats(){
    showRuns.value += display.value;
    showRuns.innerText = showRuns.value;
}

function enterData(){
    const showWickets = document.getElementById('showWickets');
    enter.addEventListener('dblclick',()=>{
       
       
        if(extra){
            updateStats();
            ballInOver();
            extra="";
            return;
        }
        if(fallOfWicket){
            showWickets.value += 1;
            showWickets.innerText = showWickets.value;
            battingTeam.style.display='inline'
            ballInOver();
        }
        else{
            updateStats();
            ballInOver();
        }
        
        
    })
}
enterData();

addOne.addEventListener('click',()=>{
    addDisplay(1);
})
subOne.addEventListener('click',()=>{
    addDisplay(-1);
})
four.addEventListener('click',()=>{
    addDisplay(4);
})
six.addEventListener('click',()=>{
    addDisplay(6);
})
wide.addEventListener('click',()=>{
    extra="wd";
    addDisplay(1);
})
no.addEventListener('click',()=>{
    extra="N";
    addDisplay(1);
})
wicket.addEventListener('click',()=>{
    fallOfWicket="*W";
    display.innerText='wicket'
    
})