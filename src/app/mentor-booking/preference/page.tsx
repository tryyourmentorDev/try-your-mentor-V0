"use client";
import React from "react";
import { useRouter } from "next/navigation";

import MentorCard from "@/components/cards/MentorCard";
import SubmitButton from "@/components/buttons/SubmitButton";
import CancelButton from "@/components/buttons/CancelButton";

const PaymentPage: React.FC = () => {
  const router = useRouter();

  const onClickSubmitButton = () => {
    console.log("clicked submit button");
    router.push("/mentor-booking/payment");
  };

  const onClickCancelButton = () => {
    console.log("clicked cancel button");
    router.push("/mentor-booking/schedule");
  }

  return (
    <>
      <div className="flex mb-4 p-4 rounded-2xl shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4">Preference Page</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6"></div>
        {/* Add your payment form or other content here */}
      </div>

      <div className="flex mb-4 w-full justify-end gap-4">
        <CancelButton
          onClick={() => onClickCancelButton()}
          text="Cancel"
          fullWidth={false}
        />
        <SubmitButton
          onClick={() => onClickSubmitButton()}
          text="Next"
          fullWidth={false}
        />
      </div>
    </>
  );
};

export default PaymentPage;
