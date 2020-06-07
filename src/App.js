import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Partners from './Components/Partners';
import Contact from './Components/Contact';
import Ethics from './Components/Ethics';
import Templates from './Components/Templates';
import './styles/App.scss';



// function App() {
class App extends Component{
  render(){

    let pathRoot = '/test2/'

    return (
      <div className='App'>
        <Nav />
        <section className='flexColumn w100'>
          <Switch>
            <Route
              exact
              path={pathRoot}
              component = { Home }
              // render={(routeProps) => ( <Home {...routeProps} /> )}
            />

            <Route
              exact
              path={`${pathRoot}home`}
              component = { Home }
              // render={(routeProps) => ( <Home {...routeProps} /> )}
            /> 


              <Route
                exact
                path={`${pathRoot}about`}
                component = { About }
                // render={(routeProps) => ( <About {...routeProps}/>)}
                />

              <Route
                exact
                path={`${pathRoot}services`}
                component = { Services }
                // render={(routeProps) => (<Services {...routeProps}/>)}
                />
              <Route
                exact
                path={`${pathRoot}partners`}
                component = { Partners }
                />
              <Route
                exact
                path={`${pathRoot}ethics`}
                component = { Ethics }
                />
              <Route
                exact
                path={`${pathRoot}templates`}
                component = { Templates}/>
              <Route
                exact
                path={`${pathRoot}contact`}
                component = { Contact }
                />
          </Switch>

        </section>
       
  
      </div>
    );
  }

  
}



export default App;

