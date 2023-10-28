import React from "react";
import { Outlet } from "react-router-dom";

export default function RenderPage() {
  return (
    <div className="h-[calc(100vh_-_78px)] overflow-y-scroll">
      <Outlet />
    </div>
  );
}
