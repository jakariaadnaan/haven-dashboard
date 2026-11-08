import React from "react";

const monitoringItems = ["GPS Location","Microphone","Call Logs","SMS Messages","Contacts","Notifications","Keylogger"];
const dataItems = ["Installed Apps","Websites","File Explorer","Downloads","Clipboard"];

export default function Sidebar({ activePage, setActivePage }) {
  const Item = ({ label }) => (
    <button
      onClick={() => setActivePage(label)}
      className={`block w-full px-[20px] py-[11px] text-left text-sm ${
        activePage === label
          ? "border-l-[3px] border-[#38bdf8] bg-[#16202b] text-[#38bdf8]"
          : "text-[#cbd5e1]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <aside className="fixed left-0 top-0 h-full w-[250px] overflow-y-auto border-r border-[#1f2937] bg-[#111820] py-[20px]">
      <div className="px-[20px] pb-[20px] text-xl font-bold tracking-wider text-[#38bdf8]">HAVEN</div>
      <div className="px-[20px] py-[10px] text-[11px] uppercase text-[#64748b]">Overview</div>
      <Item label="Dashboard" />
      <div className="px-[20px] py-[10px] text-[11px] uppercase text-[#64748b]">Monitoring</div>
      {monitoringItems.map((i) => <Item key={i} label={i} />)}
      <div className="px-[20px] py-[10px] text-[11px] uppercase text-[#64748b]">Data Files</div>
      {dataItems.map((i) => <Item key={i} label={i} />)}
      <div className="px-[20px] py-[10px] text-[11px] uppercase text-[#64748b]">Device</div>
      <Item label="Devices" />
    </aside>
  );
}