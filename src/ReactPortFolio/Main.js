/*import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Work from './Work'
import Blog from './Blog'

import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

export class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className='flex items-center justify-between'>
        <Router>
          <main>
            <nav>
              <ul>
            <li><Link to="/">Home</Link></li>
             <li><Link to='/about'>About</Link></li>
             <li><Link to='/services'>Services</Link></li>
             <li><Link to='/work'>Work</Link></li>
             <li><Link to='/blog'>Blog</Link></li>
              </ul>
            </nav>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/work' component={Work} />
            <Route path='/blog' component={Blog} />
           
            
            </Switch>
           
          </main>
        </Router>
      </div>
    )
  }
}

export default Main*/
