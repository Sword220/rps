
document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;


function user(){
  var user = this.id;
    console.log("User: " + user)

    var computerChoice = Math.random();
         if (computerChoice < 0.34) {
             computerChoice = "rock";
          }else if(computerChoice <= 0.67) {
             computerChoice = "paper";
          }else{
             computerChoice = "scissors";
          }; 

    console.log("Computer: " + computerChoice);

    console.log(compare(userChoice, computerChoice)); 

    function compare(choice1, choice2) {
    
		    if (choice1 === choice2) {
            return "You Tied";
        }
 
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "You Win!";
            }else{
                return "You Lose";
            }
				}
 
         if (choice1 === "paper") {
             if (choice2 === "rock") {
                 return "You Win!";
              } else {
                  return "You Lose";
              }
		     }
		
		     if (choice1 === "scissors") {
             if (choice2 === "rock") {
                 return "You Win!";
             } else {
                 return "You Lose";
            }
        }
    }
}

  

    