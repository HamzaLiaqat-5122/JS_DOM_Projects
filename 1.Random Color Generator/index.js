const body = document.body;
const container = document.querySelector(".container");
const colorPara = document.querySelector(".color-para");
const button = document.querySelector(".btn");
const colorSpan = document.querySelector(".colorSpan");

const randomColorGenerator = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

button.addEventListener("click", () => {
    const randomColor = randomColorGenerator();;
    body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
});