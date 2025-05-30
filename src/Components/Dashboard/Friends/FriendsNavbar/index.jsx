// import React from "react";

// const FriendsNavbar = () => {
//     return (
//         <div className="bg-gray-300 flex flex-col p-4 gap-3 rounded-lg">
//             <div className="rounded-lg flex items-center justify-between">
//                 <h2 className="text-lg font-bold text-blue-900">Posts</h2>
//                 <button className="flex items-center text-blue-900 font-bold py-2 px-4 rounded-lg border border-blue-900">
//                     <i className="fas fa-sliders-h mr-2"></i> Filters
//                 </button>
//             </div>
//             <div className="flex space-x-4">
//                 <button className="bg-gradient-to-r from-gray-200 to-gray-500 text-blue-900 font-bold py-2 px-4 rounded-lg">
//                     All Friends
//                 </button>
//                 <button className="text-blue-900 font-bold py-2 px-4">Recently added</button>
//                 <button className="text-blue-900 font-bold py-2 px-4">Friend request</button>
//                 <button className="text-blue-900 font-bold py-2 px-4">Current City</button>
//             </div>
//         </div>
//     );
// };

// export default FriendsNavbar;




import React from "react";

const FriendsNavbar = () => {
    return (
        <div className="bg-gray-200 flex flex-col p-4 gap-3 rounded-lg w-full">
            <div className="rounded-lg flex items-center justify-between">
                <h2 className="text-lg font-bold text-blue-900">Posts</h2>
                <button className="flex items-center text-blue-900 font-bold py-2 px-4 rounded-lg border border-blue-900">
                    <i className="fas fa-sliders-h mr-2"></i> Filters
                </button>
            </div>
            <div className="flex flex-wrap gap-4">
                <button className="bg-gray-300 text-blue-900 font-bold py-2 px-4 rounded-lg w-full sm:w-auto">
                    All Friends
                </button>
                <button className="text-blue-900 font-bold py-2 px-4 w-full sm:w-auto">
                    Recently added
                </button>
                <button className="text-blue-900 font-bold py-2 px-4 w-full sm:w-auto">
                    Friend request
                </button>
                <button className="text-blue-900 font-bold py-2 px-4 w-full sm:w-auto">
                    Current City
                </button>
            </div>
        </div>
    );
};

export default FriendsNavbar;
