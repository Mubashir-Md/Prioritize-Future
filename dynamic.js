// getting new input field on clicking plus button
let adders = document.getElementsByClassName('plus');
// changing of tick button to edit button if pressed
let editbtn = document.getElementsByClassName('ticked');
console.log(editbtn);
for (let k = 0; k < adders.length; k++) {
    adders[k].addEventListener('click', function addon() {

        let form = document.createElement('form');
        let divItem = document.createElement('div');
        form.setAttribute('class', 'in');
        divItem.setAttribute('class', 'item');
        form.appendChild(divItem);


        let list = document.createElement('li');
        list.style.listStyleType = 'disc';
        list.style.fontSize = '1.5rem';
        divItem.appendChild(list);


        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('value', '');
        input.setAttribute('id', 'inp');
        input.setAttribute('spellcheck', 'true');
        // input.scrollIntoView();
        divItem.appendChild(input);


        let spanIcons = document.createElement('span');
        spanIcons.setAttribute('class', 'icons');
        divItem.appendChild(spanIcons);

        let btn1 = document.createElement('button');
        btn1.setAttribute('type', 'button');
        btn1.setAttribute('class', 'ticked');
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
            if ((img1.src === 'https://img.icons8.com/ios-filled/50/000000/double-tick.png') && (input.value != "")) {
                img1.src = 'https://img.icons8.com/ios/50/000000/edit--v1.png';
                // disabling input text once written and clicked tick button
                input.disabled = true;
                inpVal = input.value;
                console.log(inpVal)
            }
            else if (img1.src === 'https://img.icons8.com/ios/50/000000/edit--v1.png') {
                img1.src = 'https://img.icons8.com/ios-filled/50/000000/double-tick.png';
                input.disabled = false;
            }
        }
        );


        let img2 = document.createElement('img');
        img2.setAttribute('src', 'https://img.icons8.com/material-outlined/24/000000/edit-calendar.png');
        let cal = document.createElement('a');
        cal.setAttribute('id', 'linker');
        cal.setAttribute('target', '_blank');
        btn2.addEventListener("click", function () {
            
            let inpVal = input.value;
            
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

        btn3.addEventListener('click', function delItem() {
            form.style.display = 'none';
        });




        // accessing parents of particular caller and appending the whole form item into them
        adders[k].before(form);


    })
}




