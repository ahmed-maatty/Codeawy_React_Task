import { useState } from "react";
import editIcon from "../../assets/pencil.png";
import deleteIcon from "../../assets/delete.png";
import GenCategory from "../GenCategory";

function Category() {
  const [genCategory, setGenCategory] = useState(false);
  if (!genCategory) {
    return (
      <section className="dashboard_Content">
        <div className="category">
          <div className="page_title">
            <h1>Manage Categories</h1>
            <p>View , Add , Edit or delete product category</p>
          </div>
          <div className="cards">
            <button onClick={() => setGenCategory(true)}>
              add new category
            </button>
          </div>
        </div>
        <div className="table dash_Tables category_table">
          <div className="tabel_head">
            <div className="col_product_name">category name</div>
            <div className="col_product_price">total price</div>
            <div className="col_product_action">action</div>
          </div>
          <div className="table_body">
            <div className="row">
              <div className="cell_product_name">laptop pro</div>
              <div className="cell_product_price">$1299.00</div>
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
      </section>
    );
  } else {
    return <GenCategory setGenCategory={setGenCategory} />;
  }
}

export default Category;
