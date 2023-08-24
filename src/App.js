import Input from "./components/Input"
import List from "./components/List"
import React, { useState, useEffect } from "react"
const App = () => {
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([])
  const onDeleteHandler = (id) => {
    const itemToDelete = products.find((item) => item.id === id)

    if (itemToDelete) {
      const deletedItemPrice = parseInt(itemToDelete.price)

      setTotal((preTotal) => preTotal - deletedItemPrice)

      const newArray = products.filter((item) => item.id !== id)
      localStorage.removeItem(id)
      setProducts(newArray)
    }
  }

  const addProductHandler = (newItem) => {
    localStorage.setItem(newItem.id, JSON.stringify(newItem))
    setTotal((preTotal) => preTotal + parseInt(newItem.price))
    setProducts([...products, newItem])
  }
  useEffect(() => {
    let a = []
    let currentTotal = 0
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i)
      let item = JSON.parse(localStorage.getItem(key))

      currentTotal += parseInt(item.price)
      console.log(currentTotal)
      a.push(item)
    }
    setProducts(a)
    setTotal(currentTotal)
  }, [])

  return (
    <div className="App flex h-screen bg-green-700  justify-center pt-7 ">
      <div className="bg-white p-8 rounded-md h-fit">
        <Input addProduct={addProductHandler}></Input>
        <List products={products} deleteHandler={onDeleteHandler}></List>
        <h1 className=" font-bold">Total value worth of Products: Rs{total}</h1>
      </div>
    </div>
  )
}

export default App
