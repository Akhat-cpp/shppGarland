let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//horizontal img
let img = new Image();
img.src = '1.png'; 
let width = 1536;
let height = 792;

//vertical img
let img2 = new Image();
img2.src = 'm1.png'; 
let widthm1 = 792;
let heightm1 = 1536;

//autoplay
let tempaudioautoplay = true;

//all
let tempModal = true;
let timeout = 150;
let mode = 0;
let counter = -1;
let color = 'rgba(255, 255, 255, 1)';

img.onload = function()
{
	img2.onload = function()
	{
		blinkAll(color, timeout, counter, mode);
	}
}

function blinkAll(color, timeout, counter, mode)//after change mode counter == -1
{
	let horizontal = true;
	//vertical or horizontal
	(document.body.clientWidth >= document.body.clientHeight) ? (horizontal = horizontal) : (horizontal = 0); 
	//drow
	if(horizontal)
	{
		document.getElementById('canvas').width = width; document.getElementById('canvas').height = height;

		ctx.rect(0, 0, width, height);
	    ctx.drawImage(img, 0, 0, width, height);


	    blink('rgba(255, 255, 255, 1)', 193, 137, 7.5, 0, 2 * Math.PI, true, 55);
	    blink('rgba(255, 255, 255, 1)', 1306, 127, 7.5, 0, 2 * Math.PI, true, 55);
	    blink('rgba(255, 255, 255, 1)', 753, 650.5, 7.5, 0, 2 * Math.PI, true, 55);
	    blink('rgba(255, 255, 255, 1)', 1243, 531.5, 7.5, 0, 2 * Math.PI, true, 55);

	    if(mode == 0)
	    {
			(variableReturn('counter') == 6) ? (counterZero()) : (counterPlusPlus());
			if(variableReturn('counter') == 0) {blink(color, 203, 475, 37, 0, 2 * Math.PI, true);  setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 1) {blink(color, 372, 407.5, 22, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 2) {blink(color, 581.5, 369.5, 37, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 3) {blink(color, 747.5, 273, 22, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 4) {blink(color, 1015, 304, 37, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 5) {blink(color, 1193.5, 333, 22, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 6) {blink(color, 1349, 404, 37, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
	    }
		if(mode == 1)
		{	
			blink(color, 203, 475, 37, 0, 2 * Math.PI, true);
			blink(color, 372, 407.5, 22, 0, 2 * Math.PI, true);
			blink(color, 581.5, 369.5, 37, 0, 2 * Math.PI, true);
			blink(color, 747.5, 273, 22, 0, 2 * Math.PI, true);
			blink(color, 1015, 304, 37, 0, 2 * Math.PI, true);
			blink(color, 1193.5, 333, 22, 0, 2 * Math.PI, true);
			blink(color, 1349, 404, 37, 0, 2 * Math.PI, true);
			setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
		}
		if(mode == 2)
		{
			(variableReturn('counter') == 1) ? (counterZero()) : (counterPlusPlus());
			if(counter == 0) {blink(color, 203, 475, 37, 0, 2 * Math.PI, true);blink(color, 203, 475, 37, 0, 2 * Math.PI, true);}	
			if(counter == 1) {blink(color, 372, 407.5, 22, 0, 2 * Math.PI, true);blink(color, 372, 407.5, 22, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink(color, 581.5, 369.5, 37, 0, 2 * Math.PI, true);blink(color, 581.5, 369.5, 37, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink(color, 747.5, 273, 22, 0, 2 * Math.PI, true);blink(color, 747.5, 273, 22, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink(color, 1015, 304, 37, 0, 2 * Math.PI, true);blink(color, 1015, 304, 37, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink(color, 1193.5, 333, 22, 0, 2 * Math.PI, true);blink(color, 1193.5, 333, 22, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink(color, 1349, 404, 37, 0, 2 * Math.PI, true);blink(color, 1349, 404, 37, 0, 2 * Math.PI, true);}
			setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
		}
		if(mode == 3)
		{
			(variableReturn('counter') == 1) ? (counterZero()) : (counterPlusPlus());
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 203, 475, 37, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 203, 474, 37, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink('rgba(0, 255, 0, 1)', 372, 407.5, 22, 0, 2 * Math.PI, true); blink('rgba(0, 255, 0, 1)', 372, 407.5, 22, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 581.5, 369.5, 37, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 581.5, 369.5, 37, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink('rgba(0, 255, 0, 1)', 747.5, 273, 22, 0, 2 * Math.PI, true); blink('rgba(0, 255, 0, 1)', 747.5, 273, 22, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 1015, 304, 37, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 1015, 304, 37, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink('rgba(0, 255, 0, 1)', 1193.5, 333, 22, 0, 2 * Math.PI, true); blink('rgba(0, 255, 0, 1)', 1193.5, 333, 22, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 1349, 404, 37, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 1349, 404, 37, 0, 2 * Math.PI, true);}
			setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
		}
		if(mode == 4)
		{
			(variableReturn('counter') == 1) ? (counterZero()) : (counterPlusPlus());
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 203, 474, 37, 0, 2 * Math.PI, true, 85); blink('rgba(0, 0, 255, 1)', 203, 475, 37, 0, 2 * Math.PI, true, 45);}
			if(counter == 1) {blink('rgba(0, 255, 0, 1)', 372, 407.5, 22, 0, 2 * Math.PI, true, 85); blink('rgba(0, 255, 0, 1)', 372, 407.5, 22, 0, 2 * Math.PI, true, 45);}
			if(counter == 0) {blink('rgba(255, 0, 0, 1)', 581.5, 369.5, 37, 0, 2 * Math.PI, true, 85); blink('rgba(255, 0, 0, 1)', 581.5, 369.5, 37, 0, 2 * Math.PI, true, 45);}
			if(counter == 1) {blink('rgba(0, 0, 255, 1)', 747.5, 273, 22, 0, 2 * Math.PI, true, 85); blink('rgba(0, 0, 255, 1)', 747.5, 273, 22, 0, 2 * Math.PI, true, 45);}
			if(counter == 0) {blink('rgba(0, 255, 0, 1)', 1015, 304, 37, 0, 2 * Math.PI, true, 85); blink('rgba(0, 255, 0, 1)', 1015, 304, 37, 0, 2 * Math.PI, true, 45);}
			if(counter == 1) {blink('rgba(255, 0, 0, 1)', 1193.5, 333, 22, 0, 2 * Math.PI, true, 85); blink('rgba(255, 0, 0, 1)', 1193.5, 333, 22, 0, 2 * Math.PI, true, 45);}
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 1349, 404, 37, 0, 2 * Math.PI, true, 85); blink('rgba(0, 0, 255, 1)', 1349, 404, 37, 0, 2 * Math.PI, true, 45);}
			setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
		}
	}
	if(!horizontal)
	{
		document.getElementById('canvas').height = 667; document.getElementById('canvas').width = 375;

		(tempModal) ? document.getElementById('modal1').innerHTML = '<div id="modal1" class="modal1"><div class="modalChild1"><div class="modalChild2"><div class="modalChild3" onclick="modal()"><p>Для следующей анимации: →, для предыдущей: ←. Всего 5 режимов. Пишите добавлю еще). Чтоб пропустить этот экран: <span>просто нажмите на него</span>.</p><br/><p>For the next animation: →, for the previous: ←. There are 5 modes in total. Write to add more). Skip This Screen: <span>just click for him</span>.</p></div></div></div></div>' : tempModal = tempModal;

		ctx.rect(0, 0, 375, 667);
	    ctx.drawImage(img2, 0, 0, 375, 667);

	    blink('rgba(255, 255, 255, 1)', 93, 160, 3, 0, 2 * Math.PI, true, 55);
	    blink('rgba(255, 255, 255, 1)', 280.5, 67, 3, 0, 2 * Math.PI, true, 55);
	    blink('rgba(255, 255, 255, 1)', 317, 284.5, 3, 0, 2 * Math.PI, true, 55);
	    blink('rgba(255, 255, 255, 1)', 84.7, 546, 3, 0, 2 * Math.PI, true, 55);
	    blink('rgba(255, 255, 255, 1)', 299.5, 610, 3, 0, 2 * Math.PI, true, 55);

	    if(mode == 0)
	    {
			(variableReturn('counter') == 8) ? (counterZero()) : (counterPlusPlus());
			if(variableReturn('counter') == 0) {blink(color, 104, 444.5, 10, 0, 2 * Math.PI, true);  setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 1) {blink(color, 213, 433, 7, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 2) {blink(color, 312, 411, 10, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 3) {blink(color, 288.5, 377, 7, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 4) {blink(color, 180, 369, 10, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 5) {blink(color, 95, 332, 7, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 6) {blink(color, 96, 280, 10, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 7) {blink(color, 209, 252.5, 7, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
			if(variableReturn('counter') == 8) {blink(color, 333, 200.75, 10, 0, 2 * Math.PI, true); setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);}
	    }
		if(mode == 1)
		{	
			blink(color, 104, 444.5, 10, 0, 2 * Math.PI, true);
			blink(color, 213, 433, 7, 0, 2 * Math.PI, true);
			blink(color, 312, 411, 10, 0, 2 * Math.PI, true);
			blink(color, 288.5, 377, 7, 0, 2 * Math.PI, true);
			blink(color, 180, 369, 10, 0, 2 * Math.PI, true);
			blink(color, 95, 332, 7, 0, 2 * Math.PI, true);
			blink(color, 96, 280, 10, 0, 2 * Math.PI, true);
			blink(color, 209, 252.5, 7, 0, 2 * Math.PI, true);
			blink(color, 333, 200.75, 10, 0, 2 * Math.PI, true);
			setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
		}
		if(mode == 2)
		{
			(variableReturn('counter') == 1) ? (counterZero()) : (counterPlusPlus());
			if(counter == 0) {blink(color, 104, 444.5, 10, 0, 2 * Math.PI, true);blink(color, 104, 444.5, 10, 0, 2 * Math.PI, true);}	
			if(counter == 1) {blink(color, 213, 433, 7, 0, 2 * Math.PI, true);blink(color, 213, 433, 7, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink(color, 312, 411, 10, 0, 2 * Math.PI, true);blink(color, 312, 411, 10, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink(color, 288.5, 377, 7, 0, 2 * Math.PI, true);blink(color, 288.5, 377, 7, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink(color, 180, 369, 10, 0, 2 * Math.PI, true);blink(color, 180, 369, 10, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink(color, 95, 332, 7, 0, 2 * Math.PI, true);blink(color, 95, 332, 7, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink(color, 96, 280, 10, 0, 2 * Math.PI, true);blink(color, 96, 280, 10, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink(color, 209, 252.5, 7, 0, 2 * Math.PI, true);blink(color, 209, 252.5, 7, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink(color, 333, 200.75, 10, 0, 2 * Math.PI, true);blink(color, 333, 200.75, 10, 0, 2 * Math.PI, true);}
			setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
		}
		if(mode == 3)
		{
			(variableReturn('counter') == 1) ? (counterZero()) : (counterPlusPlus());
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 104, 444.5, 10, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 104, 444.5, 10, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink('rgba(0, 255, 0, 1)', 213, 433, 7, 0, 2 * Math.PI, true); blink('rgba(0, 255, 0, 1)', 213, 433, 7, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 312, 411, 10, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 312, 411, 10, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink('rgba(0, 255, 0, 1)', 288.5, 377, 7, 0, 2 * Math.PI, true); blink('rgba(0, 255, 0, 1)', 288.5, 377, 7, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 180, 369, 10, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 180, 369, 10, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink('rgba(0, 255, 0, 1)', 95, 332, 7, 0, 2 * Math.PI, true); blink('rgba(0, 255, 0, 1)', 95, 332, 7, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 96, 280, 10, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 96, 280, 10, 0, 2 * Math.PI, true);}
			if(counter == 1) {blink('rgba(0, 255, 0, 1)', 209, 252.5, 7, 0, 2 * Math.PI, true); blink('rgba(0, 255, 0, 1)', 209, 252.5, 7, 0, 2 * Math.PI, true);}
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 333, 200.75, 10, 0, 2 * Math.PI, true); blink('rgba(0, 0, 255, 1)', 333, 200.75, 10, 0, 2 * Math.PI, true);}
			setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
		}
		if(mode == 4)
		{
			(variableReturn('counter') == 1) ? (counterZero()) : (counterPlusPlus());
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 104, 444.5, 10, 0, 2 * Math.PI, true, 85); blink('rgba(0, 0, 255, 1)', 104, 444.5, 10, 0, 2 * Math.PI, true, 45);}
			if(counter == 1) {blink('rgba(0, 255, 0, 1)', 213, 433, 7, 0, 2 * Math.PI, true, 85); blink('rgba(0, 255, 0, 1)', 213, 433, 7, 0, 2 * Math.PI, true, 45);}
			if(counter == 0) {blink('rgba(255, 0, 0, 1)', 312, 411, 10, 0, 2 * Math.PI, true, 85); blink('rgba(255, 0, 0, 1)', 312, 411, 10, 0, 2 * Math.PI, true, 45);}
			if(counter == 1) {blink('rgba(0, 0, 255, 1)', 288.5, 377, 7, 0, 2 * Math.PI, true, 85); blink('rgba(0, 0, 255, 1)', 288.5, 377, 7, 0, 2 * Math.PI, true, 45);}
			if(counter == 0) {blink('rgba(0, 255, 0, 1)', 180, 369, 10, 0, 2 * Math.PI, true, 85); blink('rgba(0, 255, 0, 1)', 180, 369, 10, 0, 2 * Math.PI, true, 45);}
			if(counter == 1) {blink('rgba(255, 0, 0, 1)', 95, 332, 7, 0, 2 * Math.PI, true, 85); blink('rgba(255, 0, 0, 1)', 95, 332, 7, 0, 2 * Math.PI, true, 45);}
			if(counter == 0) {blink('rgba(0, 0, 255, 1)', 96, 280, 10, 0, 2 * Math.PI, true, 85); blink('rgba(0, 0, 255, 1)', 96, 280, 10, 0, 2 * Math.PI, true, 45);}
			if(counter == 1) {blink('rgba(0, 255, 0, 1)', 209, 252.5, 7, 0, 2 * Math.PI, true, 85); blink('rgba(255, 0, 0, 1)', 209, 252.5, 7, 0, 2 * Math.PI, true, 45);}
			if(counter == 0) {blink('rgba(255, 0, 0, 1)', 333, 200.75, 10, 0, 2 * Math.PI, true, 85); blink('rgba(0, 0, 255, 1)', 1349, 404, 37, 0, 2 * Math.PI, true, 45);}
			setTimeout(() => blinkAll(variableReturn('color'), variableReturn('timeout'), variableReturn('counter'), variableReturn('mode')), timeout);
		}
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
addEventListener('keydown', function(e)
{	
	//for horizontal
	if(e.key == 'ArrowUp') speed(false);
	if(e.key == 'ArrowDown') speed(true); 
	if(e.key == 'ArrowRight') nextMode(true);
	if(e.key == 'ArrowLeft') nextMode(false);
	if(e.key == ' ') modal();
	if(tempaudioautoplay) soundClickAutoplay();
});
addEventListener('click', function(e)
{
	// for all
	if(e.isTrusted && tempaudioautoplay) soundClickAutoplay();
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

//modal 1 time
function modal()
{
	document.getElementById('modal1').classList.add('unvisible');
	document.getElementById('canvas').classList.remove('unvisible');
	tempModal = 0;
}

//autoplay
function soundClickAutoplay()
{
	tempaudioautoplay = false;
	let audio = new Audio();
	audio.src = 'Trap City - Ho Ho Ho.mp3';
	audio.autoplay = true;
	setTimeout(soundClickAutoplay, 206000);
}