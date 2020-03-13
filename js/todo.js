var todoin = document.getElementById("textinput");
var addBtn = document.getElementById("add");
var myList = document.getElementById("list");



//click on add button
	addBtn.addEventListener('click', addElement);

//press enter to add your input
	todoin.addEventListener(
		'keyup',function(e){
			if(e.keyCode === 13){
				e.preventDefault();
				document.getElementById("add").click();
			}
		});


	function addElement (){
		var todo = document.getElementById("textinput").value;

//add the input to the list
	var todoItem = document.createElement('li');
	
	var spn = document.createElement("span")

	spn.innerText = todo;
	todoItem.setAttribute("class", "list");
	
	

	if(todo === ""){
		alert("Please Enter text")
	}
	else{
// Create a "close" button and append it to each list item
	var closeBtn =document.createElement('button');
	closeBtn.innerText = "x";
	
	closeBtn.setAttribute("class","close");

// Click on a close button to hide the current list item

	closeBtn.addEventListener('click', function(){
		this.parentElement.remove();
	});
	
//hide the text from the input
	todoin.value ="";
//Add a "checked" symbol
	var checkBox =document.createElement('input');
	checkBox.type = "checkbox";
	checkBox.setAttribute("class","checks");
	
	
//append
	todoItem.appendChild(checkBox);	
	todoItem.appendChild(spn);
	myList.appendChild(todoItem);
	todoItem.appendChild(closeBtn);
}
};
