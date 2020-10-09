let insideBorder = (inst, ctx) => {

    let drowPlan = document.getElementById(inst.id);

    let currentClientWidth = drowPlan.clientWidth;
    let currentClientHeight = drowPlan.clientHeight;


    let tl = (x, y) => {

        let xp = (x * (currentClientWidth - inst.defaultPaddingL * 2)) / inst.widthRoom;
        let yp = (y * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom;

        ctx.setLineDash([4, 6]);
        ctx.strokeRect(inst.paddingL, inst.paddingT, xp, yp);
        ctx.setLineDash([]);

        // цифра в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.textBaseline = "bottom";
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        let numX = xp / 2;
        if (xp / 2 < 50) {
            numX = 50;
        }

        let numY = yp / 2;
        if (yp / 2 < 50) {
            numY = 50;
        }

        ctx.strokeText("1", inst.paddingL + numX, inst.paddingT + numY);
        ctx.strokeStyle = "#000";
    }

    let ml = (x, y) => {

        let xp = (x * (currentClientWidth - defaultPaddingL * 2)) / inst.widthRoom;
        let yp = (y * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom;

        ctx.setLineDash([4, 6]);
        ctx.strokeRect(inst.paddingL, (currentClientHeight / 2 - yp / 2), xp, yp);
        ctx.setLineDash([]);
        // цифра в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.textBaseline = "bottom";
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        let numX = xp / 2;
        if (xp / 2 < 50) {
            numX = 50;
        }

        let numY = yp / 2;
        if (yp / 2 < 50) {
            numY = 50;
        }
        ctx.strokeText("4", inst.paddingL + numX, (currentClientHeight / 2 - numY) + numY);
        ctx.strokeStyle = "#000";
    }
    let bl = (x, y) => {

        let xp = (x * (currentClientWidth - defaultPaddingL * 2)) / inst.widthRoom;
        let yp = (y * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom;

        ctx.setLineDash([4, 6]);
        ctx.strokeRect(inst.paddingL, currentClientHeight - inst.paddingT - yp, xp, yp);
        ctx.setLineDash([]);
        // цифра в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.textBaseline = "bottom";
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        let numX = xp / 2;
        if (xp / 2 < 50) {
            numX = 50;
        }

        let numY = yp / 2;
        if (yp / 2 < 50) {
            numY = 50;
        }

        ctx.strokeText("3", inst.paddingL + numX, currentClientHeight - inst.paddingT - numY * 2 + numY);
        ctx.strokeStyle = "#000";
    }



    let tm = (x, y) => {

        let xp = (x * (currentClientWidth - defaultPaddingL * 2)) / inst.widthRoom;
        let yp = (y * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom;

        ctx.setLineDash([4, 6]);
        ctx.strokeRect((currentClientWidth / 2 - xp / 2), inst.paddingT, xp, yp);
        ctx.setLineDash([]);
        // цифра в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.textBaseline = "bottom";
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        let numX = xp / 2;
        if (xp / 2 < 50) {
            numX = 50;
        }

        let numY = yp / 2;
        if (yp / 2 < 50) {
            numY = 50;
        }

        ctx.strokeText("2", (currentClientWidth / 2 - numX) + numX, inst.paddingT + numY);
        ctx.strokeStyle = "#000";
    }
    let mm = (x, y) => {

        let xp = (x * (currentClientWidth - defaultPaddingL * 2)) / inst.widthRoom;
        let yp = (y * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom;

        ctx.setLineDash([4, 6]);
        ctx.strokeRect((currentClientWidth / 2 - xp / 2), (currentClientHeight / 2 - yp / 2), xp, yp);
        ctx.setLineDash([]);
        // цифра в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.textBaseline = "bottom";
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        let numX = xp / 2;
        if (xp / 2 < 50) {
            numX = 50;
        }
        let numY = yp / 2;
        if (yp / 2 < 50) {
            numY = 50;
        }
        ctx.strokeText("5", (currentClientWidth / 2 - numX) + numX, (currentClientHeight / 2 - numY) + numY);
        ctx.strokeStyle = "#000";
    }
    let bm = (x, y) => {

        let xp = (x * (currentClientWidth - defaultPaddingL * 2)) / inst.widthRoom;
        let yp = (y * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom;

        ctx.setLineDash([4, 6]);
        ctx.strokeRect((currentClientWidth / 2 - xp / 2), currentClientHeight - inst.paddingT - yp, xp, yp);
        ctx.setLineDash([]);
        // цифра в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.textBaseline = "bottom";
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        let numX = xp / 2;
        if (xp / 2 < 50) {
            numX = 50;
        }
        let numY = yp / 2;
        if (yp / 2 < 50) {
            numY = 50;
        }
        ctx.strokeText("8", (currentClientWidth / 2 - numX) + numX, currentClientHeight - inst.paddingT - numY * 2 + numY);
        ctx.strokeStyle = "#000";
    }



    let rt = (x, y) => {

        let xp = (x * (currentClientWidth - inst.defaultPaddingL * 2)) / inst.widthRoom;
        let yp = (y * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom;

        ctx.setLineDash([4, 6]);
        ctx.strokeRect((currentClientWidth - inst.paddingL - xp), inst.paddingT, xp, yp);
        ctx.setLineDash([]);
        // цифра в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.textBaseline = "bottom";
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        let numX = xp / 2;
        if (xp / 2 < 50) {
            numX = 50;
        }

        let numY = yp / 2;
        if (yp / 2 < 50) {
            numY = 50;
        }
        ctx.strokeText("2", (currentClientWidth - inst.paddingL - numX * 2) + numX, inst.paddingT + numY);
        ctx.strokeStyle = "#000";
    }
    let rm = (x, y) => {

        let xp = (x * (currentClientWidth - inst.defaultPaddingL * 2)) / inst.widthRoom;
        let yp = (y * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom;

        ctx.setLineDash([4, 6]);
        ctx.strokeRect((currentClientWidth - inst.paddingL - xp), (currentClientHeight / 2 - yp / 2), xp, yp);
        ctx.setLineDash([]);
        // цифра в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.textBaseline = "bottom";
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        let numX = xp / 2;
        if (xp / 2 < 50) {
            numX = 50;
        }

        let numY = yp / 2;
        if (yp / 2 < 50) {
            numY = 50;
        }
        ctx.strokeText("6", (currentClientWidth - inst.paddingL - numX * 2) + numX, (currentClientHeight / 2 - numY) + numY);
        ctx.strokeStyle = "#000";
    }
    let rb = (x, y) => {

        let xp = (x * (currentClientWidth - inst.defaultPaddingL * 2)) / inst.widthRoom;
        let yp = (y * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom;

        ctx.setLineDash([4, 6]);
        ctx.strokeRect((currentClientWidth - inst.paddingL - xp), currentClientHeight - inst.paddingT - yp, xp, yp);
        ctx.setLineDash([]);
        // цифра в центре
        ctx.font = 'bold 30px sans-serif';
        ctx.textBaseline = "bottom";
        ctx.strokeStyle = "#F00";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        let numX = xp / 2;
        if (xp / 2 < 50) {
            numX = 50;
        }

        let numY = yp / 2;
        if (yp / 2 < 50) {
            numY = 50;
        }

        ctx.strokeText("4", (currentClientWidth - inst.paddingL - numX * 2) + numX, currentClientHeight - inst.paddingT - numY * 2 + numY);
        ctx.strokeStyle = "#000";
    }


    tl(inst.tl_w, inst.tl_h);
    // ml(inst.ml_w, inst.ml_h);
    // bl(inst.bl_w, inst.bl_h);


    // tm(inst.tm_w, inst.tm_h);
    // mm(inst.mm_w, inst.mm_h);
    // bm(inst.bm_w, inst.bm_h);

    rt(inst.rt_w, inst.rt_h);
    // rm(inst.rm_w, inst.rm_h);
    // rb(inst.rb_w, inst.rb_h);

}

export default insideBorder;