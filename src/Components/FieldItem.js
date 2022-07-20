import React from 'react'

const FieldItem = ({name,label}) => {
    return (
        <div className="form-field">
        <label htmlFor={name} id={name}  >{label}</label>
        <input type="text" id={name}  />
    </div>
    )
}

export default FieldItem
