import editIcon from "../assets/pencil.png";
import deleteIcon from "../assets/delete.png";

function Home() {
  return (
    <div className='container'>
      <section className='home'>
        <div className='page_title'>
          <h3>Products</h3>
          <button>+ create product</button>
        </div>
        <div className="search_category">
          <input type="text" placeholder='Search Products...' />
          <select name="" id="">
            <option value="">Category</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="table">
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
                <button><img src={deleteIcon} alt="delete" /></button>
                <button><img src={editIcon} alt="edit" /></button>
              </div>
            </div>
          </div>
        </div>
        <div><button className='loadMore'> Load More</button></div>
      </section>
    </div>
  )
}

export default Home