import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import About from './Components/About';
// import Home from './Components/Home';
import Services from './Components/Services';
import Partners from './Components/Partners';
import Contact from './Components/Contact';
import Ethics from './Components/Ethics';
import './styles/App.scss';



// function App() {
class App extends Component{
  render(){

    return (
      <div className='App'>
        <Nav />
        <section className='flexColumn w100'>
          <Switch>
            <Route
                exact
                path='/test/'
                render={(routeProps) => (
                  <Services {...routeProps} />
                )}
              />
            {/* <Route
                exact
                path='/home'
                render={(routeProps) => (
                  <Home {...routeProps} />
                )}
              /> */}
              <Route
                exact
                path='/test/about'
                render={(routeProps) => (
                  <About {...routeProps}/>
                )}
              />
              <Route
                exact
                path='/test/services'
                render={(routeProps) => (
                  <Services {...routeProps}/>
                )}
              />
              <Route
                exact
                path='/test/partners'
                render={(routeProps) => (
                  <Partners {...routeProps}/>
                )}
              />
              <Route
                exact
                path='/test/ethics'
                render={(routeProps) => (
                  <Ethics {...routeProps}/>
                )}
              />
              <Route
                exact
                path='/test/contact'
                render={(routeProps) => (
                  <Contact {...routeProps}/>
                )}
              />
          </Switch>

        </section>
       
  
      </div>
    );
  }

  
}



export default App;

