//Разметка размеров w и h
let sizeLines = (inst) => {
    let drowPlan = document.getElementById(inst.id);
    let ctx = drowPlan.getContext("2d");

    let currentClientWidth = drowPlan.clientWidth;
    let currentClientHeight = drowPlan.clientHeight;

    let drowTop = (ctx, inst) => {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(inst.paddingL, inst.paddingT);
        ctx.lineTo(inst.paddingL, inst.paddingT - 40);
        ctx.moveTo(inst.paddingL, inst.paddingT - 25);
        ctx.lineTo(currentClientWidth - inst.paddingL, inst.paddingT - 25);
        ctx.moveTo(currentClientWidth - inst.paddingL, inst.paddingT - 40);
        ctx.lineTo(currentClientWidth - inst.paddingL, inst.paddingT);
        ctx.stroke();

        // Буква в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.textBaseline = "bottom";
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "bottom";
        ctx.textAlign = "center";
        ctx.strokeText("B", currentClientWidth / 2, inst.paddingT - 25);
        ctx.strokeStyle = "#000";

        ctx.strokeStyle = "black";
    }

    let drowLeft = (ctx, inst) => {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(inst.paddingL, currentClientHeight - inst.paddingT);
        ctx.lineTo(inst.paddingL - 40, currentClientHeight - inst.paddingT);
        ctx.moveTo(inst.paddingL - 25, currentClientHeight - inst.paddingT);
        ctx.lineTo(inst.paddingL - 25, inst.paddingT);
        ctx.moveTo(inst.paddingL - 40, inst.paddingT);
        ctx.lineTo(inst.paddingL, inst.paddingT);
        ctx.stroke();

        // Буква в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.strokeText("A", inst.paddingL - 40, currentClientHeight / 2);
        ctx.strokeStyle = "#000";

        ctx.strokeStyle = "black";
    }

    let drowRight = (ctx, inst) => {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(currentClientWidth - inst.paddingL, currentClientHeight - inst.paddingT);
        ctx.lineTo(currentClientWidth - inst.paddingL + 40, currentClientHeight - inst.paddingT);
        ctx.moveTo(currentClientWidth - inst.paddingL + 25, currentClientHeight - inst.paddingT);
        ctx.lineTo(currentClientWidth - inst.paddingL + 25, inst.paddingT);
        ctx.moveTo(currentClientWidth - inst.paddingL + 40, inst.paddingT);
        ctx.lineTo(currentClientWidth - inst.paddingL, inst.paddingT);
        ctx.stroke();

        // Буква в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.strokeText("C", currentClientWidth - inst.paddingL + 40, currentClientHeight / 2);
        ctx.strokeStyle = "#000";

        ctx.strokeStyle = "black";
    }

    let drowBottom = (ctx, inst) => {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(inst.paddingL, currentClientHeight - inst.paddingT);
        ctx.lineTo(inst.paddingL, currentClientHeight - inst.paddingT + 40);
        ctx.moveTo(inst.paddingL, currentClientHeight - inst.paddingT + 25);
        ctx.lineTo(currentClientWidth - inst.paddingL, currentClientHeight - inst.paddingT + 25);
        ctx.moveTo(currentClientWidth - inst.paddingL, currentClientHeight - inst.paddingT + 40);
        ctx.lineTo(currentClientWidth - inst.paddingL, currentClientHeight - inst.paddingT);
        ctx.stroke();

        // Буква в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "top";
        ctx.textAlign = "center";
        ctx.strokeText("D", currentClientWidth / 2, currentClientHeight - inst.paddingT + 28);
        ctx.strokeStyle = "#000";

        ctx.strokeStyle = "black";
    }

    // let myMockContext1 = new C2S(500, 500);
    // let myMockContext2 = new C2S(500, 500);
    // let myMockContext3 = new C2S(500, 500);
    // let myMockContext4 = new C2S(500, 500);
    // drowTop(myMockContext1, inst);
    // drowLeft(myMockContext2, inst);
    // drowRight(myMockContext3, inst);
    // drowBottom(myMockContext4, inst)
    // goSVG.push(myMockContext1.getSerializedSvg());
    // goSVG.push(myMockContext2.getSerializedSvg());
    // goSVG.push(myMockContext3.getSerializedSvg());
    // goSVG.push(myMockContext4.getSerializedSvg());

    drowTop(ctx, inst);
    drowLeft(ctx, inst);
    drowRight(ctx, inst);
    drowBottom(ctx, inst)
}

export default sizeLines;