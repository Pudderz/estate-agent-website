import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gray-800 w-full h-64 text-white sticky top-full">
      <ul className="flex justify-around mx-auto max-w-7xl p-2">
        <li>
          <h4>Column 1</h4>
        </li>
        <li>
          <h4>Column 2</h4>
        </li>
        <li>
          <h4>Column 3</h4>
        </li>
        <li>
          <h4>Column 4</h4>
        </li>
      </ul>
    </div>
  );
};
