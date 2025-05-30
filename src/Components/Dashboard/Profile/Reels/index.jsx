import React from 'react'

const Reels = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="bg-white p-10 rounded-lg shadow-2xl max-w-3xl w-full text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 mb-6 animate__animated animate__fadeIn">
          Reels Component is <span className="text-gray-700">Under Working</span>
        </h2>
        <p className="text-xl text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Our team is working hard to make it perfect! Stay tuned for the exciting features coming soon.
        </p>
        <div className="flex justify-center items-center gap-6">
          <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full transform transition-all hover:bg-indigo-800 hover:scale-105">
            Learn More
          </button>
          <button className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full transform transition-all hover:bg-indigo-600 hover:text-white hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reels