import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      );
    });
  }
  render() {

    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever gets returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// whatever gets returned will end up as props on BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, result is passed to all reducers
  return bindActionCreators( { selectBook: selectBook }, dispatch)
}

// promote BookList from component to container - it needs to know about
// this new dispatch method, selectBook; make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
