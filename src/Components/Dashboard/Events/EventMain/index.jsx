import React from "react";




const EventMain = ({EventCard}) => {
    

    return (
        <div className=" py-4 min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {EventCard.map((card, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-lg shadow-lg py-4 flex flex-col items-center"
                    >
                        <img
                            src={card.image.src}
                            alt={card.image.alt}
                            className="w-48 h-56 mb-4"
                        />

                        <div className="flex space-x-2">
                            <button className="flex items-center justify-center px-8 py-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg shadow-md">
                                <span className="text-black">View Details</span>
                            </button>
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg shadow-md">
                                <i className="fas fa-arrow-right text-white"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventMain;
