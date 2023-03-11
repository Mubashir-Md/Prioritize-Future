// getting new input field on clicking plus button
let save = document.getElementsByClassName('save');
let fields = document.getElementsByClassName('field');
let clear = document.getElementsByClassName('clr');
// changing of tick button to edit button if pressed
let editbtn = document.getElementsByClassName('ticked');
let forms = document.getElementsByClassName("in");
let tasks = document.getElementsByClassName("tasks");


let doTasks = JSON.parse(localStorage.getItem("do")) || [];
let decideTasks = JSON.parse(localStorage.getItem("decide")) || [];
let delegateTasks = JSON.parse(localStorage.getItem("delegate")) || [];
let deleteTasks = JSON.parse(localStorage.getItem("delete")) || [];

const showTasks = (doTasks, decideTasks, delegateTasks, deleteTasks) => {
    doTasks.forEach(element => {
        let divItem = document.createElement('div');
        divItem.setAttribute('class', 'item');
        divItem.setAttribute('id', 'item1');



        let list = document.createElement('li');
        list.style.listStyleType = 'disc';
        list.style.fontSize = '1.5rem';
        divItem.appendChild(list);


        let para = document.createElement('p');
        para.setAttribute('type', 'text');
        para.setAttribute('value', '');
        para.setAttribute('id', 'inp');
        para.setAttribute('spellcheck', 'true');
        // input.scrollIntoView();
        divItem.appendChild(para);
        para.innerHTML = element;


        let spanIcons = document.createElement('span');
        spanIcons.setAttribute('class', 'icons');
        divItem.appendChild(spanIcons);

        let btn1 = document.createElement('button');
        btn1.setAttribute('type', 'button');
        btn1.setAttribute('class', 'ticked');
        btn1.setAttribute('id', 'save');
        spanIcons.appendChild(btn1);

        let btn2 = document.createElement('button');
        btn2.setAttribute('type', 'button');
        spanIcons.appendChild(btn2);

        let btn3 = document.createElement('button');
        btn3.setAttribute('type', 'button');
        spanIcons.appendChild(btn3);

        let img1 = document.createElement('img');
        img1.setAttribute('src', 'https://img.icons8.com/ios-filled/50/000000/double-tick.png');
        btn1.appendChild(img1);
        // adding event litener to button 1
        btn1.addEventListener('click', function cvt() {
            if ((img1.src === 'https://img.icons8.com/ios-filled/50/000000/double-tick.png')) {
                img1.src = 'https://img.icons8.com/ios/50/000000/edit--v1.png';
                // disabling input text once written and clicked tick button
                para.style.textDecoration = "line-through";

            }
            else if (img1.src === 'https://img.icons8.com/ios/50/000000/edit--v1.png') {
                img1.src = 'https://img.icons8.com/ios-filled/50/000000/double-tick.png';

                para.style.textDecoration = null;
            }
        }
        );


        let img2 = document.createElement('img');
        img2.setAttribute('src', 'https://img.icons8.com/material-outlined/24/000000/edit-calendar.png');
        let cal = document.createElement('a');
        cal.setAttribute('id', 'linker');
        cal.setAttribute('target', '_blank');
        btn2.addEventListener("click", function () {
            let inpVal = para.innerHTML;
            let val = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=";
            val = val + inpVal;
            // console.log(val)
            cal.setAttribute('href', val);
        })

        cal.appendChild(img2);
        btn2.appendChild(cal);


        let img3 = document.createElement('img');
        img3.setAttribute('src', 'https://img.icons8.com/windows/96/000000/trash.png');
        btn3.appendChild(img3);




        // adding delete a task functionality
        btn3.addEventListener("click", function () {

            id = para.innerHTML;
            val = JSON.parse(localStorage.getItem("do"))
            val.splice(id, 1);
            localStorage.setItem("do", JSON.stringify(val));
            divItem.style.display = "none";
        })

        // accessing parents of particular caller and appending the whole form item into them
        tasks[0].append(divItem);

    });
    decideTasks.forEach(element => {
        let divItem = document.createElement('div');
        divItem.setAttribute('class', 'item');



        let list = document.createElement('li');
        list.style.listStyleType = 'disc';
        list.style.fontSize = '1.5rem';
        divItem.appendChild(list);


        let para = document.createElement('p');
        para.setAttribute('type', 'text');
        para.setAttribute('value', '');
        para.setAttribute('id', 'inp');
        para.setAttribute('spellcheck', 'true');
        // input.scrollIntoView();
        divItem.appendChild(para);
        para.innerHTML = element;


        let spanIcons = document.createElement('span');
        spanIcons.setAttribute('class', 'icons');
        divItem.appendChild(spanIcons);

        let btn1 = document.createElement('button');
        btn1.setAttribute('type', 'button');
        btn1.setAttribute('class', 'ticked');
        btn1.setAttribute('id', 'save');
        spanIcons.appendChild(btn1);

        let btn2 = document.createElement('button');
        btn2.setAttribute('type', 'button');
        spanIcons.appendChild(btn2);

        let btn3 = document.createElement('button');
        btn3.setAttribute('type', 'button');
        spanIcons.appendChild(btn3);

        let img1 = document.createElement('img');
        img1.setAttribute('src', 'https://img.icons8.com/ios-filled/50/000000/double-tick.png');
        btn1.appendChild(img1);
        // adding event litener to button 1
        btn1.addEventListener('click', function cvt() {
            if ((img1.src === 'https://img.icons8.com/ios-filled/50/000000/double-tick.png')) {
                img1.src = 'https://img.icons8.com/ios/50/000000/edit--v1.png';
                // disabling input text once written and clicked tick button
                para.style.textDecoration = "line-through";

            }
            else if (img1.src === 'https://img.icons8.com/ios/50/000000/edit--v1.png') {
                img1.src = 'https://img.icons8.com/ios-filled/50/000000/double-tick.png';

                para.style.textDecoration = null;
            }
        }
        );


        let img2 = document.createElement('img');
        img2.setAttribute('src', 'https://img.icons8.com/material-outlined/24/000000/edit-calendar.png');
        let cal = document.createElement('a');
        cal.setAttribute('id', 'linker');
        cal.setAttribute('target', '_blank');
        btn2.addEventListener("click", function () {
            let inpVal = para.innerHTML;
            let val = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=";
            val = val + inpVal;
            // console.log(val)
            cal.setAttribute('href', val);
        })

        cal.appendChild(img2);
        btn2.appendChild(cal);


        let img3 = document.createElement('img');
        img3.setAttribute('src', 'https://img.icons8.com/windows/96/000000/trash.png');
        btn3.appendChild(img3);

        btn3.addEventListener("click", function () {

            id = para.innerHTML;
            val = JSON.parse(localStorage.getItem("decide"))
            val.splice(id, 1);
            localStorage.setItem("decide", JSON.stringify(val));
            divItem.style.display = "none";
        })

        // accessing parents of particular caller and appending the whole form item into them
        tasks[1].append(divItem);

    });
    delegateTasks.forEach(element => {

        let divItem = document.createElement('div');
        divItem.setAttribute('class', 'item');



        let list = document.createElement('li');
        list.style.listStyleType = 'disc';
        list.style.fontSize = '1.5rem';
        divItem.appendChild(list);


        let para = document.createElement('p');
        para.setAttribute('type', 'text');
        para.setAttribute('value', '');
        para.setAttribute('id', 'inp');
        para.setAttribute('spellcheck', 'true');
        // input.scrollIntoView();
        divItem.appendChild(para);
        para.innerHTML = element;


        let spanIcons = document.createElement('span');
        spanIcons.setAttribute('class', 'icons');
        divItem.appendChild(spanIcons);

        let btn1 = document.createElement('button');
        btn1.setAttribute('type', 'button');
        btn1.setAttribute('class', 'ticked');
        btn1.setAttribute('id', 'save');
        spanIcons.appendChild(btn1);

        let btn2 = document.createElement('button');
        btn2.setAttribute('type', 'button');
        spanIcons.appendChild(btn2);

        let btn3 = document.createElement('button');
        btn3.setAttribute('type', 'button');
        spanIcons.appendChild(btn3);

        let img1 = document.createElement('img');
        img1.setAttribute('src', 'https://img.icons8.com/ios-filled/50/000000/double-tick.png');
        btn1.appendChild(img1);
        // adding event litener to button 1
        btn1.addEventListener('click', function cvt() {
            if ((img1.src === 'https://img.icons8.com/ios-filled/50/000000/double-tick.png')) {
                img1.src = 'https://img.icons8.com/ios/50/000000/edit--v1.png';
                // disabling input text once written and clicked tick button
                para.style.textDecoration = "line-through";

            }
            else if (img1.src === 'https://img.icons8.com/ios/50/000000/edit--v1.png') {
                img1.src = 'https://img.icons8.com/ios-filled/50/000000/double-tick.png';

                para.style.textDecoration = null;
            }
        }
        );


        let img2 = document.createElement('img');
        img2.setAttribute('src', 'https://img.icons8.com/material-outlined/24/000000/edit-calendar.png');
        let cal = document.createElement('a');
        cal.setAttribute('id', 'linker');
        cal.setAttribute('target', '_blank');
        btn2.addEventListener("click", function () {
            let inpVal = para.innerHTML;
            let val = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=";
            val = val + inpVal;
            // console.log(val)
            cal.setAttribute('href', val);
        })

        cal.appendChild(img2);
        btn2.appendChild(cal);


        let img3 = document.createElement('img');
        img3.setAttribute('src', 'https://img.icons8.com/windows/96/000000/trash.png');
        btn3.appendChild(img3);

        btn3.addEventListener("click", function () {

            id = para.innerHTML;
            val = JSON.parse(localStorage.getItem("delegate"))
            val.splice(id, 1);
            localStorage.setItem("delegate", JSON.stringify(val));
            console.log("In delegate")
            divItem.style.display = "none";
        })

        // accessing parents of particular caller and appending the whole form item into them
        tasks[2].append(divItem);

    });
    deleteTasks.forEach(element => {
        let divItem = document.createElement('div');
        divItem.setAttribute('class', 'item');



        let list = document.createElement('li');
        list.style.listStyleType = 'disc';
        list.style.fontSize = '1.5rem';
        divItem.appendChild(list);


        let para = document.createElement('p');
        para.setAttribute('type', 'text');
        para.setAttribute('value', '');
        para.setAttribute('id', 'inp');
        para.setAttribute('spellcheck', 'true');
        // input.scrollIntoView();
        divItem.appendChild(para);
        para.innerHTML = element;


        let spanIcons = document.createElement('span');
        spanIcons.setAttribute('class', 'icons');
        divItem.appendChild(spanIcons);

        let btn1 = document.createElement('button');
        btn1.setAttribute('type', 'button');
        btn1.setAttribute('class', 'ticked');
        btn1.setAttribute('id', 'save');
        spanIcons.appendChild(btn1);

        let btn2 = document.createElement('button');
        btn2.setAttribute('type', 'button');
        spanIcons.appendChild(btn2);

        let btn3 = document.createElement('button');
        btn3.setAttribute('type', 'button');
        spanIcons.appendChild(btn3);

        let img1 = document.createElement('img');
        img1.setAttribute('src', 'https://img.icons8.com/ios-filled/50/000000/double-tick.png');
        btn1.appendChild(img1);
        // adding event litener to button 1
        btn1.addEventListener('click', function cvt() {
            if ((img1.src === 'https://img.icons8.com/ios-filled/50/000000/double-tick.png')) {
                img1.src = 'https://img.icons8.com/ios/50/000000/edit--v1.png';
                // disabling input text once written and clicked tick button
                para.style.textDecoration = "line-through";

            }
            else if (img1.src === 'https://img.icons8.com/ios/50/000000/edit--v1.png') {
                img1.src = 'https://img.icons8.com/ios-filled/50/000000/double-tick.png';

                para.style.textDecoration = null;
            }
        }
        );


        let img2 = document.createElement('img');
        img2.setAttribute('src', 'https://img.icons8.com/material-outlined/24/000000/edit-calendar.png');
        let cal = document.createElement('a');
        cal.setAttribute('id', 'linker');
        cal.setAttribute('target', '_blank');
        btn2.addEventListener("click", function () {
            let inpVal = para.innerHTML;
            let val = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=";
            val = val + inpVal;
            // console.log(val)
            cal.setAttribute('href', val);
        })

        cal.appendChild(img2);
        btn2.appendChild(cal);


        let img3 = document.createElement('img');
        img3.setAttribute('src', 'https://img.icons8.com/windows/96/000000/trash.png');
        btn3.appendChild(img3);

        // accessing parents of particular caller and appending the whole form item into them
        tasks[3].append(divItem);

    });
}

showTasks(doTasks, decideTasks, delegateTasks, deleteTasks);


for (let k = 0; k < save.length; k++) {
    localStorage.setItem("do", JSON.stringify(doTasks));
    localStorage.setItem("decide", JSON.stringify(decideTasks));
    localStorage.setItem("delegate", JSON.stringify(delegateTasks));
    localStorage.setItem("delete", JSON.stringify(deleteTasks));

    save[k].addEventListener('click', function () {

        if (fields[k].value != "") {
            let divItem = document.createElement('div');
            divItem.setAttribute('class', 'item');

            let list = document.createElement('li');
            list.style.listStyleType = 'disc';
            // list.style.fontSize = '1.5rem';
            divItem.appendChild(list);

            let para = document.createElement('p');
            para.setAttribute('type', 'text');
            para.setAttribute('value', '');
            para.setAttribute('id', 'inp');
            para.setAttribute('spellcheck', 'true');
            // input.scrollIntoView();
            divItem.appendChild(para);

            let spanIcons = document.createElement('span');
            spanIcons.setAttribute('class', 'icons');
            divItem.appendChild(spanIcons);

            let btn1 = document.createElement('button');
            btn1.setAttribute('type', 'button');
            btn1.setAttribute('class', 'ticked');
            btn1.setAttribute('id', 'save');
            spanIcons.appendChild(btn1);

            let btn2 = document.createElement('button');
            btn2.setAttribute('type', 'button');
            spanIcons.appendChild(btn2);

            let btn3 = document.createElement('button');
            btn3.setAttribute('type', 'button');
            spanIcons.appendChild(btn3);

            let img1 = document.createElement('img');
            img1.setAttribute('src', 'https://img.icons8.com/ios-filled/50/000000/double-tick.png');
            btn1.appendChild(img1);
            // adding event litener to button 1
            btn1.addEventListener('click', function cvt() {
                if ((img1.src === 'https://img.icons8.com/ios-filled/50/000000/double-tick.png')) {
                    img1.src = 'https://img.icons8.com/ios/50/000000/edit--v1.png';
                    // disabling input text once written and clicked tick button
                    para.style.textDecoration = "line-through";

                }
                else if (img1.src === 'https://img.icons8.com/ios/50/000000/edit--v1.png') {
                    img1.src = 'https://img.icons8.com/ios-filled/50/000000/double-tick.png';

                    para.style.textDecoration = null;
                }
            }
            );


            let img2 = document.createElement('img');
            img2.setAttribute('src', 'https://img.icons8.com/material-outlined/24/000000/edit-calendar.png');
            let cal = document.createElement('a');
            cal.setAttribute('id', 'linker');
            cal.setAttribute('target', '_blank');
            btn2.addEventListener("click", function () {
                let inpVal = para.innerHTML;
                let val = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=";
                val = val + inpVal;
                // console.log(val)
                cal.setAttribute('href', val);
            })

            cal.appendChild(img2);
            btn2.appendChild(cal);


            let img3 = document.createElement('img');
            img3.setAttribute('src', 'https://img.icons8.com/windows/96/000000/trash.png');
            btn3.appendChild(img3);

            btn3.addEventListener("click", function () {
                if (k == 0) {
                    id = para.innerHTML;
                    val = JSON.parse(localStorage.getItem("do"))
                    val.splice(id, 1);
                    localStorage.setItem("do", JSON.stringify(val));
                    divItem.style.display = "none";
                }
                if (k == 1) {
                    id = para.innerHTML;
                    val = JSON.parse(localStorage.getItem("decide"))
                    val.splice(id, 1);
                    localStorage.setItem("decide", JSON.stringify(val));
                    divItem.style.display = "none";
                }
                if (k == 2) {
                    id = para.innerHTML;
                    val = JSON.parse(localStorage.getItem("delegate"))
                    val.splice(id, 1);
                    localStorage.setItem("delegate", JSON.stringify(val));
                    divItem.style.display = "none";
                }
                if (k == 3) {
                    id = para.innerHTML;
                    val = JSON.parse(localStorage.getItem("delete"))
                    val.splice(id, 1);
                    localStorage.setItem("delete", JSON.stringify(val));
                    divItem.style.display = "none";
                }
            })

            // accessing parents of particular caller and appending the whole form item into them
            tasks[k].append(divItem);

            // local storage
            if (k == 0) {
                let input1 = document.getElementById("inp1");
                let tasks = input1.value;

                let oldVal = JSON.parse(localStorage.getItem("do")) || [];

                oldVal.push(tasks);
                localStorage.setItem("do", JSON.stringify(oldVal)) || [];
                para.innerHTML = input1.value;

                input1.value = "";

                // displaying values in tasks section
                // getData = JSON.parse(localStorage.getItem("do")) || [];


            }
            else if (k == 1) {
                let input2 = document.getElementById("inp2");
                let tasks = input2.value;

                let oldVal = JSON.parse(localStorage.getItem("decide")) || [];

                oldVal.push(tasks);
                localStorage.setItem("decide", JSON.stringify(oldVal));
                para.innerHTML = input2.value;

                input2.value = "";
            }
            else if (k == 2) {
                let input3 = document.getElementById("inp3");
                let tasks = input3.value;

                let oldVal = JSON.parse(localStorage.getItem("delegate")) || [];

                oldVal.push(tasks);
                localStorage.setItem("delegate", JSON.stringify(oldVal));
                input3.value = "";

                // displaying values in tasks section
                getData = JSON.parse(localStorage.getItem("delegate")) || [];
                getData.forEach(element => {
                    para.innerHTML = element;
                });
            }
            else {
                let input4 = document.getElementById("inp4");
                let tasks = input4.value;
                let oldVal = JSON.parse(localStorage.getItem("delete"));
                console.log(typeof oldVal)
                oldVal.push(tasks);
                localStorage.setItem("delete", JSON.stringify(oldVal));
                input4.value = "";

                // displaying values in tasks section
                getData = JSON.parse(localStorage.getItem("delete")) || deleteTasks;
                getData.forEach(element => {
                    para.innerHTML = element;
                });
            }

        }


    })

    clear[k].addEventListener("click", function () {
        if (k == 0) {
            localStorage.removeItem("do");
            tasks[0].style.display = "none";
            // window.location.reload(true);
        }
        else if (k == 1) {
            localStorage.removeItem("decide");
            tasks[1].style.display = "none";
            // window.location.reload(true);
        }
        else if (k == 2) {
            localStorage.removeItem("delegate");
            tasks[2].style.display = "none";
            // window.location.reload(true);
        }
        else {
            localStorage.removeItem("delete");
            tasks[3].style.display = "none";
            // window.location.reload(true);
        }
    })

}










