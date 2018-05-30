



// jQuery animations
$(document).ready(function() {
	// container animation
	$(".container").addClass("animated fadeIn");
 	// h1 animation
 	$(".mainHeader").addClass("animated bounceInRight");
 	// borderBottom (3 border colors after h1) animation
 	$(".borderBottom").addClass("animated bounceInLeft");
 	// paragraph after h1 animation
 	$(".guideText").addClass("animated pulse");
});

// shopping list code starts now
var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector(".shopList");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	// adds style to the list items
	li.classList.add("listItem");
	li.addEventListener("click", markListItem);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// creates the line-through
	function markListItem() {
		li.classList.toggle("done");
	}

	// create a delete button
	var btnDel = document.createElement("button");
	// style for the delete button
	btnDel.classList.add("deleteBtn");
	btnDel.appendChild(document.createTextNode("X"));
	li.appendChild(btnDel);
	btnDel.addEventListener("click", deleteListItem);

	// adds display: none to the button
	function deleteListItem() {
		li.classList.add("delete");
	}
} 
// end of createListElement functi0n

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);










































// var button = document.querySelector("button");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function getIndex(clickediElement){
// 	var ulElem = clickediElement.parentNode;

// 	var numberOfElements = ulElem.children.length;

// 	for (var i = 0; i < numberOfElements; i++){
// 		if (ulElem.children[i]=== clickediElement){
// 			var index = i;
// 			return index;
// 		}
// 	}
// }

// function act(event){
// 	var clicked = event.target;
// 	if (clicked.tagName === "LI"){
// 			clicked.classList.toggle("done");		
// 	}
// 	else if (clicked.tagName === "I"){
// 		var li = clicked.parentNode;
// 		var ul = li.parentNode;
// 		var index = getIndex(li);
// 		var clickedLi = ul.children[index];
// 			clickedLi.parentNode.removeChild(clickedLi);
// 	}
// }

// document.body.addEventListener("click",act);

// function createTodoElement(){
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	var close = li.appendChild(document.createElement("i"));
// 		// close.classList.add("glyphicon" , "glyphicon-remove");
// 		close.classList.add("button");
// 		li.appendChild(close);
// 		ul.appendChild(li);
// 		input.value = "";
// }

// function getInputLength(){
// 	return input.value.length;
// }


// function addListAfterClick(){
// 	if (getInputLength() > 0){
// 		createTodoElement();
// 	}
// }

// function addListAfterEnter(event){
// 	if (getInputLength() > 0 && event.which === 13){
// 		createTodoElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// button.addEventListener("keypress" , addListAfterEnter);



// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");


// function inputLength(){
// 	return input.value.length;
// }

// function createListElement(){
// 	var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// }

// function addListAfterClick(){
// 	if (inputLength() > 0){
// 		createListElement();
// 	}
// }
	
// function addListAfterKeypress(event){
// 	if (inputLength() > 0 && event.keyCode === 13){
// 		createListElement();
// 	}
// }

// function listStrikeThrough(event){
// 	var listItem = document.querySelector("li");
// }

// button.addEventListener("click",addListAfterClick);
	

// input.addEventListener("keypress", addListAfterKeypress); 



