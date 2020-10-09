import calcTotalLengthSystem from "./calcTotalLengthSystem";

//Коректируем ширину витков, чтоб подогнать под нужную длинну системы
let correctWidthTurn = (two_dimensional, widthTurn, propX) => {
    let lengthList = [7000, 14000, 21000, 28000, 35000, 42000, 56000, 70000, 84000];
    let systemLength = calcTotalLengthSystem(two_dimensional, widthTurn, propX);
    let nearLength;
    let lenghtDelta = 15000;
    for (let i = 0; i < lengthList.length; i++) {
        if (lenghtDelta > Math.abs(systemLength - lengthList[i])) {

            lenghtDelta = systemLength - lengthList[i];
            nearLength = lengthList[i];
        }
    }
    return nearLength;
}

export default correctWidthTurn;