import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home.jsx';
import Books from './components/pages/Books.jsx';
import { books } from './data'
import BookInfo from './components/pages/BookInfo.jsx';


function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route path="/"  exact component={Home} />
     <Route path="/books" exact render={() => <Books books={books} />} />
     <Route path="/books/:id" render={() => <BookInfo books={books} />} />
     </Switch>
     <Footer />

    </div>
    </Router>
  );
}

export default App;
