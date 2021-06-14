import React from "react"

export const InputGroup = (props) => {
  const { handleChange, label, type, required, isValid, minLength, maxLength } = props
  
  return (
    <div>
      <label>{label}</label>
      <input
        onChange={(e) => handleChange(e.target.value)}
        style={!isValid ? { borderColor: "red" } : {}}
        type={type}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  )
}
