import React from "react";
import { assets } from "../assets/assets.js";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useRef } from "react";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
    // console.log({
    //   title: titleRef.current.value,
    //   location: locationRef.current.value,
    // });
  };
  return (
    <div className="container 2xl:px-20 mx-auto my-10 max-sm:px-4">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white p-10 rounded-xl flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 10,000 Jobs to apply
        </h2>
        <p>
          Your Next Big Career Move Starts Right Here - Explore the Best Job
          Options Here!
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-between bg-white rounded p-4 max-w-6xl mx-4 sm:mx-auto">
          <div className="flex items-center gap-2 flex-1 min-w-[240px]">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="Search for jobs, companies, or keywords"
              className="text-gray-700 max-sm:text-xs p-2 rounded outline-none w-full"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center gap-2 flex-1 min-w-[240px]">
            <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="Search by location"
              className="text-gray-700 max-sm:text-xs p-2 rounded outline-none w-full"
              ref={locationRef}
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full min-w-[120px]"
          >
            Search
          </button>
        </div>
      </div>
      <div className="border border-gray-300 shadow-md rounded-lg p-6 mt-10 ">
        <div className="flex flex-wrap gap-10 lg:gap-16 justify-center ">
          <p className="font-medium">Trusted by</p>
          <img className="h-6" src={assets.microsoft_logo} alt="" />
          <img className="h-6" src={assets.walmart_logo} alt="" />
          <img className="h-6" src={assets.accenture_logo} alt="" />
          <img className="h-6" src={assets.samsung_logo} alt="" />
          <img className="h-6" src={assets.amazon_logo} alt="" />
          <img className="h-6" src={assets.adobe_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
