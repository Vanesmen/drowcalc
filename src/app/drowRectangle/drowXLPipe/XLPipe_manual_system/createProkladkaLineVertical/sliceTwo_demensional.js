import calcTotalLengthSystem from "./calcTotalLengthSystem";

let sliceTwo_demensional = (two_dimensional, widthTurn, propX, systemLenght) => {
    let two_dimensional_B = [];
    while (calcTotalLengthSystem(two_dimensional, widthTurn, propX) > systemLenght) { // Максимальная длинна 84м + 1м погрешность
        two_dimensional_B = (two_dimensional.splice(two_dimensional.length - 2, 2)).concat(two_dimensional_B);
    }

    return two_dimensional_B;
}

export default sliceTwo_demensional;