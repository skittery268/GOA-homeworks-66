import useCounter from "./hooks/useCounter"
import useCheckbox from "./hooks/useCheckbox"

import useToggleText from "./hooks/useToggleText"

const App = () => {
  const [count, increaseCount, decreseCount, reset] = useCounter();
  const [checkboxValue, handleChange] = useCheckbox();
  const [toggleText, toggleTextFunc] = useToggleText();

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>+1</button>
      <button onClick={decreseCount}>-1</button>
      <button onClick={reset}>reset</button>

      {
        checkboxValue ?
        <p>The checkbox is checked</p>
        :
        <p>The checkbox is unchecked</p>
      }

      <button onClick={handleChange}>Change checkbox value</button>

      {
        toggleText ?
        <p>The message is displayed on the screen</p>
        :
        <p>The message is hidden</p>
      }

      <button onClick={toggleTextFunc}>Change toggle text value</button>
    </>
  )
}

export default App
