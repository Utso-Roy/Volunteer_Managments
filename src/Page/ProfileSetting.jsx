import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FiMail, FiUser } from 'react-icons/fi';

const ProfileSetting = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || {};

  return (
    <div className="min-h-screen  bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-5">
          <img
            src={photoURL || 'https://i.pravatar.cc/150?img=3'}
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 dark:border-blue-400"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {displayName || 'No Name Provided'}
        </h2>

        {/* Email */}
        <p className="text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2 mb-4">
          <FiMail size={20} /> {email || 'No Email Available'}
        </p>

     

        <button
          className="mt-4 w-full btn btn-outline text-[#0267af] hover:bg-[#0267af] hover:text-white "
          onClick={() => alert('Edit Profile feature coming soon!')}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileSetting;
