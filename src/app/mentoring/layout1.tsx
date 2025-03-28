import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

type Step = {
    id: string;
    label: string;
    completed: boolean;
  };
  
  const steps: Step[] = [
    { id: "01", label: "Job details", completed: true },
    { id: "02", label: "Application form", completed: false },
    { id: "03", label: "Preview", completed: false },
  ];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex items-center w-full border border-gray-300 rounded-lg overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center flex-1 p-4 ${
                index !== steps.length - 1 ? "border-r border-gray-300" : ""
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 font-semibold text-sm mr-2 ${
                  step.completed
                    ? "bg-purple-600 text-white border-purple-600"
                    : "text-purple-600 border-purple-600 bg-white"
                }`}
              >
                {step.completed ? "✓" : step.id}
              </div>
              <span
                className={
                  step.completed
                    ? "text-black font-semibold"
                    : "text-gray-500"
                }
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      );
}
