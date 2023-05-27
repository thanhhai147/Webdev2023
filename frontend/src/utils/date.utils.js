const getFullDate = (timeStr) => {
    const d = new Date(timeStr);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

export { getFullDate }