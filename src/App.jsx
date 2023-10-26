import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import RenderPage from "./pages/RenderPage";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <div
      className="grid grid-rows-1"
      style={{ gridTemplateColumns: "88px 1fr" }}
    >
      <Sidebar />
      <div
        className="grid grid-cols-1"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        <Topbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RenderPage />}>
              <Route path="" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
