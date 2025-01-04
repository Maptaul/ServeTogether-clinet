import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BeAVolunteerModal = ({ post, isOpen, onClose, user }) => {
  const [suggestion, setSuggestion] = useState(""); // Suggestion input state
  const [loading, setLoading] = useState(false); // Submission loading state

  const handleRequest = async () => {
    if (!user) {
      toast.error("You must be logged in to volunteer.");
      return;
    }

    setLoading(true);

    try {
      // Prepare volunteer request data
      const volunteerData = {
        postId: post._id,
        postTitle: post.title,
        thumbnail: post.thumbnail,
        description: post.description,
        category: post.category,
        location: post.location,
        volunteersNeeded: post.volunteersNeeded,
        deadline: post.deadline,
        organizerName: post.organizerName,
        organizerEmail: post.organizerEmail,
        volunteerName: user.name,
        volunteerEmail: user.email,
        suggestion,
        status: "requested",
      };

      // Save volunteer request in the database
      await axios.post(
        "https://serve-together-server.vercel.app/volunteerRequests",
        volunteerData
      );

      // Decrement the volunteersNeeded count
      await axios.patch(
        `https://serve-together-server.vercel.app/volunteerneed/${post._id}`,
        {
          $inc: { volunteersNeeded: -1 },
        }
      );

      toast.success("Volunteer request submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Error submitting volunteer request:", error);
      toast.error("Failed to submit the volunteer request.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-xl font-bold text-center mb-4">Be a Volunteer</h2>
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-40 mb-4"
        />
        <p>
          <strong>Post Title:</strong> {post.title}
        </p>
        <p>
          <strong>Description:</strong> {post.description}
        </p>
        <p>
          <strong>Category:</strong> {post.category}
        </p>
        <p>
          <strong>Location:</strong> {post.location}
        </p>
        <p>
          <strong>Volunteers Needed:</strong> {post.volunteersNeeded}
        </p>
        <p>
          <strong>Deadline:</strong> {new Date(post.deadline).toDateString()}
        </p>
        <p>
          <strong>Organizer:</strong> {post.organizerName} (
          {post.organizerEmail})
        </p>
        <p>
          <strong>Your Name:</strong> {user.displayName}
        </p>
        <p>
          <strong>Your Email:</strong> {user.email}
        </p>
        <div className="form-group">
          <label>Suggestion:</label>
          <textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your suggestion"
          />
        </div>
        <button
          onClick={handleRequest}
          className="btn btn-primary mt-4"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Request"}
        </button>
        <button onClick={onClose} className="btn btn-secondary mt-4 ml-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default BeAVolunteerModal;
