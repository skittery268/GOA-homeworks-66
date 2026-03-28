import { useState } from "react";
import { socket } from "./config/socket";
import { useEffect } from "react";

const App = () => {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setMessage(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		socket.emit("message", message);
		setMessage("");
	}

	useEffect(() => {
		socket.on("message", (msg) => {
			setMessages((prev) => [ ...prev, msg ]);
		})

		return () => {
			socket.disconnect();
		}
	}, [])

	useEffect(() => {
		const getMessages = async () => {
			try {
				const res = await fetch("http://localhost:3000/messages");

				const data = await res.json();

				if (!res.ok) {
					throw new Error("Error");
				}

				setMessages(data);
			} catch (err) {
				console.log(err);
			}
		}

		getMessages();
	}, [])
	
	return (
		<main>
			<form onSubmit={handleSubmit}>
				<input type="text" name="message" onChange={handleChange} placeholder="Enter message" />
				<br />
				<button type="submit">Send</button>
			</form>

			<div>
				{
					messages.map((msg, index) => <p key={index}>{msg.content}</p>)
				}
			</div>
		</main>
	)
}

export default App;