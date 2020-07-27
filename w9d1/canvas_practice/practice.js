document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(100, 100, 100, 150);

    ctx.beginPath();
    ctx.arc(400, 150, 50, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = 'blue';
    ctx.fill();

    //heart
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fillStyle = 'purple';
    ctx.fill();
});
