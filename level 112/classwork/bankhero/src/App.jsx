import { Route, Routes } from "react-router"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Nav from "./components/UI/Nav"
import Profile from "./pages/Profile"
import Protect from "./components/Protect"

import React, { useMemo, useState } from "react";

function PrimeCalculator() {
  const [number, setNumber] = useState(10000); // Input for prime calculation
  const [counter, setCounter] = useState(0);   // Unrelated state

  // Expensive function: calculates all primes up to n
  const calculatePrimes = (n) => {
    console.log("Calculating primes...");
    const primes = [];
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }
    return primes;
  };

  const primes = useMemo(() => calculatePrimes(number), [number]) 

  return (
    <div>
      <h1>Prime Number Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>
      <p>Counter: {counter}</p>
      <p>Number of primes: {primes.length}</p>
    </div>
  );
}

function App() {
	return (
		<>
			{/* <Nav />

			<Routes>
				<Route path="/" element={<p>Home</p>} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Protect><Profile /></Protect>} />
			</Routes> */}

			<PrimeCalculator />
		</>
	)
}

export default App
