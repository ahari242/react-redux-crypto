import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchCryptos } from '../actions/index';






class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);     //take onInputChange, bind that function to this (SearchBar) and replace onInputChange with the new bound instance
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {       //all dom event handlers (onChange,onScroll) come with an event handler object
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.searchCryptos(this.state.term);
  }


  render() {
    return (
      <form
        className="search-bar-container"
        onSubmit={this.onFormSubmit}
      >
        <input
          placeholder="Search..."
          onFocus={(e) => e.target.placeholder = ''}
          onBlur={(e) => e.target.placeholder = 'Search...'}
          className="search-input"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button
          type="submit"
          className="search-input-button">
            <span className="oi search-icon" data-glyph="magnifying-glass" title="Search" aria-hidden="true"></span>
        </button>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchCryptos: searchCryptos }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);