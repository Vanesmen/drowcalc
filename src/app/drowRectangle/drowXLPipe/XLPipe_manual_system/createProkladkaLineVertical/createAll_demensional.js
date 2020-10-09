import sliceTwo_demensional from "./sliceTwo_demensional";

// Создаем массив из всех систем для отрисовки каждой
let createAll_demensional = (xArray, roundGranMas, propX, widthTurn, two_dimensional, systemSLenght) => {
    let all_two_dem = [];
    let two_dem_done = two_dimensional;


    for (let l = 0; l < systemSLenght.length; l++) {
        let two_dem = sliceTwo_demensional(two_dem_done, widthTurn, propX, systemSLenght[l]);

        if (two_dem.length == 0) {
            all_two_dem.push(two_dem_done);

            break;
        }

        all_two_dem.push(two_dem_done);

        two_dem_done = two_dem;
    }


    // while (true) {

    //     let two_dem = sliceTwo_demensional(two_dem_done, widthTurn, propX, systemSLenght);

    //     if (two_dem.length == 0) {
    //         all_two_dem.push(two_dem_done);

    //         break;
    //     }
    //     all_two_dem.push(two_dem_done);

    //     two_dem_done = two_dem;
    // }
    return all_two_dem;
}

export default createAll_demensional;