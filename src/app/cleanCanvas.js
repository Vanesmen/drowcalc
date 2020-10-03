// очистка холста
let cleanCanvas = (id) => {
    let drowPlan = document.getElementById(id);
    let ctx = drowPlan.getContext("2d");
    let currentClientWidth = drowPlan.clientWidth;
    let currentClientHeight = drowPlan.clientHeight;
    ctx.clearRect(0, 0, currentClientWidth, currentClientHeight);
}

export default cleanCanvas;