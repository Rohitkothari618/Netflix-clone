import Image from "next/image";
import React from "react";

export default function Thumbnail({ movie }) {
  return (
    <div className="relative h-28 min-w-[180px] curosr-pointer transiton duration-200 cursor-pointer ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt="tumbnail"
      />
    </div>
  );
}
