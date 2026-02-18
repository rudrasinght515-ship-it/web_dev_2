// const div=document.querySelector('.container')
// const div2=document.querySelector('.outer')
// const btn=document.querySelector('button')

// div.addEventListener('click',()=>(console.log("clicked the Div")))
// div2.addEventListener()

// setTimeout(()=>{
//     alert("After 3 seconds")
// },3*1000)

// const timerId=setInterval(()=>{
//     console.log("console Alert after 2 seconds")
// },2*1000)
// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },20*1000)

// let count=0
// const timerId=setInterval(()=>{
//     count++
//     console.log("Alert timer",count)
// },1000)

// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)

// console.log("Before timeout")
// setTimeout(()=>{
//     console.log("Inline timeout")
// },1000)
// console.log("After timeout")

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener('click',()=>{
//     if (name.value=="")return
//     const li=document.createElement('li')
//     const dlt=document.createElement("button")
//     dlt.innerText="Delete"
//     li.innerText=name.Value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     list.appendChild(li)
//     li.appendChild(dlt)
//     name.Value=""
// })
// console.log("Hello, World!");
// console.log(document)

// const para = document.querySelector("p")

// para.innerText="THIS IS UPDATED PARAGRAPH TEXT"
// console.log(para.innerText);

// const para = document.getElementsByClassName("para") //return html collection
// para[0].innerText="THIS IS UPDATED PARAGRAPH TEXT"
// para[1].style.color="red"
// console.log(para);

// const para = document.querySelectorAll(".para") //return node list 
//  para[0].innerText="THIS IS UPDATED PARAGRAPH TEXT"
//  para[1].style.color="red"
//  console.log(para);

//  let arr= [1,2,3,4,5]
//  const newArr= arr.forEach((ele)=>console.log(ele))

// const container = document.querySelector(".container") 
// container.innerHTML= "<h1>This is a heading</h1><p>This is a paragraph inside container div</p>"
// console.log(container)

// const btn = document.querySelector("button");
// btn.classList.add("btn")
// btn.classList.remove("btn")
// btn.classList.toggle("btn")

// function printMessage(){
//     console.log("Button Clicked");
// }

// btn.addEventListener("click", printMessage)
// btn.removeEventListener("click", printMessage)
// btn.addEventListener("click", ()=>console.log("Anonymous Function Called"))


// function  startTimer(){
//     console.log("Timer Started");
// }

// const btn = document.querySelector(".click");
// btn.addEventListener("click", startTimer);


// function stopTimer(){
//     console.log("Timer Stopped");
//     btn.removeEventListener("click", startTimer);
// }
// const stopBtn = document.querySelector(".stop");
// stopBtn.addEventListener("click", stopTimer);


// function message(){
//     console.log("Button Clicked");
// }

// const click = document.querySelector(".click");
// click.addEventListener("click", message);

// const stop = document.querySelector(".stop");
// stop.addEventListener("click", ()=>{
//     console.log("Button Stopped");
//     click.removeEventListener("click", message);
// });

// function message(){
//     console.log("Button Clicked");
// }

// const click = document.querySelector(".click");
// click.addEventListener("click", message);
// click.addEventListener("mouseover", ()=>{
//     console.log("Hovering over Click button");
// });


// const stop = document.querySelector(".stop");
// stop.addEventListener("click", ()=>{
//     console.log("Button Stopped");
//     click.removeEventListener("click", message);
// });
// stop.addEventListener("mouseover", ()…

// stop.addEventListener("mouseover", ()=>{
//     console.log("Hovering over Stop button");
// });



// const click = document.querySelector(".click");

// function message(event){

//     console.log(event.key);
//     console.log("Button Clicked");

// }

// click.addEventListener("keyup", message);



// const form = document.querySelector("form");
// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     console.log("Form Submitted");
// });

// console.log("Script loaded");

// window.addEventListener("load", ()=>{
//     console.log("All resources finished loading!");
// });

// console.log(a); 
// console.log(b); 


// var a = 10;
// let b = 20;

// console.log(a); 
// console.log(b); 

// function test(){
//     let c = 30;
//     console.log(c);
//     console.log("Inside Test Function");
// }

// test();

// function greet (){

//     var message = "Hello, user!";
//     console.log(message);
// }
// greet();
// console.log(message);


// function first (){
//     second ();
// }
// function second (){
//     third ();
// }
// function third (){
//     console.trace()
// }
// first ();


// console.log("first line");
// setTimeout(()=>{console.log("second line")},2000);
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");



// const timerId=setInterval(() => {
//     console.log("after 3 seconds")
// }, 1000);
// console.log(timerId);
// setTimeout(() => {
//     clearInterval(timerId)

// },10*1000) */}

// var hello=1
// const timerId=setInterval(()=>{
//     hello+=1
//     console.log(hello)
// },1000)

// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)       

// let count=1

// const timerId=setInterval(()=>{
//     if(count===10)clearInterval(timerId)
//     console.log(count)
//     count+=1

// },1000)

// console.log("before timeout")
// setTimeout(()=>{
//     console.log("inside timeout")
// },0)
// console.log("after timeout")

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener("click",()=>{

//     if(name.value==="")return
//     const li=document.createElement("li")
//     const dlt=document.createElement("button")


//     dlt.innerText="Delete"
//     li.innerText=name.value;


//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })


//     list.appendChild(li)
//     li.appendChild(dlt)


//     name.value=""
// })



// function finishhomework(callback){
//     console.log("starting homework...");
//     setTimeout(()=>{
//         console.log("homework done!");
//         callback();
//     }, 2000);
// }
// function goToPlayground(){
//     console.log("Going to the playground!")
// }
// finishhomework(()=>{
//     eatDinner(()=>{
//         goToPlayground();
//     });
// });


// const p=new Promise((res,rej)=>{
//     let done=false
//     setTimeout(()=>{
//         res("work is done..!!")
//     }else{
//         rej('work is not done')
//     },5000)
// })
// console.log(p)
// ContentVisibilityAutoStateChangeEvent

// function doHomework() {
//     const p = new Promise((res, rej) => {
//         setTimeout(() => {
//             let done = true;
//             if (done) {
//                 console.log("homework done!");
//                 res(
//                     "Homework Completed"
//                 );
//             } else {
//                 rej("homework not done");
//             }
//         }, 3000);
//     })

//     return p;
// }

// function eatDinner() {
//     const p = new Promise((res, rej) => {
//         setTimeout(() => {
//             let done = true;
//             if (done) {
//                 console.log("dinner done!");
//                 res(
//                     "dinner Completed"
//                 );
//             } else {
//                 rej("dinner not done");
//             }
//         }, 2000);
//     })
//     return p;
// }

// function goToPlayground() {
//     const p = new Promise((res, rej) => {
//         setTimeout(() => {
//             let done = true;
//             if (done) {
//                 console.log("went to  playground");
//                 res(
//                     "playground Completed"
//                 );
//             } else {
//                 rej("not allowed");
//             }
//         }, 2000);
//     })
//     return p;
// }

// doHomework().then((msg) => {
//     console.log(msg);
//     return eatDinner();
// }).then((msg) => {
//     console.log(msg);
//     return goToPlayground();
// }).then((msg) => {
//     console.log(msg);
// }).catch((err) => {

//     console.log(err);
// }).finally(() => {
//     console.log("go to sleep");
// });

// async and await:-
// function orderFood() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Food Ordered")
//             res("Food has been ordered")
//         }, 2000)
//     })
// }
// function prepareFood() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Food Prepared")
//             res()
//         }, 2000)
//     })
// }
// function deliverFood() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Food Delivered")
//             res()
//         }, 2000)
//     })
// }
// async function order() {
//     const data = await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }
// order()

// Error handling:-
// console.log("line 1")
// try{
//     let sampale = 234
//     console.log(sample)
//     console.log("line after sample")
// }catch(e){
//     console.log(e)
// }
// console.log("line 2")

// console.log("line 1")
// try{
//     let age = 16
//     if(age < 18){
//         throw new Error("You are not eligible to vote")
//     }
// }catch(e){
//     console.warn(e)
// }
// console.log("line 2")

// Fetch data:-
// async function getData(){
//     const response = await fetch ("https://jsonplaceholder.typicode.com/todos/1")
//     const data = await response.json()
//     // console.log(data.products[0].title)
//     data.products.foreach((product)=>{
//         console.log(product.title)
//     })
// } 
// getData()

// send data to backend:-
// async function sendData(){
//     const response = await fetch("https://dummyjson.com/products/add",{
//         method:'post',
//         headers:{
//             "ConTent-Type":"application/json"
//         },
//         body:JSON.stringify({
//             title:"New product",
//             description:"This is a new product",
//             price:100,
//             discountPercentage:10,
//             rating:4.5,
//             stock:50,
//             brand:"ABC",
//             category:"Electronics"
//         })
//     })
//     const data=await response.json()
//     console.log(data)
// }
// sendData()