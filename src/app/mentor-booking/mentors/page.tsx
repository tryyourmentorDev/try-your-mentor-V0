"use client"
import React, { useState, useEffect, use  } from 'react';
import { useRouter } from "next/navigation";

import MentorCard from '@/components/cards/MentorCard';
import { fetchMentors } from '@/lib/features/mentor-booking/mentors';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

import SubmitButton from '@/components/buttons/SubmitButton';
import CancelButton from '@/components/buttons/CancelButton';

const MentorsPage: React.FC = () => {

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchMentors());
  }, [dispatch]);

  const mentorDetails = useAppSelector((state) => state.mentorBookingMentors);
  console.log("mentors", mentorDetails);

  const onClickSubmitButton = (d:string) => {
    console.log("clicked submit button", d);
    console.log("clicked submit button");
    router.push("/mentor-booking/schedule");
  }

  return (
    // <div className="flex my-2 p-4 rounded-2xl shadow-md w-full">
    <div>
      {mentorDetails.loading ? (
        <div className="flex items-center justify-center min-h-3/4 w-full">
          Loading Mentors
        </div>
      ) : (
        <>
          {mentorDetails.mentors.length == 0 && mentorDetails.isFetched ? (
            <div className="flex items-center justify-center min-h-3/4 w-full">
              No Mentors to Show
            </div>
          ) : (
            <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center w-full">
              {mentorDetails.mentors.map((mentor) => (
                <MentorCard key={mentor.id} name={mentor.mentor} designation={mentor.designation} rating={mentor.rating} isFree={mentor.isFree}
                discount={mentor.discount} onSelect={(e) =>onClickSubmitButton(e)}/>
              ))}

            </div>
            <div className="flex mb-4 w-full justify-end gap-4">
            {/* <CancelButton onClick={()=>console.log("clicked calcel")} text="Cancel" fullWidth={false}/> */}
            {/* <SubmitButton onClick={()=>onClickSubmitButton()} text="Next" fullWidth={false} /> */}
        </div>
        </>
          )}
        </>
      )}
    </div>

    // </div>
  );
};

export default MentorsPage;