import { useAuth } from "../hooks/useAuth";
import { useFriends } from "../hooks/useFriends";

const Friends = () => {
    const { friendShips, removeFriend } = useFriends();
    const { user } = useAuth();
    
    return (
        <>
            <h1 className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-4 text-2xl sm:text-3xl font-display font-bold text-ink tracking-tight">Your friends</h1>
            
            {
                friendShips.length > 0 ? (
                    friendShips.map(friendShip => {
                        const friend = friendShip.user1._id === user._id ? friendShip.user2 : friendShip.user1;

                        return (
                            <div key={friend._id} className="max-w-5xl mx-auto px-4 sm:px-6 mb-4">
                                <div className="glass-card p-5 flex justify-between">
                                    <div>
                                        <h2 className="text-lg font-semibold text-ink">{friend.fullname}</h2>
                                        <p className="text-sm text-ink/60 mt-1">{friend.email}</p>
                                    </div>
                                    <button onClick={() => removeFriend(friendShip._id)} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-400 transition duration-300">Remove friend</button>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <h1 className="max-w-5xl mx-auto px-4 sm:px-6 glass-card p-10 text-center text-2xl font-display font-bold text-ink tracking-tight">
                        No friends yet!
                    </h1>
                )
            }
        </>
    )
}

export default Friends;