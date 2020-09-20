import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
const name ='Chandan'
const mob = '7044793648'
 class RouterApp extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }
     const email='kchandan234@gmail.com'
   }
   
   
  render() {
    return (
      <div>
        <Router>
          <main>
            <nav>
              <ul>
              <li><Link to="/">Home</Link></li>
             <li><Link to={`/about/${name}`}>About</Link></li>
             <li><Link to={`/contact/${mob}`}>Contact</Link></li>
              </ul>
            </nav>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about/:name' component={About} />
            <Route path='/contact/:mob' component={Contact} />
            <Route render={() => <h1>404: page not found</h1>} />
            </Switch>
           
          </main>
        </Router>
      </div>
    )
  }
  
}
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    
  </Fragment>
)
const About = ({match:{params:{name}}}) => (
  <Fragment>
    {name!=='Chandan' ? <Redirect to='/' /> :null}
    <h1>About {name}</h1>
  </Fragment>
)
const Contact = ({history}) => (
  <Fragment>
    <h1>Contact </h1>
    <button onClick={() => history.push('/')}>Go to home</button>
  </Fragment>
)


export default RouterApp
