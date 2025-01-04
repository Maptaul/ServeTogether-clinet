import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateVolunteerNeedPost = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing post data
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `https://serve-together-server.vercel.app/volunteerneed/${id}`
        );
        setFormData(response.data);
      } catch (error) {
        toast.error("Failed to load post data.");
        console.error("Error fetching post data:", error);
      }
    };
    fetchPostData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "volunteersNeeded" ? parseInt(value, 10) || 0 : value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, deadline: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `https://serve-together-server.vercel.app/volunteerneed/${id}`,
        {
          title: formData.title,
          description: formData.description,
          category: formData.category,
          location: formData.location,
          volunteersNeeded: formData.volunteersNeeded,
          deadline: formData.deadline,
        }
      );
      toast.success("Post updated successfully!");
      navigate("/ManageMyPosts");
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("Failed to update the post.");
    }
  };

  if (!formData) {
    return <p className="text-center mt-8">Loading post details...</p>;
  }

  return (
    <div className="container bg-base-200 rounded-md mx-auto px-4 py-8">
      <Helmet>
        <title>Update Volunteer Need</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">
        Update Volunteer Need
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        {/* Thumbnail */}
        <div>
          <label className="block text-sm font-medium">Thumbnail URL</label>
          <input
            type="url"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Post Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social service">Social Service</option>
            <option value="animal welfare">Animal Welfare</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Volunteers Needed */}
        <div>
          <label className="block text-sm font-medium">
            No. of Volunteers Needed
          </label>
          <input
            type="number"
            name="volunteersNeeded"
            value={formData.volunteersNeeded}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-sm font-medium">Deadline</label>
          <DatePicker
            selected={new Date(formData.deadline)}
            onChange={handleDateChange}
            className="input input-bordered w-full"
            dateFormat="yyyy-MM-dd"
          />
        </div>

        {/* Organizer Info */}
        <div>
          <label className="block text-sm font-medium">Organizer Name</label>
          <input
            type="text"
            value={user?.displayName || "Anonymous"}
            className="input input-bordered w-full bg-gray-200"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Organizer Email</label>
          <input
            type="email"
            value={user?.email || "anonymous@example.com"}
            className="input input-bordered w-full bg-gray-200"
            readOnly
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Update Post
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateVolunteerNeedPost;
