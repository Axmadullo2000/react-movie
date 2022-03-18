import React from "react";

export default class Search extends React.Component {
  state = {
    search: "panda",
    type: "all"
  };

  handleResult = (e) => {
    this.setState({search: e.target.value})
  }

  handleSearch = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        this.props.searchMovie(this.state.search, this.state.type)
    }
  }

  handleFilter = (e) => {
      this.setState(() => ({type: e.target.dataset.type}), () => {
        this.props.searchMovie(this.state.search, this.state.type)
      })
  }

  handlerSubmit = (e) => {
    // e.preventDefault()
      this.props.searchMovie(this.state.search,  this.state.type)
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="col s12">
              <div className="input-field inline">
                <input
                  id="search_inline"
                  type="search"
                  className="validate search"
                  placeholder="Search"
                  onChange={ this.handleResult }
                  onKeyDown={ this.handleSearch }
                />
                <button className="searchMovie" onClick={ this.handlerSubmit }>Search Movies</button>
              </div>
              <div>
                <label>
                  <input type="radio" checked={ this.state.type === 'all' } name="type" className="with-gap" data-type="all" onChange={ this.handleFilter } />
                  <span>All</span>
                </label>
                <label>
                  <input type="radio" checked={ this.state.type === 'movie' } name="type" className="with-gap" data-type="movie" onChange={ this.handleFilter } />
                  <span>Movies only</span>
                </label>
                <label>
                  <input type="radio" checked={ this.state.type === 'series' } name="type" className="with-gap" data-type="series" onChange={ this.handleFilter } />
                  <span>Serials only</span>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}




