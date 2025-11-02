const Form = ({ handleChange, inputs, handleSubmit }) => {
    return (
        <form>
            <input type="text" onChange={handleChange} name="userName" value={inputs.userName} />
            <input type="text" onChange={handleChange} name="description" value={inputs.description} />
            <input type="number" onChange={handleChange} name="price" value={inputs.price} />
            <input type="number" onChange={handleChange} name="quantity" value={inputs.quantity} />
            <button type="button" onClick={handleSubmit}>Add Product</button>
        </form>
    )
}

export default Form;

