const squares=document.querySelectorAll(".square")
const mole=document.querySelector(".mole")

const timeLeft=document.querySelector('#timeleft')

const score=document.querySelector('#score')

const start=document.querySelector('.btn')

let result=0
let hitPosition
let currentTime=10
let timerId=null



function randomSquare(){
    squares.forEach(square=>{
        square.classList.remove('mole')

    })
    let randomSquare=squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')
    hitPosition=randomSquare.id
    

}


squares.forEach(square=>{
    square.addEventListener('mousedown',()=> {
        if(square.id==hitPosition){
            result++
            score.textContent=result
            hitPosition=null
        }
    })

})

function moveMole(){ 
    timerId=setInterval(randomSquare,500)

}

start.addEventListener('click',()=>{
    moveMole()
    function countDown(){

        currentTime--
        timeLeft.textContent=currentTime
    
        if(currentTime==-1){
            timeLeft.textContent=0
            clearInterval(countDownTimerId)
            clearInterval(timerId)
            alert(" Game Over! Score "+result)
            
    
        }
    
    }
    
    let countDownTimerId=setInterval(countDown,1000)


})

// moveMole()

// function countDown(){

//     currentTime--
//     timeLeft.textContent=currentTime

//     if(currentTime==-1){
//         timeLeft.textContent=0
//         clearInterval(countDownTimerId)
//         clearInterval(timerId)
//         alert(" Game Over! Score "+result)
        

//     }

// }

// let countDownTimerId=setInterval(countDown,1000)
