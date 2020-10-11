import cleanCanvas from "./cleanCanvas";
import drowDashLinemainBorder from "./drowDashLinemainBorder";
import sizeLines from "./sizeLines";
import insideBorder from "./insideBorder";
import updateInputsDate from "./updateInputsDate";
import dispatchMethod from "./dispatchMethod/dispatchMethod";
import calcKP from "./calcKP";


let drowRectangle = (inst, ctx) => {
    calcKP(inst);
    let drowPlan = document.getElementById(inst.id);

    cleanCanvas(inst.id, ctx);


    let currentClientWidth = drowPlan.clientWidth;
    let currentClientHeight = drowPlan.clientHeight;


    inst.paddingT = inst.defaultPaddingT + (1 - inst.heightRoom / inst.widthRoom) * (currentClientHeight - inst.defaultPaddingT * 2) * 0.5;

    // Отрисовка пунктирной границы только когда задана ширина и высота
    let dasL = (inst.dashL * (currentClientWidth - inst.defaultPaddingL * 2)) / inst.widthRoom + inst.paddingL;
    let dasR = (inst.dashR * (currentClientWidth - inst.defaultPaddingL * 2)) / inst.widthRoom + inst.paddingL;
    let dasT = (inst.dashT * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom + inst.paddingT;
    let dasB = (inst.dashB * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom + inst.paddingT;

    // Отрисовка статических данных
    drowDashLinemainBorder(inst.id, ctx, dasL, dasT, dasR, dasB); // Отрисовка границ от стен
    sizeLines(inst, ctx); // Отрисовка красных сносок с F B C D
    insideBorder(inst, ctx); // Отрисовка внутренних позиций замыкания
    updateInputsDate(inst);
    let drow = (ctx, clientWidth, clientHeight, paddingL, paddingT) => {
        ctx.strokeRect(paddingL, paddingT, clientWidth - 2 * paddingL, clientHeight - 2 * paddingT);
    }
    drow(ctx, currentClientWidth, currentClientHeight, inst.paddingL, inst.paddingT); // Отрисовка формы коммнаты

    dispatchMethod(inst, ctx, dasL, dasR, dasT, dasB);

}

export default drowRectangle;