// get and set attribute
const link = document.querySelector("a");
console.log(link.getAttribute("href")); // if khali home output chahiye to
console.log(link.getAttribute("href").slice(1));
// used to get information of attribute in that element
link.setAttribute("href" , "https.//codepro.com");
console.log(link.getAttribute("href"));
const input = document.querySelector("input");
console.log(input.getAttribute("type"));

// set attribute used to set value 
