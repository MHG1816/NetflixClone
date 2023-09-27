"use client";

import Billboard from "../components/Billboard";
import InfoModal from "../components/InfoModal";
import MoviesList from "../components/MoviesList";
import Navbar from "../components/navbar/Navbar";
import useFavorites from "../hooks/useFavorites";
import useInfoModal from "../hooks/useInfoModal";
import useMovieList from "../hooks/useMovieList";
export default function Home() {
  const { data: movies = [] } = useMovieList(); 
  const { data: favoritesMovies = [] } = useFavorites();
  const { isOpen, onClose } = useInfoModal();
  return (
    <>
      <InfoModal visible={isOpen} onClose={onClose}/>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MoviesList title="Trending Now" data={movies}/>
        <MoviesList title="My Favorites Movies" data={favoritesMovies}/>
      </div>
    </>
  )
}
