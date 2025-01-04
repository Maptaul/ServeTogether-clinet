import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTable, FaThList } from "react-icons/fa";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

const AllVolunteerNeeds = () => {
  const [volunteerNeeds, setVolunteerNeeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [isTableLayout, setIsTableLayout] = useState(false); // Layout toggle
  const navigate = useNavigate();

  useEffect(() => {
    fetchVolunteerNeeds();
  }, []);

  const fetchVolunteerNeeds = async (query = "") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://serve-together-server.vercel.app/searchVolunteerNeeds?query=${query}`
      );
      setVolunteerNeeds(response.data);
    } catch (error) {
      console.error("Error fetching volunteer needs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchVolunteerNeeds(searchQuery);
  };

  const handleViewDetails = (id) => {
    navigate(`/volunteerneed/${id}`);
  };

  const toggleLayout = () => {
    setIsTableLayout(!isTableLayout);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        All Volunteer Needs
      </h1>
      <div className="flex justify-between items-center mb-6">
        <form onSubmit={handleSearch} className="flex items-center gap-2 w-2/3">
          <input
            type="text"
            placeholder="Search by title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <button
          className="btn btn-outline btn-secondary flex items-center gap-2"
          onClick={toggleLayout}
        >
          {isTableLayout ? (
            <>
              <FaThList /> Show Cards
            </>
          ) : (
            <>
              <FaTable /> Show Table
            </>
          )}
        </button>
      </div>
      {loading ? (
        <div className="flex flex-col items-center">
          <ReactLoading type="spin" color="#3498db" height={50} width={50} />
          <p className="mt-4 text-gray-600">Loading volunteer needs...</p>
        </div>
      ) : isTableLayout ? (
        // Table Layout
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Location</th>
                <th className="border border-gray-300 px-4 py-2">Deadline</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {volunteerNeeds.map((need) => (
                <tr key={need._id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {need.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {need.category}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {need.location}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(need.deadline).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleViewDetails(need._id)}
                      className="btn btn-sm btn-primary"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Card Layout
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteerNeeds.map((need) => (
            <div
              key={need._id}
              className="card bg-base-200 shadow-md rounded-md overflow-hidden"
            >
              <img
                src={need.thumbnail}
                alt={need.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{need.title}</h3>
                <p className="text-sm text-gray-600">
                  Location: {need.location}
                </p>
                <p className="text-sm text-gray-600">
                  Category: <span className="font-medium">{need.category}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Deadline:{" "}
                  <span className="font-medium">
                    {new Date(need.deadline).toLocaleDateString()}
                  </span>
                </p>
                <button
                  onClick={() => handleViewDetails(need._id)}
                  className="btn btn-sm btn-primary mt-4"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVolunteerNeeds;
