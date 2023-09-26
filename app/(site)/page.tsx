"use client";

import Billboard from "../components/Billboard";
import MoviesList from "../components/MoviesList";
import Navbar from "../components/navbar/Navbar";
import useMovieList from "../hooks/useMovieList";
export default function Home() {
  const { data: movies = [] } = useMovieList(); 
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MoviesList title="Trending Now" data={movies}/>
      </div>
    </>
  )
}
