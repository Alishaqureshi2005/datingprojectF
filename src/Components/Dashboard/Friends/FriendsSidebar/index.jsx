import React from 'react';
import Dp from "../../../../assets/Images/profile_png/dp.png";
import EventImg from "../../../../assets/Images/home/1.png";
import FriendImg from "../../../../assets/Images/home/6.png";
import GroupImg from "../../../../assets/Images/home/2.png";
import FeedImg from "../../../../assets/Images/home/3.png";
import PageImg from "../../../../assets/Images/home/4.png";


const FriendsSidebar = ({userDatails}) => {
    return (
        <div className="p-4 bg-gray-200 w-full lg:w-3/4 xl:w-3/5  h-[93.5vh] sticky top-12">
            <div className=" flex flex-col gap-4 mt-4">
                <div className='text-blue-900 border-b border-gray-500 pb-4 flex gap-2 items-center'>
                    <img
                        src={userDatails.Dp}
                        alt="Home icon"
                        className="w-14 h-14 rounded-full"
                    />
                    <h1 className="font-bold mb-4 text-[20px]">{userDatails.userName}</h1>

                </div>
                <div className='text-black flex gap-2 items-center'>
                    <img
                        src={FriendImg}
                        alt="Home icon"
                        className="w-14 h-14 rounded-full"
                    />
                    <h1 className="font-bold mb-4 text-[20px]">Friends</h1>

                </div>
                
                <div className='text-black flex gap-2 items-center'>
                    <img
                        src={EventImg}
                        alt="Home icon"
                        className="w-14 h-14 rounded-full"
                    />
                    <h1 className="font-bold mb-4 text-[20px]">Events</h1>

                </div>
                <div className='text-black flex gap-2 items-center'>
                    <img
                        src={FeedImg}
                        alt="Home icon"
                        className="w-14 h-14 rounded-full"
                    />
                    <h1 className="font-bold mb-4 text-[20px] ">Feeds</h1>

                </div>
                <div className='text-black flex gap-2 items-center'>
                    <img
                        src={PageImg}
                        alt="Home icon"
                        className="w-14 h-14 rounded-full"
                    />
                    <h1 className="font-bold mb-4 text-[20px] ">Pages</h1>

                </div>
            </div>
        </div>
    );
};

export default FriendsSidebar;
