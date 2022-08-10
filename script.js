var you;
var yourScore = 0 ;
var opponent;
var opponentScore = 0;

var choices = ["icon-rock","icon-paper","icon-scissors"];
window.onload = function(){
    alert("welcome to the game,the rock beats scissors,the scissors beats paper and the paper beats rock");
    for(let i=0;i<3;i++){
        let choice = document.createElement("img");
        choice.id=choices[i];
        choice.src=choices[i] + ".svg";
        choice.addEventListener("click",selectChoice)
        document.getElementById("choices").append(choice);
    }
}
function selectChoice(){
    you=this.id;
    document.getElementById("your-choice").src = you + ".svg";
    opponent = choices[Math.floor(Math.random()* 3)];
    document.getElementById("opponent-choice").src = opponent + ".svg";
    if (you == opponent){
        yourScore += 1;
        opponentScore += 1;
    }
    else{
        if(you == "icon-rock"){
            if(opponent=="icon-scissors"){
                yourScore+=1;
            }
            else if(opponent=="icon-paper"){
                opponentScore += 1;
            }
        }
        else if(you == "icon-scissors"){
            if(opponent=="icon-paper"){
                yourScore+=1;
            }
            else if(opponent=="icon-rock"){
                opponentScore +=1;
            }
        }
        else if(you == "icon-paper"){
            if(opponent=="icon-rock"){
                yourScore+=1;
            }
            else if(opponent=="icon-scissors"){
                opponentScore +=1;
            }
        }
    }
    document.getElementById("your-score").innerText=yourScore;
    document.getElementById("opponent-score").innerText=opponentScore;
    


}


