class Constant {
  constructor() {
    this.budgetRange = {
      min: 100000,
      max: 2000000,
      step: 100000
    }
    this.timeRange = {
      min: 1800,
      max: 36000,
      step: 1800
    }
    this.TIMEOUT_FEEDBACK = 2500;
    this.GOOGLE_MAPS_BASE_URL = "https://www.google.com/maps/place/";
    this.CAROUSEL_PARENT = 3;
    this.CAROUSEL_CHILD = {
      xxl: 6,
      xl: 6,
      lg: 4,
      md: 3,
      sm: 2,
      xs: 2,
    };
    this.IMAGE_CAROUSEL_WIDTH_DEFAULT = 100;
    this.IMAGE_CAROUSEL_HEIGHT_DEFAULT = 100;
    this.PAGE_DEFAULT = 1;
    this.REAL_ESTATE_PER_PAGE_DEFAULT = 20;
    this.PRIMARY_COLOR = "#003058";
    this.SECONDARY_COLOR = "#ffd716";
    this.AVATAR_SIZE_DEFAULT = 90;
    this.AVATAR_TEXT_SIZE_RATIO = 2;
    this.AVATAR_MAX_INITIALS = 1;
    this.TITLE_MAX = 50;
    this.DESCRIPTION_MAX = 1500;
    this.IMAGES_UPLOAD_MAX = 12;
    this.BACKEND_BASE_URL = "http://localhost:5000/api/v1";
    this.PROVINCE_API_BASE_URL = "https://provinces.open-api.vn/api";
  };
};

export default new Constant();
