import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navbar/Navigation";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from "./pages/NotFound/NotFound";
import PostDetail from "./pages/PostDetail/PostDetail";
import Posts from './pages/Posts/Posts';





const App = () => {

  return (

    //REDO this part

    <div>
      <h1>test</h1>
      <Navigation />

      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>

          <Route path="/posts/:id">
            <PostDetail />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route component={NotFound} /> */}

          <Route path="*" >
            <NotFound />
          </Route>

        </Switch>
      </Router>

      <hr />

      <Footer />

    </div>

  );

}

export default App