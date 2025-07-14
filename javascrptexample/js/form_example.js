const box1 = document.getElementById("inbox1");
const box2 = document.getElementById("inbox2");




box1.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        box2.value = box1.value;
    }
});

const width = document.getElementById("widthId");
const height = document.getElementById("heightId");
const color = document.getElementById("colorId");
const text = document.getElementById("textId");
const test = document.getElementById("test");


document.getElementById("btn1").addEventListener("click", () => {

    const widthVal = width.value;
    const heightVal = height.value;
    const colorVal = color.value;
    const textVal = text.value;

    test.style.width = widthVal + "px";
    test.style.height = heightVal + "px";
    test.style.backgroundColor = color.value;

    test.innerText = textVal;
})