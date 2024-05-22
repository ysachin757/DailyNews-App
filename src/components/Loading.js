import React, { Component } from 'react'
import loading from '../loading.gif'
export class Loading extends Component {
  render() {
    return (<>
          <img src={loading} alt="Loading..." />
        </>
    )
  }
}

export default Loading