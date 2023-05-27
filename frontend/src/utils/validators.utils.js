import Constant from "../data/constant";

const accountValidator = (account) => {

    //empty
    if(!account) {
        return  {
            status: "invalid",
            type: "empty",
            message: "vui lòng nhập email hoặc số điện thoại",
        };
    };
    //phone number
    if(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm.test(account)) {
        return  {
            status: "valid",
            type: "correct",
            message: "",
        };
    };
    //email
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm.test(account)) {
        return  {
            status: "valid",
            type: "correct",
            message: "",
        };
    };

    return  {
        status: "invalid",
        type: "incorrect",
        message: "email hoặc số điện thoại không hợp lệ",
    };
};

const passwordValidator = (password) => {
    //empty
    if(!password) {
        return  {
            status: "invalid",
            type: "empty",
            message: "vui lòng nhập mật khẩu",
        };
    };
    if(password.length >= 6 && password.length <= 18 && /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/g.test(password)) {
        return  {
            status: "valid",
            type: "correct",
            message: "",
        };
    };

    return  {
        status: "invalid",
        type: "incorrect",
        message: "mật khẩu không hợp lệ",
    };
};

const firstNameValidator = (firstname) => {
    if(!firstname) {
        return {
            status: "invalid",
            type: "empty",
            message: "vui lòng nhập tên"
        };
    };
    if(/^([a-zA-Z\u00C0-\u1EF9]+)||((\s{1}[a-zA-Z\u00C0-\u1EF9]+){1,})$/g.test(firstname)) {
        return {
            status: "valid",
            type: "correct",
            message: ""
        };
    };

    return {
        status: "invalid",
        type: "incorrect",
        message: "tên không hợp lệ"
    };
};

const surnameValidator = (surname) => {
    if(!surname) {
        return {
            status: "invalid",
            type: "empty",
            message: "vui lòng nhập họ"
        };
    };
    if(/^([a-zA-Z\u00C0-\u1EF9]+)$/g.test(surname)) {
        return {
            status: "valid",
            type: "correct",
            message: ""
        };
    };
    return {
        status: "invalid",
        type: "incorrect",
        message: "họ không hợp lệ"
    };
};

const imageNumberValidator = (imageNumber) => {
    // check empty - required
    if(!imageNumber || imageNumber === 0) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng thêm hình cho bất động sản"
    };

    // check overquantity
    if(imageNumber > Constant.IMAGES_UPLOAD_MAX) return {
        status: "invalid",
        type: "overquantity",
        message: `hình ảnh vượt quá ${Constant.IMAGES_UPLOAD_MAX}`
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
        
};

const titleValidator = (title) => {
    // check empty - required
    if(!title || title.length === 0) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng nhập tiêu đề"
    };
    // check overlength
    if(title.length > Constant.TITLE_MAX) return {
        status: "invalid",
        type: "overlength",
        message: `tiêu đề vượt quá ${Constant.TITLE_MAX} kí tự`
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const descriptionValidator = (description) => {
    // check empty - required
    if(!description || description.length === 0) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng nhập mô tả"
    };
    // check overlength
    if(description.length > Constant.DESCRIPTION_MAX) return {
        status: "invalid",
        type: "overlength",
        message: `mô tả vượt quá ${Constant.DESCRIPTION_MAX} kí tự`
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const contractValidator = (contract) => {
    // check empty - required
    if(!contract) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng chọn hình thức giao dịch"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const collectionValidator = (collection) => {
    // check empty - required
    if(!collection) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng chọn danh mục bất động sản"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const areaValidator = (area) => {
    // check empty - required
    if(!area) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng điền diện tích"
    };
    // check none value
    if(area === 0) return {
        status: "invalid",
        type: "none",
        message: "vui lòng điền giá trị khác 0"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const livingValidator = living => {
    // check empty - not required
    if(!living) return {
        status: null,
        type: "empty",
        message: ""
    };
    // check none value
    if(living === 0) return {
        status: "invalid",
        type: "none",
        message: "vui lòng điền giá trị khác 0"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const widthValidator = width => {
    // check empty - not required
    if(!width) return {
        status: null,
        type: "empty",
        message: ""
    };
    // check none value
    if(width === 0) return {
        status: "invalid",
        type: "none",
        message: "vui lòng điền giá trị khác 0"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const lengthValidator = length => {
    // check empty - not required
    if(!length) return {
        status: null,
        type: "empty",
        message: ""
    };
    // check none value
    if(length === 0) return {
        status: "invalid",
        type: "none",
        message: "vui lòng điền giá trị khác 0"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const priceValidator = (price) => {
    // check empty - required
    if(!price) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng điền giá"
    }; 
    // check none value
    if(price === 0) return {
        status: "invalid",
        type: "none",
        message: "vui lòng điền giá trị khác 0"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const provinceValidator = province => {
    // check empty - required
    if(!province) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng chọn tỉnh thành"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const districtValidator = district => {
    // check empty - required
    if(!district) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng chọn quận huyện"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const wardValidator = ward => {
    // check empty - required
    if(!ward) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng chọn phường xã"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const addressValidator = address => {
    // check empty - required
    if(!address) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng điền địa chỉ"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const depositValidator = (deposit, required) => {
    if(!deposit && required) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng điền tiền đặt cọc"
    };
    if(!deposit && !required) return {
        status: null,
        type: "empty",
        message: ""
    };

    if(deposit === 0) return {
        status: "invalid",
        type: "none",
        message: "vui lòng điền giá trị khác 0"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
}

const typeValidator = (type, required) => {
    if(!type && required) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng chọn loại hình bất động sản"
    };

    if(!type && !required) return {
        status: null,
        type: "empty",
        message: ""
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const statusValidator = (status, required) => {
    if(!status && required) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng chọn hiện trạng bất động sản"
    };

    if(!status && !required) return {
        status: null,
        type: "empty",
        message: ""
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const bedroomValidator = (bedroom, required) => {
    if(!bedroom && required) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng điền số phòng ngủ"
    };

    if(!bedroom && !required) return {
        status: null,
        type: "empty",
        message: ""
    };

    if(bedroom === 0) return {
        status: "invalid",
        type: "none",
        message: "vui lòng điền giá trị khác 0"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const bathroomValidator = (bathroom, required) => {
    if(!bathroom && required) return {
        status: "invalid",
        type: "empty",
        message: "vui lòng điền số phòng tắm"
    };

    if(!bathroom && !required) return {
        status: null,
        type: "empty",
        message: ""
    };

    if(bathroom === 0) return {
        status: "invalid",
        type: "none",
        message: "vui lòng điền giá trị khác 0"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const floorValidator = floor => {
    if(!floor) return {
        status: null,
        type: "empty",
        message: ""
    };

    if(floor === 0) return {
        status: "invalid",
        type: "none",
        message: "vui lòng điền giá trị khác 0"
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const mainDirectionValidator = mainDirection => {
    if(!mainDirection) return {
        status: null,
        type: "empty",
        message: ""
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const balconyDirectionValidator = balconyDirection => {
    if(!balconyDirection) return {
        status: null,
        type: "empty",
        message: ""
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const featureValidator = feature => {
    if(!feature) return {
        status: null,
        type: "empty",
        message: ""
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const furnitureValidator = furniture => {
    if(!furniture) return {
        status: null,
        type: "empty",
        message: ""
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const legalitiesValidator = legalities => {
    if(!legalities) return {
        status: null,
        type: "empty",
        message: ""
    };

    return {
        status: "valid",
        type: "correct",
        message: ""
    };
};

const newRealEstateValidator = ({ title, description, images, location: { province, district, ward, address }, contract, collection, area: { area, living, width, length }, price, deposit, type, status, bedroom, bathroom, floor, direction: { main, balcony }, feature, furniture, legalities }) => {
    return {
        title: titleValidator(title),
        description: descriptionValidator(description),
        images: imageNumberValidator(images && images.length),
        contract: contractValidator(contract),
        collection: collectionValidator(collection),
        location: {
            province: provinceValidator(province),
            district: districtValidator(district),
            ward: wardValidator(ward),
            address: addressValidator(address),
        },
        area: {
            area: areaValidator(area),
            living: livingValidator(living),
            width: widthValidator(width),
            length: lengthValidator(length)
        },
        price: priceValidator(price),
        deposit: depositValidator(deposit, contract && contract.codename === "rent"),
        type: typeValidator(type, collection && collection.codename !== "motel"),
        status: statusValidator(status, collection && collection.codename === "apartment"),
        bedroom: bedroomValidator(bedroom, collection && (collection.codename === "apartment" || collection.codename === "house")),
        bathroom: bathroomValidator(bathroom),
        floor: floorValidator(floor),
        direction: {
            main: mainDirectionValidator(main),
            balcony: balconyDirectionValidator(balcony)
        },
        feature: featureValidator(feature),
        furniture: furnitureValidator(furniture),
        legalities: legalitiesValidator(legalities)
    };
};

const validationCheck = (validation) => {
    if(!validation) return false;
    
    const checkingProcess = (obj) => {
        if(!obj) return false;

        for (let validity of Object.values(obj)) {
            if(!validity) return false;
            if(validatorSchemaCheck(validity)) {
                if(validity.status === "invalid") return false;
            } else {
                checkingProcess(validity);
            };
            
        };

        return true;
    };

    return checkingProcess(validation);
};

const validatorSchemaCheck = (obj) => obj ? typeof(obj) === "object" && Object.keys(obj).length === 3 && obj.hasOwnProperty("status") && obj.hasOwnProperty("type") && obj.hasOwnProperty("message") : false;

export { 
        accountValidator, 
        passwordValidator, 
        surnameValidator, 
        firstNameValidator, 
        imageNumberValidator,
        titleValidator,
        descriptionValidator,
        contractValidator,
        collectionValidator,
        priceValidator,
        depositValidator,
        areaValidator,
        livingValidator,
        widthValidator,
        lengthValidator,
        provinceValidator,
        districtValidator,
        wardValidator,
        addressValidator,
        typeValidator,
        statusValidator,
        bedroomValidator,
        bathroomValidator,
        mainDirectionValidator,
        balconyDirectionValidator,
        floorValidator,
        featureValidator,
        furnitureValidator,
        legalitiesValidator,
        newRealEstateValidator,
        validationCheck 
    }