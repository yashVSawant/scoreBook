const main = document.getElementById('main');
const display = document.getElementById('display');
const input = document.getElementById('input');
const enter = document.getElementById('enter');
const no = document.getElementById('noBall');
const wide = document.getElementById('wide');
const bies = document.getElementById('bies');
const wicket = document.getElementById('wicket');
const startMatch = document.getElementById('submit');
const showWickets = document.getElementById('showWickets');
const start = document.getElementById('start');
const startPage = document.getElementById('startPage');
const nextInning = document.getElementById('next');
const end = document.getElementById('end');
const InputMaxOvers = document.getElementById('maxOvers');

let maxOvers

let inning = 1;
let fallOfWicket="";
let ballCount=0;
let extra="";
let over=0;
function refresh(){
    display.value="";
    showRuns.value=0;
    showRuns.innerText=0
    showWickets.value =0;
    showWickets.innerText=0
    over=0;
    ballCount=0;
    fallOfWicket="";
    extra="";
}
refresh();

function addDisplay(extra){
    display.innerText = extra;
}

function ballInOver(runs){
   
    const currentOver = document.getElementById('currentOver');
    const showOver = document.getElementById('showOvers');
    const overInfo = document.getElementById('overStats');
  
        if(!extra)ballCount++;
       
       if(!extra){
        if(!runs && !fallOfWicket)runs= 0;
            currentOver.innerText += `[${runs}${fallOfWicket}]`;
       }else{
            currentOver.innerText += `(${++runs}${extra}${fallOfWicket})`;
       }

        fallOfWicket="";
        extra="";
        display.innerText="";
        if(ballCount == 6){
            ballCount=0;
            over++;
            const bowler = document.createElement('option');
            bowler.innerText= currentOver.innerText ;
            overInfo.append(bowler);
            console.log('one over');
            currentOver.innerText="";

            console.log(over)
            console.log(maxOvers)
            console.log(over == maxOvers)
            if(over == maxOvers){
                if(inning == 1){
                    main.style.display = 'none'
                    nextInning.style.display = 'inline'
                    inning++;
                }else{
                    main.style.display = 'none'
                    end.style.display = 'inline'
                    
                }
                refresh()
                showOver.innerText="";
               
            }
        }
        showOver.innerText=`${over}.${ballCount}`
}

function updateWicket(){
    console.log(showWickets.value)
    const W = ++showWickets.value
    showWickets.innerText = W;
    if(showWickets.innerText === '10'){
        if(inning == 1){
            main.style.display = 'none'
            nextInning.style.display = 'inline'
            inning++
        }else{
            main.style.display = 'none'
            end.style.display = 'inline'
        }
        refresh()
    }
}

function updateRuns(runs){
    if(extra){
        runs++;
    }
    showRuns.value += runs;
    showRuns.innerText = showRuns.value;
    input.value="";
}

enter.addEventListener('click',()=>{
    const runs =input.value;
    updateRuns(+runs);
    if(fallOfWicket){
        updateWicket();
    }
    ballInOver(runs);

})
wide.addEventListener('click',()=>{
    extra="wd";
    addDisplay(extra);
})
no.addEventListener('click',()=>{
    extra="N";
    addDisplay(extra);
})
wicket.addEventListener('click',()=>{
    fallOfWicket="*W";
    display.innerText='wicket'  
})

start.addEventListener('click',()=>{
    maxOvers = InputMaxOvers.value
    main.style.display ='inline';
    startPage.style.display = 'none'
})
nextInning.addEventListener('click',()=>{
    main.style.display ='inline';
    nextInning.style.display = 'none'
})