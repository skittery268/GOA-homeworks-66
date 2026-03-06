import { Link } from "react-router";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to={"/addpost"}>Add Post</Link></li>
                <li><Link to={"/posts"}>Posts</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;