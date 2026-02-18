export const drawRectangle = (ctx, x, y, w, h, fillColor = `black`, lineWidth = 0, strokeColor = `black`) => {
    ctx.save();
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

export const drawArc = (ctx, x, y, r, fillColor = `black`, startAngle = 0, lineWidth = 0, strokeColor = `black`, endAngle = Math.PI * 2) => {
    ctx.save();
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(x, y, r, startAngle, endAngle, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

export const drawLine = (ctx, x1, y1, x2, y2, lineWidth = 1, strokeColor = `black`) => {
    ctx.save();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}