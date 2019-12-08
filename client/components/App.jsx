import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Perching from './Perching'
import Instructions from './Instructions'
import BirdProfile from './BirdProfile'
import BirdInfo from './BirdInfo'
import fetch from '../api/birds'
// import ConsoleLog from './ConsoleLog'

class App extends React.Component {
  state = {
    birds: [],
    found: 0
  }

  componentDidMount () {
    fetch()
      .then(birds => {
        this.setState({
          birds,
          found: this.counter(birds)
        })
      })
  }

  counter = (birds) => birds.reduce((found, bird) => {
    if (bird.found) {
      found++
    } return found
  }, 0)

  render () {
    return this.state.birds.length === 0 ? '' : (
      <>
        <Router>
          <Switch>
            <Route exact path='/profile/:id/info' render={(props) => {
              return <BirdInfo birds={this.state.birds} {...props}/>
            }}/>
            <Route exact path='/profile/:id' render={(props) => {
              return <BirdProfile birds={this.state.birds} {...props}/>
            }}/>
            <Route exact path='/instructions' component={Instructions}/>
            <Route exact path='/' render={(props) => (
              <Perching birds={this.state.birds} found={this.state.found}/>
            )}/>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
