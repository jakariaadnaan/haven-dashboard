import React from "react";

export default function PreviewPanel({ open, onClose }) {
  const rows = [
    ["Device","SYMPHONY Z25"],
    ["Status","Online"],
    ["Model","Symphony Z25"],
    ["Storage","24.7 GB / 64 GB"],
    ["Battery","76%"],
    ["Android","Android 13"],
  ];

  return (
    <aside className={`fixed top-0 z-50 h-screen w-[380px] max-w-full overflow-y-auto border-l border-[#1f2937] bg-[#111820] p-[24px] transition-all duration-300 ${open ? "right-0" : "-right-[420px]"}`}>
      <div className="mb-[18px] flex items-center justify-between gap-[10px]">
        <h2 className="text-lg">Device Manager Preview</h2>
        <button onClick={onClose} className="rounded-lg border border-[#1f2937] bg-[#1e293b] px-[12px] py-[8px] text-xs text-[#e2e8f0]">Close preview</button>
      </div>
      <div className="mb-[20px] rounded-lg border border-[#1e4976] bg-[#132a3a] p-[12px] text-[13px] text-[#7dd3fc]">Preview only — no device action performed</div>
      <div className="rounded-[10px] border border-[#1f2937] bg-[#0f172a] py-[6px]">
        {rows.map(([l,v]) => (
          <div key={l} className="flex items-center justify-between gap-[10px] border-b border-[#1f2937] px-[16px] py-[14px] text-sm last:border-b-0">
            <span className="text-[#94a3b8]">{l}</span><strong>{v}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}