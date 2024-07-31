const rootNode = document.getRootNode();
console.log(rootNode);  
console.log(rootNode.childNodes);      
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);
console.log(htmlElementNode.childNodes);// NodeList(3) [head, text, body]
const headElementNode= htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode =htmlElementNode.childNodes[2];
console.log(headElementNode);
console.log(textNode1);
console.log(bodyElementNode);
console.log(headElementNode.parentNode);
// sibling relationship
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);
// to ignore white spaces
console.log(headElementNode.nextElementSibling);
console.log("taskk");


const h1= document.querySelector("h1");
// const div = h1.parentNode;
// div.style.color = "#336";
// div.style.backgroundColor = "green";


const div = h1.parentNode.parentNode;
div.style.color = "#fff";
div.style.backgroundColor = "green";
const body = document.body
console.log(body);
const head = document.querySelector("head");
console.log(head);
const title = head.querySelector("title");
console.log(title);
console.log(title.childNodes);
const container = document.querySelector(".container");
console.log(container.childNodes);
//donot want to add newline sapce(text node)
console.log(container.children);
