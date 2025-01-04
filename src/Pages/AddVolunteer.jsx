import axios from "axios";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider.jsx";

const AddVolunteer = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [formData, setFormData] = useState({
    thumbnail: "",
    title: "",
    description: "",
    category: "healthcare",
    location: "",
    volunteersNeeded: "",
    deadline: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, deadline: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      ...formData,
      organizerName: user?.name || "Anonymous",
      organizerEmail: user?.email || "anonymous@example.com",
    };

    try {
      const response = await axios.post(
        "https://serve-together-server.vercel.app/volunteerneed",
        postData
      );
      if (response.status === 201) {
        toast.success("Volunteer need post added successfully!");
        setFormData({
          thumbnail: "",
          title: "",
          description: "",
          category: "healthcare",
          location: "",
          volunteersNeeded: "",
          deadline: new Date(),
        });
      }
    } catch (error) {
      console.error("Error adding post:", error);
      toast.error("Failed to add the post.");
    }
  };

  return (
    <div className="container bg-base-200 rounded-md mx-auto px-4 py-8">
      <Helmet>
        <title>ServeTogether|Add Volunteer Need</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">
        Add Volunteer Need
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg  mx-auto">
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

        {/* Number of Volunteers Needed */}
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
            selected={formData.deadline}
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
          Add Post
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddVolunteer;
