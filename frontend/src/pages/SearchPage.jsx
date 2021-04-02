import React from "react";

import image from "../images/houses.jpg";

const JSON_DATA = [
  {
    image: "",
    name: "test house",
    slug: "test-house",
    price: 700000,
    description: "",
    numOfBathrooms: 3,
    numOfBedrooms: 4,
    location: "",
    latitude: 212,
    longitude: 0,
  },
  {
    image: "",
    name: "test house 2",
    slug: "test-house-2",
    price: 700000,
    description: "",
    numOfBathrooms: 3,
    numOfBedrooms: 4,
    location: "",
    latitude: 212,
    longitude: 0,
  },
  {
    image: "",
    name: "test house 3",
    slug: "test-house-3",
    price: 700000,
    description: "",
    numOfBathrooms: 3,
    numOfBedrooms: 4,
    location: "",
    latitude: 212,
    longitude: 0,
  },
  {
    image: "",
    name: "test house 4",
    slug: "test-house-4",
    price: 700000,
    description: "",
    numOfBathrooms: 3,
    numOfBedrooms: 4,
    location: "",
    latitude: 212,
    longitude: 0,
  },
];

export const SearchPage = () => {
  return (
    <div className="bg-gray-300 grid gap-2">
      <div>
        <p>Search Section/Options</p>
      </div>

      <div>
        <p>sort properties</p>
      </div>
      <div className="flex gap-2 m-4">
        {JSON_DATA.map((data, index) => (
          <div className="p-2 bg-white shadow-md rounder mx-auto w-auto inline-block hover:shadow-lg hover:scale-150">
            <div>
              {/* Image */}
              <img src={image} alt={data.name} className="max-w-md"></img>
            </div>
            <div className="p-2">
              <p>{data.name}</p>
              <p>£{data.price}</p>
               <span>{data.location}</span>
              <div className="flex gap-2 justify-center">
                <span>{data.numOfBathrooms} Bathrooms</span>
                <span>{data.numOfBedrooms} Bedrooms</span>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
