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

export default createEventInputs;