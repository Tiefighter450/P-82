canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
color = "red";
mouseEvent = "empty";
var lastPosOfY, lastPosOfX;
widthOfLine = 1;
color = "red";
radius = 10;
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    widthOfLine = document.getElementById("lineWidth").value;
    console.log(widthOfLine);
    radius = document.getElementById("radius").value;
    console.log(radius);
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    currentPosOfX = e.clientX - canvas.offsetLeft;
    currentPosOfY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + currentPosOfX + " y = " + currentPosOfY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPosOfX, currentPosOfY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    lastPosOfX = currentPosOfX;
    lastPosOfY = currentPosOfY;
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave() {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp() {
    mouseEvent = "mouseUP";
}
function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}