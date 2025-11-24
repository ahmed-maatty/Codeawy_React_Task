import editIcon from "../../assets/pencil.png";
import deleteIcon from "../../assets/delete.png";
import { useState } from "react";
import GenCategory from "../GenCategory";
import GenProduct from "../GenProduct";

function Dashboard() {
  const [genProduct, setGenProduct] = useState(false);
  const [genCategory, setGenCategory] = useState(false);

  if (!genCategory && !genProduct) {
    return (
      <section className="dashboard_Content">
        <div className="page_title">
          <h1>Dashboard</h1>
          <p>create and manage your products and categories</p>
        </div>

        <div className="gen_cate_prod">
          <div className="cards">
            <h2>Products</h2>
            <p>add , view and manage all your product entries</p>
            <button onClick={() => setGenProduct(true)}>add new product</button>
          </div>
          <div className="cards">
            <h2>categories</h2>
            <p>organize products by creating and managing categories</p>
            <button onClick={() => setGenCategory(true)}>add new category</button>
          </div>
        </div>

        <div className="table dash_Tables">
          <h2>Existing Products</h2>
          <div className="tabel_head">
            <div className="col_product_name">product name</div>
            <div className="col_product_price">price</div>
            <div className="col_product_category">category</div>
            <div className="col_product_action">action</div>
          </div>
          <div className="table_body">
            <div className="row">
              <div className="cell_product_name">laptop pro</div>
              <div className="cell_product_price">$1299.00</div>
              <div className="cell_product_category">electronics</div>
              <div className="cell_product_action">
                <button>
                  <img src={deleteIcon} alt="delete" />
                </button>
                <button>
                  <img src={editIcon} alt="edit" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="table dash_Tables Category_Table">
          <h2>Existing Categories</h2>
          <div className="tabel_head">
            <div className="col_product_name">Category name</div>
            <div className="col_product_action">action</div>
          </div>
          <div className="table_body">
            <div className="row">
              <div className="cell_product_name">laptop pro</div>
              <div className="cell_product_action">
                <button>
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (genCategory) {
    return <GenCategory setGenCategory={setGenCategory} />;
  }
  if (genProduct) {
    return <GenProduct SetGenProduct={setGenProduct} />;
  }
}

export default Dashboard;
