import React, { Component } from 'react'
import constants from '../constants'
import HeaderPresentation from './Presentation'

class HeaderContainer extends Component {
  render() {
    return (
      <HeaderPresentation 
      logo={constants.logo}
      alt="Marvel App"
      />
    )
  }
}

export default HeaderContainer