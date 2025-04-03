import React from 'react';

import MentorCard from '@/components/cards/MentorCard';

const MentorsPage: React.FC = () => {
  return (
    // <div className="flex my-2 p-4 rounded-2xl shadow-md w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center w-full">
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
    </div>

    // </div>
  );
};

export default MentorsPage;