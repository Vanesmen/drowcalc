// Точки по которым строится замыкание
let createRoundGranMas = (inst, currentClientWidth, currentClientHeight, margin, dasR, dasL, dasB, dasT, propX, propY) => {
    // Ось X
    let XX = [
        Math.min(currentClientWidth - dasR - margin, currentClientWidth - inst.rm_w * propX - inst.paddingL - margin),
        currentClientWidth - dasR - margin,

        currentClientWidth - dasR - margin,
        Math.min(currentClientWidth - inst.paddingL - inst.rb_w * propX - margin, currentClientWidth - dasR - margin),
        Math.min(currentClientWidth - inst.paddingL - inst.rb_w * propX - margin, currentClientWidth - dasR - margin),
        currentClientWidth * 0.5 + inst.bm_w * propX * 0.5 + margin,
        currentClientWidth * 0.5 + inst.bm_w * propX * 0.5 + margin,
        currentClientWidth * 0.5 - inst.bm_w * propX * 0.5 - margin,
        currentClientWidth * 0.5 - inst.bm_w * propX * 0.5 - margin,
        Math.max(inst.paddingL + inst.bl_w * propX + margin, dasL + margin), //тут
        Math.max(inst.paddingL + inst.bl_w * propX + margin, dasL + margin),
        dasL + margin,

        dasL + margin,
        Math.max(dasL + margin, inst.ml_w * propX + inst.paddingL + margin),
        Math.max(dasL + margin, inst.ml_w * propX + inst.paddingL + margin),
        dasL + margin,

        dasL + margin,
        Math.max(inst.paddingL + inst.tl_w * propX + margin, dasL + margin), // и тут
        Math.max(inst.paddingL + inst.tl_w * propX + margin, dasL + margin),
        currentClientWidth * 0.5 - inst.tm_w * propX * 0.5 - margin,
        currentClientWidth * 0.5 - inst.tm_w * propX * 0.5 - margin,
        currentClientWidth * 0.5 + inst.tm_w * propX * 0.5 + margin,
        currentClientWidth * 0.5 + inst.tm_w * propX * 0.5 + margin,
        Math.min(currentClientWidth - inst.paddingL - inst.rt_w * propX - margin, currentClientWidth - dasR - margin),
        Math.min(currentClientWidth - inst.paddingL - inst.rt_w * propX - margin, currentClientWidth - dasR - margin),
        currentClientWidth - dasR - margin,

        currentClientWidth - dasR - margin,
        Math.min(currentClientWidth - dasR - margin, currentClientWidth - inst.rm_w * propX - inst.paddingL - margin),
    ]

    // Ось Y
    let YY = [
        currentClientHeight * 0.5 + inst.rm_h * propX * 0.5 + margin,
        currentClientHeight * 0.5 + inst.rm_h * propX * 0.5 + margin,
        Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.rb_h * propY - margin),
        Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.rb_h * propY - margin),
        currentClientHeight - dasB - margin,
        currentClientHeight - dasB - margin,
        Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.bm_h * propY - margin),
        Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.bm_h * propY - margin),
        currentClientHeight - dasB - margin,
        currentClientHeight - dasB - margin,
        Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.bl_h * propY - margin),
        Math.min(currentClientHeight - dasB - margin, currentClientHeight - inst.paddingT - inst.bl_h * propY - margin),

        currentClientHeight * 0.5 + inst.ml_h * propX * 0.5 + margin,
        currentClientHeight * 0.5 + inst.ml_h * propX * 0.5 + margin,
        currentClientHeight * 0.5 - inst.ml_h * propX * 0.5 - margin,
        currentClientHeight * 0.5 - inst.ml_h * propX * 0.5 - margin,

        Math.max(dasT + margin, inst.paddingT + inst.tl_h * propY + margin),
        Math.max(dasT + margin, inst.paddingT + inst.tl_h * propY + margin),
        dasT + margin,
        dasT + margin,
        Math.max(dasT + margin, inst.paddingT + inst.tm_h * propY + margin),
        Math.max(dasT + margin, inst.paddingT + inst.tm_h * propY + margin),
        dasT + margin,
        dasT + margin,
        Math.max(dasT + margin, inst.paddingT + inst.rt_h * propY + margin),
        Math.max(dasT + margin, inst.paddingT + inst.rt_h * propY + margin),

        currentClientHeight * 0.5 - inst.rm_h * propX * 0.5 - margin,
        currentClientHeight * 0.5 - inst.rm_h * propX * 0.5 - margin,
    ]


    return [
        { X: XX[0], Y: YY[0] },
        { X: XX[1], Y: YY[1] },
        { X: XX[2], Y: YY[2] },
        { X: XX[3], Y: YY[3] },
        { X: XX[4], Y: YY[4] },
        { X: XX[5], Y: YY[5] },
        { X: XX[6], Y: YY[6] },
        { X: XX[7], Y: YY[7] },
        { X: XX[8], Y: YY[8] },
        { X: XX[9], Y: YY[9] },
        { X: XX[10], Y: YY[10] },
        { X: XX[11], Y: YY[11] },
        { X: XX[12], Y: YY[12] },
        { X: XX[13], Y: YY[13] },
        { X: XX[14], Y: YY[14] },
        { X: XX[15], Y: YY[15] },
        { X: XX[16], Y: YY[16] },
        { X: XX[17], Y: YY[17] },
        { X: XX[18], Y: YY[18] },
        { X: XX[19], Y: YY[19] },
        { X: XX[20], Y: YY[20] },
        { X: XX[21], Y: YY[21] },
        { X: XX[22], Y: YY[22] },
        { X: XX[23], Y: YY[23] },
        { X: XX[24], Y: YY[24] },
        { X: XX[25], Y: YY[25] },
        { X: XX[26], Y: YY[26] },
        { X: XX[27], Y: YY[27] },
    ]
}

export default createRoundGranMas;