// inner html to add html element
// const todoList= document.querySelector(".todo-list"); 
// console.log(todoList);
// console.log(todoList.innerHTML); 
// todoList.innerHTML+= "<li> New Todo</li>" 
// todoList.innerHTML+= "<li> Teach Students</li>" 

//when you should use it, and when you should not..
// nye elements ko add karne k liye nhi because browser firse html code ko render krega again again when we add any new element
// if puri inner html ko hi change karna then we can use it
// todoList.innerHTML= "<li> New Todo</li>" 

// ways to add new element
// document.createElement();



// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Students");
// newTodoItem.append(newTodoItemText);
// const todoList= document.querySelector(".todo-list"); 
// todoList.append(newTodoItem);
// console.log(newTodoItem);


// another way


// const newTodoItem = document.createElement("li");
// newTodoItem.textContent= "TEAAAch  student";
// const todoList= document.querySelector(".todo-list");
//todoList.append(newTodoItem); // appendchild bhi use kar skte h but vo purana h
// todoList.prepend(newTodoItem); // starting me add krega
// console.log(newTodoItem);


  // how to remove todo 1
//   const todo1 = document.querySelector(".todo-list li");
//   console.log(todo1);
//   todo1.remove();

  //before after method
//   const newTodoItem = document.createElement("li");
//   newTodoItem.textContent= "TEAAAch  student";
// const todoList= document.querySelector(".todo-list");
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);



// Another methods
// elem.insertAdjacentHTML(where, html)
// beforebegin
//afterbegin
//beforeend
//afterend


const todoList= document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li> Teach Students</li>");
todoList.insertAdjacentHTML("afterbegin", "<li> Teach Students</li>");
todoList.insertAdjacentHTML("beforebegin", "<li> Teach Students</li>");
todoList.insertAdjacentHTML("afterend", "<li> Teach Students</li>");