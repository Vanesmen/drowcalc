import searchAllCanvasBlock from "./searchAllCanvasBlock";
import Inst from "./createInst";
import createEventInputs from "./createEventInputs"
// import canvasStartDrow from "./canvasStartDrow";
import drowRectangle from "./drowRectangle/drowRectangle";
import drowSVGimage from "./drowSVGimage";

let myInitCode = () => {

    // let goSVG = [];

    // Формы комнат

    let canvasStartDrow = (inst) => {
        let drowPlan = document.getElementById(inst.id);
        let ctx = drowPlan.getContext("2d");

        createEventInputs(inst, drowRectangle, ctx, drowSVGimage);

        drowRectangle(inst, ctx);

        drowSVGimage(inst, ctx, drowRectangle);
    }


    let canvasIdAll = searchAllCanvasBlock(); //!!! Находим все canvas элементы


    //Выбираем все блоки с канвас и начинаем отрисовку
    for (let x = 0; x < canvasIdAll.length; x++) {
        canvasStartDrow(new Inst(canvasIdAll[x]));
    }

    // Кнопки добвления комнат
    let addRoomBtns = document.querySelectorAll(".calculator__add_room");
    addRoomBtns.forEach((elem) => {
        elem.addEventListener("click", function() {
            setTimeout(myInitCode, 1000)
        });
    })

    // Кнопки добавления этажей
    let addFloorBtns = document.querySelectorAll(".calculator__add_floor");
    addFloorBtns.forEach((elem) => {
        elem.addEventListener("click", function() {
            setTimeout(myInitCode, 1000)
        });
    })


    //events
    // let drowPlan_level2_wrapper = document.querySelector(".drowPlan-level2-wrapper");

}

export default myInitCode;