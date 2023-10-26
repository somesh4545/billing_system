import React from "react";
import { routes } from "../routes/config";

export default function Topbar() {
  const breakcrum = routes.find((route) => route.path == location.pathname);

  return (
    <div className="bg-white pt-2">
      <div className="flex items-center justify-between border-b px-4 pb-1">
        <div className="text-lg">{breakcrum?.name}</div>
        <div className="flex gap-4">
          <img src="/svgs/notification.icon.svg" alt="Notification Bell Icon" />
          <div className="w-8 h-8 rouned bg-[#dddddd] rounded "></div>
        </div>
      </div>
      <div className="py-2 px-4 flex gap-2"> 
        <img src="/svgs/home.icon.svg" alt="Home Icon" />

        <div className="text-xs flex gap-2">
          <span className="text-[10px]">/</span>
          <span>{breakcrum?.name}</span>
        </div>
      </div>
    </div>
  );
}
