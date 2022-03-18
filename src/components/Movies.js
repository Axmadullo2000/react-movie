import Movie from "./Movie"

export default function Movies(props) {
    const { movies = []} = props

    return (
        <div className="movies">
            {
                movies.length ? movies.map(movie => (
                    <Movie key={ movie.imdbID } { ...movie } />
                )): (
                    <div>
                        <div id="notfound">
                            <div class="notfound">
                                <div class="notfound-404">
                                    <h1>404</h1>
                                </div>
                                <h2>Oops! This Page Could Not Be Found</h2>
                                <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                                <a href>Go To Homepage</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

