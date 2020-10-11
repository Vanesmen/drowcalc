let defaultPaddingT = 60;
let defaultPaddingL = 60;

function Inst(id) {
    this.id = id;
    this.widthRoom = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#widthRoom").value;
    this.heightRoom = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#heightRoom").value;

    this.defaultPaddingT = 60; //Стандартный оступ основного рисунка от стенок canvas
    this.defaultPaddingL = 60; //Стандартный оступ основного рисунка от стенок canvas

    this.paddingT = defaultPaddingT; //Оступ основного рисунка от стенок canvas
    this.paddingL = defaultPaddingL; //Оступ основного рисунка от стенок canvas

    this.dash = true;
    this.dashL = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#dashL").value; //Отступ от стенок комнаты
    this.dashR = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#dashR").value; //Отступ от стенок комнаты
    this.dashT = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#dashT").value; //Отступ от стенок комнаты
    this.dashB = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#dashB").value; //Отступ от стенок комнаты
    // Мебель в комнате
    this.tl_w = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#tl_w").value; // Позиция 1 // Позиция 1
    this.tl_h = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#tl_h").value;

    this.ml_w = 0; // Позиция 4
    this.ml_h = 0;

    this.bl_w = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#bl_w").value; // Позиция 7 // Позиция 3
    this.bl_h = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#bl_h").value;

    this.tm_w = 0; // Позиция 2
    this.tm_h = 0;

    this.mm_w = 0; // Позиция 5
    this.mm_h = 0;

    this.bm_w = 0; // Позиция 8
    this.bm_h = 0;

    this.rt_w = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#rt_w").value; // Позиция 3 // Позиция 2
    this.rt_h = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#rt_h").value;

    this.rm_w = 0; // Позиция 6
    this.rm_h = 0;

    this.rb_w = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#rb_w").value; // Позиция 9 // Позиция 4
    this.rb_h = document.querySelectorAll("[fid]")[id.slice(-1) - 2].querySelector("#rb_h").value;

    this.straightLineDirection = true; //straightLineDirection, true - внизу/справа

    this.widthTurnReal = 250; //в мм

    this.drowMethod = ""; // "mechanical" "manual_system" "manual_step" "manual_system_step"
    this.systemSLenght = []; //Объект со всеми длинами систем, по количеству длинн, определяется количество систем

}

export default Inst;