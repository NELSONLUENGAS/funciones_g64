document.querySelector('.square').addEventListener('click', function (event) {
	const element = event.target;
	borde(element, 'red');
});

const borde = (element, color = 'green') => {
	element.style.border = `1px solid ${color}`;
};

// Para multiples cuadros
document.querySelectorAll('.square ').forEach((cuadro) => {
	// [cuadro_1 , cuadro_2, cuadro_3, cuadro_4]
	cuadro.addEventListener('click', function (event) {
		const element = event.target;
		element.style.borderColor = 'black';
	});
});
