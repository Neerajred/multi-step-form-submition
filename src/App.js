import React, { useState, useEffect } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
   // here we can do api actions if want
    setTimeout(() => alert('Form Submitted Successfully!'), 1000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
      case 3:
        return <Step3 prevStep={prevStep} handleSubmit={handleSubmit} formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-gray-200 h-screen w-screen">
      <h2 className="text-center text-2xl font-bold mb-4 mt-4">Multi-Step Form</h2>
      <div className='flex items-center justify-center' style={{height:"80vh"}}>
      {renderStep()}
      </div>
    </div>
  );
};

export default App;
