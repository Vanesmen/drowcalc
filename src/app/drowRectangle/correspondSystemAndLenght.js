let correspondSystemAndLenght = (point) => {
    let systems = {
        7000: "XL_PIPE-005",
        14000: "XL_PIPE-010",
        21000: "XL_PIPE-015",
        28000: "XL_PIPE-020",
        35000: "XL_PIPE--025",
        42000: "XL_PIPE-030",
        56000: "XL_PIPE-040",
        70000: "XL_PIPE-050",
        84000: "XL_PIPE-060"
    }

    if (!Number.isNaN(Number(point))) {
        return systems[point];
    } else if (point.slice(0, 7) === "XL_PIPE") {
        return Object.keys(systems).find(key => systems[key] == point);
    }
}

export default correspondSystemAndLenght;