let doTasks = [];
let decideTasks = [];
let delegateTasks = [];
let deleteTasks = [];


let saveDo = document.getElementById("save1");
let saveDecide = document.getElementById("save2");
let saveDelegate = document.getElementById("save3");
let saveDelete = document.getElementById("save4");

localStorage.setItem("do", JSON.stringify(doTasks));
saveDo.addEventListener("click", function () {
    let input1 = document.getElementById("inp1");
    let tasks = input1.value;
     
    let oldVal = JSON.parse(localStorage.getItem("do"))
    console.log(typeof oldVal)
    oldVal.push(tasks);
    localStorage.setItem("do", JSON.stringify(oldVal));
})


// Saving Decide tasks
localStorage.setItem("decide", JSON.stringify(decideTasks));
saveDecide.addEventListener("click", function () {
    let input2 = document.getElementById("inp2");
    let tasks = input2.value;
     
    let oldVal = JSON.parse(localStorage.getItem("decide"))
    console.log(typeof oldVal)
    oldVal.push(tasks);
    localStorage.setItem("decide", JSON.stringify(oldVal));
})


// Saving Delegate tasks
localStorage.setItem("delegate", JSON.stringify(delegateTasks));
saveDelegate.addEventListener("click", function () {
    let input3 = document.getElementById("inp3");
    let tasks = input3.value;
     
    let oldVal = JSON.parse(localStorage.getItem("delegate"))
    console.log(typeof oldVal)
    oldVal.push(tasks);
    localStorage.setItem("delegate", JSON.stringify(oldVal));
})


// Saving Delete tasks
localStorage.setItem("delete", JSON.stringify(deleteTasks));
saveDelete.addEventListener("click", function () {
    let input4 = document.getElementById("inp4");
    let tasks = input4.value;
     
    let oldVal = JSON.parse(localStorage.getItem("delete"))
    console.log(typeof oldVal)
    oldVal.push(tasks);
    localStorage.setItem("delete", JSON.stringify(oldVal));
})



// Displaying user's pf list

let val = JSON.parse(localStorage.getItem("do"))










