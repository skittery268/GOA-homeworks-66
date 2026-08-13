import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const features = [
    { icon: "🔍", title: "Search by name", text: "Find any chat by typing its name, no group ids to copy around." },
    { icon: "⚡", title: "Realtime", text: "Messages, edits and deletions arrive instantly over websockets." },
    { icon: "✍️", title: "Typing indicator", text: "See who is writing a message before it even lands." },
    { icon: "🟢", title: "Presence", text: "The member list shows who is in the room with you right now." }
];

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="page home">
            <section className="hero">
                <h1>Chat with your groups, in real time.</h1>
                <p className="muted">
                    A small group chat built with React, Express, MongoDB and Socket.IO.
                </p>

                <div className="hero-actions">
                    {
                        user
                            ? <Link className="btn btn-primary" to="/groups">Open my groups</Link>
                            : (
                                <>
                                    <Link className="btn btn-primary" to="/register">Create an account</Link>
                                    <Link className="btn btn-ghost" to="/login">I already have one</Link>
                                </>
                            )
                    }
                </div>
            </section>

            <section className="feature-grid">
                {
                    features.map((feature) => (
                        <article key={feature.title} className="card feature">
                            <span className="feature-icon">{feature.icon}</span>
                            <h3>{feature.title}</h3>
                            <p className="muted small">{feature.text}</p>
                        </article>
                    ))
                }
            </section>
        </div>
    )
}

export default Home;
