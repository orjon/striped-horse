import React, { Component } from 'react'

class SectionSubTitle extends Component {
  render(){
    let { subTitle, overlay } = this.props

    let overlayWhite = false

    if (overlay) {
      overlayWhite = true
    }

    return(
      <div className='flexRow'>    
        <div className={`textBlock w100 indent2 gap1 ${overlayWhite ? 'overlayWhite':''}`}>
          <br />
          <h3>{subTitle}</h3>
        </div>
     </div>
    )
  }
}

export default SectionSubTitle;