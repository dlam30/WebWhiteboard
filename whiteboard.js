var sizeBtn = document.querySelector('#size');
var markerBtn = document.querySelector('#marker');
var eraseBtn = document.querySelector('#erase');
var colorBtn = document.querySelector('#color');
var mrkColor = 'black';
var mrkWidth = '4';
var canvas = new fabric.Canvas('c', {
	 isDrawingMode: true,
});

var myCanvas = document.querySelector('.canvas-container');
var colorDiv = document.createElement('div');
var sizeDiv = document.createElement('div');

var blackDiv = document.createElement('div');
var redDiv = document.createElement('div');
var greenDiv = document.createElement('div');
var blueDiv = document.createElement('div');
var magentaDiv = document.createElement('div');

var xsDiv = document.createElement('div');
var sDiv = document.createElement('div');
var mDiv = document.createElement('div');
var lDiv = document.createElement('div');
var xlDiv = document.createElement('div');

init();

// Initialized function
function init() {
	canvas.freeDrawingBrush.color = mrkColor;
	canvas.freeDrawingBrush.width = mrkWidth;
	canvas.selection = false;
	canvas.hoverCursor = 'default';
	fabric.isTouchSupported = true;
	canvas.renderAll();

	colorDiv = createColorDivs();
	sizeDiv = createSizeDivs();

	myCanvas.appendChild(colorDiv);
	myCanvas.appendChild(sizeDiv);

}

// --------------------------------------------

blackDiv.addEventListener("click", function() {
	return changeColor('black');
})

redDiv.addEventListener("click", function() {
	return changeColor('#E53935');
})

blueDiv.addEventListener("click", function() {
	return changeColor('#039BE5');
})

greenDiv.addEventListener("click", function() {
	return changeColor('#7CB342');
})

magentaDiv.addEventListener("click", function() {
	return changeColor('#7C4DFF');
})

//--------------------------------------------------

xsDiv.addEventListener("click", function() {
	return changeSize('4');
})

sDiv.addEventListener("click", function() {
	return changeSize('10');
})

mDiv.addEventListener("click", function() {
	return changeSize('16');
})

lDiv.addEventListener("click", function() {
	return changeSize('22');
})

xlDiv.addEventListener("click", function() {
	return changeSize('28');
});

//-----------------------------------------------------

function changeColor(color) {
	mrkColor = color;
	canvas.freeDrawingBrush.color = mrkColor;
	colorBtn.style.background = color;
	colorDiv.style.display = 'none';
	canvas.isDrawingMode = true;
}

function changeSize(size) {
	mrkWidth = size;
	canvas.freeDrawingBrush.color = mrkColor;
	canvas.freeDrawingBrush.width = mrkWidth;
	sizeDiv.style.display = 'none';
	canvas.isDrawingMode = true;
}

//-------------------------------------------------

// Button Create and Setting

// Color
colorBtn.addEventListener("click", function() {
	sizeDiv.style.display = 'none';
	return toggle(colorDiv);
});

// Size
sizeBtn.addEventListener("click", function() {
	colorDiv.style.display = 'none';
	return toggle(sizeDiv);
});


function toggle(div) {
	if (div.style.display === 'none') {
		div.style.display = 'block';
		canvas.isDrawingMode = false;
		canvas.forEachObject(function(o) {
			o.selectable = false;
		})
	} else {
		div.style.display = 'none';
		canvas.isDrawingMode = true;
	}
}

// Marker
markerBtn.addEventListener("click", function() {
	sizeDiv.style.display = 'none';
	colorDiv.style.display = 'none';
	canvas.freeDrawingBrush.color = mrkColor;
	canvas.freeDrawingBrush.width = mrkWidth;
	canvas.isDrawingMode = true;
});

// Eraser
eraseBtn.addEventListener("click", function() {
	sizeDiv.style.display = 'none';
	colorDiv.style.display = 'none';
	canvas.freeDrawingBrush.color = 'white';
	canvas.freeDrawingBrush.width = '40';
	canvas.isDrawingMode = true;
});

// Create Cells -------------------------------------------------

function createColorDivs() {
	// initial
	colorDiv.className = 'innerDiv';
	colorDiv.style.display = 'none';

	blackDiv.className = 'cell';
	blackDiv.id = 'black';
	blackSquare = document.createElement('div');
	blackSquare.className = 'square';
	blackSquare.style.background = 'black';
	blackDiv.appendChild(blackSquare);

	redDiv.className = 'cell';
	redDiv.id = 'red';
	redSquare = document.createElement('div');
	redSquare.className = 'square';
	redSquare.style.background = '#E53935';
	redDiv.appendChild(redSquare);

	greenDiv.className = 'cell';
	greenDiv.id = 'green';
	greenSquare = document.createElement('div');
	greenSquare.className = 'square';
	greenSquare.style.background = '#7CB342';
	greenDiv.appendChild(greenSquare);

	blueDiv.className = 'cell';
	blueDiv.id = 'blue';
	blueSquare = document.createElement('div');
	blueSquare.className = 'square';
	blueSquare.style.background = '#039BE5';
	blueDiv.appendChild(blueSquare);

	magentaDiv.className = 'cell';
	magentaDiv.id = 'magenta';
	magentaSquare = document.createElement('div');
	magentaSquare.className = 'square';
	magentaSquare.style.background = '#7C4DFF';
	magentaDiv.appendChild(magentaSquare);

	colorDiv.appendChild(blackDiv);
	colorDiv.appendChild(redDiv);
	colorDiv.appendChild(greenDiv);
	colorDiv.appendChild(blueDiv);
	colorDiv.appendChild(magentaDiv);
	return colorDiv;
}

function createSizeDivs() {

	sizeDiv.className = 'innerDiv';
	sizeDiv.id ='sizeDiv';
	sizeDiv.style.display = 'none';

	xsDiv.className = 'cell';
	xsDiv.id = 'xs';
	xsCircle = document.createElement('div');
	xsCircle.className = 'circle';
	xsCircle.style.width = '4px';
	xsCircle.style.height = '4px';
	xsCircle.style.marginTop = '27px';
	xsDiv.appendChild(xsCircle);

	sDiv.className = 'cell';
	sDiv.id = 's';
	sCircle = document.createElement('div');
	sCircle.className = 'circle';
	sCircle.style.width = '10px';
	sCircle.style.height = '10px';
	sCircle.style.marginTop = '24px';
	sDiv.appendChild(sCircle);

	mDiv.className = 'cell';
	mDiv.id = 'm';
	mCircle = document.createElement('div');
	mCircle.className = 'circle';
	mCircle.style.width = '16px';
	mCircle.style.height = '16px';
	mCircle.style.marginTop = '21px';
	mDiv.appendChild(mCircle);

	lDiv.className = 'cell';
	lDiv.id = 'l';
	lCircle = document.createElement('div');
	lCircle.className = 'circle';
	lCircle.style.width = '22px';
	lCircle.style.height = '22px';
	lCircle.style.marginTop = '18px';
	lDiv.appendChild(lCircle);

	xlDiv.className = 'cell';
	xlDiv.id = 'xl';
	xlCircle = document.createElement('div');
	xlCircle.className = 'circle';
	xlCircle.style.width = '28px';
	xlCircle.style.height = '28px';
	xlCircle.style.marginTop = '15px';
	xlDiv.appendChild(xlCircle);

	sizeDiv.appendChild(xsDiv);
	sizeDiv.appendChild(sDiv);
	sizeDiv.appendChild(mDiv);
	sizeDiv.appendChild(lDiv);
	sizeDiv.appendChild(xlDiv);


	return sizeDiv;
}
