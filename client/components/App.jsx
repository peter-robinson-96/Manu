import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Perching from './Perching'
import Instructions from './Instructions'
import BirdProfile from './BirdProfile'
import BirdInfo from './BirdInfo'
import fetch from '../api/birds'

class App extends React.Component {
  state = {
    birds: []
  }

  componentDidMount () {
    fetch()
      .then(birds => {
        this.setState({
          birds
        })
      })
  }

  render () {
    return this.state.birds.length === 0 ? '' : (
      <>
        <Router>
          <Switch>
            <Route exact path='/profile/:id/info' component={BirdInfo}/>
            <Route exact path='/profile/:id' render={() => {
              console.log(this.props.match)
              return <BirdProfile birds={this.state.birds} match={this.props.match}/>
            }}/>
            <Route exact path='/instructions' component={Instructions}/>
            <Route exact path='/' render={(props) => (
              <Perching birds={this.state.birds} />
            )}/>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
