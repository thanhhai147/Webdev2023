// add "." splitter into number
const splitNumber = (number) => {
    const text = number.toString()
    let str = "";

    let stack = 0;
    for(let i = text.length - 1; i >= 0; i--) {
        str = text[i] + str;
        stack ++;
        if(stack === 3 && i !== 0) {
            stack = 0;
            str = "." + str;
        };
    };

    return str;
};

// convert number to price name
const numberConvention = (price) => {
    let str = price.toString()
    let numberOfDigits = str.length;
    if(numberOfDigits === 0) return;

    let unit = "";
    let places = 1;
    switch(numberOfDigits) {
        case 1: 
            unit = "";
            places = 1;
            break;
        case 2:
            unit = "chục";
            places = 10;
            break;
        case 3:
            unit = "trăm";
            places = 100;
            break;
        case 4: case 5: case 6:
            unit = "nghìn";
            places = 1000
            break;
        case 7: case 8: case 9:
            unit = "triệu";
            places = 1000000
            break;
        case 10: case 11: case 12:
            unit = "tỉ";
            places = 1000000000
            break;
        default:
            unit = "";
            places = 1;
            break;
    };

    let name = price / places ;
    return `${name} ${unit}`
};

const timeConvention = (seconds) => {
    return new Date(seconds * 1000).toISOString().slice(11, 19);
}

export { splitNumber, numberConvention, timeConvention }
