import { NavLink } from "react-router";

function Aside() {
  return (
    <aside>
      <div className="aside_auth">
        <div className="circle_photo"></div>
        <div>
          <h4>React Practice</h4>
          <p>student dashboard</p>
        </div>
      </div>
      <div className="aside_links">
        <NavLink to={"/dashboard"} end>
          Dashboard
        </NavLink>
        <NavLink to={"/dashboard/products"}>Products</NavLink>
        <NavLink to={"/dashboard/category"}>Category</NavLink>
        <NavLink to={" "}>Setting</NavLink>
      </div>
    </aside>
  );
}

export default Aside;
