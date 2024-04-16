import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === comedyMovie,
  )

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="primelogo"
      />
      <div className="movie-container">
        <h1 className="action">Action Movies</h1>
        <MoviesSlider movieList={actionMoviesList} />
        <h1 className="comedy">Comedy Movies</h1>
        <MoviesSlider movieList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
