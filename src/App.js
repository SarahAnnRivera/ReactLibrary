import Nav from './components/Nav.jsx'
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home.jsx';
import Books from './components/pages/Books.jsx';
import { books } from './data'
import BookInfo from './components/pages/BookInfo.jsx';
import Cart from './components/pages/Cart.jsx';


function App() {
  const [Cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...Cart, {...book, quantity: 1}])
   
  }

  function changeQuantity(book, quantity) {
    setCart(Cart.map(item => 
       item.id === book.id 
      ?
        {
          ...item,
          quantity: +quantity,
        }
      :
    
        item
      

    ));
  }

  function removeItem(item) {
    setCart(Cart.filter(book => book.id !== item.id))
    console.log('removeItem', item)
  }

 function numberOfItems() {
  let counter = 0;
  Cart.forEach(item => {
    counter += item.quantity
  })
  return counter;
 }

  useEffect(() => {
    console.log(Cart);
  }, [Cart])

  return (
    <Router>
    <div className="App">
     <Nav numberOfItems={numberOfItems()}/>
     <Switch>
     <Route path="/"  exact component={Home} />
     <Route path="/books" exact render={() => <Books books={books} />} />
     <Route path="/books/:id" exact render={() => <BookInfo books={books} addToCart={addToCart}/>} />
     <Route path="/Cart" render={() => <Cart books={books} Cart={Cart} changeQuantity= {changeQuantity} removeItem={removeItem}/>} />
     </Switch>
     <Footer />

    </div>
    </Router>
  );
}

export default App;
