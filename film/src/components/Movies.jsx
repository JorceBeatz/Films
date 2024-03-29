import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
                ) : (
                    <h4>К сожалению, по вашему запросу ничего не найдено!</h4>
            )}
         
        </div>
        );
}

export { Movies };