console.log("heelo");
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type= 'text']");
// console.log(todoInput);
const todoList = document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
     const newTodoText= todoInput.value;
    // todoInput.value= ""; 
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
    <span class="text">${newTodoText}
                </span>
                <div class="todo-button">
                    <button class="todo-button done">Done</button>
                    <button class="todo-button remove">Remove</button>
                </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value="";
})
todoList.addEventListener("click" , (e)=>{
    // console.log(e.target);
    // check if user click on done button
    if(e.target.classList.contains("remove")){
        // console.log("you want to remove something");
        const targetedLi = e.target.parentNode.parentNode;
        // console.log(targetedLi); 
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        // console.log("Great!!!!"); 
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);   
        liSpan.style.textDecoration = "line-through"; 
    }
})