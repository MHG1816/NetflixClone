import useMovie from '@/app/hooks/useMovie';
import Header from './components/Header';


interface IParams {
  movieId : string
}
const Movie = ({params} : {params : IParams}) => {
  const { movieId } = params;
  return (
    <div className="h-screen w-screen bg-black">
      <Header movieId={movieId}/>
    </div>
  )
}

export default Movie