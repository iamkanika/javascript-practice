// event object
const firstButton = document.querySelector("#one");
firstButton.addEventListener("click", function(event){
    console.log(this);
    console.log(event);
})
// jab bhi kisi element pe event listener add hoga
// js engine -- liene by line execute krta h
// browser --- js engine+ extra features
// browser -- js Engine + WebApi
// jab browser ko pta chla ki user ne event perform kia 
// jo hum listen kar rhe h

// browser --- 2kam krega
// 1. callback function js engine ko ddega-- le execute kar
// 2. callbackn function k sath jo event hua h uski information bhiu dega
// ye info object ke form me milegi

