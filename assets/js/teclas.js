// Presionando teclas
let colorGlobal;

document.addEventListener('keydown', function (event) {
	const tecla = event.key;
	saveColor(tecla);
});

const saveColor = (tecla) => {
	const teclaVerificada = tecla.toLowerCase();

	// if (teclaVerificada === 'z') {
	// 	colorGlobal = 'brown';
	// 	changeBg(colorGlobal);
	// } else if (teclaVerificada === 'x') {
	// 	colorGlobal = 'green';
	// 	changeBg(colorGlobal);
	// } else if (teclaVerificada === 'c') {
	// 	colorGlobal = 'yellow';
	// 	changeBg(colorGlobal);
	// }
	// else if (teclaVerificada === 'z') {
	// 	colorGlobal = 'brown';
	// 	changeBg(colorGlobal);
	// } else if (teclaVerificada === 'x') {
	// 	colorGlobal = 'green';
	// 	changeBg(colorGlobal);
	// } else if (teclaVerificada === 'c') {
	// 	colorGlobal = 'yellow';
	// 	changeBg(colorGlobal);
	// }

	//
	switch (teclaVerificada) {
		case 'z':
			colorGlobal = 'brown';
			changeBg(colorGlobal);
			break;
		case 'x':
			colorGlobal = 'green';
			changeBg(colorGlobal);
			break;
		case 'c':
			colorGlobal = 'yellow';
			changeBg(colorGlobal);
			break;
		case 'v':
			colorGlobal = 'blue';
			crearCuadro();
			break;
		case 'b':
			colorGlobal = 'black';
			crearCuadro();
			break;

		case 'n':
			colorGlobal = 'orange';
			crearCuadro();
			break;

		default:
			break;
	}
};

const changeBg = (color) => {
	const element = document.getElementById('key');
	element.style.backgroundColor = color;
};

const changeBgNew = (color, element) => {
	element.style.backgroundColor = color;
};

const crearCuadro = () => {
	const existElement = document.getElementById('new_key');
	console.log('Cuadro function');
	if (existElement) {
		changeBgNew(colorGlobal, existElement);
	} else {
		const newDiv = document.createElement('div');
		newDiv.id = 'new_key';
		newDiv.style.height = '200px';

		document.querySelector('body').appendChild(newDiv);
		changeBgNew(colorGlobal, newDiv);
	}
};
