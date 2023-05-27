 // get screen type
 const getScreenType = (screenSize) => {
    if(screenSize >= 1400) return "xxl";
    if(screenSize >= 1200) return "xl";
    if(screenSize >= 992) return "lg";
    if(screenSize >= 768) return "md";
    if(screenSize >= 576) return "sm";
    return "xs"
};

export { getScreenType }