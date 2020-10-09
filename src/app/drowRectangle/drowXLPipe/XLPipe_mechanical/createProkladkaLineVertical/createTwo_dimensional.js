// Собираем двумерный массив координат
let createTwo_dimensional = (xArray, roundGranMas, widthTurn, two_dimensional = []) => {
    // Находим наименьший
    let startX;
    let endX;
    if (two_dimensional.length == 0) {
        startX = Math.max.apply(null, xArray);
        endX = Math.min.apply(null, xArray);
    } else {
        startX = two_dimensional[0][1][0];
        endX = two_dimensional[two_dimensional.length - 1][1][0];
        two_dimensional = [];
    }
    let two_dimensional_index = 0;

    for (let lineX = startX; lineX > endX; lineX -= widthTurn) {
        let allDots = [];
        for (let n = 0; n < roundGranMas.length; n++) {
            if (lineX <= roundGranMas[n].X) {
                allDots.push(roundGranMas[n].Y);
            }
        }
        // Сортируем этот массив по возрастанию. Соединем две точки подряд
        allDots.sort((a, b) => { return a - b });

        let delItemIndex = [];
        for (let i = 0; i < allDots.length; i++) {

            if (allDots[i] == allDots[i + 1]) {
                delItemIndex.push(i);
                i++;
            }
        }
        for (let i = delItemIndex.length - 1; i >= 0; i--) {

            allDots.splice(delItemIndex[i], 2);
        }


        two_dimensional.push([]);
        for (let i = 0; i < allDots.length; i++) {
            two_dimensional[two_dimensional_index].push([lineX, allDots[i]]);
        }
        two_dimensional_index++;
    }

    return two_dimensional;


};

export default createTwo_dimensional;