import React, { useEffect, useState } from 'react';

const VolunteerNeed = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const url = query
      ? `http://localhost:3000/volunteerAddPosts?title=${encodeURIComponent(query)}`
      : 'http://localhost:3000/volunteerAddPosts';

    fetch(url)
      .then(res => res.json())
      .then(data => setVolunteers(data.data || []))
      .catch(err => console.error('Error fetching volunteers:', err));
  }, [query]);

  const handleSearch = () => {
    setQuery(searchTerm);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#0267af] mb-6 text-center">
        All Volunteer Need Posts
      </h1>

      {/* 🔍 Search Input */}
      <div className="flex justify-center items-center gap-2 my-5">
        <input
          type="text"
          placeholder="Search by title..."
          className="input input-neutral w-full max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="btn bg-[#014f86] text-white hover:bg-[#0267af] transition duration-200"
        >
          Search
        </button>
      </div>

      {volunteers.length === 0 ? (
        <p className="text-gray-500 text-center">No volunteer posts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((v, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
            >
              <img
                src={
                  v.thumbnail ||
                  'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                }
                alt={v.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6 space-y-3">
                <h2 className="text-xl font-bold text-[#0267af]">{v.title}</h2>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">📍 Location:</span> {v.location}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">🗂️ Category:</span> {v.category}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">📅 Deadline:</span>{" "}
                  {new Date(v.deadline).toLocaleDateString()}
                </p>
                <div className="pt-4">
                  <button className="w-full btn btn-outline btn-primary hover:bg-[#0267af] hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VolunteerNeed;
