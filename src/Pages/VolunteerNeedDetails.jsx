import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BeAVolunteerModal from "../Components/BeAVolunteerModal";
import { AuthContext } from "../Provider/AuthProvider";

const VolunteerNeedDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(
          `https://serve-together-server.vercel.app/volunteerneed/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post details:", error);
        toast.error("Failed to fetch post details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ReactLoading type="spin" color="#0F634B" height={100} width={100} />
      </div>
    );
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="container bg-base-200 rounded-md mx-auto px-4 py-8">
      <Helmet>
        <title>{post.title} - Volunteer Need Details</title>
      </Helmet>
      <h1 className="text-3xl text-center font-bold mb-6">{post.title}</h1>
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full h-[400px] rounded-lg mb-4"
      />
      <p>
        <strong>Category:</strong> {post.category}
      </p>
      <p>
        <strong>Description:</strong> {post.description}
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
        <strong>Organizer:</strong> {post.organizerName} ({post.organizerEmail})
      </p>

      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-primary mt-4"
        disabled={post.volunteersNeeded === 0}
      >
        {post.volunteersNeeded === 0
          ? "No Volunteers Needed"
          : "Be a Volunteer"}
      </button>

      {isModalOpen && (
        <BeAVolunteerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          post={post}
          user={user}
        />
      )}
    </div>
  );
};

export default VolunteerNeedDetails;
