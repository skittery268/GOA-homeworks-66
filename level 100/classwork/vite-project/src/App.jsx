import { useState } from "react";
import Form from "./components/Form";
import Products from "./components/Products";

const App = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    description: "",
    price: "",
    quantity: ""
  })

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    setProducts(prev => [ ...prev, inputs ])
    setInputs({
      userName: "",
      description: "",
      price: "",
      quantity: ""
    })
  }

  const deleteProduct = (product) => {
    const newProducts = products.filter(obj => obj !== product);
    setProducts(newProducts)
  }

  return (
    <main>
      <section>
        <Form handleChange={handleChange} inputs={inputs} handleSubmit={handleSubmit} />
      </section>
      
      <section>
        <Products products={products} deleteProduct={deleteProduct} />
      </section>
    </main>
  )
}

export default App;