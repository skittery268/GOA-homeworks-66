import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const ProfileSidebar = ({ user }) => {
    const [isEdit, setIsEdit] = useState(false);
    const { changeUserData } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('fullname', e.target.fullname.value);
        formData.append('email', e.target.email.value);
        if (e.target.profileImage.files[0]) {
            formData.append('profileImage', e.target.profileImage.files[0]);
        }

        const isSuccess = await changeUserData(formData);
        if (isSuccess) {
            setIsEdit(false);
        }
    }

    return (
        <div className="glass-card p-6 h-fit">
            <h3 className="text-lg font-semibold text-ink mb-4">Your Profile</h3>
            <div className="space-y-3">
                {
                    isEdit ? (
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="flex flex-col">
                                <label className="text-sm text-ink/50 mb-1">Name</label>
                                <input type="text" name="fullname" className="input-field" defaultValue={user.fullname} />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm text-ink/50 mb-1">Email</label>
                                <input type="email" name="email" className="input-field" defaultValue={user.email} />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm text-ink/50 mb-1">Change profile image</label>
                                <input type="file" name="profileImage" className="input-field" accept="image/*" />
                            </div>
                            <button type="submit" className="btn-primary w-full">Save Changes</button>
                            <button type="button" className="btn-secondary w-full" onClick={() => setIsEdit(false)}>Cancel</button>
                        </form>
                    ) : (
                        <>
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
                            <button className="btn btn-primary w-full" onClick={() => setIsEdit(true)}>Edit</button>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default ProfileSidebar;
