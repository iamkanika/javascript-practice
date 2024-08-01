// how to get the dimensions of elements
// height width dekhni h
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
// khali height ya khali width chahiye to then
const info1 = sectionTodo.getBoundingClientRect().height;
console.log(info1);
console.log(info);