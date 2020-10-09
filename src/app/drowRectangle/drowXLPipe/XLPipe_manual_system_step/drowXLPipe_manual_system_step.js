import createRoundGranMas from "./createRoundGranMas";
import createZamikanieLine from "./createZamikanieLine";
import createProkladkaLineVertical from "./createProkladkaLineVertical/createProkladkaLineVertical";
import createProkladkaLineHorizon from "./createProkladkaLineHorizon/createProkladkaLineHorizon";

let drowXLPipe_manual_system_step = (inst, ctx, dasL, dasR, dasT, dasB) => {
    let drowPlan = document.getElementById(inst.id);


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
}

export default drowXLPipe_manual_system_step;