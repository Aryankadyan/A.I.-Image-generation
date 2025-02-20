import React from 'react'

const Form = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) =>{

  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {isSurpriseMe && (
          <button 
          type='button'
          onClick={handleSurpriseMe}
          className='font-semibold text-xs bg-[#ECECF1] py-2 px-4 rounded-[6px] text-black'>
            Surprise Me
          </button>
        )}
      </div>
      <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className='bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-[#4649ff] focus-border-[#4649ff] oultine-none block w-full p-3'
      />
    </div>
  )
}

export default Form
