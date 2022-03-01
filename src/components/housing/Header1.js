import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <header>
      <div className="logo"><span className="detailLogo">Rainbow Housing</span><br/>The Premium Housing</div>
      
      <nav>
        <a href="https://rainbow-emerald.netlify.app">Home</a>
      </nav>
      </header>
    )
  }
}


