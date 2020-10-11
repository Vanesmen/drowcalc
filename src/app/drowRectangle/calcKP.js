let calcKP = (inst) => {
    let priceXL = {
        "XLPIPE-005": {
            price: 4859,
            power: 280
        },
        "XLPIPE-010": {
            price: 9716,
            power: 560
        },
        "XLPIPE-015": {
            price: 14586,
            power: 840
        },
        "XLPIPE-020": {
            price: 19457,
            power: 1120
        },
        "XLPIPE-025": {
            price: 24328,
            power: 1400
        },
        "XLPIPE-030": {
            price: 29198,
            power: 1680
        },
        "XLPIPE-040": {
            price: 37811,
            power: 2240
        },
        "XLPIPE-050": {
            price: 44836,
            power: 2800
        },
        "XLPIPE-060": {
            price: 49962,
            power: 3360
        }
    }

    //Считаем можность систем
    let power = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".calculator__room__bottom__power span");
    let totalPower = 0;
    for (let x = 0; x < inst.systemSLenght.length; x++) {
        totalPower += priceXL[inst.systemSLenght[x]].power;
    }
    inst.systemSLenght
    power.innerHTML = totalPower;

    //Считаем количество систем
    let quantity = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".calculator__room__bottom__quantity span");
    quantity.innerHTML = inst.systemSLenght.length;
    
    //Стоимость за все системы
    let summLight = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".calculator__room__bottom__summ_light span");
    let totalPrice = 0;
    for (let x = 0; x < inst.systemSLenght.length; x++) {
        totalPrice += priceXL[inst.systemSLenght[x]].price;
    }
    summLight.innerHTML = totalPrice;
    //Общая стоимость
    let summ = document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".calculator__room__bottom__summ span");
    summ.innerHTML = totalPrice;

    //Итоговая информация
    let finalGross = document.querySelector(".calculator__final .calculator__final__gross span");
    finalGross.innerHTML = totalPrice;

    let finalValue  = document.querySelector(".calculator__final .calculator__final__value span");
    finalValue.innerHTML = totalPrice;

}


export default calcKP