'use client'
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import  Stepper from "../../components/progress/stepper";
interface DashboardLayoutProps {
  children: ReactNode;
}

const steps = [
  { path: "/mentoring/register", label: "Personal Details" },
  { path: "/mentoring/mentors", label: "Select Mentor" },
  { path: "/mentoring/preference", label: "Preferance" },
  { path: "/mentoring/payment", label: "Payment & Confirm" }
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {

  const currentPath = usePathname();
  console.log("pathname", currentPath);
  return (
    <div>
      <Stepper currentStep={currentPath} steps={steps}/>
      {children}
    </div>
  );
}
