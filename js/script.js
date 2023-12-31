// Funkcja wywołana po kliknięciu któregokolwiek z przycisków
function buttonClicked(argButtonName) {
    clearMessages(); // Wyczyszczenie wiadomości na ekranie
    console.log(argButtonName + ' został kliknięty'); // Wyświetlenie informacji w konsoli, który przycisk został naciśnięty


    // Funkcja zwracająca nazwę ruchu na podstawie przekazanego identyfikatora
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    }

    // Funkcja wyświetlająca wynik rozgrywki
    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        // Sprawdzenie, kto wygrał, a kto przegrał (lub czy jest remis)
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień' ||
            argPlayerMove == 'nożyce' && argComputerMove == 'papier' ||
            argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Remis!');
        } else {
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }

    const playerMove = argButtonName; // Przypisanie wyboru gracza do zmiennej
    console.log('ruch gracza to: ' + playerMove); // Wyświetlenie wyboru gracza w konsoli
    const randomNumber = Math.floor(Math.random() * 3 + 1); // Losowanie liczby od 1 do 3, aby wybrać ruch komputera
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber); // Uzyskanie nazwy ruchu komputera na podstawie wylosowanej liczby
    console.log('ruch komputera to: ' + computerMove); // Wyświetlenie ruchu komputera w konsoli
    displayResult(playerMove, computerMove); // Wywołanie funkcji wyświetlającej wynik rozgrywki
}

// Funkcja do czyszczenia wiadomości na ekranie
function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

// Funkcja do wyświetlania wiadomości na ekranie
function printMessage(message) {
    const div = document.createElement('div');
    div.innerHTML = message;
    document.getElementById('messages').appendChild(div);
}

// Ustawienie nasłuchiwaczy na przyciskach, aby wywołać funkcję buttonClicked z odpowiednim argumentem, gdy przycisk zostanie naciśnięty
const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
