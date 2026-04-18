const WelcomeCard = ({ user }) => {
    return (
        <div className="glass-card p-8 mb-8">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral to-gold flex items-center justify-center shrink-0">
                    <span className="text-white text-xl font-bold">
                        {user.fullname?.charAt(0).toUpperCase()}
                    </span>
                </div>
                <div>
                    <h2 className="text-2xl font-display font-bold text-ink">
                        Welcome back, {user.fullname}
                    </h2>
                    <p className="text-ink/50 text-sm mt-0.5">
                        Here's what's happening in your network
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeCard;
