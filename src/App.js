import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/pages/Home.jsx';
import Books from './components/pages/Books.jsx';
import { books } from './data'


function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Route path="/"  exact component={Home} />
     <Route path="/books" render={() => <Books books={books} />} />
     <Footer />

    </div>
    </Router>
  );
}

export default App;
