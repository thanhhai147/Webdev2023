import React from "react";
import Constant from "../../data/constant.js";
import Range from "./range-input.js";
import Select from "./select-input.js";
import "./assets/css/form.css"
import { recommendTour, getAllTours } from "../../services/user.service.js";

// context
import { useAppContext } from "../../context/app-context/index.js";

const Form = ({formState, setFormState, formTypes, region, location, tour, setTour}) => {
    const { setNotification } = useAppContext();
 
    // assign types of criteria 
    const {select, range, text} = {
        select: formTypes.some(type => type === "select"),
        range: formTypes.some(type => type === "range"),
        text: formTypes.some(type => type === "text"),
    };

    // handle onchange event 
    const rangeOnChange = (leftInputRef, rightInputRef, lower, upper) => {
        let name = rightInputRef.current.name;
        let [parent, child] = name.split("-");

        setFormState(prevCriteriaState => {
            let newCriteriaState = {...prevCriteriaState};

            if(child) {
                newCriteriaState[parent][child]["min"] = lower;
                newCriteriaState[parent][child]["max"] = upper;
            };
            if(parent) {
                newCriteriaState[parent]["min"] = lower;
                newCriteriaState[parent]["max"] = upper;
            }else {
                newCriteriaState[name]["min"] = lower;
                newCriteriaState[name]["max"] = upper;
            };

            return newCriteriaState;
        });
    };

    const selectOnChange = (e) => {
        const eleName = e.target.name;
        const value = e.target.value;

        let [parent, child] = eleName.split("-");
        
        setFormState(prevCriteriaState => {
            let newCriteriaState = {...prevCriteriaState};
            if(child) {
                if(value && value !== "label") {
                    let [code, codename, name] = value.split("-");
                    newCriteriaState[parent][child] = { code, codename, name };
                } else {
                    newCriteriaState[parent][child] = null;
                };
            } else {
                if(value && value !== "label") {
                    let [code, codename, name] = value.split("-");
                    newCriteriaState[parent] = { code, codename, name };
                } else {
                    newCriteriaState[parent] = null;
                };
            };
            return newCriteriaState;
        });
    };

    const locationOnChange = (e) => {
        const eleName = e.target.name
        const value = e.target.value
 
        let [parent, child] = eleName.split("-");

        setFormState(prevCriteriaState => {
            let newCriteriaState = {...prevCriteriaState};

            if(value && value !== "label") {
                let [code, codename, name] = value.split("-");
                console.log(parent, child, name)
                newCriteriaState[parent][child] =  name
            } else {
                newCriteriaState[parent][child] = null;
            };
            
            return newCriteriaState;
        });
    };

    const textOnChange = (e) => {
        const eleName = e.target.name;
        const value = e.target.value;
        let [parent, child] = eleName.split("-");

        setFormState(prevCriteriaState => {
            let newCriteriaState = {...prevCriteriaState};
            if(child) {
                newCriteriaState[parent][child] = value;
            } else {
                newCriteriaState[parent] = value;
            }
            return newCriteriaState;
        });
    };

    const numberFormatChange = (valueObj, e) => {
        
        const eleName = e.event.target.name;
        const value = valueObj.floatValue;
        let [parent, child] = eleName.split("-");

        setFormState(prevCriteriaState => {
            let newCriteriaState = {...prevCriteriaState};
            if(child) {
                newCriteriaState[parent][child] = value;
            } else {
                newCriteriaState[parent] = value;
            }
            return newCriteriaState;
        });
    };

    const locationOptions = (region) => location ? location.filter(ele => ele['region'] === region) : location

    const regionOptions = (
        [
            {
                'name': 'north',
                'value': 'north'
            },
            {
                'name': 'central',
                'value': 'central'
            },
            {
                'name': 'south',
                'value': 'south'
            }
        ]
    )

    const findTour = async () => {
        try {
            const chosenLocation = location.find(ele => ele['name'] === formState['location']['name'])
            const query = `locationId=${chosenLocation['_id']}&budget=${formState['budget']['max']}&time_vault=${formState['timeVault']['max']}`
            console.log(query)
            const result = await recommendTour(query)
            if(result.status === 200) {
                const allTours = await getAllTours()
                setTour(allTours['data']['data'].pop())
            }
        } catch(e) {
            console.log(e)
            setNotification(e)
        }
    }
    
    return(
        <div className="criteria-container p-4 element-bg-color rounded-5">
            <div className='tour-recommend-title primary-color mb-4'>
                <h2>Gợi ý lịch trình thông minh</h2>
            </div>
            <div className="criteria-body">
                <div className="label">
                    <p className="fs-5 primary-color fw-semibold">Địa điểm bắt đầu</p>
                </div>
                <div className="criteria-group ms-2 mb-4">
                    <div className="row">
                        
                        {
                            select &&
                            <>
                                <div className={`province mb-3 col-4`}>
                                    <Select label="tỉnh thành / Khu vực" name="location-region" options={regionOptions} regionOptions={true} optionsLoad={true} optionsMakeup={false} disabled={false} onChangeCallback={locationOnChange} />
                                </div>
                                <div className={`province mb-3 col-4`}>
                                    <Select label="địa danh nổi tiếng" name="location-name" options={locationOptions(formState['location']['region'])} optionsLoad={location} optionsMakeup={false} disabled={false} onChangeCallback={locationOnChange} />
                                </div>
                            </>
                            
                        }
                    </div>
                </div>
                <div className="label">
                    <p className="fs-5 primary-color fw-semibold">Ngân sách & Thời gian</p>
                </div>
                <div className="criteria-group ms-2">
                    <div className="row">
                        {
                            range 
                            &&
                            <>
                                <div className={`budget mb-5 col-6`}>
                                    <Range label="ngân sách" name="budget" min={Constant.budgetRange.min} max={Constant.budgetRange.max} step={Constant.budgetRange.step} leftDefaultValue={Constant.budgetRange.min} rightDefaultValue={Constant.budgetRange.max} unit="" numberConvention={true} onChangeCallback={rangeOnChange} />
                                </div>
                                <div className={`time-vault col-6`}>
                                    <Range label="thời gian" name="timeVault" min={Constant.timeRange.min} max={Constant.timeRange.max} step={Constant.timeRange.step} leftDefaultValue={Constant.timeRange.min} rightDefaultValue={Constant.timeRange.max} unit="" timeConvention={true} onChangeCallback={rangeOnChange} />
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className="btn-container d-flex flex-row justify-content-end">
                <button className="find-btn no-border primary-bg-color pt-2 pb-2 ps-4 pe-4 rounded-5 fs-6 fw-semibold background-color" onClick={findTour}>Tìm chuyến đi</button>
            </div>
        </div>
    );
};

export default Form;