import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import { useGroups } from "../hooks/useGroups";

const Profile = () => {
    const { user, updateProfile, changePassword, submitting, logout } = useAuth();
    const { myGroups } = useGroups();

    // This page only renders behind ProtectedRoute, so the user is already loaded.
    const [profile, setProfile] = useState({ name: user?.name || "", email: user?.email || "" });
    const [passwords, handlePasswordChange, handlePasswordSubmit, resetPasswords] = useForm({
        currentPassword: "",
        newPassword: ""
    });

    const adminOf = myGroups.filter((group) => (group.admin?._id || group.admin) === user?._id).length;
    const unchanged = profile.name === user?.name && profile.email === user?.email;

    const onProfileSubmit = async (e) => {
        e.preventDefault();

        await updateProfile({ name: profile.name.trim(), email: profile.email.trim() });
    }

    const onPasswordSubmit = (e) => {
        handlePasswordSubmit(e, async (data) => {
            const done = await changePassword(data);

            if (done) resetPasswords();
        });
    }

    return (
        <div className="page">
            <div className="page-head">
                <div>
                    <h1>Profile</h1>
                    <p className="muted">Manage your account.</p>
                </div>
            </div>

            <div className="profile-layout">
                <section className="card profile-summary">
                    <span className="avatar large">{user?.name?.[0]?.toUpperCase()}</span>
                    <h2>{user?.name}</h2>
                    <p className="muted">{user?.email}</p>

                    <div className="stats">
                        <div>
                            <strong>{myGroups.length}</strong>
                            <span className="muted small">groups</span>
                        </div>
                        <div>
                            <strong>{adminOf}</strong>
                            <span className="muted small">as admin</span>
                        </div>
                    </div>

                    <Link className="btn btn-primary" to="/groups">Go to groups</Link>
                    <button type="button" className="btn btn-ghost" onClick={logout}>Log out</button>
                </section>

                <div className="profile-forms">
                    <form className="card" onSubmit={onProfileSubmit}>
                        <h2>Account details</h2>

                        <label htmlFor="profile-name">Name</label>
                        <input
                            id="profile-name"
                            type="text"
                            value={profile.name}
                            minLength={2}
                            maxLength={30}
                            required
                            onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))}
                        />

                        <label htmlFor="profile-email">Email</label>
                        <input
                            id="profile-email"
                            type="email"
                            value={profile.email}
                            required
                            onChange={(e) => setProfile((prev) => ({ ...prev, email: e.target.value }))}
                        />

                        <button type="submit" className="btn btn-primary" disabled={submitting || unchanged}>
                            Save changes
                        </button>
                    </form>

                    <form className="card" onSubmit={onPasswordSubmit}>
                        <h2>Change password</h2>

                        <label htmlFor="current-password">Current password</label>
                        <input
                            id="current-password"
                            type="password"
                            name="currentPassword"
                            autoComplete="current-password"
                            required
                            value={passwords.currentPassword}
                            onChange={handlePasswordChange}
                        />

                        <label htmlFor="new-password">New password</label>
                        <input
                            id="new-password"
                            type="password"
                            name="newPassword"
                            autoComplete="new-password"
                            minLength={6}
                            required
                            value={passwords.newPassword}
                            onChange={handlePasswordChange}
                        />

                        <button type="submit" className="btn btn-primary" disabled={submitting}>
                            Update password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;
