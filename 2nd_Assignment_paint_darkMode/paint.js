const canvas = document.querySelector(".canvas"),
    ctx = canvas.getContext("2d"),
    colors = document.querySelectorAll(".paint_color"),
    resetBnt = document.querySelector("button");

const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.lineWidth = 3;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

resetBnt.addEventListener("click", (event) => {
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
});

let painting = false;

function handleMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (painting) {
        ctx.lineTo(x, y);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

if (canvas) {
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousedown", () => (painting = true));
    canvas.addEventListener("mouseup", () => (painting = false));
    canvas.addEventListener("mouseleave", () => (painting = false));
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);