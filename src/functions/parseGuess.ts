type parseGuessType = (
    guess: string,
    boardSize: number
) => string | null

export const parseGuess:parseGuessType = (guess, boardSize ) => {
    const alphaBet = ["A", "B", "C", "D", "E", "F", "G"];
    // Код метода
    if (guess === null || guess.length !== 2) {
        alert("Некорректный ввод. (A-G, 0-6)")
    } else {
        const FirstChar = guess.charAt(0)
        const row:number = alphaBet.indexOf(FirstChar)
        const column:number = Number(guess.charAt(1))
        if (isNaN(row) || isNaN(column)) {
            alert("Не цифры")

        } else if (row < 0 || row >= boardSize ||
            column < 0 || column >= boardSize) {
            alert("за пределами доски")
        } else {
            return row +""+ column
        }
    }
    return null
}