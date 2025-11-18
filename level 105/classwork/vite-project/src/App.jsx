import useForm from "./hooks/useForm";
import useToggle from "./hooks/useToggle";

const App = () => {
  const [data, handleChange] = useForm();
  const [toggle, swich] = useToggle();

  console.log(data)

  return (
    <>
      <input onChange={handleChange} type="text" name="name" />
      <input onChange={handleChange} type="text" name="age" />
      <input onChange={handleChange} type="text" name="data" />
      
      {
        toggle ?
        <button onClick={swich} className="bg-black">Click here to change background color</button>
        :
        <button onClick={swich} className="bg-red-500">Click here to change background color</button>
      }
    </>
  )
}

export default App
