function changeBackground() {
    document.body.style.backgroundColor = "#bae6fd";
}


const multipleBtns = document.querySelectorAll(".btn_onclick");

// buttonTwo.onclick=function() {
//     document.body.style.backgroundColor = "#a7f3d0";
// };

// multipleBtns.forEach((button) => {
//     button.onclick = function () {
//         document.body.style.backgroundColor = "#a7f3d0"
//     }
// })

//select button from HTML
const buttonFive = document.querySelector(".btn_event-listener");

//change color function
function changeColor() {

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

buttonFive.addEventListener("click", changeColor);
buttonFive.addEventListener("mouseenter", changeColor);



console.log("multipleBtns:", multipleBtns);



