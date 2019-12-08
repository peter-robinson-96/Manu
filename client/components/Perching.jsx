import React from 'react'
import BirdHeader from './BirdHeader'
import BirdGrid from './BirdGrid'
import MainFooter from './MainFooter'

class Perching extends React.Component {
  render () {
    return (
      <>
      <BirdHeader />
      <BirdGrid birds={this.props.birds}/>
      <MainFooter birds={this.props.birds} found={this.props.found}/>
      </>
    )
  }
}

export default Perching
