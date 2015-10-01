
var user = {};
var responses = [];


function question1() {
	var name = prompt("What's your name?");
	user.name = name;
}
question1();

function question2() {
	var response2 = prompt("Is football a spectacular sport? (Yes or No)");
	response2 = response2.toLowerCase();
	if (response2 == "yes") {
		response2 = true;
	} else if (response2 == "no") {
		response2 = response2 = false;
	} else {
		alert("This is not the correct answer");
		question2();
	}
	responses.push(response2);
}
question2();

function question3() {
	var response3 = prompt("What team is the best team in the world? (Inter, Juventus, Real Madrid, Barcelona, Manchester Utd)");
	response3 = response3.toLowerCase();
	switch(response3) {
	case "inter":
		response3 = false;
		break;
	case "juventus":
		response3 = true;
		break;
	case "real madrid":
		response3 = false;
		break;
	case "barcelona":
		response3 = false;
		break;
	case "manchester utd":
		response3 = false;
		break;
	default:
		alert("What kind of team is that!? Never heard about it!");
		break;
}

responses.push(response3);

}
question3();


function question4() {

	var question = "What's the famous nickname of Alessandro Del Piero?";
	var tip1 = "This is wrong, but i wanna give you a tip, it starts with Pintu......";
	var tip2 = "Oh come on! like the painter from rinascimento!";
	var messages = [question, tip1, tip2];
	var response4;


	function tips(message){
		response4 = prompt(message);
		response4 = response4.toLowerCase();
		if (response4 === "pinturicchio") {
			response4 = true;
		} else {
			response4 = false;
		}
	}

	for (var i = 0; i < messages.length; i++) {
		tips(messages[i]);
		if (response4 == true) {break;}
	};


	if (response4 == false) {alert("You are such an ignorant dude! You should know such important things!")}

	responses.push(response4);

}

question4();



function question5() {
	var response5 = prompt("In this case you have to choose the only FALSE option available. Mourinho is the a)Special One or b)Special Ass");
	response5 = response5.toLowerCase();

	function answs() {
	switch(response5) {
		case "special one":
		response5 = false;
		alert("Really!? Seriously!? He's nothing special and neither you are!")
		return;
		case "special ass":
		response5 = true;
		alert("There is only one special one and that's you, you know what are you talking about!")
		return;
		default:
		alert("You are a creative, but that's not the answer");
		response5 = prompt("You must choose among a)Special One or b) Special Ass");
		answs();
		break;
	}

}
answs();
responses.push(response5);
}
question5();


for (var i = 0; i < responses.length; i++) {
	if (responses[i] === true) {
		responses[i] = 2.5;
	} else {
		responses[i] = 0;
	}
};

responses = responses.reduce(function(a, b) {
		return a + b;
	})

alert("Dear " + user.name + " Your score is " + responses + " points on 10 points available");