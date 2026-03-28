import { useEffect } from "react";
import { useState } from "react";
import { socket } from "./config/socket";

const App = () => {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setMessage(e.target.value);
	}

	useEffect(() => {
		socket.on("message", (msg) => {
			setMessages((prev) => [...prev, msg]);
		})

		return () => {
			socket.disconnect();
		}
	}, [])

	const hanldeSubmit = () => {
		socket.emit("message", message);
	}

    return (
        <>
			<input type="text" name="message" onChange={handleChange} placeholder="Enter message" />
			<button onClick={hanldeSubmit}>Send</button>

			{
				messages.map((msg, index) => {
					return (
						<>
							<p key={index}>{msg}</p>
						</>
					)
				})
			}
        </>
    )
}

export default App;