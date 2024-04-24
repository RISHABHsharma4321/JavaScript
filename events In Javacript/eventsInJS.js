// this method is more useful than the inline method

// let btn = document.querySelector("button")

// btn.onclick = (evt) => {
    
//     // we can also perform others tasks in this function

//     // these are some important methods related to the event objects
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
//     console.log(evt.type);
//     console.log("BUTTOM CLICKED");
// }

// let div = document.querySelector("div");

// div.ondblclick = () => {
    
//     // does some peice of work
//     let a = 10;
//     a++;
//     console.log(a);

//     console.log("button clicked by user");
// }

let btn = document.querySelector("button");
let mode = 'light';
let body = document.querySelector("body");

btn.addEventListener("click", () => {

    if(mode === 'light') {

        mode = 'dark';
        body.classList.add("dark");
        // also we need to remove the light
        body.classList.remove("light");
    }

    else {

        mode = 'light';
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(mode);
})
