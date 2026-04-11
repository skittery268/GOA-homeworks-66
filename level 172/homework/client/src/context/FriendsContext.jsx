import { toast } from "react-toastify";
import { socket } from "../config/socket";

import { createContext, useState, useEffect } from "react";

export const FriendsContext = createContext();

const API_URL = 'http://localhost:3000/api'

export const FriendsProvider = ({ children }) => {
    const [friendRequests, setFriendRequests] = useState([]);
    const [friendShips, setFriendShips] = useState([]);

    useEffect(() => {
        const handleNewFriendRequest = (friendRequest) => {
            toast.info("You have a new friend request!");
            setFriendRequests((prev) => [...prev, friendRequest]);
        }

        const handleCancelFriendRequest = (friendRequestId) => {
            toast.info("A friend request has been canceled!");
            setFriendRequests((prev) => prev.filter((req) => req._id !== friendRequestId));
        }

        const handleRejectFriendRequest = (friendRequestId) => {
            toast.info("A friend request has been rejected!");
            setFriendRequests((prev) => prev.filter((req) => req._id !== friendRequestId));
        }

        const handleAcceptFriendRequest = ({ friendship, friendRequestId }) => {
            toast.info("A friend request has been accepted!");
            setFriendShips((prev) => [...prev, friendship]);
            setFriendRequests((prev) => prev.filter((req) => req._id !== friendRequestId));
        }

        const handleRemoveFriend = (friendShipId) => {
            toast.info("A friend has been removed!");
            setFriendShips((prev) => prev.filter((friendShip) => friendShip._id !== friendShipId));
        }

        socket.on("newFriendRequest", handleNewFriendRequest);
        socket.on("friendRequestCanceled", handleCancelFriendRequest);
        socket.on("friendRequestRejected", handleRejectFriendRequest);
        socket.on("friendRequestAccepted", handleAcceptFriendRequest);
        socket.on("friendshipRemoved", handleRemoveFriend);

        return () => {
            socket.off("newFriendRequest", handleNewFriendRequest);
            socket.off("friendRequestCanceled", handleCancelFriendRequest);
            socket.off("friendRequestRejected", handleRejectFriendRequest);
            socket.off("friendRequestAccepted", handleAcceptFriendRequest);
            socket.off("friendshipRemoved", handleRemoveFriend);
        }
    }, []);

    useEffect(() => {
        const getFriendRequests = async () => {
            try {
                const res = await fetch(`${API_URL}/friend-requests`, {
                    method: 'GET',
                    credentials: 'include',
                });

                const data = await res.json();

                if (!res.ok) {
                    toast.error(data.message);
                    return;
                }

                setFriendRequests(data.data.friendRequests);
            } catch (err) {
                toast.error(err.message);
            }
        }

        const getFriendShips = async () => {
            try {
                const res = await fetch(`${API_URL}/friendships`, {
                    method: 'GET',
                    credentials: 'include',
                });

                const data = await res.json();

                if (!res.ok) {
                    toast.error(data.message);
                    return;
                }

                setFriendShips(data.data.friendships);
            } catch (err) {
                toast.error(err.message);
            }
        }

        getFriendShips();
        getFriendRequests();
    }, []);

    const sendFriendRequest = async (receiverId) => {
        try {
            const res = await fetch(`${API_URL}/friend-requests/send/${receiverId}`, {
                method: 'POST',
                credentials: 'include',
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            setFriendRequests((prev) => [...prev, data.data.friendRequest]);
        } catch (err) {
            toast.error(err.message);
        }
    }

    const cancelFriendRequest = async (reqId) => {
        try {
            const res = await fetch(`${API_URL}/friend-requests/cancel/${reqId}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            setFriendRequests((prev) => prev.filter((req) => req._id !== reqId));
        } catch (err) {
            toast.error(err.message);
        }
    }

    const rejectFriendRequest = async (reqId) => {
        try {
            const res = await fetch(`${API_URL}/friend-requests/reject/${reqId}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            setFriendRequests((prev) => prev.filter((req) => req._id !== reqId));
        } catch (err) {
            toast.error(err.message);
        }
    }

    const acceptFriendRequest = async (reqId) => {
        try {
            const res = await fetch(`${API_URL}/friend-requests/accept/${reqId}`, {
                method: 'POST',
                credentials: 'include',
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            setFriendShips((prev) => [...prev, data.data.friendship]);
            setFriendRequests((prev) => prev.filter((req) => req._id !== reqId));
        } catch (err) {
            toast.error(err.message);
        }
    }

    const removeFriend = async (friendShipId) => {
        try {
            const res = await fetch(`${API_URL}/friendships/${friendShipId}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            setFriendShips((prev) => prev.filter((friendShip) => friendShip._id !== friendShipId));
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <FriendsContext.Provider value={{ friendRequests, friendShips, sendFriendRequest, cancelFriendRequest, rejectFriendRequest, acceptFriendRequest, removeFriend }}>
            {children}
        </FriendsContext.Provider>
    )
};