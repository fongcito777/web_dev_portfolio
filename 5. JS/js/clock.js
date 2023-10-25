function startClock() {
    displayClockFace(ctx, clockRadius);
    displayClockNumbers(ctx, clockRadius);
    displayCurrentTime(ctx, clockRadius);
}

function displayClockFace(ctx, radius) {
    var outerGradient = ctx.createRadialGradient(0, 0, radius + 20, 0, 0, 2 * Math.PI);
    outerGradient.addColorStop(0, 'blue');
    outerGradient.addColorStop(1, 'red');
    var innerGradient = ctx.createRadialGradient(0, 0, radius + 20, 0, 0, 2 * Math.PI);
    innerGradient.addColorStop(0, 'black');
    innerGradient.addColorStop(1, 'white');
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = innerGradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = outerGradient;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}

function displayClockNumbers(ctx, radius) {
    var angle;
    var number = 1;
    ctx.font = radius * 0.15 + "px Arial";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    while (number != 13) {
        angle = (number * Math.PI) / 6;
        ctx.rotate(angle);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-angle);
        ctx.fillText(number.toString(), 0, 0);
        ctx.rotate(angle);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-angle);
        number++;
    }
}

function displayCurrentTime(ctx, radius) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    hour = hour % 12;
    var hourAngle = ((hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60)));
    var minuteAngle = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    var secondAngle = second * Math.PI / 30;
    var display = document.getElementById('time-display');
    display.innerHTML = "Hour: " + hourAngle * (180 / Math.PI) + " - Minutes: " + minuteAngle * (180 / Math.PI) + " - Seconds: " + secondAngle * (180 / Math.PI);
    
    displayClockHand(ctx, hourAngle, radius * 0.5, radius * 0.07);
    displayClockHand(ctx, minuteAngle, radius * 0.8, radius * 0.05);
    displayClockHand(ctx, secondAngle, radius * 0.9, radius * 0.02);
}

function displayClockHand(ctx, position, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(position);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-position);
}