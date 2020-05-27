import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Partners from './Components/Partners';
import Contact from './Components/Contact';
import Ethics from './Components/Ethics';
import './styles/App.scss';


function App() {
  return (
    <div className='App'>
      {/* <p className='holdingText'>Striped Horse Resources ltd.</p> */}
      <Nav />
      <section className='flexColumn w100'>
        <Switch>
          <Route
              exact
              path='/'
              render={(routeProps) => (
                <Home {...routeProps} />
              )}
            />
          <Route
              exact
              path='/home'
              render={(routeProps) => (
                <Home {...routeProps} />
              )}
            />
            <Route
              exact
              path='/about'
              render={(routeProps) => (
                <About {...routeProps}/>
              )}
            />
            <Route
              exact
              path='/services'
              render={(routeProps) => (
                <Services {...routeProps}/>
              )}
            />
            <Route
              exact
              path='/partners'
              render={(routeProps) => (
                <Partners {...routeProps}/>
              )}
            />
            <Route
              exact
              path='/ethics'
              render={(routeProps) => (
                <Ethics {...routeProps}/>
              )}
            />
            <Route
              exact
              path='/contact'
              render={(routeProps) => (
                <Contact {...routeProps}/>
              )}
            />
        </Switch>
      </section>

    </div>
  );
}

export default App;

