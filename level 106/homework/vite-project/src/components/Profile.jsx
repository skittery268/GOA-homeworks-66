import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
    const thisUser = JSON.parse(localStorage.getItem("thisUser"));

    const { logout } = useContext(AuthContext);

    const maskedPassword = thisUser?.password ? "•".repeat(thisUser.password.length) : "";

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-sm bg-white shadow-md rounded-xl overflow-hidden">
          <div className="flex items-center gap-4 p-6">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-600 text-white rounded-full text-2xl font-semibold">
              {thisUser?.userName ? thisUser.userName.charAt(0).toUpperCase() : "?"}
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 text-lg font-medium">{thisUser?.userName || "Unknown User"}</h3>
              <p className="text-sm text-gray-500 truncate">{thisUser?.email || "No email"}</p>
            </div>
          </div>

          <div className="px-6 pb-6">
            <div className="mt-2">
              <label className="block text-xs font-medium text-gray-500">Password</label>
              <div className="mt-1 text-sm text-gray-700">{maskedPassword || "—"}</div>
            </div>

            <button
              onClick={logout}
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
}

export default Profile;

