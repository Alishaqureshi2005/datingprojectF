// import React from "react";
// import p1 from "../../../assets/Images/p1.png";
// import p2 from "../../../assets/Images/p2.png";
// import p3 from "../../../assets/Images/p3.png";
// import p4 from "../../../assets/Images/p4.png";
// import p5 from "../../../assets/Images/p5.png";
// import p6 from "../../../assets/Images/p6.png";
// import p7 from "../../../assets/Images/p7.png";
// import p8 from "../../../assets/Images/p8.png";
// import p9 from "../../../assets/Images/p9.png";
// import p10 from "../../../assets/Images/p10.png";
// import p11 from "../../../assets/Images/p11.png";
// import p12 from "../../../assets/Images/p12.png";

// const EventCard = () => {
//   const eventData = [
//     { src: p1, bgColor: "bg-white" },
//     { src: p2, bgColor: "bg-red-200" },
//     { src: p3, bgColor: "bg-red-300" },
//     { src: p4, bgColor: "bg-blue-200" },
//     { src: p5, bgColor: "bg-blue-300" },
//     { src: p6, bgColor: "bg-red-200" },
//     { src: p7, bgColor: "bg-white" },
//     { src: p8, bgColor: "bg-red-200" },
//     { src: p9, bgColor: "bg-red-300" },
//     { src: p10, bgColor: "bg-blue-200" },
//     { src: p11, bgColor: "bg-blue-300" },
//     { src: p12, bgColor: "bg-red-200" },
//   ];

//   return (
//     <div className="bg-gray-200 flex flex-col items-center justify-center min-h-screen pb-10" >
//       <h1 className="text-4xl font-bold text-red-400 mb-8">EVENTS</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 w-full h-full px-4">
//         {eventData.map((event, index) => (
//           <div
//             key={index}
//             className={`rounded-lg`}
//             style={{
//               backgroundImage: `url(${event.src})`,
//               backgroundSize: "cover", // Ensures full coverage of the card
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               height: "100%", // Makes the card fill its allocated grid space
//               aspectRatio: "1", // Keeps the card square
//               padding:"10px"
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventCard;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import p1 from "../../../assets/Images/p1.png";
import p2 from "../../../assets/Images/p2.png";
import p3 from "../../../assets/Images/p3.png";
import p4 from "../../../assets/Images/p4.png";
import p5 from "../../../assets/Images/p5.png";
import p6 from "../../../assets/Images/p6.png";
import p7 from "../../../assets/Images/p7.png";
import p8 from "../../../assets/Images/p8.png";
import p9 from "../../../assets/Images/p9.png";
import p10 from "../../../assets/Images/p10.png";
import p11 from "../../../assets/Images/p11.png";
import p12 from "../../../assets/Images/p12.png";

const EventCard = () => {
  const eventData = [
    { src: p1, bgColor: "bg-white" },
    { src: p2, bgColor: "bg-red-200" },
    { src: p3, bgColor: "bg-red-300" },
    { src: p4, bgColor: "bg-blue-200" },
    { src: p5, bgColor: "bg-blue-300" },
    { src: p6, bgColor: "bg-red-200" },
    { src: p7, bgColor: "bg-white" },
    { src: p8, bgColor: "bg-red-200" },
    { src: p9, bgColor: "bg-red-300" },
    { src: p10, bgColor: "bg-blue-200" },
    { src: p11, bgColor: "bg-blue-300" },
    { src: p12, bgColor: "bg-red-200" },
  ];

  return (
    <div className="bg-gray-200 flex flex-col items-center px-4 justify-center min-h-screen pb-10">
      <h1 className="text-4xl font-bold text-red-400 mb-12">EVENTS</h1>
      
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20} // Space between slides
          slidesPerView={1} // Default to 1 slide
          breakpoints={{
            640: { slidesPerView: 2 }, // 2 slides for screens >= 640px
            768: { slidesPerView: 4 }, // 3 slides for screens >= 768px
            1024: { slidesPerView: 5 }, // 4 slides for screens >= 1024px
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          className="w-full px-4"
        >
          {eventData.map((event, index) => (
            <SwiperSlide key={index}>
              <div
                className={`rounded-lg`}
                style={{
                  backgroundImage: `url(${event.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "280px", // Fixed height for the cards
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      

    </div>
  );
};

export default EventCard;
