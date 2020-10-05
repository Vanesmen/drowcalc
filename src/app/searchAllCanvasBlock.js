let searchAllCanvasBlock = () => {
    let allCanvas = document.querySelectorAll("[fid] canvas");
    let canvasIdAll = [];

    if (allCanvas.length > 0) {
        for (let i = 0; i < allCanvas.length; i++) {
            allCanvas[i].id = `drowPlanlLevel${i + 2}`;
            canvasIdAll.push(`drowPlanlLevel${i + 2}`);
        }
    }

    return canvasIdAll;
}

export default searchAllCanvasBlock;