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


export default createProkladkaLineHorizon;