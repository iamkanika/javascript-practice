const app =() => {
    const myFunc = () =>{
        console.log("hello from muFunc");
    }
    const addTwo = (num1,num2) => {
        return num1+num2;
    }
    console.log("inside app");
    myFunc();
    console.log(addTwo(4,5));
}
app();
