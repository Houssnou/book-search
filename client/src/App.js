import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './containers/Search';
import Saved from './containers/Saved';
import SingleBook from './containers/SingleBook';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/saved/:bookId" component={SingleBook} />
          <Route render={() => <h1 className="text-center m-5">404, Page Not Found!</h1>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
