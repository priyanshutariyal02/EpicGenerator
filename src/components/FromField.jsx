import React from 'react'
import { preview } from '../assets';

const FromField = ({ LableName, type, name, placeholder, value, handleChange, isSupriseMe, handleSupriseMe }) => {
    return (
        <div>
            <div className="flex  items-center  gap-2 mb-2">
                <label htmlFor={name}
                    className="block text-2xl font-extrabold text-gray-900">
                    {LableName}
                </label>


            </div>
            <div className="w-full flex gap-5">

                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff]  focus:border-[#4649ff] outline-none block w-full p-3"
                />
                {isSupriseMe && (
                    <button type="button" onClick={handleSupriseMe} className="font-semibold text-s bg-[#ff2b60] py-1 px-4 rounded-[5px] text-white">
                        Random
                    </button>
                )}
            </div>

        </div>
    )
}

export default FromField;
