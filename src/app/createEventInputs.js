import correspondSystemAndLenght from "./drowRectangle/correspondSystemAndLenght";


//События к инпутам
let createEventInputs = (inst, drowFunction, ctx, drowSVGimage) => {

    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#widthRoom").addEventListener("change", function (event) {
        // Валидация 
        if (document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#widthRoom").value < inst.heightRoom) {
            inst.widthRoom = inst.heightRoom;
            alert("Стороны B и D, должны быть меньше или равны сторонам A, C");
        } else {
            inst.widthRoom = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#widthRoom").value;
        }
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })
    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#heightRoom").addEventListener("change", function (event) {
        // Валидация
        if (document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#heightRoom").value > inst.widthRoom) {
            inst.heightRoom = inst.widthRoom;
            alert("Стороны A и C, должны быть меньше или равны сторонам B, D");
        } else {
            inst.heightRoom = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#heightRoom").value;
        }
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })

    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashL").addEventListener("change", function (event) {
        inst.dashL = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashL").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })

    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashR").addEventListener("change", function (event) {
        inst.dashR = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashR").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })

    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashT").addEventListener("change", function (event) {
        inst.dashT = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashT").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })

    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashB").addEventListener("change", function (event) {
        inst.dashB = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#dashB").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })

    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#tl_w").addEventListener("change", function (event) {
        inst.tl_w = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#tl_w").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })
    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#tl_h").addEventListener("change", function (event) {
        inst.tl_h = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#tl_h").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })

    // document.getElementById("ml_w").addEventListener("change", function (event) {
    //     inst.ml_w = Number(document.getElementById("ml_w").value);
    //     drowFunction(inst, ctx);
    // drowSVGimage(inst, ctx, drowFunction);
    // })
    // document.getElementById("ml_h").addEventListener("change", function (event) {
    //     inst.ml_h = Number(document.getElementById("ml_h").value);
    //     drowFunction(inst, ctx);
    // drowSVGimage(inst, ctx, drowFunction);
    // })

    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#bl_w").addEventListener("change", function (event) {
        inst.bl_w = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#bl_w").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })
    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#bl_h").addEventListener("change", function (event) {
        inst.bl_h = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#bl_h").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })

    // document.getElementById("tm_w").addEventListener("change", function (event) {
    //     inst.tm_w = Number(document.getElementById("tm_w").value);
    //     drowFunction(inst, ctx);
    // drowSVGimage(inst, ctx, drowFunction);
    // })
    // document.getElementById("tm_h").addEventListener("change", function (event) {
    //     inst.tm_h = Number(document.getElementById("tm_h").value);
    //     drowFunction(inst, ctx);
    // drowSVGimage(inst, ctx, drowFunction);
    // })

    // document.getElementById("mm_w").addEventListener("change", function (event) {
    //     inst.mm_w = Number(document.getElementById("mm_w").value);
    //     drowFunction(inst, ctx);
    // drowSVGimage(inst, ctx, drowFunction);
    // })
    // document.getElementById("mm_h").addEventListener("change", function (event) {
    //     inst.mm_h = Number(document.getElementById("mm_h").value);
    //     drowFunction(inst, ctx);
    // drowSVGimage(inst, ctx, drowFunction);
    // })

    // document.getElementById("bm_w").addEventListener("change", function (event) {
    //     inst.bm_w = Number(document.getElementById("bm_w").value);
    //     drowFunction(inst, ctx);
    // drowSVGimage(inst, ctx, drowFunction);
    // })
    // document.getElementById("bm_h").addEventListener("change", function (event) {
    //     inst.bm_h = Number(document.getElementById("bm_h").value);
    //     drowFunction(inst, ctx);
    // drowSVGimage(inst, ctx, drowFunction);
    // })

    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rt_w").addEventListener("change", function (event) {
        inst.rt_w = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rt_w").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })
    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rt_h").addEventListener("change", function (event) {
        inst.rt_h = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rt_h").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })

    // document.getElementById("rm_w").addEventListener("change", function (event) {
    //     inst.rm_w = Number(document.getElementById("rm_w").value);
    //     drowFunction(inst, ctx);
    // drowSVGimage(inst, ctx, drowFunction);
    // })
    // document.getElementById("rm_h").addEventListener("change", function (event) {
    //     inst.rm_h = Number(document.getElementById("rm_h").value);
    //     drowFunction(inst, ctx);
    // drowSVGimage(inst, ctx, drowFunction);
    // })



    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rb_w").addEventListener("change", function (event) {
        inst.rb_w = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rb_w").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })
    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rb_h").addEventListener("change", function (event) {
        inst.rb_h = Number(document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#rb_h").value);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })

    //Поле выбора метода расчета
    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#choiseMethod").addEventListener("change", function (event) {
        inst.drowMethod = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector("#choiseMethod").value;
        inputsMethods(inst);
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    })

    //Поля выбора системы
    let addNewSystem_select = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelectorAll(".systemBlock select");
    let allInputsSelect = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelectorAll(".systemBlock *");
    for (let i = 0; i < allInputsSelect.length; i++) {
        allInputsSelect[i].style.display = "block";
    }
    //Обновление данных о системах в inst
    let updateSystemLenght = () => {
        inst.systemSLenght = [];
        for (let x = 0; x < addNewSystem_select.length; x++) {
            if (addNewSystem_select[x].value != "Нет системы") {
                inst.systemSLenght.push(addNewSystem_select[x].value);
            }
        }
        drowFunction(inst, ctx);
        drowSVGimage(inst, ctx, drowFunction);
    }

    addNewSystem_select.forEach(el => {
        el.addEventListener("change", function () {
            updateSystemLenght();
        })
    })

    //Выбор режима при загрузке калькулятора
    updateSystemLenght();
    if (inst.systemSLenght != 0) {
        inst.drowMethod = "manual_system";
    } else {
        inst.drowMethod = "mechanical";
    }

    //Скрывать или показывать поля, в зависимости от типа расчёта
    let addNewSystem_block = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelectorAll(".systemBlock");
    let inputsMethods = (inst) => {
        let addNewSystem_block = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelectorAll(".addNewSystem-block");
        let firstSystem_block = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".firstSystem-block");
        let addNewSydtem_button = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".addNewSydtem_button");
        let removeNewSydtem_button = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".removeNewSydtem_button");
        switch (inst.drowMethod) {
            case "mechanical":
                addNewSydtem_button.style.display = "none";
                removeNewSydtem_button.style.display = "none";
                firstSystem_block.style.display = "none";
                for (let n = 0; n < addNewSystem_block.length; n++) {
                    addNewSystem_block[n].style.display = "none";
                }
                break
            case "manual_system":
                addNewSydtem_button.style.display = "block";
                if (inst.systemSLenght.length > 1) {
                    removeNewSydtem_button.style.display = "block";
                } else {
                    removeNewSydtem_button.style.display = "none";
                }
                
                firstSystem_block.style.display = "block";
                let systemCount = inst.systemSLenght.length
                for (let n = systemCount - 1; n < addNewSystem_block.length; n++) {
                    addNewSystem_block[n].style.display = "none";
                }
                break
            case "manual_step":
                addNewSydtem_button.style.display = "none";
                removeNewSydtem_button.style.display = "none";
                firstSystem_block.style.display = "none";
                for (let n = 0; n < addNewSystem_block.length; n++) {
                    addNewSystem_block[n].style.display = "none";
                }
                break
            case "manual_system_step":
                addNewSydtem_button.style.display = "block";
                removeNewSydtem_button.style.display = "none";
                firstSystem_block.style.display = "block";
                for (let n = 0; n < addNewSystem_block.length; n++) {
                    addNewSystem_block[n].style.display = "none";
                }

        }
    }
    inputsMethods(inst);
    //События на кнопки добавления систем
    let ableBlockS = inst.systemSLenght.length; // Количество систем
    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".addNewSydtem_button").addEventListener("click", function () {
        if (ableBlockS != 10) {
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".removeNewSydtem_button").style.display = "block";
            ableBlockS++;
        }

        for (let x = 0; x < addNewSystem_block.length; x++) {
            addNewSystem_block[x].style.display = "none";
        }
        for (let x = 1; x <= ableBlockS; x++) {
            addNewSystem_block[x - 1].style.display = "block";
        }

    });
    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".removeNewSydtem_button").addEventListener("click", function () {
        if (ableBlockS != 1) {
            ableBlockS--;
        }
        if (ableBlockS == 1) {
            document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".removeNewSydtem_button").style.display = "none";
        }

        for (let x = 0; x < addNewSystem_block.length; x++) {
            addNewSystem_block[x].style.display = "none";
        }
        for (let x = 1; x <= ableBlockS; x++) {
            addNewSystem_block[x - 1].style.display = "block";
        }
        for (let x = ableBlockS; x < addNewSystem_block.length; x++) {
            addNewSystem_block[x].querySelector("select").value = "Нет системы";
        }
        updateSystemLenght();
    });
};

export default createEventInputs;