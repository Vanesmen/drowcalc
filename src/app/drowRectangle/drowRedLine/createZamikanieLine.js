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

export default createZamikanieLine;