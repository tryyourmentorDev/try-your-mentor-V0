'use client'
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import  Stepper from "../../components/progress/stepper";
import StateProvider from "../StoreProvider";

interface DashboardLayoutProps {
  children: ReactNode;
}

const steps = [
  { path: "/mentor-booking/register", label: "Personal Details" },
  { path: "/mentor-booking/mentors", label: "Select Mentor" },
  { path: "/mentor-booking/schedule", label: "Schedule" },
  { path: "/mentor-booking/preference", label: "Preferance" },
  { path: "/mentor-booking/payment", label: "Payment & Confirm" }
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {

  const currentPath = usePathname();
  console.log("pathname", currentPath);
  return (
    <div className="max-w-7xl mx-auto">
      <StateProvider>
      <Stepper currentStep={currentPath} steps={steps}/>
      {children}
      </StateProvider>
    </div>
  );
}
