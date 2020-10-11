let correspondSystemAndLenght = (point) => {
    let systems = {
        7000: "XLPIPE-005",
        14000: "XLPIPE-010",
        21000: "XLPIPE-015",
        28000: "XLPIPE-020",
        35000: "XLPIPE-025",
        42000: "XLPIPE-030",
        56000: "XLPIPE-040",
        70000: "XLPIPE-050",
        84000: "XLPIPE-060"
    }

    if (!Number.isNaN(Number(point))) {
        return systems[point];
    } else if (point.slice(0, 6) === "XLPIPE") {
        return Object.keys(systems).find(key => systems[key] == point);
    }
}

export default correspondSystemAndLenght;