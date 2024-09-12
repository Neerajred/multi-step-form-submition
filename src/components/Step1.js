import React, { useState } from 'react';

const Step1 = ({ nextStep, handleChange, formData }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Valid email is required';
    if (!formData.phone) validationErrors.phone = 'Phone number is required';
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-md" style={{width:"50%"}}>
    <h3 className="text-xl mb-6">Step 1: Personal Information</h3>
    
    <div className="mb-4 flex items-center gap-4 w-full">
      <label className="w-24 text-right">Name:</label>
      <div className="w-full">
        <input
          type="text"
          value={formData.name}
          onChange={handleChange('name')}
          className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
      </div>
    </div>
  
    <div className="mb-4 flex items-center gap-4 w-full">
      <label className="w-24 text-right">Email:</label>
      <div className="w-full">
        <input
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
      </div>
    </div>
  
    <div className="mb-4 flex items-center gap-4 w-full">
      <label className="w-24 text-right">Phone:</label>
      <div className="w-full">
        <input
          type="text"
          value={formData.phone}
          onChange={handleChange('phone')}
          className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.phone && <p className="text-red-500 mt-1">{errors.phone}</p>}
      </div>
    </div>
  
    <button className="bg-blue-500 text-white p-2 w-24 rounded-full mt-4" onClick={handleNext}>
      Next
    </button>
  </div>
  
  );
};

export default Step1;
