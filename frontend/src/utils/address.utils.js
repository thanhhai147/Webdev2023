import Constant from "../data/constant.js";

const generateMapAddress = (address) => {
    let splitter = address.split(" ");
    let addressPath = splitter.join("+");
    return `${Constant.GOOGLE_MAPS_BASE_URL}${addressPath}`;
};

export { generateMapAddress } 