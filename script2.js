$(document).ready (function(){
	$('#list-items').html(localStorage.getItem('listItems'));
	$('.add-items').submit(function(event){
		event.preventDefault();
		var item = $('#todo-list-item').val();

		if(item){
			$('#list-items').append(
				"<li><input class='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");

			localStorage.setItem()
		}
	})
})