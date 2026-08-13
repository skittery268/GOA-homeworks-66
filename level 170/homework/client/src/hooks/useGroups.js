import { useContext } from "react";
import { GroupsContext } from "../context/GroupsContext";

export const useGroups = () => useContext(GroupsContext);