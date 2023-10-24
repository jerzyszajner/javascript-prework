var computerMove = 'kamień',
    playerMove = 'papier',
    randomNumber1 = Math.floor(Math.random() * 3 + 1),
    randomNumber2 = Math.floor(Math.random() * 9 + 11);

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to '+ playerMove + ', to wygrywasz!');
printMessage('Wylosowana liczba z zakresu 1-3 to: ' + randomNumber1);
printMessage('Wylosowana liczba z zakresu 11-19 to: ' + randomNumber2);
