import React from 'react';
// Importing images statically
import f1 from '../../../assets/Images/f1.png';
import f2 from '../../../assets/Images/f2.png';
import f3 from '../../../assets/Images/f3.png';
import f4 from '../../../assets/Images/f4.png';
import f5 from '../../../assets/Images/f5.png';
import f6 from '../../../assets/Images/f6.png';

const ProfileCard = ({ profile }) => {
    const { name = "", image, description = "", buttonBg, textColor } = profile;

    return (
        
        <div
            className="rounded-lg   flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "contain", // Ensures the entire image is shown
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "520px", // Card height
            }}
        >
            <div className="m-4 mt-32 p-4 rounded-lg mx-auto w-[200px] ">
    <div className="text-center">
        <h2 className={`text-lg lg:text-xl font-bold mt-4 lg:mt-8 ${textColor}`}>{name}</h2>
        <p className="text-gray-600 text-sm md:text-base mt-2">{description}</p>
    </div>
    <div className="flex justify-center mt-6 lg:mt-8">
        {name !== "" && (
            <button className={`${buttonBg} text-white py-2 px-8 rounded-full`}>
                Follow
            </button>
        )}
    </div>
</div>



        </div>
    );
};

const GroupCards = () => {
    const profiles = [
        {
            name: 'Freddie',
            image: f1,
            description: 'Lorem ipsum dolor sit amet, consectetur',
            buttonBg: 'bg-pink-300',
            textColor: 'text-teal-900',
        },
        {
            name: 'Freddie',
            image: f2,
            description: 'Lorem ipsum dolor sit amet, consectetur',
            buttonBg: 'bg-pink-300',
            textColor: 'text-teal-900',
        },
        {
            name: 'Freddie',
            image: f3,
            description: 'Lorem ipsum dolor sit amet, consectetur',
            buttonBg: 'bg-pink-300',
            textColor: 'text-teal-900',
        },
        {
            name: '',
            image: f4,
            description: '',
            buttonBg: 'bg-pink-300',
            textColor: 'text-teal-900',
        },
        {
            name: 'Freddie',
            image: f5,
            description: 'Lorem ipsum dolor sit amet, consectetur',
            buttonBg: 'bg-pink-300',
            textColor: 'text-teal-900',
        },
        {
            name: 'Freddie',
            image: f6,
            description: 'Lorem ipsum dolor sit amet, consectetur',
            buttonBg: 'bg-pink-300',
            textColor: 'text-teal-900',
        },
    ];

    return (
        <div className="bg-gray-300 flex justify-center items-center min-h-svh">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 p-4">
                {profiles.map((profile, index) => (
                    <ProfileCard key={index} profile={profile} />
                ))}
            </div>
        </div>
    );
};

export default GroupCards;
