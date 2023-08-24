import React, { useRef } from "react"

const Input = (props) => {
  const p_id = useRef()
  const p_name = useRef()
  const p_price = useRef()
  const addNewItem = () => {
    const newItem = {
      id: p_id.current.value,
      name: p_name.current.value,
      price: p_price.current.value,
    }
    props.addProduct(newItem)
  }
  return (
    <div className=" ">
      <div>
        <label htmlFor="p_id " className="font-bold">
          Product ID:
        </label>
        <input
          ref={p_id}
          id="p_id"
          className=" rounded-md p-1 bg-green-300 ml-[45px]"
        ></input>
      </div>
      <div className=" mt-3">
        <label className="font-bold" htmlFor="p_name">
          Product Name:
        </label>
        <input
          ref={p_name}
          id="p_name"
          className=" bg-green-300 ml-[18px] p-1 rounded-md"
          type="text"
        ></input>
      </div>
      <div className=" mt-3">
        <label className="font-bold" htmlFor="p_price">
          Selling Price:
        </label>
        <input
          id="p_price"
          ref={p_price}
          className=" bg-green-300 ml-[34px] rounded-md p-1"
          type="number"
        ></input>
      </div>
      <button
        className=" bg-emerald-700 hover:bg-emerald-900 text-white mt-3 ml-[110px] p-2 font-semibold rounded-md"
        onClick={addNewItem}
      >
        Add Product
      </button>
    </div>
  )
}

export default Input
