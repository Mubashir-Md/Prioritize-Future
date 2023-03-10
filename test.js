console.log(Date.now())
let inp = "Enter a value";
// let text = inp.value;
let link = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=";
link = link.concat(inp);
console.log(link)