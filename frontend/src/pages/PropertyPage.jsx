import React from "react";

import image from "../images/houses.jpg";

const JSON_DATA = [
  {
    image: "",
    name: "test house",
    slug: "test-house",
    price: 700000,
    description:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dapibus metus. Fusce vel leo at arcu hendrerit molestie. Donec dolor mauris, ornare at semper quis, consequat porta velit. Nunc placerat pulvinar eleifend. Aenean eget nisi scelerisque, molestie odio eu, elementum ipsum. Nam et sem at ex sodales rutrum. Donec auctor leo tincidunt nibh molestie, quis eleifend quam scelerisque. Praesent egestas blandit porta. In ac vestibulum felis. Nulla vulputate dolor id dui maximus, sed mollis tellus dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse quis nulla nulla.

    Suspendisse eleifend lectus at neque iaculis, vel luctus ipsum ullamcorper. Proin nec dolor a lectus ultricies placerat. Nulla in vestibulum risus, sit amet ornare justo. Praesent diam sem, pretium sit amet mollis in, semper nec mauris. Proin vestibulum eget nisi a finibus. Suspendisse et felis id dui pulvinar tincidunt. Aliquam rutrum tristique lectus, eget vestibulum purus pellentesque ut. Aliquam non elit ac lectus ornare semper eu eget felis. Sed congue erat at congue iaculis. Praesent dignissim tellus eu nisl porttitor hendrerit.
    
    Sed ultricies sem leo, ac viverra elit consequat id. In molestie felis in lorem sodales, nec semper augue semper. Mauris sapien enim, egestas id mauris at, aliquet lacinia felis. Morbi nec mi semper, rhoncus risus eget, ultrices lectus. Aenean faucibus dolor eu magna sollicitudin hendrerit ac sed dolor. Vestibulum tristique et ex at tempus. Aliquam ipsum tortor, pretium et dictum et, viverra a diam. Quisque ut condimentum tellus. Ut ligula mauris, maximus in placerat nec, posuere nec magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vitae luctus velit, nec vulputate arcu. Praesent molestie, lorem scelerisque finibus consequat, sem nulla auctor mauris, nec suscipit orci mauris eget purus. Quisque suscipit rhoncus felis, a lacinia lectus dignissim at.
    
    Morbi sodales hendrerit ante in faucibus. Donec vehicula, libero id auctor viverra, massa lorem semper sapien, et posuere sapien tellus ultricies elit. Duis ut odio nec sapien rutrum pellentesque sed ac nunc. Mauris velit mi, euismod at lacus sit amet, mollis lacinia est. Phasellus ultricies varius iaculis. Mauris sed arcu non justo semper fringilla sed ac tellus. Pellentesque erat tellus, eleifend a libero eu, pharetra dapibus quam. Integer porta molestie enim, luctus lacinia massa. Sed ligula odio, accumsan quis ligula ac, scelerisque scelerisque odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam volutpat arcu erat, sed pulvinar nulla pharetra vel. Vestibulum euismod posuere nulla, id pharetra nisi molestie in. Quisque sit amet odio non massa aliquam vestibulum. Etiam feugiat pretium quam at dapibus. Suspendisse sed nunc nulla. Nulla facilisi.`,
    numOfBathrooms: 3,
    numOfBedrooms: 4,
    location:"",
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

export const PropertyPage = () => {
  const data = JSON_DATA[0];
  return (
    <div className="bg-gray-300 grid gap-2">
      <div className="grid gap-2 m-4">
        <div className="p-2 bg-white shadow-md rounder hover:shadow-lg hover:scale-150 flex w-full ">
          <div>
            {/* Image */}
            <img src={image} alt={data.name} className="max-w-5xl w-full"></img>
          </div>
          <div className="p-2 mx-auto my-40">
            <div>
              <p className="text-6xl">{data.name}</p>
              <p className="text-4xl">£{data.price}</p>
              <span>{data.location}</span>
              <div className="flex gap-2 justify-center">
                <span>{data.numOfBathrooms} Bathrooms</span>
                <span>{data.numOfBedrooms} Bedrooms</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 bg-white shadow-md rounder hover:shadow-lg hover:scale-150 flex w-full flex-nowrap justify-around ">
          <div>
            <p>Description</p>
          </div>
          <div>
            <p>Floorplans</p>
          </div>
          <div>
            <p>EPC</p>
          </div>
          <div>
            <p>Gallery</p>
          </div>
          <div>
            <p>Book a viewing</p>
          </div>
          <div>
            <p>Make an offer</p>
          </div>
        </div>

        <div className=" bg-white shadow-md rounder hover:shadow-lg hover:scale-150 flex w-full justify-between p-4 box-border">
          <div className="p-2 flex-grow">
            <h3 className="text-4xl my-4">{data.name}</h3>
            <p>£{data.price}</p>
            <h4 className="text-4xl my-4">Features</h4>
            <span>{data.numOfBathrooms} Bathrooms</span>
            <span>{data.numOfBedrooms} Bedrooms</span>
            <span>{data.location}</span>
            <hr />
            <div >
              <h4 className="text-4xl my-4">Description</h4>
              <p className="inline-block max-w-5xl">{data.description}</p>
            </div>
          </div>
          <div>
            {/* Image */}
            <div className="flex justify-around ">
              <p>Map</p>
              <p>Street</p>
            </div>
            <img
              src={image}
              alt={data.name}
              className="max-w-lg w-full flex-grow"
            ></img>

            <div className="my-4">
              <h3>What's nearby</h3>
              <ol>
                <li>0.7 miles pub</li>
              </ol>
            </div>
            <section>
              <button className="shadow font-bold appearance-none border rounded  w-full py-2 px-3 text-blue-400 leading-tight hover:text-blue-500 hover:shadow-outline border-blue-500 my-1">
                Direction to this property
              </button>
              <button className="shadow font-bold appearance-none border rounded  w-full py-2 px-3 text-blue-400 leading-tight hover:text-blue-500 hover:shadow-outline border-blue-500 my-1">
                Print this page
              </button>
            </section>

            {/* Mortage Calculator */}
            <div className="bg-gray-200 rounded p-4 max-w-lg my-4">
              <h3 className="text-lg">Mortage Calculator</h3>
              <label htmlFor="price">Property Price</label>
              <input
                name="price"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              />

              <label htmlFor="deposit">Deposit Amount</label>
              <input
                name="deposit"
                type="text"
                className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              />

              <label htmlFor="loanLength">Loan Length</label>
              <input
                name="loanLength"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              />

              <label htmlFor="price">Interest Rate</label>
              <input
                name="price"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              />

              <h4>Your approximate mortage cost is</h4>
              <p>£1.203/month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
