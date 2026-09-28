let mainDiv = document.getElementById('main-div');

let boldBtn = document.getElementById('bold');
let italicBtn = document.getElementById('italic');
let leftBtn = document.getElementById('left');
let centerBtn = document.getElementById('center');
let rightBtn = document.getElementById('right');
let uppercaseBtn = document.getElementById('uppercase');
let lowercaseBtn = document.getElementById('lowercase');
let capitalizeBtn = document.getElementById('capitalize');
let textColor = document.getElementById('text-color');
let backgroundColor = document.getElementById('background-color');
let fontSize = document.getElementById('font-size');
let font = document.getElementById('font');

mainDiv.setAttribute('style',
	'background-color: cyan; color: darkred; font-size: 47px; font-family: Georgia;');

boldBtn.addEventListener('click', (event) => {
	mainDiv.style.fontWeight = mainDiv.style.fontWeight == 'bold' ? 'normal' : 'bold';
});

italicBtn.addEventListener('click', (event) => {
	mainDiv.style.fontStyle = mainDiv.style.fontStyle == 'italic' ? 'normal' : 'italic';
});

centerBtn.addEventListener('click', (event) => {
	mainDiv.style.textAlign = 'center';
});

leftBtn.addEventListener('click', (event) => {
	mainDiv.style.textAlign = 'left';
});

rightBtn.addEventListener('click', (event) => {
	mainDiv.style.textAlign = 'right';
});

uppercaseBtn.addEventListener('click', (event) => {
	mainDiv.style.textTransform = 'uppercase';
});

lowercaseBtn.addEventListener('click', (event) => {
	mainDiv.style.textTransform = 'lowercase';
});

capitalizeBtn.addEventListener('click', (event) => {
	mainDiv.style.textTransform = 'capitalize';
});

textColor.addEventListener('input', (event) => {
	mainDiv.style.color = textColor.value;
});

backgroundColor.addEventListener('input', (event) => {
	mainDiv.style.backgroundColor = backgroundColor.value;
});

fontSize.addEventListener('input', (event) => {
	mainDiv.style.fontSize = fontSize.value + 'px';
});

font.addEventListener('input', (event) => {
	mainDiv.style.fontFamily = font.value;
});
