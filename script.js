var button = document.getElementById("Add");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");



function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function addListClick(){
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListKeypress(event) {
	if (inputLength() > 0 && event.keyCode == 13) {
		 createListElement();
	}
}



button.addEventListener("click", addListClick);

input.addEventListener("keypress", addListKeypress);



	







	


