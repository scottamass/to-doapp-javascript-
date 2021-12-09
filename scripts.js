// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addtodo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var sub =document.getElementById("todo-button");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

//sub.onclick = function () {
//  modal.style.display = "none";
//};
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// todo - app for JS
const todoInput =document.querySelector('.formtext');
const todoButton =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');



todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);

function addTodo(event){
	event.preventDefault();
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo-item");
	
	
	
	const newTodo = document.createElement("li");
	newTodo.innerText=todoInput.value;
	
	todoDiv.appendChild(newTodo);
	saveLocalTodos(todoInput.value);
	modal.style.display = "none";
	
	
	const todoBottom = document.createElement("div");
	todoBottom.classList.add('todobottom');
	todoDiv.appendChild(todoBottom);
	
	const completedButton = document.createElement('button');
	completedButton.innerText='Done';
	
	completedButton.classList.add("conf-btn");
	completedButton.classList.add("green");
	todoBottom.appendChild(completedButton);
	
	const delButton = document.createElement('button');
	delButton.innerHTML='<i class="far fa-trash-alt tooltip"><span class="tooltiptext">delete</span></i>';

	delButton.classList.add("trsh-btn");
	delButton.classList.add("red");
	todoBottom.appendChild(delButton);
	
	todoList.appendChild(todoDiv);
	todoInput.value="";
}
	
function deleteCheck(e){
const item =e.target;

	if (item.classList[0] ==="trsh-btn"){
		const todo =item.parentElement.parentElement;
		todo.remove();
	}
	if (item.classList[0] ==="conf-btn"){
		const todo =item.parentElement.parentElement;
		todo.classList.toggle("compleated");
	}
		
}


function saveLocalTodos(todo){
	let todos;
if(localStorage.getItem('todos')===null){
todos=[];}
else{
	todos =JSON.parse(localStorage.getItem('todos'));	
}
todos.push(todo);
localStorage.setItem('todos',JSON.stringify(todos));
}

