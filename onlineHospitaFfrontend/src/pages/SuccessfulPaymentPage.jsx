import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-green-600">Payment Successful</h1>
        <p className="mt-4 text-gray-700">Thank you for your payment. Your transaction has been completed successfully.</p>
        <div className="mt-6">
          <p className="text-gray-600"><strong>Transaction ID:</strong> 123456789</p>
          <p className="text-gray-600"><strong>Amount:</strong> $100.00</p>
        </div>
        <button
          onClick={handleBackToDashboard}
          className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
