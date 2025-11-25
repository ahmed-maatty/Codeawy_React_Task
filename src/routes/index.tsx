import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router";
import Home from "../views/Home";
import Dashboard from "../views/dashboard";
import RootLayout from "../views/Layout";
import DashboardLayout from "../views/dashboard/DashboardLayout";
import Category from "../views/dashboard/Category";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="category" element={<Category />} />
      </Route>
    </>
  )
);

export default router;
