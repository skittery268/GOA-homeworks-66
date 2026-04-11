import { Link } from "react-router";
import { useGroups } from "../hooks/useGroups";

const Groups = () => {
    const { groups, joinGroup } = useGroups();

    return (
        <div>
            {
                groups.map((g, index) => {
                    return (
                        <div key={index}>
                            <h1>{g.title}</h1>
                            <Link to={`/group/${g._id}`} onClick={() => joinGroup(g._id)}>Join Group</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Groups;