import { createRoutesFromElements, createBrowserRouter , Route} from "react-router";
import Home from "../views/Home";
import Dashboard from "../views/dashboard";
import GenCategory from "../views/GenCategory";
import GenProduct from "../views/GenProduct";
import RootLayout from "../views/Layout";
import DashboardLayout from "../views/dashboard/DashboardLayout";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route 
      path="/"
      element={<RootLayout />}
    >
      <Route index element={<Home />} />
      <Route path="create-product" element={<GenProduct />} />
    </Route>

    <Route path="/dashboard"
      element = {<DashboardLayout />}
    >
      <Route index element={<Dashboard />}/>
      <Route path="category" element={<GenCategory />} />
    </Route>
  </>
));

export default router;
