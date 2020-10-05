import createRoundGranMas from "./createRoundGranMas";
import createZamikanieLine from "./createZamikanieLine";
import createProkladkaLineVertical from "./createProkladkaLineVertical/createProkladkaLineVertical";
import createProkladkaLineHorizon from "./createProkladkaLineHorizon/createProkladkaLineHorizon";

let drowRedLine = (inst, dasL, dasR, dasT, dasB) => {
    let drowPlan = document.getElementById(inst.id);
    let ctx = drowPlan.getContext("2d");


    let currentClientWidth = drowPlan.clientWidth;
    let currentClientHeight = drowPlan.clientHeight;


    let drow = (ctx, inst) => {
        let propX = (currentClientWidth - inst.defaultPaddingL * 2) / inst.widthRoom; // Коэффиценты пропорции 
        let propY = (currentClientWidth - inst.paddingT * 2) / inst.heightRoom; // Коэффиценты пропорции 


        let margin = 50 * propX; //Отступ от стенок в px

        let leftBX = dasL + margin; // Нижняя левая граница
        let leftBY = currentClientHeight - dasB - margin; // Нижняя левая граница


        let roundGranMas = createRoundGranMas(inst, currentClientWidth, currentClientHeight, margin, dasR, dasL, dasB, dasT, propX, propY);
        // createZamikanieLine();


        createProkladkaLineVertical(inst, ctx, propX, roundGranMas);
        // createProkladkaLineHorizon();


    }
    drow(ctx, inst);

    let goSVG = []
    let myMockContext = new C2S(500, 500);
    drow(myMockContext, inst);
    goSVG.push(myMockContext.getSerializedSvg());

    let createGreatSVG = (goSVG) => {
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="500"><defs></defs>`;
        for (let u = 0; u < goSVG.length; u++) {
            let start = goSVG[u].indexOf("<g>");
            let end = goSVG[u].indexOf("</g>");
            goSVG[u] = goSVG[u].slice(start, end);
        };
        let allPart = "";
        for (let u = 0; u < goSVG.length; u++) {
            allPart += goSVG[u];
        }
        let GreatSVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="500"><defs></defs>` + allPart + "</svg>";
        return GreatSVG;
    }

    if (document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".calculator__room__bottom__svg").innerHTML.length < 100) {
        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".calculator__room__bottom__svg").innerHTML = "";

        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".calculator__room__bottom__svg").innerHTML = createGreatSVG(goSVG);

    }
    // goSVG = [];

}

export default drowRedLine;