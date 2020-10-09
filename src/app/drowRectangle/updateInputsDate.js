// Обновление полей ввода ???
let updateInputsDate = (inst) => {
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

    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#choiseMethod").value = inst.drowMethod;
}

export default updateInputsDate;