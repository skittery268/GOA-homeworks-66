const ProfileSidebar = ({ user }) => {
    return (
        <div className="glass-card p-6 h-fit">
            <h3 className="text-lg font-semibold text-ink mb-4">Your Profile</h3>
            <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-ink/5">
                    <span className="text-sm text-ink/50">Name</span>
                    <span className="text-sm font-medium text-ink">{user.fullname}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-ink/5">
                    <span className="text-sm text-ink/50">Email</span>
                    <span className="text-sm font-medium text-ink">{user.email}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-ink/50">Posts</span>
                    <span className="text-sm font-medium text-ink">0</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;
