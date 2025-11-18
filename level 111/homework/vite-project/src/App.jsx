import { ErrorBoundary } from "react-error-boundary";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={<p>Error Detected</p>}>
        <Login />
      </ErrorBoundary>
    </>
  )
}

export default App
