import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Candidates from './pages/Candidates'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg"
          style={
            {'backgroundColor': '#8aa0b8'}
        }>
          <div className="container-fluid">
            <a className='navbar-brand'>AquaSoft</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/candidates">Candidates</Link>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/"
            component={Home}/>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/candidates">
            <Candidates/>
          </Route>
          <Route path="*"><Redirect to="/"/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
