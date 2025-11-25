import { Outlet } from "react-router";
import Aside from "../../components/Aside";

function DashboardLayout() {
  return (
    <div className="dashboard_layout_structure">
      <Aside />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
