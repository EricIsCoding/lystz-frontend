import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'

import Home from '../containers/Home'
import VendorPage from '../containers/VendorPage'
import BlockPage from '../containers/BlockPage'

 
const Navigation =  (props) => {

 
    return(
      <Router>
      <Navbar bg="dark" variant="dark" expand="sm" >
        <Navbar.Brand as={Link} to="/">Lystz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Route render={({ history}) => (<Nav.Link onClick={() => { history.push('/blocks') }}>All Blocks!</Nav.Link>)} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blocks" component={BlockPage}/>
        <Route exact path="/:vendor/blocks" component={VendorPage}/>
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
  </Router>
    )
}

 
export default Navigation;