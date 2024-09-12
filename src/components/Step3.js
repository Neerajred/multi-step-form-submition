import React from 'react';

const Step3 = ({ prevStep, handleSubmit, formData }) => {
    return (
        <div className='flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-md' style={{width:"50%"}}>
            <h3 className="text-xl mb-4">Step 3: Confirm Your Information</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="col-span-1 text-right">
                    <p><strong>Name:</strong></p>
                </div>
                <div className="col-span-1">
                    <p>{formData.name}</p>
                </div>

                <div className="col-span-1 text-right">
                    <p><strong>Email:</strong></p>
                </div>
                <div className="col-span-1">
                    <p>{formData.email}</p>
                </div>

                <div className="col-span-1 text-right">
                    <p><strong>Phone:</strong></p>
                </div>
                <div className="col-span-1">
                    <p>{formData.phone}</p>
                </div>

                <div className="col-span-1 text-right">
                    <p><strong>Address Line 1:</strong></p>
                </div>
                <div className="col-span-1">
                    <p>{formData.addressLine1}</p>
                </div>

                <div className="col-span-1 text-right">
                    <p><strong>City:</strong></p>
                </div>
                <div className="col-span-1">
                    <p>{formData.city}</p>
                </div>

                <div className="col-span-1 text-right">
                    <p><strong>State:</strong></p>
                </div>
                <div className="col-span-1">
                    <p>{formData.state}</p>
                </div>

                <div className="col-span-1 text-right">
                    <p><strong>Zip:</strong></p>
                </div>
                <div className="col-span-1">
                    <p>{formData.zip}</p>
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <button className="bg-gray-500 text-white p-2 w-24 rounded-full mr-2" onClick={prevStep}>Back</button>
                <button className="bg-blue-500 text-white p-2 w-24 rounded-full" onClick={handleSubmit}>Submit</button>
            </div>
        </div>

    );
};

export default Step3;
