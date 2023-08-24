import React from "react"

const List = (props) => {
  const deleteHandler = (event) => {
    props.deleteHandler(event.target.id)
  }
  return (
    <div>
      <h1 className="font-bold">Products</h1>
      <ul className="">
        {props.products.map((item) => {
          return (
            <li
              id={item.id}
              className="font-semibold bg-black p-1 rounded-md text-white"
            >
              {item.name}-{item.price}
              <button
                className="ml-2 p-1 rounded-md bg-slate-600 text-white"
                onClick={deleteHandler}
                id={item.id}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List
