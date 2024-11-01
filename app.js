let userScore = 0;
let roboScore = 0;

const choices = document.querySelectorAll(".choice");

const genRoboChoice = () =>{
    const opption = ["rock" , "paper" , "scissros"];
    const randomIdx = Math.floor(Math.random() * 3 );
    return opption[randomIdx];
} 

const drawGame =() =>{
console.log("Draw the game")
}

//new funcation 
const showWinner = (userwin) =>{
    if(userwin){
        console.log("user is win ");

    }
    else{
        console.log("robo is win ");
    }
}
const playGame = (userChoice) =>{
    console.log("user choice" , userChoice);
    //Generate robo choises 
    const roboChoice = genRoboChoice();
    console.log("robo choice " , roboChoice)
    if(userChoice === roboChoice){
        //Draw Game 
    }
    else{
      let userwin = true;
      if(userChoice === "rock"){
        //scisors , paper 
       userwin = roboChoice === "paper" ? false : true;
      }
      else if(userChoice === "paper"){
     //rock scisors 
      userwin = roboChoice === "scissors" ? false : true;
      }
      else{
        userwin = roboChoice === "rock" ? false: true;
      }
  }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id")
    playGame(userChoice);
    } )
})
