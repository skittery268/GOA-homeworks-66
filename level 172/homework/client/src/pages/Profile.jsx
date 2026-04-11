import { useEffect } from "react";
import { useParams } from "react-router";
import { useUser } from "../hooks/useUser";
import { useFriends } from "../hooks/useFriends";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
    const { userId } = useParams();
    const { selectedUser, getUser } = useUser();
    const { user } = useAuth();
    const { sendFriendRequest, friendRequests, friendShips, cancelFriendRequest, rejectFriendRequest, acceptFriendRequest } = useFriends();

    useEffect(() => {
        getUser(userId);
    }, [userId]);

    const existingRequest = friendRequests.find((req) => req.to === userId || req.from === userId);
    const isFriend = friendShips.find((friendship) => friendship.user1._id === userId || friendship.user2._id === userId);

    return (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <div className="glass-card p-6 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-ink tracking-tight">{selectedUser?.fullname}</h1>
                <h1 className="text-sm sm:text-base text-ink/60 mt-1">{selectedUser?.email}</h1>

                <div className="mt-6 flex flex-wrap gap-3">
                    {
                        existingRequest && existingRequest.to === user._id ? (
                            <>
                                <button className="btn-primary !w-auto" onClick={() => acceptFriendRequest(existingRequest._id)}>Accept Friend Request</button>
                                <button className="px-5 py-3 rounded-xl font-semibold text-red-600 bg-red-50 border border-red-200 hover:bg-red-100 transition-colors" onClick={() => rejectFriendRequest(existingRequest._id)}>Reject Friend Request</button>
                            </>
                        ) : (
                            <>
                                {
                                    existingRequest && existingRequest.to !== user._id ? (
                                        <>
                                            { !isFriend && <button className="btn-secondary" onClick={() => cancelFriendRequest(existingRequest._id)}>Cancel Friend Request</button> }
                                        </>
                                    ) : (
                                        <>
                                            { !isFriend && <button className="btn-primary !w-auto" onClick={() => sendFriendRequest(userId)}>Send Friend Request</button> }
                                        </>
                                    )
                                }
                            </>
                        )
                    }
                </div>

                { isFriend && <span className="inline-flex mt-5 px-3 py-1 text-xs font-semibold rounded-full bg-teal/10 text-teal border border-teal/20">You are friends</span> }
            </div>
        </section>
    )
}

export default Profile;