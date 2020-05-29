import React, { Component } from 'react'

class SectionTitle extends Component {
  render(){
    let { title, overlay } = this.props

    let overlayWhite = false

    if (overlay) {
      overlayWhite = true
    }

    return(
      <div className='flexRow'>
        <div className={`textBlock w100 indent1 gap1 ${overlayWhite ? 'overlayWhite':''}`}>
          <h2>{title}</h2>
        </div>
     </div>
    )
  }
}

export default SectionTitle;