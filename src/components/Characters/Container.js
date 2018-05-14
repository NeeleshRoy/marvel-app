import React, { Component } from 'react'
import { CharacterGrid } from './Presentation'
import Loader from '../Utils/Loader'
import constants from '../constants'

class CharacterContainer extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      data : []
    }
  }

  componentDidMount() {
    const that = this;
    var charactersGridApi = 
    `${ constants.api.host }${constants.api.characters}?apikey=${constants.api.apiKey}&limit=40&orderBy=-modified`
    fetch(charactersGridApi)
    .then(response => {
      return response.json()
    })
    .then(data => {
      that.setState({ data: data, loading: false })
    })
  }

  render() {
    if (this.state.loading) {
      return(<Loader />)
    } else {
      const results = this.state.data.data.results
      return (
        <CharacterGrid characters={results} />
      )
    }
  }
}

export default CharacterContainer