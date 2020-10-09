// очистка холста
let cleanCanvas = (id, ctx) => {
    let drowPlan = document.getElementById(id);
    let currentClientWidth = drowPlan.clientWidth;
    let currentClientHeight = drowPlan.clientHeight;
    ctx.clearRect(0, 0, currentClientWidth, currentClientHeight);
}

export default cleanCanvas;