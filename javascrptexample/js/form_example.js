const box1 = document.getElementById("inbox1");
const box2 = document.getElementById("inbox2");




// box1.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         e.preventDefault();
//         box2.value = box1.value;
//     }
// });

document.getElementById("inbox1").addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        e.preventDefault(); // Enter를 입력했을 때 폼이 자동적으로 제출 되는것을 막음
        
        const word = e.target;
        const result = document.getElementById("inbox2");
        
        result.value += word.value + "\n";

        word.value = "";
        word.focus();
    }
})

const width = document.getElementById("widthId");
const height = document.getElementById("heightId");
const color = document.getElementById("colorId");
const text = document.getElementById("textId");
const test = document.getElementById("test");


document.getElementById("btn1").addEventListener("click", () => {

    test.style.cssText = `
    width: ${width.value}px;
    height: ${height.value}px;
    background-color: ${color.value};
    `;

    test.innerText = text.value;
})