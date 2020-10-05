// Отрисовка
let drowVerticalLines = (ctx, two_dimensional, straightLineDirection, widthTurn, countColor = 1) => {
    // if (countColor % 4 != 0) {
    //     ctx.strokeStyle = "green";
    //     console.log(`Цвет1: ${ctx.strokeStyle}`)
    // } else {
    //     ctx.strokeStyle = "darkorchid";
    //     console.log(`Цвет2: ${ctx.strokeStyle}`)
    // }

    // Если линия снизу
    let hFromBottomLine = 0;
    let hFromTopLine = 0;
    if (straightLineDirection) {
        hFromBottomLine = widthTurn;
    } else {
        hFromTopLine = widthTurn;
    }

    let count = 0; // Счетчик чёт нечёт
    // Отрисовываем витки по массиву
    for (let n = 0; n < two_dimensional.length; n++) {
        for (let i = 0; i < two_dimensional[n].length; i += 2) {

            if (count % 2 == 0) { //Четная линия, с неё всегда начинается
                // не рисуем верхний участок отделенный от основной линии
                if (two_dimensional[n].length != 2 && i < 2) {
                    continue
                }
                // Выравнивание по высоте верхнюю часть

                if (n < two_dimensional.length - 1) {
                    if (two_dimensional[n][0][1] < two_dimensional[n + 1][0][1]) {
                        two_dimensional[n][0][1] = two_dimensional[n + 1][0][1];
                    }
                }

                // Выравнивание по высоте нижнюю часть
                if (n != 0) {
                    let currentLast = two_dimensional[n].length - 1;
                    let prevLast = two_dimensional[n - 1].length - 1;
                    if (two_dimensional[n][currentLast][1] > two_dimensional[n - 1][prevLast][1]) {
                        two_dimensional[n][currentLast][1] = two_dimensional[n - 1][prevLast][1];
                    }
                }



                ctx.moveTo(two_dimensional[n][i][0], two_dimensional[n][i][1] + widthTurn * 0.5 + hFromTopLine);
                if (n == 0) { //У первого элемента высоту не меняем
                    ctx.lineTo(two_dimensional[n][i][0], two_dimensional[n][i + 1][1] - widthTurn * 0.5);
                } else {
                    ctx.lineTo(two_dimensional[n][i][0], two_dimensional[n][i + 1][1] - widthTurn * 0.5 - hFromBottomLine);
                }



                // дуги
                ctx.moveTo(two_dimensional[n][i][0], two_dimensional[n][i][1] + widthTurn * 0.5 + hFromTopLine);
                ctx.arc(two_dimensional[n][i][0] - widthTurn * 0.5, two_dimensional[n][i][1] + widthTurn * 0.5 + hFromTopLine, widthTurn * 0.5, 0, Math.PI * (3 / 2), true);

                // Если прямая снизу то дугу у первого элемента не рисуем
                if (count == 0 || count == (two_dimensional.length - 1)) {

                } else {
                    ctx.moveTo(two_dimensional[n][i][0], two_dimensional[n][i + 1][1] - widthTurn * 0.5 - hFromBottomLine);
                    ctx.arc(two_dimensional[n][i][0] + widthTurn * 0.5, two_dimensional[n][i + 1][1] - widthTurn * 0.5 - hFromBottomLine, widthTurn * 0.5, Math.PI, Math.PI * 0.5, true);
                }

            } else { // Нечётная линия
                // не рисуем верхний участок отделенный от основной линии
                if (two_dimensional[n].length != 2 && i < 2) {
                    continue
                }
                // Выравнивание по высоте верхнюю часть
                if (two_dimensional[n][0][1] < two_dimensional[n - 1][0][1]) {
                    two_dimensional[n][0][1] = two_dimensional[n - 1][0][1];
                }
                // Выравнивание по высоте нижнюю часть
                if (n < two_dimensional.length - 2) {
                    let currentLast = two_dimensional[n].length - 1;
                    let nextLast = two_dimensional[n + 1].length - 1;
                    if (two_dimensional[n][currentLast][1] > two_dimensional[n + 1][nextLast][1]) {
                        two_dimensional[n][currentLast][1] = two_dimensional[n + 1][nextLast][1];
                    }
                }

                ctx.moveTo(two_dimensional[n][i][0], two_dimensional[n][i][1] + widthTurn * 0.5 + hFromTopLine);
                if (n == two_dimensional.length - 1) { //У последнего элемента высоту не меняем
                    ctx.lineTo(two_dimensional[n][i][0], two_dimensional[n][i + 1][1] - widthTurn * 0.5);
                } else {
                    ctx.lineTo(two_dimensional[n][i][0], two_dimensional[n][i + 1][1] - widthTurn * 0.5 - hFromBottomLine);
                }

                // дуги
                ctx.moveTo(two_dimensional[n][i][0], two_dimensional[n][i][1] + widthTurn * 0.5 + hFromTopLine);
                ctx.arc(two_dimensional[n][i][0] + widthTurn * 0.5, two_dimensional[n][i][1] + widthTurn * 0.5 + hFromTopLine, widthTurn * 0.5, Math.PI, Math.PI * (3 / 2), false);
                // Если прямая снизу то дугу у последнего элемента не рисуем
                if (count == 0 || count == (two_dimensional.length - 1)) {

                } else {
                    ctx.moveTo(two_dimensional[n][i][0], two_dimensional[n][i + 1][1] - widthTurn * 0.5 - hFromBottomLine);
                    ctx.arc(two_dimensional[n][i][0] - widthTurn * 0.5, two_dimensional[n][i + 1][1] - widthTurn * 0.5 - hFromBottomLine, widthTurn * 0.5, 0, Math.PI * 0.5, false);
                }

            }

        }
        count++
    }

    // Рисуем прямую
    let straighttLineBottom = () => {
        let startLine = two_dimensional[0][two_dimensional[0].length - 1][0] - widthTurn * 0.5; // Начало прямой линии X
        let endLine = two_dimensional[two_dimensional.length - 1][two_dimensional[two_dimensional.length - 1].length - 1][0] + widthTurn * 0.5; // Конец прямой линии X
        // Находим Y
        let yLine = two_dimensional[0][two_dimensional[0].length - 1][1];
        for (let i = 1; i < two_dimensional.length; i++) {
            if (two_dimensional[i][two_dimensional[i].length - 1][1] < two_dimensional[i - 1][two_dimensional[i - 1].length - 1][1]) {
                yLine = two_dimensional[i][two_dimensional[i].length - 1][1];
            }
        }

        ctx.moveTo(startLine, yLine);
        ctx.lineTo(endLine, yLine);

        ctx.moveTo(startLine + widthTurn * 0.5, yLine - widthTurn * 0.5);
        ctx.arc(startLine, yLine - widthTurn * 0.5, widthTurn * 0.5, 0, Math.PI * (1 / 2), false);

        ctx.moveTo(endLine, yLine);
        ctx.arc(endLine, yLine - widthTurn * 0.5, widthTurn * 0.5, Math.PI * (1 / 2), Math.PI, false);
    }
    straighttLineBottom();
};



export default drowVerticalLines;