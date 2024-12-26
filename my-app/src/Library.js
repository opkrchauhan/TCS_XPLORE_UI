import PropTypes from 'prop-type'
import React from 'react'

import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

class Library extends React.Component {

  static defaultProps = {
    books: [
      { "title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000 }
    ]
  }

  state = {
    open: true,
    freeBook: true,
    hiring: true,
    data: [],
    loading: false
  }

  componentDidMount() {
    console.log("The component is now mounted");
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1').then(data => data.json()).then(data => this.setState({ data, loading: false }))
  }

  componentDidUpdate() {
    console.log("The component just updated");
  }




  toggleOpenClose = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  render() {
    console.log(this.state);
    const { books } = this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading
          ? "loading..."
          : <div>
            {this.state.data.map(product => {
              return (
                <div>
                  <h3>Library product</h3>
                  <p>{product.name}</p>
                  <img src={product.image} height={100}></img>
                </div>
              )
            })}
          </div>
        }
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClose}>Change</button>
        {books.map((book, i) =>
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookMark={this.state.freeBook}
          />
        )}

      </div>
    )
  }
}


Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookMark: PropTypes.bool

}

export default Library;