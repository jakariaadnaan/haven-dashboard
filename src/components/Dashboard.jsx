import React from "react";
import DeviceCard from "./DeviceCard.jsx";

export default function Dashboard({ openPreview }) {
  const cards = [
    ["Connected Devices","1","Symphony Z25"],
    ["Security Status","Protected","No critical alerts"],
    ["Storage Used","38%","24.7 GB of 64 GB"],
    ["Battery","76%","Charging not connected"],
  ];

  return (
    <div>
      <div className="mb-[25px] grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(([t,v,s]) => (
          <div key={t} className="rounded-xl border border-[#1f2937] bg-[#111820] p-[18px]">
            <h3 className="mb-[8px] text-[13px] text-[#94a3b8]">{t}</h3>
            <div className="text-[26px] font-bold">{v}</div>
            <small className="text-[#64748b]">{s}</small>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-[#1f2937] bg-[#111820] p-[20px]">
        <h3 className="mb-[15px]">Devices</h3>
        <DeviceCard openPreview={openPreview} />
      </div>
    </div>
  );
}