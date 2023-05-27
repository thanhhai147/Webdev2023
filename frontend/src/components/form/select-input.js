import React from "react";
import { firstLetterToUppercase } from "../../utils/string.utils.js";

const Select = ({size = "", label, name, options, regionOptions = false, defaultValue = null, optionsLoad = false, optionsMakeup = true, disabled = !optionsLoad, feedback = null, onChangeCallback, required = false}) => {
    
    const optionRender = optionsLoad ? options.map(({code, codename, name}) => {
        let optionLabel = optionsMakeup ? firstLetterToUppercase(regionOptions ? (name === 'north' ? 'Miền Bắc' : name === 'central' ? 'Miền Trung' : 'Miền Nam') : name) : (regionOptions ? (name === 'north' ? 'Miền Bắc' : name === 'central' ? 'Miền Trung' : 'Miền Nam') : name);
        return (
            <option key={`${code}-${codename}-${name}`} value={`${code}-${codename}-${name}`}>{optionLabel}</option>
        );
    }) : null;
    
    return (
        <>
            <select className={`form-select ${size ? "form-select-" + size : "" } is-${feedback && feedback.status}`} name={name} aria-label={`${name}-select`} defaultValue={defaultValue} disabled={disabled} onChange={onChangeCallback} required={required}>
                <option value="label">{firstLetterToUppercase(label)}</option>
                {optionRender}
            </select>
            {feedback && <div className={`${feedback.status}-feedback`}>{firstLetterToUppercase(feedback.message)}</div>}
        </>
    );
};

export default Select;