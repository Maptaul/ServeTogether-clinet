import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

const VolunteerNeedsNow = () => {
  const [volunteerNeeds, setVolunteerNeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://serve-together-server.vercel.app/volunteerneed")
      .then((response) => {
        setVolunteerNeeds(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching volunteer needs:", error);
        setIsLoading(false);
      });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/volunteerneed/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Fade direction="down" triggerOnce>
        <h2 className="text-4xl font-bold text-center mb-10">
          Volunteer Needs Now
        </h2>
      </Fade>
      {isLoading ? (
        <div className="flex flex-col items-center">
          <ReactLoading type="spin" color="#3498db" height={50} width={50} />
          <p className="mt-4 text-gray-600">Loading volunteer needs...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteerNeeds.map((need, index) => (
            <Slide
              key={need._id}
              direction={index % 2 === 0 ? "left" : "right"}
              triggerOnce
            >
              <div className="card bg-base-200 shadow-md rounded-md overflow-hidden">
                <img
                  src={need.thumbnail}
                  alt={need.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{need.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Category:{" "}
                    <span className="font-medium">{need.category}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Deadline:{" "}
                    <span className="font-medium">{need.deadline}</span>
                  </p>
                  <button
                    onClick={() => handleViewDetails(need._id)}
                    className="btn btn-sm btn-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      )}
      {!isLoading && (
        <div className="text-center mt-8">
          <button
            className="btn btn-secondary"
            onClick={() => (window.location.href = "/AllVolunteer")}
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default VolunteerNeedsNow;
