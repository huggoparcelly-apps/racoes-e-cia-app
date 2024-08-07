import React from "react";

type labelProps = {
  label: string;
};

export default function Badge({ label }: labelProps) {
  return (
    <div className="w-24 md:w-56">
      <span
        className="inline-flex items-center justify-center 
        flex-grow rounded-full bg-yellow-900 px-3 py-2 text-xs font-medium 
      text-slate-200 ring-1 ring-inset ring-yellow-600/20 w-24 md:w-56"
      >
        {label}
      </span>
    </div>
  );
}
