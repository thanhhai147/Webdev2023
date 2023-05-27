// used to calculate item grid for real estate item
const calculateColGrid = (screenSize, childItemNum) => `col${screenSize !== "xs" ? "-" + screenSize : ""}-${12 / childItemNum}`;

// return grid for all screen size
const calculateAllGrid = (gridObj) => {
    let colGrid = "";

    for(let [key, value] of Object.entries(gridObj)) {
        colGrid += calculateColGrid(key, value);
        colGrid += " "
    };

    return colGrid;
};

export { calculateColGrid, calculateAllGrid }