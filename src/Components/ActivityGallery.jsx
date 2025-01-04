import React from "react";

const ActivityGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-10">Activity Gallery</h2>
      <p className="text-center text-gray-600 mb-8">
        A volunteer organization's activity gallery is an inspiring and engaging
        space that showcases the positive impact of their work.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="card bg-base-300 shadow-md rounded-md overflow-hidden">
          <img
            src="https://i.ibb.co.com/Rj1kscv/1-4.jpg"
            alt="Activity 1"
            className="w-full h-48 object-cover"
          />
          <p className="text-center text-sm text-gray-600 p-4">
            A group of people clean up the trash at the exit to the forest, in
            the spring.
          </p>
        </div>
        {/* Card 2 */}
        <div className="card bg-base-300 shadow-md rounded-md overflow-hidden">
          <img
            src="https://i.ibb.co.com/jTMwbK9/National-Volunteer-Month.jpg"
            alt="Activity 2"
            className="w-full h-48 object-cover"
          />
          <p className="text-center text-sm text-gray-600 p-4">
            Group of volunteers forming huddles in park.
          </p>
        </div>
        {/* Card 3 */}
        <div className="card bg-base-300 shadow-md rounded-md overflow-hidden">
          <img
            src="https://i.ibb.co.com/zxYYrpV/1-10.jpg"
            alt="Activity 3"
            className="w-full h-48 object-cover"
          />
          <p className="text-center text-sm text-gray-600 p-4">
            Group of volunteers planting in park.
          </p>
        </div>
        {/* Card 4 */}
        <div className="card bg-base-300 shadow-md rounded-md overflow-hidden">
          <img
            src="https://i.ibb.co.com/JthpHFQ/gf.jpg"
            alt="Activity 4"
            className="w-full h-48 object-cover"
          />
          <p className="text-center text-sm text-gray-600 p-4">
            A volunteer picking garbage at the beach.
          </p>
        </div>
        {/* Card 5 */}
        <div className="card bg-base-300 shadow-md rounded-md overflow-hidden">
          <img
            src="https://i.ibb.co.com/TYbm9Rt/fsd.jpg"
            alt="Activity 5"
            className="w-full h-48 object-cover"
          />
          <p className="text-center text-sm text-gray-600 p-4">
            Cheerful environmental volunteers with full trash bags.
          </p>
        </div>
        {/* Card 6 */}
        <div className="card bg-base-300 shadow-md rounded-md overflow-hidden">
          <img
            src="https://i.ibb.co.com/vh267Jw/gdf.jpg"
            alt="Activity 6"
            className="w-full h-48 object-cover"
          />
          <p className="text-center text-sm text-gray-600 p-4">
            Team of volunteers cleaning wood from trash.
          </p>
        </div>
        {/* Card 7 */}
        <div className="card bg-base-300 shadow-md rounded-md overflow-hidden">
          <img
            src="https://i.ibb.co.com/z6wP2fn/1.jpg"
            alt="Activity 7"
            className="w-full h-48 object-cover"
          />
          <p className="text-center text-sm text-gray-600 p-4">
            Young volunteers picking up garbage in bags on footpath.
          </p>
        </div>
        {/* Card 8 */}
        <div className="card bg-base-300 shadow-md rounded-md overflow-hidden">
          <img
            src="https://i.ibb.co.com/sHj1WzG/sdgdgs.jpg"
            alt="Activity 8"
            className="w-full h-48 object-cover"
          />
          <p className="text-center text-sm text-gray-600 p-4">
            Group of volunteers having fun in park.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityGallery;
