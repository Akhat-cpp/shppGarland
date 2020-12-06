let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let img = new Image();
img.src = '2.png'; 
let width = 1536;
let height = 788;

let timeout = 150;
let all = false;
let mode = 0;
let counter = -1;
let arraySequence = [0, 1, 2, 3, 4, 5, 6];
let arrayColors = ['rgba(0, 0, 255, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 255, 0, 1)', 'rgba(0, 255, 0, 1)', 'rgba(0, 255, 255, 1)', 'rgba(255, 0, 255, 1'];
let color = 'rgba(255, 255, 255, 1)';

img.onload = function()
{
	blinkAll(arraySequence, color, timeout, counter, mode);
}

function blinkAll(arraySequence, color, timeout, counter, mode)//after change mode counter == -1
{
	ctx.rect(0, 0, 1536, 788);
    ctx.drawImage(img, 0, 0, width, height);

    if(mode == 0)
    {
		(variableReturn('counter') == arraySequence.length-1) ? (counterZero()) : (counterPlusPlus());
		if(arraySequence[variableReturn('counter')] == 0) {blink(color, 203, 474, 37, 0, 2 * Math.PI, true);  setTimeout(() => blinkAll(arraysReturn('arraySequence'), variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
		if(arraySequence[variableReturn('counter')] == 1) {blink(color, 372, 407.5, 22, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(arraysReturn('arraySequence'), variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
		if(arraySequence[variableReturn('counter')] == 2) {blink(color, 581.5, 369.5, 37, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(arraysReturn('arraySequence'), variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
		if(arraySequence[variableReturn('counter')] == 3) {blink(color, 747.5, 273, 22, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(arraysReturn('arraySequence'), variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
		if(arraySequence[variableReturn('counter')] == 4) {blink(color, 1015, 304, 37, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(arraysReturn('arraySequence'), variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
		if(arraySequence[variableReturn('counter')] == 5) {blink(color, 1193.5, 333, 22, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(arraysReturn('arraySequence'), variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
		if(arraySequence[variableReturn('counter')] == 6) {blink(color, 1349, 404, 37, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(arraysReturn('arraySequence'), variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
    }
	if(mode == 1)
	{	
		blink(color, 203, 474, 37, 0, 2 * Math.PI, true);
		blink(color, 372, 407.5, 22, 0, 2 * Math.PI, true);
		blink(color, 581.5, 369.5, 37, 0, 2 * Math.PI, true);
		blink(color, 747.5, 273, 22, 0, 2 * Math.PI, true);
		blink(color, 1015, 304, 37, 0, 2 * Math.PI, true);
		blink(color, 1193.5, 333, 22, 0, 2 * Math.PI, true);
		blink(color, 1349, 404, 37, 0, 2 * Math.PI, true);
		setTimeout(() => blinkAll(arraysReturn('arraySequence'), variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
	}
	if(mode == 2)
	{
		(variableReturn('counter') == 1) ? (counterZero()) : (counterPlusPlus());
		if(counter == 0) {blink(color, 203, 474, 37, 0, 2 * Math.PI, true);blink(color, 203, 474, 37, 0, 2 * Math.PI, true);}
		if(counter == 1) {blink(color, 372, 407.5, 22, 0, 2 * Math.PI, true);blink(color, 372, 407.5, 22, 0, 2 * Math.PI, true);}
		if(counter == 0) {blink(color, 581.5, 369.5, 37, 0, 2 * Math.PI, true);blink(color, 581.5, 369.5, 37, 0, 2 * Math.PI, true);}
		if(counter == 1) {blink(color, 747.5, 273, 22, 0, 2 * Math.PI, true);blink(color, 747.5, 273, 22, 0, 2 * Math.PI, true);}
		if(counter == 0) {blink(color, 1015, 304, 37, 0, 2 * Math.PI, true);blink(color, 1015, 304, 37, 0, 2 * Math.PI, true);}
		if(counter == 1) {blink(color, 1193.5, 333, 22, 0, 2 * Math.PI, true);blink(color, 1193.5, 333, 22, 0, 2 * Math.PI, true);}
		if(counter == 0) {blink(color, 1349, 404, 37, 0, 2 * Math.PI, true);blink(color, 1349, 404, 37, 0, 2 * Math.PI, true);}
		setTimeout(() => blinkAll(arraysReturn('arraySequence'), variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
	}
	if(mode == 3)
	{
		(variableReturn('counter') == 1) ? (counterZero()) : (counterPlusPlus());
		if(counter == 0) {blink('rgba(0, 0, 255, 1)', 203, 474, 37, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 203, 474, 37, 0, 2 * Math.PI, true);}
		if(counter == 1) {blink('rgba(0, 255, 0, 1)', 372, 407.5, 22, 0, 2 * Math.PI, true); blink('rgba(0, 255, 0, 1)', 372, 407.5, 22, 0, 2 * Math.PI, true);}
		if(counter == 0) {blink('rgba(0, 0, 255, 1)', 581.5, 369.5, 37, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 581.5, 369.5, 37, 0, 2 * Math.PI, true);}
		if(counter == 1) {blink('rgba(0, 255, 0, 1)', 747.5, 273, 22, 0, 2 * Math.PI, true); blink('rgba(0, 255, 0, 1)', 747.5, 273, 22, 0, 2 * Math.PI, true);}
		if(counter == 0) {blink('rgba(0, 0, 255, 1)', 1015, 304, 37, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 1015, 304, 37, 0, 2 * Math.PI, true);}
		if(counter == 1) {blink('rgba(0, 255, 0, 1)', 1193.5, 333, 22, 0, 2 * Math.PI, true); blink('rgba(0, 255, 0, 1)', 1193.5, 333, 22, 0, 2 * Math.PI, true);}
		if(counter == 0) {blink('rgba(0, 0, 255, 1)', 1349, 404, 37, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 1349, 404, 37, 0, 2 * Math.PI, true);}
		setTimeout(() => blinkAll(arraysReturn('arraySequence'), variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
	}
	if(mode == 4)
	{
		(variableReturn('counter') == 1) ? (counterZero()) : (counterPlusPlus());
		if(counter == 0) {blink('rgba(0, 0, 255, 1)', 203, 474, 37, 0, 2 * Math.PI, true, 85); blink('rgba(0, 0, 255, 1)', 203, 474, 37, 0, 2 * Math.PI, true, 45);}
		if(counter == 1) {blink('rgba(0, 255, 0, 1)', 372, 407.5, 22, 0, 2 * Math.PI, true, 85); blink('rgba(0, 255, 0, 1)', 372, 407.5, 22, 0, 2 * Math.PI, true, 45);}
		if(counter == 0) {blink('rgba(255, 0, 0, 1)', 581.5, 369.5, 37, 0, 2 * Math.PI, true, 85); blink('rgba(255, 0, 0, 1)', 581.5, 369.5, 37, 0, 2 * Math.PI, true, 45);}
		if(counter == 1) {blink('rgba(0, 0, 255, 1)', 747.5, 273, 22, 0, 2 * Math.PI, true, 85); blink('rgba(0, 0, 255, 1)', 747.5, 273, 22, 0, 2 * Math.PI, true, 45);}
		if(counter == 0) {blink('rgba(0, 255, 0, 1)', 1015, 304, 37, 0, 2 * Math.PI, true, 85); blink('rgba(0, 255, 0, 1)', 1015, 304, 37, 0, 2 * Math.PI, true, 45);}
		if(counter == 1) {blink('rgba(255, 0, 0, 1)', 1193.5, 333, 22, 0, 2 * Math.PI, true, 85); blink('rgba(255, 0, 0, 1)', 1193.5, 333, 22, 0, 2 * Math.PI, true, 45);}
		if(counter == 0) {blink('rgba(0, 0, 255, 1)', 1349, 404, 37, 0, 2 * Math.PI, true, 85); blink('rgba(0, 0, 255, 1)', 1349, 404, 37, 0, 2 * Math.PI, true, 45);}
		setTimeout(() => blinkAll(arraysReturn('arraySequence'), variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
	}
}

function blink(color, x, y, radius, start, end, bool, blur)
{
	ctx.save();
	ctx.shadowColor = color;
	(blur) ? (ctx.shadowBlur = blur) : (ctx.shadowBlur = 45);

	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(x, y, radius, start, end, bool);
	ctx.fill();

	ctx.restore();
}

//controls
addEventListener("keydown", function(e)
{
	if(e.key == 'ArrowUp') speed(false);
	if(e.key == 'ArrowDown') speed(true); 
	if(e.key == 'ArrowRight') nextMode(true);
	if(e.key == 'ArrowLeft') nextMode(false);
});

function speed(upOrDown)
{
	(upOrDown) ? ((timeout < 10000) ? (timeout += 100) : (timeout = timeout)) : ((timeout > 100) ? (timeout -= 100) : ((timeout > 40) ? (timeout -= 10) : (timeout = timeout)));
}

function nextMode(nextOrLast)
{
	(nextOrLast && mode < 4) ? (mode++) : ((nextOrLast) ? (mode = 0) : (mode = mode));
	(!nextOrLast && mode > 0) ? (mode--) : ((!nextOrLast) ? (mode = 4) : (mode = mode));
	counter = -1;
	if(mode == 0) timeoutFunc(170);
	if(mode == 2) timeoutFunc(300);
	if(mode == 3) timeoutFunc(300);
	if(mode == 4) timeoutFunc(300);
}

//for counter
function counterPlusPlus()
{
	counter++;
}
function counterZero()
{
	counter = 0;
}

//for mods
function timeoutFunc(x)
{
	timeout = x;
}

//returns
function variableReturn(variable)
{
	return eval(variable);
}

function arraysReturn(array)
{
	return eval(array);
}