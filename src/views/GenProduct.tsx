import React from "react";

type GenProductProps = {
  SetGenProduct: React.Dispatch<React.SetStateAction<boolean>>;
};

function GenProduct({ SetGenProduct }: GenProductProps) {
  return (
    <div className="Gen_Product">
      <div className="Gen_Layout">
        <div className="page_title">
          <h2>Create New Product</h2>
          <p>fill in the details below to add a new product to the catalog</p>
        </div>
        <div className="inputs">
          <div className="input_container">
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              placeholder="e.g wireless Noise Canceling"
              required
            />
          </div>
          <div className="input_container two_inputs">
            <div>
              <label htmlFor="">Price</label>
              <input type="text" placeholder="$ 99.99" />
            </div>
            <div>
              <label htmlFor="">Category</label>
              <select name="" id="">
                <option value="">electronics</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="input_container">
            <label htmlFor="">Image Url</label>
            <input type="text" placeholder="e.g wireless Noise Canceling" />
          </div>
          <div className="input_container">
            <label htmlFor="">Description (optional)</label>
            <textarea
              name=""
              id=""
              placeholder="Descripe The Product"
            ></textarea>
          </div>
        </div>
        <div className="gen_btns">
          <button className="cancel_btn" onClick={() => SetGenProduct(false)}>
            cancel
          </button>
          <button className="ok_btn">save product</button>
        </div>
      </div>
    </div>
  );
}

export default GenProduct;
