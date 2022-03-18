import React from "react"

import Movies from '../components/Movies'

import Search from '../components/Search'

import Loader from '../components/Loader'

export default class Main extends React.Component {
    state = {
        movies: [],
        loading: false
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=b9ffe68d&s=panda`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchResult = (str, type='all') => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=b9ffe68d&s=${ str }&type=${ type }`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        return (
            <div className="container">
                <Search searchMovie={ this.searchResult } />
                {
                    this.state.loading ? <Loader /> : <Movies movies={ this.state.movies } />
                }
            </div>
        )
    }
}



