import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SuggestedGroups = ({ groups }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-4xl w-full sm:px-4">
        <div className="p-4 bg-gray-200 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Suggested for you</h2>
            <a className="text-blue-600" href="#" aria-label="See all suggested groups">
              See all
            </a>
          </div>
          <p className="text-gray-600 mb-4">Groups you might be interested in.</p>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1220: { slidesPerView: 3 },
          }}
          className="w-full mt-4 shadow-lg"
        >
          {groups.map((group) => (
            <SwiperSlide key={group.id}>
              <div className="bg-gray-200 rounded-lg h-[28rem]  shadow p-4 flex flex-col justify-between">
                <div>
                  <img
                    alt={group.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    src={group.image}
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    {group.title.length > 2 ? `${group.title.slice(0, 22)}...` : group.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{group.members}</p>
                  <p className="text-gray-600 mb-2">{group.posts}</p>

                  <div className="flex items-center my-6">
                    {group.profileImages.map((img, index) => (
                      <img
                        key={index}
                        alt="Profile"
                        className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                        src={img}
                      />
                    ))}
                    <span className="text-gray-600 ml-2">{group.friends}</span>
                  </div>
                </div>
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition"
                  aria-label={`Join ${group.title}`}
                >
                  Join group
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuggestedGroups;
