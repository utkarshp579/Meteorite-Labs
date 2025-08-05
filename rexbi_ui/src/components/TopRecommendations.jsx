import React from "react";
import "../styles/TopRecommendationSection.css";

// Card Component
const Card = ({
  image,
  title,
  location,
  author,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="card-image">
        <img src={image} alt={title} />
        {isHovered && (
          <div className="author-bubble">
            <div className="author-avatar">
              <img src="/avatar.png" alt={author} />
            </div>
            <span className="author-name">{author}</span>
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-location">
          {location} • by {author}
        </p>
      </div>
    </div>
  );
};

// Main TopRecommendationSection Component
const TopRecommendationSection = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const recommendations = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Midnight Sun at Nordkapp",
      location: "Nordkapp, Norway",
      author: "asasteinars",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Hiking to Besseggen Ridge",
      location: "Jotunheimen, Norway",
      author: "laumeieva",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Flåm Railway Journey",
      location: "Flåm, Norway",
      author: "rachstewartnz",
    },
    // {
    //   id: 4,
    //   image:
    //     "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=400",
    //   title: "Northern Lights in Tromsø",
    //   location: "Tromsø, Norway",
    //   author: "furstonetravels",
    // },
  ];

  return (
    <div className="top-recommendation-section">
      <h2 className="section-title">You may also like</h2>
      <div className="cards-container">
        {recommendations.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            location={item.location}
            author={item.author}
            isHovered={hoveredCard === item.id}
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRecommendationSection;


// import React from "react";
// import "../styles/TopRecommendationSection.css";

// // Card Component
// const Card = ({
//   image,
//   title,
//   location,
//   author,
//   isHovered,
//   onMouseEnter,
//   onMouseLeave,
// }) => {
//   return (
//     <div
//       className="card"
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <div className="card-image">
//         <img src={image} alt={title} />
//         {isHovered && (
//           <div className="author-bubble">
//             <div className="author-avatar">
//               <img src="/api/placeholder/32/32" alt={author} />
//             </div>
//             <span className="author-name">{author}</span>
//           </div>
//         )}
//       </div>
//       <div className="card-content">
//         <h3 className="card-title">{title}</h3>
//         <p className="card-location">
//           {location} • by {author}
//         </p>
//       </div>
//     </div>
//   );
// };

// // Main TopRecommendationSection Component
// const TopRecommendationSection = () => {
//   const [hoveredCard, setHoveredCard] = React.useState(null);

//   const recommendations = [
//     {
//       id: 1,
//       image: "/api/placeholder/400/400",
//       title: "Iceland Guide",
//       location: "Iceland",
//       author: "asasteinars",
//     },
//     {
//       id: 2,
//       image: "/api/placeholder/400/400",
//       title: "Explore Lithuania",
//       location: "Lithuania",
//       author: "laumeieva",
//     },
//     {
//       id: 3,
//       image: "/api/placeholder/400/400",
//       title: "Ultimate Guide to New Zealand",
//       location: "New Zealand",
//       author: "rachstewartnz",
//     },
//     {
//       id: 4,
//       image: "/api/placeholder/400/400",
//       title: "Exploring Ireland's Hidden Gems",
//       location: "Ireland",
//       author: "furstonetravels",
//     },
//   ];

//   return (
//     <div className="top-recommendation-section">
//       <h2 className="section-title">You may also like</h2>
//       <div className="cards-container">
//         {recommendations.map((item) => (
//           <Card
//             key={item.id}
//             image={item.image}
//             title={item.title}
//             location={item.location}
//             author={item.author}
//             isHovered={hoveredCard === item.id}
//             onMouseEnter={() => setHoveredCard(item.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopRecommendationSection;

// import React from "react";
// import { MapPin, Star } from "lucide-react";

// const TopRecommendations = () => {
//   const recommendations = [
//     {
//       id: 1,
//       title: "Midnight Sun at Nordkapp",
//       location: "Nordkapp, Norway",
//       description:
//         "Experience the magical midnight sun at Europe's northernmost point. A truly unforgettable experience.",
//       image:
//         "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=400",
//       rating: 4.9,
//       category: "Experience",
//     },
//     {
//       id: 2,
//       title: "Hiking to Besseggen Ridge",
//       location: "Jotunheimen, Norway",
//       description:
//         "One of Norway's most famous hikes with spectacular views over two lakes of different colors.",
//       image:
//         "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400",
//       rating: 4.8,
//       category: "Hiking",
//     },
//     {
//       id: 3,
//       title: "Flåm Railway Journey",
//       location: "Flåm, Norway",
//       description:
//         "One of the world's steepest train rides through dramatic Norwegian fjord landscape.",
//       image:
//         "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
//       rating: 4.7,
//       category: "Transport",
//     },
//     {
//       id: 4,
//       title: "Northern Lights in Tromsø",
//       location: "Tromsø, Norway",
//       description:
//         "Best place to witness the Aurora Borealis with cozy glass igloos and expert guides.",
//       image:
//         "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=400",
//       rating: 4.9,
//       category: "Experience",
//     },
//     {
//       id: 5,
//       title: "Kayaking in Geiranger",
//       location: "Geiranger, Norway",
//       description:
//         "Paddle through the UNESCO World Heritage fjord with waterfalls cascading around you.",
//       image:
//         "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=400",
//       rating: 4.6,
//       category: "Activity",
//     },
//   ];

//   return (
//     <div className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Top Recommendations
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover the most incredible experiences Norway has to offer,
//             curated by local experts
//           </p>
//         </div>

//         {/* Horizontal scrollable container */}
//         <div className="overflow-x-auto pb-4">
//           <div className="flex space-x-6 w-max">
//             {recommendations.map((rec) => (
//               <div
//                 key={rec.id}
//                 className="w-80 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
//               >
//                 <div className="relative">
//                   <img
//                     src={rec.image}
//                     alt={rec.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
//                       {rec.category}
//                     </span>
//                   </div>
//                   <div className="absolute top-4 right-4">
//                     <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
//                       <Star className="w-3 h-3 text-yellow-400 fill-current" />
//                       <span className="text-xs font-medium text-gray-700">
//                         {rec.rating}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">
//                     {rec.title}
//                   </h3>

//                   <div className="flex items-center text-gray-500 text-sm mb-3">
//                     <MapPin className="w-4 h-4 mr-1" />
//                     <span>{rec.location}</span>
//                   </div>

//                   <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//                     {rec.description}
//                   </p>

//                   <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Show all button */}
//         <div className="text-center mt-8">
//           <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
//             View All Recommendations
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopRecommendations;
