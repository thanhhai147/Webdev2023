// uppercase the first letter
const firstLetterToUppercase = (text) => !text ? "" : text[0].toUpperCase() + text.substr(1);

// uppercase the first letter of every word 
const lettersToUppercase = (text) => {
    if(!text) return "";

    let words = text.split(" ");
    let uppercaseWords = words.map(word => {
        return firstLetterToUppercase(word);
    });

    return uppercaseWords.join(" ");
};

// uppercase all letters
const allLettersToUppercase = (text) => !text ? "" : text.toUpperCase();

export { firstLetterToUppercase, lettersToUppercase, allLettersToUppercase } 