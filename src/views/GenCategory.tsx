import React from "react";

type genCategoryProps = {
  setGenCategory: React.Dispatch<React.SetStateAction<boolean>>;
};

function GenCategory({ setGenCategory }: genCategoryProps) {
  return (
    <div className="Gen_Product">
      <div className="Gen_Layout">
        <div className="page_title">
          <h2>Create New Category</h2>
          <p>add new category to organize your product</p>
        </div>
        <div className="inputs">
          <div className="input_container">
            <label htmlFor="">Category Name</label>
            <input type="text" placeholder="e.g Electornics" required />
          </div>

          <div className="input_container">
            <label htmlFor="">Description (optional)</label>
            <textarea
              name=""
              id=""
              placeholder="Descripe The Category"
            ></textarea>
          </div>
        </div>
        <div className="gen_btns">
          <button className="cancel_btn" onClick={() => setGenCategory(false)}>
            cancel
          </button>
          <button className="ok_btn">save product</button>
        </div>
      </div>
    </div>
  );
}

export default GenCategory;
