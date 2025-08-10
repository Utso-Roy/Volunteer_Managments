import React, { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router";
import Loading from "../Loading/Loading";
import { BiCategory } from "react-icons/bi";
import { motion } from "framer-motion";

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const VolunteerNeed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [volunteers, setVolunteers] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const url = query
      ? `http://localhost:3000/volunteerPostData?title=${encodeURIComponent(
          query
        )}&page=${page}&limit=12`
      : `http://localhost:3000/volunteerPostData?page=${page}&limit=6`;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVolunteers(data.data || []);
        setTotalPages(data.totalPages || 1);
      })
      .catch((err) => console.error("Error fetching volunteers:", err))
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleSearch = () => {
    setPage(1); 
    setQuery(searchTerm);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#0267af] mb-6 text-center">
        All Volunteer Need Posts
      </h1>

      {/* Search bar */}
      <div className="flex justify-center items-center gap-2 my-5">
        <input
          type="text"
          placeholder="Search by title..."
          className="input input-neutral border-[#0267af] dark:border-[#0267af] w-full max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="btn bg-[#014f86] text-white hover:bg-[#0267af] transition duration-200"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <Loading />
      ) : volunteers.length === 0 ? (
        <p className="text-gray-500 text-center">No volunteer posts found.</p>
      ) : (
        <>
          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {volunteers.map((v) => (
              <motion.div
                key={v._id}
                className="bg-white dark:bg-[#1d232a] rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden dark:border-[#0267af] border border-gray-100"
                variants={cardVariants}
                initial="rest"
                animate="rest"
                whileHover="hover"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={v?.thumbnail}
                  alt={v?.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 space-y-3">
                  <h2 className="text-xl font-semibold text-[#0267af]">
                    {v.title}
                  </h2>

                  <p className="text-gray-600 flex gap-1 items-center dark:text-white text-sm">
                    <span className="font-semibold items-center flex gap-1">
                      <BiCategory size={16} /> Category :
                    </span>{" "}
                    {v?.category}
                  </p>
                  <p className="text-gray-600 dark:text-white flex gap-1 items-center text-sm">
                    <CiCalendarDate size={18} />
                    <span className="font-semibold "> Deadline:</span>{" "}
                    {new Date(v.deadline).toLocaleDateString()}
                  </p>
                  <div className="pt-4">
                    <Link to={`/all_Volunteer_details/${v._id}`}>
                      <button className="w-full btn btn-outline text-[#0267af] hover:bg-[#0267af] hover:text-white">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination with DaisyUI */}
          <div className="flex justify-center mt-8">
            <div className="join">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`join-item btn ${
                    page === i + 1 ? "btn-active" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VolunteerNeed;
