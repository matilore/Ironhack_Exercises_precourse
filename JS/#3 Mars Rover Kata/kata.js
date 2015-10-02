function Rover(name){
	this.position = [0, 0];
	this.name = name;
}

var rover1 = new Rover("rover1");
var rover2 = new Rover("rover2");




function Obstacle (num1,num2) {
	this.position = [num1, num2];
}

var obstacle1 = new Obstacle(3,4);
var obstacle2 = new Obstacle(5,-2);

var obstacles = [obstacle1, obstacle2];



function dir(direction) {	

	switch(direction) {
	case "f":
		selRover.position[0]++;
		break;
	case "b":
		selRover.position[0]--;
		break;
	case "r":
		selRover.position[1]++;
		break;
	case "l":
		selRover.position[1]--;
		break;
	}
};

function avoid_obst(direction) {
	switch(direction) {
	case "f":
		selRover.position[0]--;
		break;
	case "b":
		selRover.position[0]++;
		break;
	case "r":
		selRover.position[1]--;
		break;
	case "l":
		selRover.position[1]++;
		break;
	}
}


var move = function move_again() {

	var selRover = selection();
	var array = command();

	for (var i = 0; i < array.length; i++) {
		dir(array[i]);
			
		
		for (var ar = 0; ar < obstacles.length; ar++) {
			var match_counter = 0;
			for (var j = 0; j < selRover.position.length; j++) {
				if(obstacles[ar].position[j] == selRover.position[j]) {
					match_counter += (ar + 1);
					if (match_counter == ((ar + 1) * 2)) {
						alert("You have reached an obstacle! This is located at position: " + obstacles[ar].position + " Please avoid it!");
						avoid_obst(array[i]);
						alert("Your current position is on the last possible: " + selRover.position);
						console.log(match_counter);
						break };
				}
			}
		}		
	}

	for (var counter = 0; counter < selRover.position.length; counter++) {
		if (selRover.position[counter] > 5) {
			selRover.position[counter] -= 10;
		} else if (selRover.position[counter] < -4)  {
		selRover.position[counter] += 10;
		};
	}



	for (var i = 0; i < obstacles.length; i++) {
		if (obstacles[i].name == selRover.name) {
			obstacles.splice(i, 1);
		}
	};

	obstacles.push(selRover);
	
	
	var reset = function askAgain() {
		var again = prompt("Do you want to explore more and turn back to rover and commands selection? Yes or no");
		again = again.toLowerCase();
		if (again == "yes") {
			move_again();
		} else if (again == "no") {
			alert("Ok dude, see you on Mars!");
			return
		} else {
			askAgain();
		}
	}

reset();

}

	

var selRover;
var selection = function sel () {
	selRover = prompt("Select your Mars Rover. You can choose Rover1 or Rover2.")
	selRover.toLowerCase();
	if (selRover == "rover1") {
		selRover = rover1;
		return selRover;
	} else if (selRover == "rover2") {
		selRover = rover2;
		return selRover;
	} else {
		alert("You have not chosen the rigth mars rover");
		sel();
	}
}

	
function command() {
	var array = prompt("Insert list of commands. f-> forward / b -> back / r-> right / l -> left -> (i.e ffbbrrgg)");
	array = array.toLowerCase();
	array = array.split("");
	return array;
}



move();

