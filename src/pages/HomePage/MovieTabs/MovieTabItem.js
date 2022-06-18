import React from "react";

export default function MovieTabItem({ movie }) {
  return (
    <div className="flex p-5 space-x-5 border-b border-gray-300">
      <img className="w-24" src={movie.hinhAnh} alt="img" />
      <div>
        <p>{movie.tenPhim}</p>
      </div>
    </div>
  );
}
