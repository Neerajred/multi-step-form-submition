import React, { useState } from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
        let validationErrors = {};
        if (!formData.addressLine1) validationErrors.addressLine1 = 'Address Line 1 is required';
        if (!formData.city) validationErrors.city = 'City is required';
        if (!formData.state) validationErrors.state = 'State is required';
        if (!formData.zip) validationErrors.zip = 'Zip Code is required';
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            nextStep();
        }
    };

    return (
        <div className='flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-md' style={{width:"50%"}}>
            <h3 className="text-xl mb-4">Step 2: Address Information</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="col-span-1">
                    <label className="block text-right mr-2">Address Line 1:</label>
                </div>
                <div className="col-span-1">
                    <input
                        type="text"
                        value={formData.addressLine1}
                        onChange={handleChange('addressLine1')}
                        className={`w-full p-2 border ${errors.addressLine1 && 'border-red-500'} rounded`}
                    />
                    {errors.addressLine1 && <p className="text-red-500">{errors.addressLine1}</p>}
                </div>

                <div className="col-span-1">
                    <label className="block text-right mr-2">City:</label>
                </div>
                <div className="col-span-1">
                    <input
                        type="text"
                        value={formData.city}
                        onChange={handleChange('city')}
                        className={`w-full p-2 border ${errors.city && 'border-red-500'} rounded`}
                    />
                    {errors.city && <p className="text-red-500">{errors.city}</p>}
                </div>

                <div className="col-span-1">
                    <label className="block text-right mr-2">State:</label>
                </div>
                <div className="col-span-1">
                    <input
                        type="text"
                        value={formData.state}
                        onChange={handleChange('state')}
                        className={`w-full p-2 border ${errors.state && 'border-red-500'} rounded`}
                    />
                    {errors.state && <p className="text-red-500">{errors.state}</p>}
                </div>

                <div className="col-span-1">
                    <label className="block text-right mr-2">Zip Code:</label>
                </div>
                <div className="col-span-1">
                    <input
                        type="text"
                        value={formData.zip}
                        onChange={handleChange('zip')}
                        className={`w-full p-2 border ${errors.zip && 'border-red-500'} rounded`}
                    />
                    {errors.zip && <p className="text-red-500">{errors.zip}</p>}
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <button className="bg-gray-500 text-white p-2 w-24 rounded-full mr-2" onClick={prevStep}>Back</button>
                <button className="bg-blue-500 text-white p-2 w-24 rounded-full" onClick={handleNext}>Next</button>
            </div>
        </div>

    );
};

export default Step2;
