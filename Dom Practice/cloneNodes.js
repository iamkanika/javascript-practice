// const ul = document.querySelector(".todo-list");
// //clone nodes
// const li = document.createElement("li");
// li.textContent = "new todo";
// ul.append(li);
// const li2 = li.cloneNode(true);
// ul.prepend(li2);


// some old methods to support poor IE
//appendchild;
//insertBefore;
//replaceChild;
//removeChild;

// const ul = document.querySelector(".todo-list"); 
// const li = document.createElement("li"); 
// const referenceNode = document.querySelector(".first-todo"); 
// li.textContent = "new todo"; 
// ul.appendChild(li); 
// ul.insertBefore(li, referenceNode); 

// new element 
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const referenceNode = document.querySelector(".first-todo");

// ul.replaceChild(li, referenceNode); 
ul.removeChild(referenceNode);


