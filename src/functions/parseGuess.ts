type parseGuessType = (
    guess: string,
    boardSize: number
) => string | null

export const parseGuess:parseGuessType = (guess, boardSize ) => {
    // проверяем, что введенные данные попытки выстрела корректны и в пределах поля
    const alphaBet = ["A", "B", "C", "D", "E", "F", "G"]; // поля по буквам
    if (guess === null || guess.length !== 2) { // если ввод пустой, или длина не равна 2 символам
        alert("Некорректный ввод. (A-G, 0-6)") // вывод ошибки
    } else { // если проверку прошли
        const FirstChar = guess.charAt(0) // первый символ ввода (ABC...)
        const row:number = alphaBet.indexOf(FirstChar) // соотносим цифры ввода ABC с цифрами 123 (число)
        const column:number = Number(guess.charAt(1)) // второй символ ввода (число)
        if (isNaN(row) || isNaN(column)) { // если введенные данные не числа
            alert("Не цифры") // сообщение об ошибке

        } else if ( // если провекрка прошла
            row < 0 || row >= boardSize || column < 0 || column >= boardSize) { // но за пределами доски
            alert("за пределами доски") //  сообщение об ошибке
        } else { // если все проверки и здесь пошли
            return row +""+ column // вывод ожидаемых данных выстрела для дальнейшей проверки попадания
        }
    }
    return null
}