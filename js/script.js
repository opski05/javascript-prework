{
	const getMoveName = function (argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2) {
			return 'papier';
		} else if (argMoveId == 3) {
			return 'nożyce';
		} else {
			printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
		}
	}

	const displayResult = function(argComputerMove, argPlayerMove) {
		clearMessages();
		printMessage('Komputer wybrał ' + argComputerMove + ', Ty wybierasz ' + argPlayerMove + '.');
		if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
			printMessage('Komputer wygrywa!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
			printMessage('Komputer wygrywa!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			printMessage('Komputer wygrywa!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == argPlayerMove) {
			printMessage('Remis!');
		} else {
			printMessage('nienzny ruch - wpisz 1, 2 lub 3');
		}
	}

	const playGame = function (playerInput) {
		const randomNumber = Math.floor(Math.random() * 3 + 1);
		const computerMove = getMoveName(randomNumber);
		const playerMove = getMoveName(playerInput);
		displayResult(computerMove, playerMove);
	}

	document.getElementById('play-rock').addEventListener('click', function () { playGame('1') });
	document.getElementById('play-paper').addEventListener('click', function () { playGame('2') });
	document.getElementById('play-scissors').addEventListener('click', function () { playGame('3') });
}