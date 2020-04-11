import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Menu from './Components/pages/Menu';
import Contact from './Components/pages/Contact';
import NoMatch from './Components/pages/NoMatch';
import Cart from './Components/pages/Cart'
import SignUpForm from './Components/pages/SignUpForm';
import SignInForm from './Components/pages/SignInForm';
import Layout from './Components/Layout';
import { NavigationBar } from './Components/NavigationBar';
import { Jumbotron } from './Components/Jumbotron';
import './App.css';



class App extends React.Component {

  render() {

    return (
      <React.Fragment>

        <Router>
        <NavigationBar />
        <Jumbotron/>
        <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/menu' component={Menu} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path ='/cart' component = {Cart}/>
              <Route path='/signin' component={SignInForm}/>
              <Route exact path='/signup' component={SignUpForm }/>
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          </Router>
      </React.Fragment>

    );
  }
}


export default App;