import React from "react";
import { routes } from "../routes/config";

export default function Topbar() {
  const breakcrum = routes.find((route) => route.path == location.pathname);

  return (
    <div className="bg-white py-4">
      <div className="flex items-center justify-between border-b">
        <div className="text-lg">{breakcrum?.name}</div>
        <div>
          <img src="/svgs/notification.icon.svg" alt="Notification Bell Icon" />
        </div>
      </div>
    </div>
  );
}
