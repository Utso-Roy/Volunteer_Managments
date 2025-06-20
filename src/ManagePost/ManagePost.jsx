import React from "react";
import {
  FaRegCalendarCheck,
  FaMapMarkerAlt,
  FaTrash,
  FaEdit,
  FaUserShield,
} from "react-icons/fa";

const ManagePost = () => {
  // Dummy data
  const myPosts = [
    {
      _id: "1",
      title: "Tree Plantation Drive",
      location: "Dhaka",
      deadline: "2025-06-30",
    },
    {
      _id: "2",
      title: "Blood Donation Camp",
      location: "Chittagong",
      deadline: "2025-07-05",
    },
  ];

  const myRequests = [
    {
      _id: "r1",
      title: "Flood Relief Mission",
      organizer: "Relief Bangladesh",
      location: "Sylhet",
      deadline: "2025-07-10",
      status: "Requested",
    },
    {
      _id: "r2",
      title: "Beach Cleanup Drive",
      organizer: "Green Earth",
      location: "Cox's Bazar",
      deadline: "2025-07-15",
      status: "Approved",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-[#0267af] mb-12">
        Manage My Posts
      </h1>

      {/* Section 1: My Volunteer Need Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-[#014f86] border-l-4 border-[#0267af] pl-3">
          📌 My Volunteer Need Posts
        </h2>

        {myPosts.length === 0 ? (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-5 rounded">
            আপনি এখনও কোন পোস্ট যোগ করেননি। "Add Volunteer Need Post" থেকে শুরু করুন।
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow-md">
              <thead>
                <tr className="bg-[#0267af] text-white text-left">
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Deadline</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myPosts.map((post) => (
                  <tr
                    key={post._id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4 font-medium">{post.title}</td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#014f86]" />
                      {post.location}
                    </td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <FaRegCalendarCheck className="text-[#014f86]" />
                      {new Date(post.deadline).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-center space-x-2">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm flex items-center gap-1">
                        <FaEdit /> Update
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm flex items-center gap-1">
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Section 2: My Volunteer Request Posts */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-[#014f86] border-l-4 border-[#0267af] pl-3">
          🙋‍♂️ My Volunteer Request Posts
        </h2>

        {myRequests.length === 0 ? (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-5 rounded">
            আপনি এখনো কোনো ভলান্টিয়ার রিকুয়েস্ট করেননি।
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myRequests.map((req) => (
              <div
                key={req._id}
                className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-[#0267af]">
                  {req.title}
                </h3>
                <p className="text-gray-700">
                  <FaUserShield className="inline mr-2 text-[#014f86]" />
                  <strong>Organizer:</strong> {req.organizer}
                </p>
                <p className="text-gray-700">
                  <FaMapMarkerAlt className="inline mr-2 text-[#014f86]" />
                  <strong>Location:</strong> {req.location}
                </p>
                <p className="text-gray-700">
                  <FaRegCalendarCheck className="inline mr-2 text-[#014f86]" />
                  <strong>Deadline:</strong>{" "}
                  {new Date(req.deadline).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <strong>Status:</strong> {req.status}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ManagePost;
