import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner"; // Import the loading spinner
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2"; // Import SweetAlert2
import { AuthContext } from "../Provider/AuthProvider.jsx";

const MyVolunteerRequestPost = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user's posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://serve-together-server.vercel.app/myPosts?email=${user?.email}`
        );
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Failed to fetch posts.");
        setIsLoading(false);
      }
    };

    if (user?.email) {
      fetchPosts();
    }
  }, [user?.email]);

  // Handle cancel using SweetAlert2
  const handleCancel = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F634B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `https://serve-together-server.vercel.app/volunteerneed/${id}`
        );
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
        toast.success("Request canceled successfully!");
      } catch (error) {
        console.error("Error canceling request:", error);
        toast.error("Failed to cancel request.");
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        My Volunteer Request Posts
      </h1>
      <ToastContainer />
      {isLoading ? (
        <div className="flex justify-center">
          <TailSpin color="#0F634B" height={50} width={50} />
        </div>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-500">
          You have no volunteer requests.
        </p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-[#0F634B]">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-white">
                Title
              </th>
              <th className="border border-gray-300 px-4 py-2 text-white">
                Category
              </th>
              <th className="border border-gray-300 px-4 py-2 text-white">
                Deadline
              </th>
              <th className="border border-gray-300 px-4 py-2 text-white">
                Location
              </th>
              <th className="border border-gray-300 px-4 py-2 text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {post.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {post.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(post.deadline).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {post.location}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleCancel(post._id)}
                    className="btn btn-error btn-sm"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyVolunteerRequestPost;
