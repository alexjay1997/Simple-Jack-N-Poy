function pick_items(){
var player = document.getElementById("player").value;

		 if(player=="Rock"){
	document.getElementById("player_pick").src="img/rock.png";
	}
	else if(player=="Paper"){
	document.getElementById("player_pick").src="img/paper.png";
	}
	else if(player=="Scissor"){
	document.getElementById("player_pick").src="img/scissor.png";
	}
}
// *********************  variable for scoring --Start-- ************
	var player_score=0;

	var  p_score = document.getElementById("p_score").value = player_score;

	var computer_score=0;

	var  c_score = document.getElementById("com_score").value = computer_score;

// *********************  variable for scoring --End-- ************

function JackNPoy(){

var p = document.getElementById("player").value; 
var pick = ['Rock','Paper','Scissor'];

var picked = pick[Math.floor(Math.random()*pick.length)];

document.getElementById("demo").innerHTML = picked; 

	if(p==picked)
	{
	alert("draw");
	}
		else if(p=="Rock" && picked=="Scissor"){
		alert("You Win!");
		player_score++;

		}
		else if(p=="Scissor" && picked=="Rock"){
		alert("You Lose!!");
		computer_score++;
		}
		else if(p=="Scissor" && picked=="Paper"){
		alert("You Win!");
		player_score++;
		}
		else if(p=="Paper" && picked=="Scissor"){
		alert("You Lose!!");
		computer_score++
		}
		else if(p=="Rock" && picked=="Paper"){
		alert("You Lose!");
		computer_score++
		}
		else if(p=="Paper" && picked=="Rock"){
		alert("You Win!");
		player_score++;
		}

	if(picked=="Rock"){
	
		document.getElementById("computer_pick").src="img/rock.png";
		}
		else if(picked=="Paper"){
		document.getElementById("computer_pick").src="img/paper.png";
		}
		else if(picked=="Scissor"){
		document.getElementById("computer_pick").src="img/scissor.png";
		}

	

		document.getElementById("p_score").innerHTML=player_score;
		document.getElementById("com_score").innerHTML=computer_score;
}
