// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Work from './components/Work'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/me/">
            <Home />
          </Route>
          <Route exact path="/me/projects">
            <Projects />
          </Route>
          <Route exact path="/me/experience">
            <Work />
          </Route>
          <Route exact path="/me/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
