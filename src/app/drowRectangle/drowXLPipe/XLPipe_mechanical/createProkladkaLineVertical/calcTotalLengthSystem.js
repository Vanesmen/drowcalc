// Считаем длинну системы
let calcTotalLengthSystem = (two_dimensional, widthTurn, propX) => {
    // Считаем длинну вертикальных линий
    let lenTurn = 0
    for (let i = 0; i < two_dimensional.length - 1; i++) {
        lenTurn += (two_dimensional[i][1][1] - two_dimensional[i][0][1]);
    }
    // Считаем длинну дуг
    let lenArc = (two_dimensional.length * 2 * (widthTurn * Math.PI * 0.25));
    // Считаем длинну прямой линии
    let startLine = two_dimensional[0][two_dimensional[0].length - 1][0] - widthTurn * 0.5; // Начало прямой линии X
    let endLine = two_dimensional[two_dimensional.length - 1][two_dimensional[two_dimensional.length - 1].length - 1][0] + widthTurn * 0.5; // Конец прямой линии X
    let lenStraightLine = (startLine - endLine);

    let lenTotal = (lenTurn + lenArc + lenStraightLine) / propX;
    return lenTotal;
}



export default calcTotalLengthSystem;