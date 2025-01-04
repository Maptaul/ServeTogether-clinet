import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyVolunteerNeedPosts = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://serve-together-server.vercel.app/myPosts?email=${user.email}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [user]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `https://serve-together-server.vercel.app/volunteerneed/${id}`
          );
          setPosts(posts.filter((post) => post._id !== id));
          Swal.fire("Deleted!", "Your post has been deleted.", "success");
        } catch (error) {
          Swal.fire("Error!", "Failed to delete the post.", "error");
          console.error(error);
        }
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ReactLoading type="spin" color="#3498db" height={80} width={80} />
      </div>
    );
  }

  if (!posts.length) {
    return (
      <p className="text-center text-gray-600 mt-8">
        You haven't added any volunteer needs yet!
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-white bg-[#0F634B] py-3 rounded-md border border-gray-300">
        My Volunteer Posts
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 rounded-md shadow-lg">
          <thead className="bg-[#0F634B] text-white">
            <tr>
              <th className="p-3 text-left border-b border-gray-300">
                Thumbnail
              </th>
              <th className="p-3 text-left border-b border-gray-300">Title</th>
              <th className="p-3 text-left border-b border-gray-300">
                Category
              </th>
              <th className="p-3 text-left border-b border-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post._id} className="hover:bg-gray-100">
                <td className="p-3 border-b border-gray-300">
                  <img
                    src={post.thumbnail || "https://via.placeholder.com/100"}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                  />
                </td>
                <td className="p-3 font-medium border-b border-gray-300">
                  {post.title}
                </td>
                <td className="p-3 border-b border-gray-300">
                  {post.category}
                </td>
                <td className="p-3 flex space-x-2 border-b border-gray-300">
                  <button
                    onClick={() =>
                      window.location.assign(`/update/${post._id}`)
                    }
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVolunteerNeedPosts;
