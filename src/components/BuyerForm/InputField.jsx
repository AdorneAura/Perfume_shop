import React from 'react'

const InputField = ({ name, type, placeholder, onChange, required = true }) => (
  <input
    className='w-full border p-2'
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    required={required}
  />
)

export default InputField