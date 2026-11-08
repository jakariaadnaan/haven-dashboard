import React from "react";

export default function DeviceCard({ openPreview }) {
  return (
    <div className="mb-[12px] flex flex-wrap items-center justify-between gap-[10px] rounded-[10px] border border-[#1f2937] bg-[#0f172a] p-[16px]">
      <div>
        <h4 className="text-base">SYMPHONY Z25</h4>
        <p className="mt-[4px] text-xs text-[#94a3b8]">Android • Last seen: Just now • Status: Online</p>
      </div>
      <button onClick={openPreview} className="rounded-lg bg-[#0ea5e9] px-[16px] py-[9px] font-bold text-[#04121c]">
        Preview details
      </button>
    </div>
  );
}