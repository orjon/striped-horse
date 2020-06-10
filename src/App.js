import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import About from './Components/About';
// import { default as About2} from './Components/AboutSlideShow';
import Home from './Components/Home';
import Services from './Components/Services';
import Partners from './Components/Partners';
import Contact from './Components/Contact';
import Ethics from './Components/Ethics';
import NoRoute from './Components/NoRoute';
import './styles/App.scss';


// function App() {
class App extends Component{
  render(){
    console.log('Striped Horse Resources Ltd.')
    console.log('v1.1 2020.06.10')
    console.log('www.orjon.com')

    return (
      <div className='App'>
        <Nav />
        <section className='fullHeight flexColumn w100'>
          <Switch>
            <Route
              exact path='/'
              component = { Home }/>
            <Route
              path='/about'
              component = { About }/>
            <Route
              path='/services'
              component = { Services }/>
            <Route
              path='/partners'
              component = { Partners }/>
            <Route
              path='/ethics'
              component = { Ethics }/>
            <Route
              path='/contact'
              component = { Contact }/>    
            <Route
              path="*"
              component = { NoRoute }/>
          </Switch>
        </section>
      </div>
    )
  }

  
}



export default App;

