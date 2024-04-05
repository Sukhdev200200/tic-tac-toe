let boxes = document.querySelectorAll(".box")
let startBtn = document.querySelector(".start-btn")
let resetBtn = document.querySelector(".reset-btn")
let greet = document.querySelector(".greet")
let start = document.querySelector(".start")

let turn0 = true
let count = 0;

const winningchance = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,4,5],[3,4,5]]

const reset = () =>{
    turn0 = true
    count =0
    greet.classList.add("hide")
    btnEnable();
}


const DrawGame = () => {
    greet.innerText =`It's a Draw Reset The match`
    greet.classList.remove("hide")
    btnDisable()
} 

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerHTML= "0"
            turn0 = false
        }else{
            box.innerHTML = "X"
            turn0 = true
        }
        box.disabled = true
        count++
        let iswinner = checkWinner()
        
        if(count === 9 && !iswinner){
           DrawGame()
        }  
    })
})
const btnEnable =()=>{
    for(let box of boxes){
        box.disabled = false
        box.innerText= ""
        
    }
}

const btnDisable =()=>{
    for(let box of boxes){
        box.disabled = true
    }
}
const winnergreet = (val1) =>{
    greet.innerText = `Congratulations,Winner ${val1}`
     greet.classList.remove("hide")
     btnDisable()

}


const checkWinner = () =>{
    for(pattern of winningchance){
        // console.log(pattern[0],pattern[1],pattern[2]) checking winning patterns when a box is clicked
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                winnergreet(val1)
                btnDisable()  
            }
        }
    }

}
 resetBtn.addEventListener("click",reset)
 startBtn.addEventListener("click",reset)