import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Services from './Services';
import Partners from './Partners';
import Contact from './Contact';
import Ethics from './Ethics';
import './styles/App.scss';


function App() {
  return (
    <div className='App column'>
      {/* <p className='holdingText'>Striped Horse Resources ltd.</p> */}
      <Nav />
      <main className='w100'>
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
      </main>

    </div>
  );
}

export default App;

