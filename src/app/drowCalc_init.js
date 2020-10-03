import searchAllCanvasBlock from "./searchAllCanvasBlock";
import Inst from "./createInst";
import cleanCanvas from "./cleanCanvas";
import drowDashLinemainBorder from "./drowDashLinemainBorder";
import sizeLines from "./sizeLines";
// import createEventInputs from "./createEventInputs"
// import canvasStartDrow from "./canvasStartDrow";

let myInitCode = () => {

    let goSVG = [];

    // Формы комнат

    let canvasStartDrow = (inst) => {
        createEventInputs(inst);
        drowRectangle(inst);
    }

    let drowRectangle = (inst) => {
        cleanCanvas(inst.id);
        let drowPlan = document.getElementById(inst.id);
        let ctx = drowPlan.getContext("2d");


        let currentClientWidth = drowPlan.clientWidth;
        let currentClientHeight = drowPlan.clientHeight;

        if (inst.widthRoom && inst.heightRoom) {
            inst.paddingT = inst.defaultPaddingT + (1 - inst.heightRoom / inst.widthRoom) * (currentClientHeight - inst.defaultPaddingT * 2) * 0.5;

            // Отрисовка пунктирной границы только когда задана ширина и высота
            let dasL = (inst.dashL * (currentClientWidth - inst.defaultPaddingL * 2)) / inst.widthRoom + inst.paddingL;
            let dasR = (inst.dashR * (currentClientWidth - inst.defaultPaddingL * 2)) / inst.widthRoom + inst.paddingL;
            let dasT = (inst.dashT * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom + inst.paddingT;
            let dasB = (inst.dashB * (currentClientWidth - inst.paddingT * 2)) / inst.heightRoom + inst.paddingT;

            drowDashLinemainBorder(inst.id, dasL, dasT, dasR, dasB, currentClientWidth, currentClientHeight);

            sizeLines(inst);
            drowRedLine(inst, dasL, dasR, dasT, dasB);
        }

        if (inst.dash == true) {
            insideBorder(inst);




            // Обновление полей ввода ???
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#widthRoom").value = inst.widthRoom;
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#heightRoom").value = inst.heightRoom;
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashL").value = inst.dashL;
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashR").value = inst.dashR;
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashT").value = inst.dashT;
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashB").value = inst.dashB;

            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#tl_w").value = inst.tl_w;
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#tl_h").value = inst.tl_h;

            // document.getElementById("ml_w").value = inst.ml_w;
            // document.getElementById("ml_h").value = inst.ml_h;

            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#bl_w").value = inst.bl_w;
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#bl_h").value = inst.bl_h;

            // document.getElementById("tm_w").value = inst.tm_w;
            // document.getElementById("tm_h").value = inst.tm_h;

            // document.getElementById("mm_w").value = inst.mm_w;
            // document.getElementById("mm_h").value = inst.mm_h;

            // document.getElementById("bm_w").value = inst.bm_w;
            // document.getElementById("bm_h").value = inst.bm_h;

            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rt_w").value = inst.rt_w;
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rt_h").value = inst.rt_h;

            // document.getElementById("rm_w").value = inst.rm_w;
            // document.getElementById("rm_h").value = inst.rm_h;

            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rb_w").value = inst.rb_w;
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rb_h").value = inst.rb_h;

        }

        let drow = (ctx, clientWidth, clientHeight, paddingL, paddingT) => {
            ctx.strokeRect(paddingL, paddingT, clientWidth - 2 * paddingL, clientHeight - 2 * paddingT);
        }


        drow(ctx, currentClientWidth, currentClientHeight, inst.paddingL, inst.paddingT);

    }


    //События к инпутам
    let createEventInputs = (inst) => {

        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#widthRoom").addEventListener("change", function (event) {
            // Валидация 
            if (document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#widthRoom").value < inst.heightRoom) {
                inst.widthRoom = inst.heightRoom;
                alert("Стороны B и D, должны быть меньше или равны сторонам A, C");
            } else {
                inst.widthRoom = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#widthRoom").value;
            }
            drowRectangle(inst);
        })
        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#heightRoom").addEventListener("change", function (event) {
            // Валидация
            if (document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#heightRoom").value > inst.widthRoom) {
                inst.heightRoom = inst.widthRoom;
                alert("Стороны A и C, должны быть меньше или равны сторонам B, D");
            } else {
                inst.heightRoom = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#heightRoom").value;
            }
            drowRectangle(inst);
        })

        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashL").addEventListener("change", function (event) {
            inst.dashL = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashL").value);
            drowRectangle(inst);
        })

        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashR").addEventListener("change", function (event) {
            inst.dashR = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashR").value);
            drowRectangle(inst);
        })

        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashT").addEventListener("change", function (event) {
            inst.dashT = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashT").value);
            drowRectangle(inst);
        })

        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashB").addEventListener("change", function (event) {
            inst.dashB = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashB").value);
            drowRectangle(inst);
        })

        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#tl_w").addEventListener("change", function (event) {
            inst.tl_w = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#tl_w").value);
            drowRectangle(inst);
        })
        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#tl_h").addEventListener("change", function (event) {
            inst.tl_h = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#tl_h").value);
            drowRectangle(inst);
        })

        // document.getElementById("ml_w").addEventListener("change", function (event) {
        //     inst.ml_w = Number(document.getElementById("ml_w").value);
        //     drowRectangle(inst);
        // })
        // document.getElementById("ml_h").addEventListener("change", function (event) {
        //     inst.ml_h = Number(document.getElementById("ml_h").value);
        //     drowRectangle(inst);
        // })

        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#bl_w").addEventListener("change", function (event) {
            inst.bl_w = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#bl_w").value);
            drowRectangle(inst);
        })
        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#bl_h").addEventListener("change", function (event) {
            inst.bl_h = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#bl_h").value);
            drowRectangle(inst);
        })

        // document.getElementById("tm_w").addEventListener("change", function (event) {
        //     inst.tm_w = Number(document.getElementById("tm_w").value);
        //     drowRectangle(inst);
        // })
        // document.getElementById("tm_h").addEventListener("change", function (event) {
        //     inst.tm_h = Number(document.getElementById("tm_h").value);
        //     drowRectangle(inst);
        // })

        // document.getElementById("mm_w").addEventListener("change", function (event) {
        //     inst.mm_w = Number(document.getElementById("mm_w").value);
        //     drowRectangle(inst);
        // })
        // document.getElementById("mm_h").addEventListener("change", function (event) {
        //     inst.mm_h = Number(document.getElementById("mm_h").value);
        //     drowRectangle(inst);
        // })

        // document.getElementById("bm_w").addEventListener("change", function (event) {
        //     inst.bm_w = Number(document.getElementById("bm_w").value);
        //     drowRectangle(inst);
        // })
        // document.getElementById("bm_h").addEventListener("change", function (event) {
        //     inst.bm_h = Number(document.getElementById("bm_h").value);
        //     drowRectangle(inst);
        // })

        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rt_w").addEventListener("change", function (event) {
            inst.rt_w = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rt_w").value);
            drowRectangle(inst);
        })
        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rt_h").addEventListener("change", function (event) {
            inst.rt_h = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rt_h").value);
            drowRectangle(inst);
        })

        // document.getElementById("rm_w").addEventListener("change", function (event) {
        //     inst.rm_w = Number(document.getElementById("rm_w").value);
        //     drowRectangle(inst);
        // })
        // document.getElementById("rm_h").addEventListener("change", function (event) {
        //     inst.rm_h = Number(document.getElementById("rm_h").value);
        //     drowRectangle(inst);
        // })

        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rb_w").addEventListener("change", function (event) {
            inst.rb_w = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rb_w").value);
            drowRectangle(inst);
        })
        document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rb_h").addEventListener("change", function (event) {
            inst.rb_h = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rb_h").value);
            drowRectangle(inst);
        })
    };


    let dispatchForm = (formID, canvasName) => {
        switch (formID) {
            case "drowPlan":
                let instLoc = new Inst(canvasName);
                instLoc.dash = true;
                drowRectangle(instLoc);
                break;
            case "drowPlan2":
                drowRectangleRightCorner(canvasName);
                break;
            case "drowPlan3":
                drowRectangleLeftCorner(canvasName);
                break;
            case "drowPlan4":
                drowRectangleBottomRightCorner(canvasName);
                break;
            case "drowPlan5":
                drowRectangleBottomLeftCorner(canvasName);
                break;
            case "drowPlan6":
                drowRectangleBothCorner(canvasName);
                break;
            case "drowPlan7":
                drowRectangleBothBeveledCorner(canvasName);
                break;
            case "drowPlan8":
                drowRectangleBothBeveledBottomBothCorner(canvasName);
                break;
            case "drowPlan9":
                drowRectangleLeftCornerBottomRightCorner(canvasName);
                break;
            case "drowPlan10":
                drowRectangleRightCornerBottomLeftCorner(canvasName);
                break;
        }
    }


    // Границы мебели в комнате

    let insideBorder = (inst) => {

        let drowPlan = document.getElementById(inst.id);
        let ctx = drowPlan.getContext("2d");

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

    // Greate Red Line

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

            // Точки по которым строится замыкание
            let createRoundGranMas = () => {
                // Ось X
                let XX = [
                    Math.min(currentClientWidth - dasR - margin, currentClientWidth - inst.rm_w * propX - inst.paddingL - margin),
                    currentClientWidth - dasR - margin,

                    currentClientWidth - dasR - margin,
                    Math.min(currentClientWidth - inst.paddingL - inst.rb_w * propX - margin, currentClientWidth - dasR - margin),
                    Math.min(currentClientWidth - inst.paddingL - inst.rb_w * propX - margin, currentClientWidth - dasR - margin),
                    currentClientWidth * 0.5 + inst.bm_w * propX * 0.5 + margin,
                    currentClientWidth * 0.5 + inst.bm_w * propX * 0.5 + margin,
                    currentClientWidth * 0.5 - inst.bm_w * propX * 0.5 - margin,
                    currentClientWidth * 0.5 - inst.bm_w * propX * 0.5 - margin,
                    Math.max(inst.paddingL + inst.bl_w * propX + margin, dasL + margin), //тут
                    Math.max(inst.paddingL + inst.bl_w * propX + margin, dasL + margin),
                    dasL + margin,

                    dasL + margin,
                    Math.max(dasL + margin, inst.ml_w * propX + inst.paddingL + margin),
                    Math.max(dasL + margin, inst.ml_w * propX + inst.paddingL + margin),
                    dasL + margin,

                    dasL + margin,
                    Math.max(inst.paddingL + inst.tl_w * propX + margin, dasL + margin), // и тут
                    Math.max(inst.paddingL + inst.tl_w * propX + margin, dasL + margin),
                    currentClientWidth * 0.5 - inst.tm_w * propX * 0.5 - margin,
                    currentClientWidth * 0.5 - inst.tm_w * propX * 0.5 - margin,
                    currentClientWidth * 0.5 + inst.tm_w * propX * 0.5 + margin,
                    currentClientWidth * 0.5 + inst.tm_w * propX * 0.5 + margin,
                    Math.min(currentClientWidth - inst.paddingL - inst.rt_w * propX - margin, currentClientWidth - dasR - margin),
                    Math.min(currentClientWidth - inst.paddingL - inst.rt_w * propX - margin, currentClientWidth - dasR - margin),
                    currentClientWidth - dasR - margin,

                    currentClientWidth - dasR - margin,
                    Math.min(currentClientWidth - dasR - margin, currentClientWidth - inst.rm_w * propX - inst.paddingL - margin),
                ]

                // Ось Y
                let YY = [
                    currentClientHeight * 0.5 + inst.rm_h * propX * 0.5 + margin,
                    currentClientHeight * 0.5 + inst.rm_h * propX * 0.5 + margin,
                    Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.rb_h * propY - margin),
                    Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.rb_h * propY - margin),
                    currentClientHeight - dasB - margin,
                    currentClientHeight - dasB - margin,
                    Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.bm_h * propY - margin),
                    Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.bm_h * propY - margin),
                    currentClientHeight - dasB - margin,
                    currentClientHeight - dasB - margin,
                    Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.bl_h * propY - margin),
                    Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.bl_h * propY - margin),

                    currentClientHeight * 0.5 + inst.ml_h * propX * 0.5 + margin,
                    currentClientHeight * 0.5 + inst.ml_h * propX * 0.5 + margin,
                    currentClientHeight * 0.5 - inst.ml_h * propX * 0.5 - margin,
                    currentClientHeight * 0.5 - inst.ml_h * propX * 0.5 - margin,

                    Math.max(dasT + margin, inst.paddingT + inst.tl_h * propY + margin),
                    Math.max(dasT + margin, inst.paddingT + inst.tl_h * propY + margin),
                    dasT + margin,
                    dasT + margin,
                    Math.max(dasT + margin, inst.paddingT + inst.tm_h * propY + margin),
                    Math.max(dasT + margin, inst.paddingT + inst.tm_h * propY + margin),
                    dasT + margin,
                    dasT + margin,
                    Math.max(dasT + margin, inst.paddingT + inst.rt_h * propY + margin),
                    Math.max(dasT + margin, inst.paddingT + inst.rt_h * propY + margin),

                    currentClientHeight * 0.5 - inst.rm_h * propX * 0.5 - margin,
                    currentClientHeight * 0.5 - inst.rm_h * propX * 0.5 - margin,
                ]


                return [
                    { X: XX[0], Y: YY[0] },
                    { X: XX[1], Y: YY[1] },
                    { X: XX[2], Y: YY[2] },
                    { X: XX[3], Y: YY[3] },
                    { X: XX[4], Y: YY[4] },
                    { X: XX[5], Y: YY[5] },
                    { X: XX[6], Y: YY[6] },
                    { X: XX[7], Y: YY[7] },
                    { X: XX[8], Y: YY[8] },
                    { X: XX[9], Y: YY[9] },
                    { X: XX[10], Y: YY[10] },
                    { X: XX[11], Y: YY[11] },
                    { X: XX[12], Y: YY[12] },
                    { X: XX[13], Y: YY[13] },
                    { X: XX[14], Y: YY[14] },
                    { X: XX[15], Y: YY[15] },
                    { X: XX[16], Y: YY[16] },
                    { X: XX[17], Y: YY[17] },
                    { X: XX[18], Y: YY[18] },
                    { X: XX[19], Y: YY[19] },
                    { X: XX[20], Y: YY[20] },
                    { X: XX[21], Y: YY[21] },
                    { X: XX[22], Y: YY[22] },
                    { X: XX[23], Y: YY[23] },
                    { X: XX[24], Y: YY[24] },
                    { X: XX[25], Y: YY[25] },
                    { X: XX[26], Y: YY[26] },
                    { X: XX[27], Y: YY[27] },
                ]
            }


            let roundGranMas = createRoundGranMas();


            let createZamikanieLine = () => {
                ctx.strokeStyle = "red";

                ctx.beginPath();

                ctx.moveTo(roundGranMas[0].X, roundGranMas[0].Y);

                for (let i = 1; i < roundGranMas.length; i++) {
                    ctx.lineTo(roundGranMas[i].X, roundGranMas[i].Y);
                }

                ctx.lineTo(roundGranMas[0].X, roundGranMas[0].Y);

                ctx.stroke();
                ctx.strokeStyle = "black";
            }
            // createZamikanieLine();

            let createProkladkaLineVertical = (inst) => {
                let straightLineDirection = inst.straightLineDirection
                let widthTurn = inst.widthTurnReal * propX;
                ctx.strokeStyle = "green";
                ctx.beginPath();

                // Создаем массив только из Х
                let xArray = [];
                for (let i = 0; i < roundGranMas.length; i++) {
                    xArray.push(roundGranMas[i].X);
                }



                // Собираем двумерный массив координат
                let createTwo_dimensional = (two_dimensional = []) => {
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


                let two_dimensionalS = createTwo_dimensional();
                // Проверяем на четность витков, увеличиваем ширину витков, если нечёт
                while (two_dimensionalS.length % 2 != 0) {
                    widthTurn += 0.1;
                    two_dimensionalS = createTwo_dimensional()
                }

                // Считаем длинну системы
                let calcTotalLengthSystem = (two_dimensional) => {

                    // Считаем длинну вертикальных линий
                    let lenTurn = 0
                    for (let i = 0; i < two_dimensional.length - 1; i++) {
                        lenTurn += (two_dimensional[i][1][1] - two_dimensional[i][0][1]);
                    }
                    // Считаем длинну дуг
                    let lenArc = (two_dimensional.length * 2 * (widthTurn * Math.PI * 0.25));
                    // Считаем длинну прямой линии
                    let startLine = two_dimensional[0][two_dimensional[0].length - 1][0] - widthTurn * 0.5; // Начало прямой линии X
                    let endLine = two_dimensional[two_dimensional.length - 1][two_dimensional[two_dimensional.length - 1].length - 1][0] + widthTurn * 0.5; // Конец прямой линии X
                    let lenStraightLine = (startLine - endLine);

                    let lenTotal = (lenTurn + lenArc + lenStraightLine) / propX;
                    return lenTotal;
                }

                let sliceTwo_demensional = (two_dimensional) => {
                    let two_dimensional_B = [];
                    while (calcTotalLengthSystem(two_dimensional) > 85000) { // Максимальная длинна 84м + 1м погрешность
                        two_dimensional_B = (two_dimensional.splice(two_dimensional.length - 2, 2)).concat(two_dimensional_B);
                    }
                    return two_dimensional_B;
                }


                // Отрисовка
                let drowVerticalLines = (two_dimensional, countColor = 1) => {

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

                //Коректируем ширину витков, чтоб подогнать под нужную длинну системы
                let correctWidthTurn = (two_dimensional) => {
                    let lengthList = [7000, 14000, 21000, 28000, 35000, 42000, 56000, 70000, 84000];
                    let systemLength = calcTotalLengthSystem(two_dimensional);
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

                // Создаем массив из всех систем для отрисовки каждой
                let createAll_demensional = (two_dimensional) => {
                    let all_two_dem = [];
                    let two_dem_done = two_dimensional;

                    while (true) {

                        let two_dem = sliceTwo_demensional(two_dem_done);

                        if (two_dem.length == 0) {
                            all_two_dem.push(two_dem_done);

                            break;
                        }
                        all_two_dem.push(two_dem_done);

                        two_dem_done = two_dem;
                    }
                    return all_two_dem;
                }

                let two_dimensionalAll = createAll_demensional(two_dimensionalS);


                let two_dimensionalAll_last = two_dimensionalAll[two_dimensionalAll.length - 1];
                // while (Math.abs(calcTotalLengthSystem(two_dimensionalAll_last) - correctWidthTurn(two_dimensionalAll_last)) > 1000) {
                //     let dsfdfg = calcTotalLengthSystem(two_dimensionalAll_last);
                //     let dfgdfgdfg = correctWidthTurn(two_dimensionalAll_last);
                //     widthTurn += 0.1;
                //     two_dimensionalAll_last = createTwo_dimensional(two_dimensionalAll_last);
                // }
                // widthTurn = inst.widthTurnReal * propX;

                // while (two_dimensionalAll_last.length % 2 != 0) {
                //     widthTurn += 0.1;
                //     two_dimensionalAll_last = createTwo_dimensional(two_dimensionalAll_last)
                // }
                two_dimensionalAll[two_dimensionalAll.length - 1] = two_dimensionalAll_last;

                let infoText = "";

                infoText += `Количество систем: ${two_dimensionalAll.length} шт. \n`;

                for (let p = 0; p < two_dimensionalAll.length; p++) {
                    let countColor = p;
                    drowVerticalLines(two_dimensionalAll[p], countColor);
                    // ${calcTotalLengthSystem(two_dimensionalAll[p])}мм
                    infoText += `Система ${p + 1}: длина системы: ${correctWidthTurn(two_dimensionalAll[p])}мм, шаг укладки: ${Math.round(widthTurn / propX)}мм. \n`;
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



            let createProkladkaLineHorizon = () => {
                ctx.strokeStyle = "green";
                ctx.beginPath();

                // Создаем массив только из Y
                let xArray = [];
                for (let i = 0; i < roundGranMas.length; i++) {
                    xArray.push(roundGranMas[i].Y);
                }
                // Находим наименьший
                let startY = Math.max.apply(null, xArray);
                let endY = Math.min.apply(null, xArray);


                for (lineY = startY; lineY > endY; lineY -= 40) {
                    let allDots = [];
                    for (let n = 0; n < roundGranMas.length; n++) {
                        if (lineY <= roundGranMas[n].Y) {
                            // Создаем массив всех точек удовлетворяющих условию
                            allDots.push(roundGranMas[n].X);
                        }
                    }
                    // Сортируем этот массив по возрастанию. Соединем две точки подряд
                    allDots.sort((a, b) => { return a - b });

                    for (let i = 0; i < allDots.length; i += 2) {
                        ctx.moveTo(allDots[i], lineY);
                        ctx.lineTo(allDots[i + 1], lineY);
                    }
                }

                ctx.stroke();
                ctx.strokeStyle = "black";
            }

            createProkladkaLineVertical(inst);
            // createProkladkaLineHorizon();


        }
        drow(ctx, inst);

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
        goSVG = [];

    }


    let canvasIdAll = searchAllCanvasBlock(); //!!! Находим все canvas элементы


    //Выбираем все блоки с канвас и начинаем отрисовку
    for (let x = 0; x < canvasIdAll.length; x++) {
        canvasStartDrow(new Inst(canvasIdAll[x]));
    }

    // Кнопки добвления комнат
    let addRoomBtns = document.querySelectorAll(".calculator__add_room");
    addRoomBtns.forEach((elem) => {
        elem.addEventListener("click", function () {
            setTimeout(myInitCode, 1000)
        });
    })

    // Кнопки добавления этажей
    let addFloorBtns = document.querySelectorAll(".calculator__add_floor");
    addFloorBtns.forEach((elem) => {
        elem.addEventListener("click", function () {
            setTimeout(myInitCode, 1000)
        });
    })


    //events
    let drowPlan_level2_wrapper = document.querySelector(".drowPlan-level2-wrapper");
    dispatchForm("drowPlan", "drowPlanlLevel2");
}

export default myInitCode;