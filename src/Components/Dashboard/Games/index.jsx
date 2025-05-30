import React from 'react'
// import GameSidebar from './GameSidebar'
// import GameFeeds from './GameFeeds'
const Games = () => {
  return (

    // <div className="grid grid-cols-10 bg-gray-200 min-h-screen">
    //   {/* Sidebar Section */}
    //   <aside className="col-span-1 hidden lg:block   ">
    //     <GameSidebar />
    //   </aside>

    //   <main className="col-span-10 lg:col-span-8 xl:col-span-8 xl:ml-0 lg:ml-12 p-4 grid grid-cols-12">
    //     <div className='lg:block hidden col-span-2'></div>
    //     <div className='col-span-12 lg:col-span-10'>
    //       <GameFeeds />
    //     </div>
    //   </main>
    // </div>




     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 text-white">
      <div className="text-center p-12 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg max-w-xl w-full">
        <h1 className="text-4xl font-semibold mb-6 text-gray-100">Under Construction</h1>
        <p className="text-lg font-light mb-6 text-gray-300">
          We're currently building something amazing. Stay tuned for updates!
        </p>
        <div className="mt-8">
          <svg
            className="w-20 h-20 text-gray-200 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14 2a10 10 0 0 1 0 20" />
          </svg>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          Thank you for your patience. We are excited to share it with you soon.
        </p>
      </div>
    </div> 

  )
}

export default Games