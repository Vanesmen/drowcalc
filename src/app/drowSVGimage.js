let drowSVGimage = (inst, ctx, drowRectangle) => {
    let goSVG = []
    let myMockContext = new C2S(500, 500);
    drowRectangle(inst, myMockContext);
    goSVG.push(myMockContext.getSerializedSvg());

    let createGreatSVG = (goSVG) => {
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="500"><defs></defs>`;
        for (let u = 0; u < goSVG.length; u++) {
            let start = goSVG[u].indexOf("<g>");
            let end = goSVG[u].indexOf("</g>");
            goSVG[u] = goSVG[u].slice(start, end);
        };
        let allPart = "";
        for (let u = 0; u < goSVG.length; u++) {
            allPart += goSVG[u];
        }
        let GreatSVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="500"><defs></defs>` + allPart + "</svg>";
        return GreatSVG;
    }

    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".calculator__room__bottom__svg").innerHTML = "";

    document.querySelectorAll("[fid]")[inst.id.slice(-1) - 2].querySelector(".calculator__room__bottom__svg").innerHTML = createGreatSVG(goSVG);
}

export default drowSVGimage;