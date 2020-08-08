import React, { Component } from 'react'

class SectionSubTitle extends Component {
  render(){
    let { title, overlay } = this.props

    let overlayWhite = false

    if (overlay) {
      overlayWhite = true
    }

    return(
      <div className='flexRow'>    
        <div className={`textBlock w100 indent20 gap10 ${overlayWhite ? 'overlayWhite':''}`}>
          <br />
          <h3>{title}</h3>
        </div>
     </div>
    )
  }
}

export default SectionSubTitle;