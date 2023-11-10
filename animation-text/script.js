for (let i = 0; i <= 300; i++) {
	let box = document.createElement('div');
	box.classList.add('box');
	box.style.filter = `hue-rotate(${i * 10}deg)`;
	document.querySelector('.container').appendChild(box);
}

function animateBox() {
	let boxes = document.querySelectorAll('.box');
	let num = Math.floor(Math.random() * boxes.length);
	boxes[num].classList.toggle('animate');
}

setInterval(animateBox, 1000);
