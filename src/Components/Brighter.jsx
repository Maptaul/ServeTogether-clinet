import React from "react";

const Brighter = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-10">
        Volunteers Make Each Day Brighter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="card  shadow-lg rounded-md p-4 text-center">
          <img
            src="https://i.ibb.co.com/fnW5gtm/t033-09.jpg"
            alt="Clean and Recycle"
            className="w-full h-32 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Clean and Recycle</h3>
          <p className="text-gray-600 text-sm mb-4">
            "Clean and recycle" are two essential concepts for a healthy planet.
            Cleaning our surroundings helps prevent pollution and maintain a
            hygienic environment.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Read More...
          </a>
        </div>
        {/* Card 2 */}
        <div className="card shadow-md rounded-md p-4 text-center">
          <img
            src="https://i.ibb.co.com/BPf8n15/Untitled-1.jpg"
            alt="Voluntary Support"
            className="w-full h-32 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Voluntary Support</h3>
          <p className="text-gray-600 text-sm mb-4">
            Voluntary support encompasses a wide range of actions driven by
            altruism and a desire to make a positive impact.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Read More...
          </a>
        </div>
        {/* Card 3 */}
        <div className="card shadow-md rounded-md p-4 text-center">
          <img
            src="https://i.ibb.co.com/z2wwYdq/m0059-05.jpg"
            alt="Senior Services"
            className="w-full h-32 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Senior Services</h3>
          <p className="text-gray-600 text-sm mb-4">
            Senior services encompass a wide range of programs and support
            systems designed to enhance the quality of life for older adults.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Read More...
          </a>
        </div>
        {/* Card 4 */}
        <div className="card shadow-md rounded-md p-4 text-center">
          <img
            src="https://i.ibb.co.com/8cK6X3S/222.jpg"
            alt="Save Earth"
            className="w-full h-32 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Save Earth</h3>
          <p className="text-gray-600 text-sm mb-4">
            "Save Earth" is a call to action that emphasizes the urgent need to
            protect our planet's environment.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brighter;
