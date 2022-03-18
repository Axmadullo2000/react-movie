export default function Movie(props) {
    const { Title, Year, imdbID, Type, Poster, movie } = props

    return (
        <div className="row" key={ imdbID }>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                        <img src={ Poster } alt={ Title }/> 
                        <span className="card-title">Card Title</span>
                        <a href><i className="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                        <p>{ Title }</p>
                        <p>{ Year }</p>
                        <p>{ Type }</p>
                        <p>{ movie }</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
