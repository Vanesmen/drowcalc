import searchAllCanvasBlock from "./searchAllCanvasBlock";
import Inst from "./createInst";
// import createEventInputs from "./createEventInputs"
// import canvasStartDrow from "./canvasStartDrow";
import drowRectangle from "./drowRectangle/drowRectangle";

let myInitCode = () => {

    // let goSVG = [];

    // Формы комнат

    let canvasStartDrow = (inst) => {
        createEventInputs(inst);
        drowRectangle(inst);
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