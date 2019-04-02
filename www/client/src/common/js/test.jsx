import React, { Component, Fragment } from 'react'
import favicon from 'common/assets/favicon.ico'

export default class TestComponent extends Component {
  render() {
    return (
      <Fragment>
        <h3>
          Test Common Component
        </h3>
        <img src={favicon} alt="test common"/>
      </Fragment>

    )
  }
}
