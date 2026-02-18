import { getRandomColor, getRandomInt } from "./utils.js";
import { drawRectangle, drawArc, drawLine } from "./canvas-utils.js";

let paused = false;
let createRectangles = true;
let createLines = true;
let createArcs = true;

let canvas;
let ctx;

const init = () => {
    canvas = document.querySelector(`canvas`);
    ctx = canvas.getContext(`2d`);
    setupUI();
    drawRectangle(ctx, 0, 0, 800, 800);
    update();
}

const drawRandomRect = (a) => {
    let x = getRandomInt(-99, 800);
    let y = getRandomInt(-99, 800);
    let width = getRandomInt(0, 100);
    if (x + width > 800) {
        width = 800 - x;
    }
    else if (x + width < 0) {
        width = 100;
    }
    let height = getRandomInt(0, 100);
    if (y + height > 800) {
        height = 800 - y;
    }
    else if (y + height < 0) {
        height = 100;
    }
    let color = getRandomColor(a);
    let lineWidth = getRandomInt(0, 20);
    drawRectangle(ctx, x, y, width, height, color, lineWidth, color);
}

const drawRandomLine = (a) => {
    let x1 = getRandomInt(0, 800);
    let y1 = getRandomInt(0, 800);
    let x2 = getRandomInt(0, 800);
    let y2 = getRandomInt(0, 800);
    let width = getRandomInt(1, 20);
    let color = getRandomColor(a);
    drawLine(ctx, x1, y1, x2, y2, width, color);
}

const drawRandomArc = (a) => {
    ctx.save();
    let x = getRandomInt(0, 800);
    let y = getRandomInt(-99, 800);
    let radius = getRandomInt(0, 100);
    let width = getRandomInt(1, 20);
    let color = getRandomColor(a);
    drawArc(ctx, x, y, radius, color, 0, width, color, Math.PI * 2);
}

const canvasClicked = (e) => {
    let rect = e.target.getBoundingClientRect();
    let mouseX = e.clientX - rect.x;
    let mouseY = e.clientY - rect.y;
    console.log(mouseX, mouseY);
    for (let i = 0; i < 10; i++) {
        drawArc(
            ctx,
            mouseX + getRandomInt(-25, 25),
            mouseY + getRandomInt(-25, 25),
            getRandomInt(10, 50),
            getRandomColor(1),
            0,
            getRandomInt(1, 20),
            getRandomColor(1),
            Math.PI * 2
        )
    }
}

const setupUI = () => {
    let play = document.querySelector(`#btn-play`);
    let pause = document.querySelector(`#btn-pause`);
    let clear = document.querySelector(`#btn-clear`);
    let rectangleBox = document.querySelector(`#cb-rectangles`);
    let lineBox = document.querySelector(`#cb-lines`);
    let arcBox = document.querySelector(`#cb-arcs`);
    play.addEventListener(`click`, () => {
        if (paused) {
            paused = false;
            update();
        }
    });
    pause.addEventListener(`click`, () => {
        paused = true;
    })
    clear.addEventListener(`click`, () => {
        drawRectangle(ctx, 0, 0, 800, 800);
    });
    canvas.addEventListener(`click`, canvasClicked);
    rectangleBox.addEventListener(`click`, () => {
        createRectangles = rectangleBox.checked;
    });
    createRectangles = rectangleBox.checked;
    lineBox.addEventListener(`click`, () => {
        createLines = lineBox.checked;
    });
    createLines = lineBox.checked;
    arcBox.addEventListener(`click`, () => {
        createArcs = arcBox.checked;
    });
    createArcs = arcBox.checked;
}

const update = () => {
    if (paused) {
        return;
    }
    let a = getRandomInt(1, 10) / 50.0;
    let choice = getRandomInt(0, 2);
    if (choice == 0 && createRectangles) {
        drawRandomRect(a);
    }
    else if (choice == 1 && createLines) {
        drawRandomLine(a);
    }
    else if (createArcs) {
        drawRandomArc(a);
    }
    requestAnimationFrame(update);
}

init();