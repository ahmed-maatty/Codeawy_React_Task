import React, { useState } from "react";
import { useAppDispatch } from "../app/store";
import { CreateCategory } from "../app/appSlice";

type genCategoryProps = {
  setGenCategory: React.Dispatch<React.SetStateAction<boolean>>;
};

function GenCategory({ setGenCategory }: genCategoryProps) {
  const [category, setCategory] = useState({});
  const dispatch = useAppDispatch();
  const new_category = (key: string, value: string) => {
    setCategory((prev) => ({ ...prev, [`${key}`]: value }));
  };
  const submit_category = () => {
    dispatch(CreateCategory(category));
  };
  
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
            <input
              type="text"
              name="cate_name"
              placeholder="e.g Electornics"
              required
              onChange={(e) => new_category(e.target.name, e.target.value)}
            />
          </div>
          <div className="input_container">
            <label htmlFor="">Description (optional)</label>
            <textarea
              name="cate_desc"
              id=""
              placeholder="Descripe The Category"
              onChange={(e) => new_category(e.target.name, e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="gen_btns">
          <button className="cancel_btn" onClick={() => setGenCategory(false)}>
            cancel
          </button>
          <button className="ok_btn" onClick={submit_category}>
            save product
          </button>
        </div>
      </div>
    </div>
  );
}

export default GenCategory;
