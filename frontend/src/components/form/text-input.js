import React from "react";
import NumberFormat from "react-number-format";
import { firstLetterToUppercase } from "../../utils/string.utils.js"

const TextInput = ({size = "", floating = false, label, name, placeholder = label, type, onChangeCallback, required = false, feedback, ref, format }) => {
    
    const preventWheelEvent = (e) => {
        e.target.blur();
    };

    return (
        <div className="text-input">
            {
                floating ? 
                    <>
                        {
                            format ?
                                <div className="form-floating">
                                    <NumberFormat 
                                        ref={ref} 
                                        inputMode="numeric" 
                                        thousandSeparator={format.thousandSeparator} 
                                        thousandsGroupStyle="thousand"
                                        decimalSeparator={format.decimalSeparator}  
                                        suffix={format.suffix}
                                        prefix={format.prefix}
                                        allowNegative={false}
                                        allowLeadingZeros={false}
                                        displayType="input"
                                        className={`form-control is-${feedback && feedback.status}`} 
                                        name={name} 
                                        id={name} 
                                        placeholder={placeholder} 
                                        onValueChange={onChangeCallback} 
                                        onWheelCapture={preventWheelEvent} 
                                        required={required} 
                                    />
                                    <label htmlFor={name}>{firstLetterToUppercase(label)}</label>
                                </div>
                            :
                                <div className="form-floating">
                                    <input 
                                        ref={ref} 
                                        type={type}
                                        min={0}
                                        className={`form-control is-${feedback && feedback.status}`} 
                                        name={name} 
                                        id={name} 
                                        placeholder={placeholder} 
                                        onChange={onChangeCallback} 
                                        onWheelCapture={preventWheelEvent} 
                                        required={required} />
                                    <label htmlFor={name}>{firstLetterToUppercase(label)}</label>
                                </div>
                        } 
                        {feedback && <div className={`${feedback.status}-feedback`}>{firstLetterToUppercase(feedback.message)}</div>}
                    </>
                :
                    <>
                        { 
                            format ? 
                                <NumberFormat 
                                    id={name} 
                                    name={name} 
                                    ref={ref} 
                                    inputMode="numeric" 
                                    thousandSeparator={format.thousandSeperator} 
                                    thousandsGroupStyle="thousand"
                                    decimalSeparator={format.decimalSeparator}  
                                    suffix={format.suffix}
                                    prefix={format.prefix}
                                    allowNegative={false}
                                    allowLeadingZeros={false}
                                    displayType="input"
                                    className={`form-control ${size ? "form-control-" + size : ""} is-${feedback && feedback.status}`} 
                                    placeholder={firstLetterToUppercase(label)} 
                                    required={required} aria-label="default input example" 
                                    onValueChange={onChangeCallback} 
                                    onWheelCapture={preventWheelEvent}
                                />
                            :
                                <input 
                                    id={name} 
                                    name={name} 
                                    ref={ref} 
                                    min={0} 
                                    className={`form-control ${size ? "form-control-" + size : ""} is-${feedback && feedback.status}`} 
                                    type={type} 
                                    placeholder={firstLetterToUppercase(label)} 
                                    required={required} 
                                    aria-label="default input example" 
                                    onChange={onChangeCallback} 
                                    onWheelCapture={preventWheelEvent} 
                                />
                        }
                        {feedback && <div className={`${feedback.status}-feedback`}>{firstLetterToUppercase(feedback.message)}</div>}
                    </>
            }
        </div>
    );
};

export default TextInput;