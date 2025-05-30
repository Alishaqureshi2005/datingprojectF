import React from "react";
import NextButton from "../../../../assets/Images/game/BTN1.png";
import PreviousButton from "../../../../assets/Images/game/BTN2.png";
import G1 from "../../../../assets/Images/game/G1.png";
import G2 from "../../../../assets/Images/game/G2.png";
import G3 from "../../../../assets/Images/game/G3.png";
import G4 from "../../../../assets/Images/game/G4.png";
import G5 from "../../../../assets/Images/game/G5.png";
import G6 from "../../../../assets/Images/game/G6.png";



const GameFeeds = () => {
    const games = [
        { id: 1, players: "22k", direction: "Next", image: G1, buttonImage: NextButton },
        { id: 2, players: "42k", direction: "Next", image: G2, buttonImage: NextButton },
        { id: 3, players: "52k", direction: "Previous", image: G3, buttonImage: PreviousButton },
        { id: 4, players: "72k", direction: "Next", image: G4, buttonImage: NextButton },
        { id: 5, players: "92k", direction: "Next", image: G5, buttonImage: NextButton },
        { id: 6, players: "62k", direction: "Previous", image: G6, buttonImage: PreviousButton },
    ];

    return (
        <div className="">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold text-purple-900 mb-4">Games we love</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {games.map((game) => (

                        <div
                            key={game.id}
                            className="bg-white w-min-72 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="p-1 flex justify-between items-center">
                                
                                <button
                                    // className="bg-pink-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-pink-600 transition-colors duration-200"
                                >
                                    <img
                                        src={game.buttonImage}
                                        alt={`${game.direction} icon`}
                                        className="w-32 h-10"
                                    />
                                </button>

                            </div>
                            <div className="">
                                <img
                                    alt={`Game ${game.id} image`}
                                    className="w-full h-48 object-cover"
                                    src={game.image}
                                />
                            </div>
                            <div className="p-2">
                                <p className="text-gray-700 font-medium bg-gray-300 w-36 text-center px-3 py-[0.30rem] rounded-full shadow-md hover:bg-gray-400 transition-colors duration-200">
                                    {game.players} players
                                </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default GameFeeds;
