// import React, { useContext } from "react";
// import AuthContext from "../../authContext/AuthContext";

// export default function Admin_profile() {
//   const { user, loading } = useContext(AuthContext);
//   if (loading) return <p>Loading profile...</p>;
//   return (
//     <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
//       <img
//         src={user?.photoURL || "https://via.placeholder.com/150"}
//         alt="User Avatar"
//         className="w-24 h-24 mx-auto rounded-full"
//       />
//       <h2 className="text-xl font-semibold">
//         {user?.displayName || "No Name Provided"}
//       </h2>
//       <p className="text-gray-500">{user?.email}</p>
//     </div>
//   );
// }
import React from 'react'

export default function Admin_profile() {
  return (
    <div>Admin_profile</div>
  )
}

