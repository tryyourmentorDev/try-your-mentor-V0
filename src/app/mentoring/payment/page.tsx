import React from 'react';

import MentorCard from '@/components/cards/MentorCard';

const PaymentPage: React.FC = () => {
  return (
    <div className="flex my-2 p-4 rounded-2xl shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4">Payment Page</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6"></div>
      {/* Add your payment form or other content here */}
    </div>
  );
};

export default PaymentPage;