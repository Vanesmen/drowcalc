import createTwo_dimensional from "./createTwo_dimensional";
import drowVerticalLines from "./drowVerticalLines";
import correctWidthTurn from "./correctWidthTurn";
import createAll_demensional from "./createAll_demensional";
import correspondSystemAndLenght from "../../../correspondSystemAndLenght";


let createProkladkaLineVertical = (inst, ctx, propX, roundGranMas) => {
    let straightLineDirection = inst.straightLineDirection
    let widthTurn = inst.widthTurnReal * propX;
    ctx.strokeStyle = "rebeccapurple";
    ctx.beginPath();

    // Создаем массив только из Х
    let xArray = [];
    for (let i = 0; i < roundGranMas.length; i++) {
        xArray.push(roundGranMas[i].X);
    }


    let two_dimensionalS = createTwo_dimensional(xArray, roundGranMas, widthTurn);

    // Проверяем на четность витков, увеличиваем ширину витков, если нечёт
    while (two_dimensionalS.length % 2 != 0) {
        widthTurn += 0.1;

        two_dimensionalS = createTwo_dimensional(xArray, roundGranMas, widthTurn, two_dimensionalS);
    }


    let fdfasdf = inst.systemSLenght;
    let fsssfs = correspondSystemAndLenght("XLPIPE-010");
    let sdgsdfgsd = correspondSystemAndLenght(inst.systemSLenght[0]);
     
    let systemSLenght = inst.systemSLenght.map(el => correspondSystemAndLenght(el)); // все длины систем
     
    let two_dimensionalAll = createAll_demensional(xArray, roundGranMas, propX, widthTurn, two_dimensionalS, systemSLenght);

    let two_dimensionalAll_last = two_dimensionalAll[two_dimensionalAll.length - 1];

    two_dimensionalAll[two_dimensionalAll.length - 1] = two_dimensionalAll_last;

    let infoText = "";

    infoText += `Количество систем: ${two_dimensionalAll.length} шт. \n`;
    for (let p = 0; p < two_dimensionalAll.length; p++) {
        let countColor = p;
        drowVerticalLines(ctx, two_dimensionalAll[p], straightLineDirection, widthTurn, countColor);

        infoText += `Система ${p + 1}: длина системы: ${correctWidthTurn(two_dimensionalAll[p], widthTurn, propX)}мм, шаг укладки: ${Math.round(widthTurn / propX)}мм. \n`;
    }

    if (document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".calculator__room__bottom")) {

        if (document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".infoBlockSpan")) {
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".infoBlockSpan").remove();
        }

        let infoBlockSpan = document.createElement('div');

        infoBlockSpan.classList.add("infoBlockSpan");
        infoBlockSpan.id = `description-${inst.id.slice(-1) - 2}`;
        infoBlockSpan.style.whiteSpace = "break-spaces";
        infoBlockSpan.innerHTML = `<span>${infoText}</span>`;
        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".calculator__room__bottom").prepend(infoBlockSpan);
    }


    if (document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelectorAll(".infoBlockSpan").length > 1) {
        let delItems = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelectorAll(".infoBlockSpan");
        for (let i = 0; i < delItems.length - 1; i++) {
            delItems[i].remove();
        }
    }

    ctx.stroke();
    ctx.strokeStyle = "black";

}


export default createProkladkaLineVertical;