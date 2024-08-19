const heading=document.getElementById("head");
heading.style.backgroundColor="yellow";
heading.style.textAlign="center";
const items=document.getElementsByClassName("items");
// items.style.backgroundColor="green";// cannot set background color on whole list so we have one by one by apply for loop
for (item of items){
    item.style.backgroundColor="green";
} // it works and there is noticeable thing I didn't initialize the variable item which I used in for loop to iterate but it works..
// another method by which I can change the background of whole collection
let whole_list=Array.from(items);// we convert our items collection in array (typecast)
whole_list.forEach(item =>{
    item.style.backgroundColor="green";
});
// it also works it is a little complex method
let message=document.getElementsByTagName("p")
// message.style.backgroundColor="blue"; //it will not work because of the same issue that the property doesn't apply on the collection
//so we have to run the loop
for (msg of message){
    msg.style.backgroundColor="blue";
}
//////Query Selector
//by query selector we can give class name or id or tag name but the only condition of this is it will select only first element of the class or of that tag
//Let's try
let pink_msg=document.querySelector("p")
pink_msg.style.backgroundColor="pink";//color has been changed
//Query selector all
//it will create a node list and you can access it by indexing all the elements which is under the name of the class or tag you provided not contain only just first occurence of element
let basket=document.querySelectorAll(".items");
//  basket.style.backgroundColor="purple"; // it won't work
// basket[0].style.backgroundColor="skyblue";
for (item of basket){
    item.style.backgroundColor="purple";
}
///it has built in for each method we don't have to convert it in array
// basket.forEach(item => {
//     item.style.backgroundColor="purple";
// })