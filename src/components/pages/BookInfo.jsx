import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import Price from '../ui/Price';
import { useParams } from 'react-router-dom';
import Book from '../ui/Book';
import Cart from "./Cart";

const BookInfo = ( {books, addToCart, cart} ) => {
     const {id} = useParams();
     const book = books.find(book => +book.id === +id);
     const [added, setAdded] = useState(false);

     function addBookToCart(book) {
        addToCart(book);
     }

     if (!book) {
  return <div>Book not found</div>;
}
     function bookExistsOnCart () {
        return cart.find(book => book.id === +id);

     }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                        
                            <FontAwesomeIcon icon="arrow-left" />
                            <Link to="/books" className="book__link"><h2 className="book__selected--title--top">
                                Books
                                </h2></Link>
                        
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img className="book__selected--img" src={book.url} />
                                
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating} />
                                <div book__selected--price>
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ex cum impedit, placeat eveniet nobis harum necessitatibus doloremque labore fuga porro voluptates a perferendis itaque officiis voluptatum! Alias, voluptatibus labore?
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ex cum impedit, placeat eveniet nobis harum necessitatibus doloremque labore fuga porro voluptates a perferendis itaque officiis voluptatum! Alias, voluptatibus labore?
                                    </p>
                                </div>
                                
                                    bookExistsOnCart() ? (
                                        <Link to ={`/cart/${book.id}`} className="book__link">
                                        <button className="btn">Checkout</button> :   <button className="btn" onClick={() => addBookToCart(book)} >Add to Cart</button>
                                       </Link>)
                                
                              
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 book__selected--title--top>Recommended Books</h2>
                        </div>
                        <div className="books">
                        {
                            books.filter(book => book.rating === 5 && +book.id !== +id)
                            .slice(0, 4)
                            .map((book) => (<Book book={book} key={book.id} />))
                        }
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
}

export default BookInfo;