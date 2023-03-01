let plus = document.getElementsByClassName("plus")
for (let k = 0; k < plus.length; k++) {
    plus[k].addEventListener("click", function () {
        let inp = document.getElementById('inp');
        let calLink = document.getElementById('linker');
        let text = inp.value;
        let link = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=";
        link = link + text;
        inp.addEventListener("click", function (link) {
            calLink.setAttribute('href', link);
        })
    })
}
