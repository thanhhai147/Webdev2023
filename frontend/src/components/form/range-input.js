import React, { useEffect, useRef, useState } from "react";
import "./assets/css/range-input.css";
import { firstLetterToUppercase } from "../../utils/string.utils.js";
import { numberConvention as numberConventionUtil, splitNumber, timeConvention as timeConventionUtil } from "../../utils/number.utils.js";

const Range = ({label = "range", name = "range", min = 0, max = 100, step = 1, leftDefaultValue = 25, rightDefaultValue = 75, unit = "", numberConvention = false, timeConvention = false, onChangeCallback}) => {
    // access input value
    const leftInputRef = useRef(leftDefaultValue);
    const rightInputRef = useRef(rightDefaultValue);
    // proccessed input-value
    const [leftValue, setLeftValue] = useState(leftDefaultValue);
    const [rightValue, setRightValue] = useState(rightDefaultValue);
    // access thumb
    const leftThumbRef = useRef(null);
    const rightThumbRef = useRef(null);

    // change left and right value
    const changeLeftValue = () => {
        let value = Math.min(parseInt(leftInputRef.current.value, 10), parseInt(rightInputRef.current.value, 10) - 1 );
        setLeftValue(value);
    };

    const changeRightValue = () => {
        let value = Math.max(parseInt(leftInputRef.current.value, 10) + 1, parseInt(rightInputRef.current.value, 10));
        setRightValue(value);
    };

    // convert left and right value to percent for range and thumb
    const valueToPercent = (value) => {
        return ((value - min) / (max - min)) * 100;
    }

    // add and remove hover class to create hover animation
    const addHoverClass = (e) => {
        if(e.target.id === "input-left") {
            leftThumbRef.current.classList.add("hover");
        } else {
            rightThumbRef.current.classList.add("hover");
        };
    };

    const removeHoverClass = (e) => {
        if(e.target.id === "input-left") {
            leftThumbRef.current.classList.remove("hover");
        } else {
            rightThumbRef.current.classList.remove("hover");
        };
    };

    // add and remove active class to create active animation
    const addActiveClass = (e) => {
        if(e.target.id === "input-left") {
            leftThumbRef.current.classList.add("active");
        } else {
            rightThumbRef.current.classList.add("active");
        };
    };

    const removeActiveClass = (e) => {
        if(e.target.id === "input-left") {
            leftThumbRef.current.classList.remove("active");
        } else {
            rightThumbRef.current.classList.remove("active");
        };
    };

    // handle onchange callback
    const handleOnChangeCallback = (leftInputRef, rightInputRef) => {
        return onChangeCallback(leftInputRef, rightInputRef, leftValue, rightValue);
    };

    // modify unit
    const modifyUnit = (unit) => {
        if(unit !== "m2") return unit;

        return (
            <span>m<sup>2</sup></span>
        );
    };

    useEffect(()=> {
        handleOnChangeCallback(leftInputRef, rightInputRef)
    }, [leftValue, rightValue]);

    return (
        <div className="range">
            <div className="row">
                <div className="col-12">
                    <label htmlFor="range-price" className="form-label d-flex flex-row"><p className=" me-1">{firstLetterToUppercase(label)} từ </p><p className="fw-semibold me-1">{numberConvention ? numberConventionUtil(leftValue) : timeConvention ? timeConventionUtil(leftValue) : splitNumber(leftValue)} {modifyUnit(unit)}</p><p className=" me-1"> đến </p><p className="fw-semibold me-1">{numberConvention ? numberConventionUtil(rightValue) : timeConvention ? timeConventionUtil(rightValue) : splitNumber(rightValue)} {modifyUnit(unit)}</p></label>
                </div>
                <div className="col-12">
                    <div className="middle">
                        <input type="range" name={name} ref={leftInputRef} id="input-left" className="custom-input" disabled={true} min={min} max={max} step={step} defaultValue={leftDefaultValue} onMouseEnter={addHoverClass} onMouseLeave={removeHoverClass} onMouseDown={addActiveClass} onMouseUp={removeActiveClass} onChange={changeLeftValue}/>
                        <input type="range" name={name} ref={rightInputRef} id="input-right" className="custom-input" min={min} max={max} step={step} defaultValue={rightDefaultValue} onMouseEnter={addHoverClass} onMouseLeave={removeHoverClass} onMouseDown={addActiveClass} onMouseUp={removeActiveClass} onChange={changeRightValue} />
                        <div className="slider">
                            <div className="track"></div>
                            <div className="range" style={{left: `${valueToPercent(leftValue)}%`, right: `${100 - valueToPercent(rightValue)}%`}}></div>
                            <div className="left" ref={leftThumbRef} style={{left: `${valueToPercent(leftValue)}%`}}></div>
                            <div className="thumb right" ref={rightThumbRef} style={{right: `${100 - valueToPercent(rightValue)}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Range;