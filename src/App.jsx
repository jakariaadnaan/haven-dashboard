import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import PreviewPanel from "./components/PreviewPanel.jsx";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0b0f14] text-[#e6edf3]">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="ml-[250px] w-[calc(100%-250px)] p-[30px]">
        <div className="mb-[25px] flex items-center justify-between">
          <h1 className="text-2xl font-bold">{activePage}</h1>
          <span className="rounded-full border border-[#1e4976] bg-[#132a3a] px-[14px] py-[7px] text-xs text-[#38bdf8]">
            Device Manager
          </span>
        </div>
        <Dashboard openPreview={() => setPreviewOpen(true)} />
      </main>
      <PreviewPanel open={previewOpen} onClose={() => setPreviewOpen(false)} />
    </div>
  );
}